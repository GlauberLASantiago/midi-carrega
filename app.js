const SOUND_FONT_PRESETS = [
  {
    name: '2mb_gmgs.sf2',
    url: 'https://raw.githubusercontent.com/wrightflyer/SF2_SoundFonts/master/2mb_gmgs.sf2',
    note: 'Pequeno; bom para teste rápido.'
  },
  {
    name: '4gmgsmt.sf2',
    url: 'https://raw.githubusercontent.com/wrightflyer/SF2_SoundFonts/master/4gmgsmt.sf2',
    note: 'GM/GS compacto.'
  },
  {
    name: '8mbgm_plus13.sf2',
    url: 'https://raw.githubusercontent.com/wrightflyer/SF2_SoundFonts/master/8mbgm_plus13.sf2',
    note: 'GM compacto com extras.'
  },
  {
    name: 'TimGM6mb.sf2',
    url: 'https://raw.githubusercontent.com/wrightflyer/SF2_SoundFonts/master/TimGM6mb.sf2',
    note: 'Banco GM clássico compacto.'
  },
  {
    name: 'GeneralUser GS v1.471.sf2',
    url: 'https://raw.githubusercontent.com/wrightflyer/SF2_SoundFonts/master/GeneralUser%20GS%20v1.471.sf2',
    note: 'GM/GS muito usado; ver licença incluída pelo autor original.'
  },
  {
    name: 'GeneralUser GS MuseScore v1.442.sf2',
    url: 'https://raw.githubusercontent.com/wrightflyer/SF2_SoundFonts/master/GeneralUser%20GS%20MuseScore%20v1.442.sf2',
    note: 'Variação do GeneralUser GS.'
  },
  {
    name: 'FluidR3Mono_GM.sf3',
    url: 'https://raw.githubusercontent.com/wrightflyer/SF2_SoundFonts/master/FluidR3Mono_GM.sf3',
    note: 'SF3 compactado; pode depender do suporte do build WebAssembly.'
  },
  {
    name: 'MuseScore_General.sf3',
    url: 'https://raw.githubusercontent.com/wrightflyer/SF2_SoundFonts/master/MuseScore_General.sf3',
    note: 'SF3 compactado; pode depender do suporte do build WebAssembly.'
  },
  {
    name: '32MbGMStereo.sf2',
    url: 'https://raw.githubusercontent.com/wrightflyer/SF2_SoundFonts/master/32MbGMStereo.sf2',
    note: 'Maior; pode demorar para baixar.'
  },
  {
    name: '031.9mg reality gm gs bank.SF2',
    url: 'https://raw.githubusercontent.com/wrightflyer/SF2_SoundFonts/master/031.9mg%20reality%20gm%20gs%20bank.SF2',
    note: 'GM/GS; licença não verificada.'
  },
  {
    name: 'AWE ROM gm.sf2',
    url: 'https://raw.githubusercontent.com/wrightflyer/SF2_SoundFonts/master/AWE%20ROM%20gm.sf2',
    note: 'Nome sugere origem ROM; use apenas se tiver segurança jurídica.'
  },
  {
    name: 'Android Synthesizer.sf2',
    url: 'https://raw.githubusercontent.com/wrightflyer/SF2_SoundFonts/master/Android%20Synthesizer.sf2',
    note: 'Licença não verificada.'
  },
  {
    name: 'CTK-230_SoundFont.sf2',
    url: 'https://raw.githubusercontent.com/wrightflyer/SF2_SoundFonts/master/CTK-230_SoundFont.sf2',
    note: 'Nome sugere teclado específico; licença não verificada.'
  },
  {
    name: 'Chaos Bank V1.9 (12Mb).sf2',
    url: 'https://raw.githubusercontent.com/wrightflyer/SF2_SoundFonts/master/Chaos%20Bank%20V1.9%20(12Mb).sf2',
    note: 'Banco GM alternativo; confirme licença.'
  },
  {
    name: 'Jnsgm2.sf2',
    url: 'https://raw.githubusercontent.com/wrightflyer/SF2_SoundFonts/master/Jnsgm2.sf2',
    note: 'JNS-GM; confirme licença.'
  },
  {
    name: 'Masterpiece.sf2',
    url: 'https://raw.githubusercontent.com/wrightflyer/SF2_SoundFonts/master/Masterpiece.sf2',
    note: 'Banco GM alternativo; confirme licença.'
  },
  {
    name: 'Unison.SF2',
    url: 'https://raw.githubusercontent.com/wrightflyer/SF2_SoundFonts/master/Unison.SF2',
    note: 'Banco GM alternativo; confirme licença.'
  },
  {
    name: 'gm.sf2',
    url: 'https://raw.githubusercontent.com/wrightflyer/SF2_SoundFonts/master/gm.sf2',
    note: 'Genérico; licença não verificada.'
  },
  {
    name: 'gm_1.sf2',
    url: 'https://raw.githubusercontent.com/wrightflyer/SF2_SoundFonts/master/gm_1.sf2',
    note: 'Genérico; licença não verificada.'
  },
  {
    name: 'merlin_gmv32.sf2',
    url: 'https://raw.githubusercontent.com/wrightflyer/SF2_SoundFonts/master/merlin_gmv32.sf2',
    note: 'Merlin GM; confirme licença.'
  },
  {
    name: 'mustheory2.sf2',
    url: 'https://raw.githubusercontent.com/wrightflyer/SF2_SoundFonts/master/mustheory2.sf2',
    note: 'Licença não verificada.'
  },
  {
    name: 'weedsgm3.sf2',
    url: 'https://raw.githubusercontent.com/wrightflyer/SF2_SoundFonts/master/weedsgm3.sf2',
    note: 'WeedsGM3; confirme licença do autor.'
  },
  {
    name: 'Roland_SC-88.sf2',
    url: 'https://raw.githubusercontent.com/wrightflyer/SF2_SoundFonts/master/Roland_SC-88.sf2',
    note: 'Nome sugere Roland SC-88; uso/redistribuição pode ser problemático.'
  },
  {
    name: 'Yamaha-SY22.sf2',
    url: 'https://raw.githubusercontent.com/wrightflyer/SF2_SoundFonts/master/Yamaha-SY22.sf2',
    note: 'Nome sugere Yamaha SY22; uso/redistribuição pode ser problemático.'
  }
];

const els = {
  presetSelect: document.getElementById('presetSelect'),
  usePresetButton: document.getElementById('usePresetButton'),
  soundFontInput: document.getElementById('soundFontInput'),
  midiInput: document.getElementById('midiInput'),
  soundFontName: document.getElementById('soundFontName'),
  midiName: document.getElementById('midiName'),
  selectedSoundFontLabel: document.getElementById('selectedSoundFontLabel'),
  selectedSoundFontDetail: document.getElementById('selectedSoundFontDetail'),
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
let selectedPreset = null;

function initPresetList() {
  els.presetSelect.innerHTML = '';
  SOUND_FONT_PRESETS.forEach((preset, index) => {
    const option = document.createElement('option');
    option.value = String(index);
    option.textContent = `${preset.name} — ${preset.note}`;
    els.presetSelect.appendChild(option);
  });
}

function selectPreset(index) {
  selectedPreset = SOUND_FONT_PRESETS[index];
  els.soundFontInput.value = '';
  els.soundFontName.textContent = 'Nenhum SoundFont local selecionado';
  els.selectedSoundFontLabel.textContent = selectedPreset.name;
  els.selectedSoundFontDetail.textContent = `Preset remoto: ${selectedPreset.note}`;
  log(`Preset selecionado: ${selectedPreset.name}`);
}

function selectLocalSoundFont(file) {
  selectedPreset = null;
  els.selectedSoundFontLabel.textContent = file ? file.name : 'Nenhum';
  els.selectedSoundFontDetail.textContent = file ? `Arquivo local — ${formatBytes(file.size)}` : 'Selecione um preset remoto ou arquivo local.';
}

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

async function fetchArrayBufferWithProgress(url, label) {
  const response = await fetch(url, { mode: 'cors', cache: 'force-cache' });
  if (!response.ok) {
    throw new Error(`Falha ao baixar ${label}: HTTP ${response.status}`);
  }
  const contentLength = Number(response.headers.get('content-length')) || 0;
  if (!response.body || !contentLength) {
    const buffer = await response.arrayBuffer();
    log(`${label} baixado: ${formatBytes(buffer.byteLength)}`);
    return buffer;
  }

  const reader = response.body.getReader();
  const chunks = [];
  let received = 0;
  let lastLog = 0;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
    received += value.length;

    const pct = Math.floor((received / contentLength) * 100);
    if (pct >= lastLog + 20 || pct === 100) {
      lastLog = pct;
      log(`Baixando ${label}: ${pct}% (${formatBytes(received)} de ${formatBytes(contentLength)})`);
    }
  }

  const combined = new Uint8Array(received);
  let offset = 0;
  for (const chunk of chunks) {
    combined.set(chunk, offset);
    offset += chunk.length;
  }
  return combined.buffer;
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
  if (!gainNode.numberOfOutputs || gainNode.context.state) {
    try { gainNode.disconnect(); } catch (_) {}
  }
  gainNode.connect(audioContext.destination);

  synth = new JSSynth.Synthesizer();
  synth.init(audioContext.sampleRate);

  synthNode = synth.createAudioNode(audioContext, 8192);
  synthNode.connect(gainNode);

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

async function getSoundFontBuffer() {
  const localFile = selectedFile(els.soundFontInput);
  if (localFile) {
    log(`SoundFont local: ${localFile.name} (${formatBytes(localFile.size)})`);
    return await readAsArrayBuffer(localFile);
  }
  if (selectedPreset) {
    log(`SoundFont remoto: ${selectedPreset.name}`);
    log(`URL: ${selectedPreset.url}`);
    return await fetchArrayBufferWithProgress(selectedPreset.url, selectedPreset.name);
  }
  throw new Error('Selecione um SoundFont local ou um preset remoto.');
}

async function loadFilesIntoSynth() {
  const midiFile = selectedFile(els.midiInput);

  if (!midiFile) {
    alert('Selecione um arquivo MIDI .mid/.midi.');
    return;
  }

  setControls(false);
  setStatus('Carregando arquivos...', 'pending');
  log(`MIDI: ${midiFile.name} (${formatBytes(midiFile.size)})`);

  try {
    await ensureEngineReady();
    await resetSynth();
    await createSynth();

    const [sfontBuffer, smfBuffer] = await Promise.all([
      getSoundFontBuffer(),
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

els.usePresetButton.addEventListener('click', () => {
  selectPreset(Number(els.presetSelect.value));
});

els.presetSelect.addEventListener('change', () => {
  const preset = SOUND_FONT_PRESETS[Number(els.presetSelect.value)];
  els.selectedSoundFontDetail.textContent = `Selecionado no menu: ${preset.note}. Clique em “Usar preset remoto”.`;
});

els.soundFontInput.addEventListener('change', () => {
  const file = selectedFile(els.soundFontInput);
  els.soundFontName.textContent = file ? `${file.name} — ${formatBytes(file.size)}` : 'Nenhum SoundFont selecionado';
  selectLocalSoundFont(file);
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
  initPresetList();
  selectPreset(0);
  try {
    await ensureEngineReady();
    setStatus('Motor FluidSynth pronto', 'ready');
    log('JSSynth/FluidSynth WebAssembly pronto.');
    log(`${SOUND_FONT_PRESETS.length} presets remotos disponíveis.`);
  } catch (err) {
    setStatus('Falha ao inicializar', 'error');
    log(`ERRO: ${err.message || err}`);
  }
});
