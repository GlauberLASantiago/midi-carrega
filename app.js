const els = {
  soundFontInput: document.getElementById('soundFontInput'),
  midiInput: document.getElementById('midiInput'),
  soundFontName: document.getElementById('soundFontName'),
  midiName: document.getElementById('midiName'),
  loadButton: document.getElementById('loadButton'),
  playButton: document.getElementById('playButton'),
  pauseButton: document.getElementById('pauseButton'),
  stopButton: document.getElementById('stopButton'),
  gainSlider: document.getElementById('gainSlider'),
  reverbSlider: document.getElementById('reverbSlider'),
  chorusSlider: document.getElementById('chorusSlider'),
  statusText: document.getElementById('statusText'),
  statusDot: document.getElementById('statusDot'),
  log: document.getElementById('log'),
};

let audioContext = null;
let synth = null;
let synthNode = null;
let gainNode = null;
let currentSoundFontId = null;
let loaded = false;
let paused = false;

function log(message) {
  const time = new Date().toLocaleTimeString();
  els.log.textContent += `[${time}] ${message}\n`;
  els.log.scrollTop = els.log.scrollHeight;
}

function setStatus(message, state = 'pending') {
  els.statusText.textContent = message;
  els.statusDot.classList.toggle('ready', state === 'ready');
  els.statusDot.classList.toggle('error', state === 'error');
}

function selectedFile(input) {
  return input.files && input.files.length ? input.files[0] : null;
}

async function readAsArrayBuffer(file) {
  if (!file) throw new Error('Arquivo ausente.');
  return await file.arrayBuffer();
}

async function ensureEngineReady() {
  if (!window.JSSynth) {
    throw new Error('A biblioteca JSSynth não carregou. Verifique a internet/CDN ou sirva os arquivos localmente.');
  }
  await JSSynth.waitForReady();
}

async function resetSynth() {
  if (synth) {
    try { await synth.stopPlayer(); } catch (_) {}
    try { synth.close(); } catch (_) {}
    synth = null;
  }
  if (synthNode) {
    try { synthNode.disconnect(); } catch (_) {}
    synthNode = null;
  }
}

async function createSynth() {
  audioContext = audioContext || new (window.AudioContext || window.webkitAudioContext)();
  await audioContext.resume();

  gainNode = gainNode || audioContext.createGain();
  gainNode.gain.value = Number(els.gainSlider.value);
  gainNode.connect(audioContext.destination);

  synth = new JSSynth.Synthesizer();
  synth.init(audioContext.sampleRate);

  // ScriptProcessor é usado pelo exemplo oficial. AudioWorklet é possível, mas exige servir módulos adicionais.
  synthNode = synth.createAudioNode(audioContext, 8192);
  synthNode.connect(gainNode);

  // Propriedades comuns do FluidSynth. Se alguma versão não suportar uma delas, o erro é ignorado.
  safeSetSynthSetting('synth.reverb.active', true);
  safeSetSynthSetting('synth.chorus.active', true);
}

function safeSetSynthSetting(name, value) {
  try {
    if (typeof synth.setGain === 'function' && name === 'synth.gain') synth.setGain(value);
    if (typeof synth.setReverb === 'function' && name === 'reverb') synth.setReverb(value);
  } catch (err) {
    log(`Aviso: não consegui aplicar ${name}: ${err.message}`);
  }
}

async function loadFilesIntoSynth() {
  const sf2File = selectedFile(els.soundFontInput);
  const midiFile = selectedFile(els.midiInput);

  if (!sf2File || !midiFile) {
    alert('Selecione um SoundFont .sf2 e um arquivo MIDI .mid/.midi.');
    return;
  }

  setControls(false);
  setStatus('Carregando arquivos...', 'pending');
  log(`SoundFont: ${sf2File.name} (${formatBytes(sf2File.size)})`);
  log(`MIDI: ${midiFile.name} (${formatBytes(midiFile.size)})`);

  try {
    await ensureEngineReady();
    await resetSynth();
    await createSynth();

    const [sfontBuffer, smfBuffer] = await Promise.all([
      readAsArrayBuffer(sf2File),
      readAsArrayBuffer(midiFile),
    ]);

    setStatus('Carregando SoundFont...', 'pending');
    currentSoundFontId = await synth.loadSFont(sfontBuffer);
    log(`SoundFont carregado. ID: ${currentSoundFontId}`);

    setStatus('Carregando MIDI...', 'pending');
    await synth.addSMFDataToPlayer(smfBuffer);
    log('MIDI carregado no player interno do FluidSynth.');

    loaded = true;
    paused = false;
    setControls(true);
    setStatus('Pronto para tocar', 'ready');
  } catch (err) {
    console.error(err);
    setStatus('Erro ao carregar', 'error');
    log(`ERRO: ${err.message || err}`);
    setControls(false);
  }
}

function setControls(canPlay) {
  els.playButton.disabled = !canPlay;
  els.pauseButton.disabled = !canPlay;
  els.stopButton.disabled = !canPlay;
}

async function play() {
  if (!loaded || !synth) return;
  try {
    await audioContext.resume();
    if (paused && typeof synth.playPlayer === 'function') {
      paused = false;
    }
    await synth.playPlayer();
    setStatus('Tocando', 'ready');
    log('Playback iniciado.');

    synth.waitForPlayerStopped().then(() => {
      if (!paused) {
        setStatus('Playback finalizado', 'ready');
        log('Playback finalizado.');
      }
    }).catch(() => {});
  } catch (err) {
    log(`ERRO no Play: ${err.message || err}`);
  }
}

async function pause() {
  if (!synth) return;
  try {
    if (typeof synth.stopPlayer === 'function') {
      // A API principal documenta stopPlayer; pausa exata depende da versão.
      await synth.stopPlayer();
      paused = true;
      setStatus('Pausado/parado', 'pending');
      log('Playback pausado/parado. Observação: nesta API, Pause funciona como Stop suave.');
    }
  } catch (err) {
    log(`ERRO no Pause: ${err.message || err}`);
  }
}

async function stop() {
  if (!synth) return;
  try {
    await synth.stopPlayer();
    paused = false;
    setStatus('Parado', 'ready');
    log('Playback parado. Para tocar novamente do início, clique em “Carregar no sintetizador” e depois Play.');
  } catch (err) {
    log(`ERRO no Stop: ${err.message || err}`);
  }
}

function formatBytes(bytes) {
  const units = ['B', 'KB', 'MB', 'GB'];
  let value = bytes;
  let unit = 0;
  while (value >= 1024 && unit < units.length - 1) {
    value /= 1024;
    unit++;
  }
  return `${value.toFixed(unit === 0 ? 0 : 1)} ${units[unit]}`;
}

els.soundFontInput.addEventListener('change', () => {
  const file = selectedFile(els.soundFontInput);
  els.soundFontName.textContent = file ? `${file.name} — ${formatBytes(file.size)}` : 'Nenhum SoundFont selecionado';
});

els.midiInput.addEventListener('change', () => {
  const file = selectedFile(els.midiInput);
  els.midiName.textContent = file ? `${file.name} — ${formatBytes(file.size)}` : 'Nenhum MIDI selecionado';
});

els.loadButton.addEventListener('click', loadFilesIntoSynth);
els.playButton.addEventListener('click', play);
els.pauseButton.addEventListener('click', pause);
els.stopButton.addEventListener('click', stop);

els.gainSlider.addEventListener('input', () => {
  if (gainNode) gainNode.gain.value = Number(els.gainSlider.value);
});

els.reverbSlider.addEventListener('input', () => {
  log('Controle de Reverb preparado. Ajuste fino exige mapear parâmetros FluidSynth da versão carregada.');
});

els.chorusSlider.addEventListener('input', () => {
  log('Controle de Chorus preparado. Ajuste fino exige mapear parâmetros FluidSynth da versão carregada.');
});

window.addEventListener('load', async () => {
  try {
    await ensureEngineReady();
    setStatus('Motor FluidSynth pronto', 'ready');
    log('JSSynth/FluidSynth WebAssembly pronto.');
  } catch (err) {
    setStatus('Falha ao inicializar', 'error');
    log(`ERRO: ${err.message || err}`);
  }
});
