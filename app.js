const REPO_OWNER = 'wrightflyer';
const REPO_NAME = 'SF2_SoundFonts';
const REPO_BRANCH = 'master';

// Presets com URLs diretas explícitas. Não usamos raw.githubusercontent.com aqui.
// Ordem: jsDelivr CDN direto -> GitHub direct-download (/raw/refs/heads/...).
const SOUND_FONT_PRESETS = [
  {
    name: 'MuseScore_General.sf3 (oficial)',
    note: 'Preset recomendado: SoundFont oficial do MuseScore, MIT; ~38 MB.',
    urls: [
      'https://ftp.osuosl.org/pub/musescore/soundfont/MuseScore_General/MuseScore_General.sf3',
      'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/MuseScore_General.sf3'
    ],
    downloadUrl: 'https://ftp.osuosl.org/pub/musescore/soundfont/MuseScore_General/MuseScore_General.sf3',
    licenseUrl: 'https://ftp.osuosl.org/pub/musescore/soundfont/MuseScore_General/MuseScore_General_License.md',
    recommended: true
  },
  {
    name: 'MuseScore_General.sf2 (oficial, grande)',
    note: 'Versão SF2 oficial do MuseScore; ~206 MB, use se SF3 falhar.',
    urls: [
      'https://ftp.osuosl.org/pub/musescore/soundfont/MuseScore_General/MuseScore_General.sf2'
    ],
    downloadUrl: 'https://ftp.osuosl.org/pub/musescore/soundfont/MuseScore_General/MuseScore_General.sf2',
    licenseUrl: 'https://ftp.osuosl.org/pub/musescore/soundfont/MuseScore_General/MuseScore_General_License.md',
    recommended: true
  },

  {
    name: '031.9mg reality gm gs bank.SF2',
    note: 'GM/GS; licença não verificada.',
    urls: ['https://cdn.jsdelivr.net/gh/wrightflyer/SF2_SoundFonts@master/031.9mg%20reality%20gm%20gs%20bank.SF2', 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/031.9mg%20reality%20gm%20gs%20bank.SF2'],
    downloadUrl: 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/031.9mg%20reality%20gm%20gs%20bank.SF2'
  },
  {
    name: '2mb_gmgs.sf2',
    note: 'Pequeno; teste rápido recomendado.',
    urls: ['https://cdn.jsdelivr.net/gh/wrightflyer/SF2_SoundFonts@master/2mb_gmgs.sf2', 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/2mb_gmgs.sf2'],
    downloadUrl: 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/2mb_gmgs.sf2'
  },
  {
    name: '32MbGMStereo.sf2',
    note: 'Maior; pode demorar para baixar.',
    urls: ['https://cdn.jsdelivr.net/gh/wrightflyer/SF2_SoundFonts@master/32MbGMStereo.sf2', 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/32MbGMStereo.sf2'],
    downloadUrl: 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/32MbGMStereo.sf2'
  },
  {
    name: '4gmgsmt.sf2',
    note: 'GM/GS compacto.',
    urls: ['https://cdn.jsdelivr.net/gh/wrightflyer/SF2_SoundFonts@master/4gmgsmt.sf2', 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/4gmgsmt.sf2'],
    downloadUrl: 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/4gmgsmt.sf2'
  },
  {
    name: '8mbgm_plus13.sf2',
    note: 'GM compacto com extras.',
    urls: ['https://cdn.jsdelivr.net/gh/wrightflyer/SF2_SoundFonts@master/8mbgm_plus13.sf2', 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/8mbgm_plus13.sf2'],
    downloadUrl: 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/8mbgm_plus13.sf2'
  },
  {
    name: 'AWE ROM gm.sf2',
    note: 'Cuidado: nome sugere origem ROM.',
    urls: ['https://cdn.jsdelivr.net/gh/wrightflyer/SF2_SoundFonts@master/AWE%20ROM%20gm.sf2', 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/AWE%20ROM%20gm.sf2'],
    downloadUrl: 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/AWE%20ROM%20gm.sf2'
  },
  {
    name: 'Android Synthesizer.sf2',
    note: 'Licença não verificada.',
    urls: ['https://cdn.jsdelivr.net/gh/wrightflyer/SF2_SoundFonts@master/Android%20Synthesizer.sf2', 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/Android%20Synthesizer.sf2'],
    downloadUrl: 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/Android%20Synthesizer.sf2'
  },
  {
    name: 'CTK-230_SoundFont.sf2',
    note: 'Cuidado: nome sugere teclado específico.',
    urls: ['https://cdn.jsdelivr.net/gh/wrightflyer/SF2_SoundFonts@master/CTK-230_SoundFont.sf2', 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/CTK-230_SoundFont.sf2'],
    downloadUrl: 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/CTK-230_SoundFont.sf2'
  },
  {
    name: 'Chaos Bank V1.9 (12Mb).sf2',
    note: 'Banco GM alternativo; confirme licença.',
    urls: ['https://cdn.jsdelivr.net/gh/wrightflyer/SF2_SoundFonts@master/Chaos%20Bank%20V1.9%20%2812Mb%29.sf2', 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/Chaos%20Bank%20V1.9%20%2812Mb%29.sf2'],
    downloadUrl: 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/Chaos%20Bank%20V1.9%20%2812Mb%29.sf2'
  },
  {
    name: 'FluidR3Mono_GM.sf3',
    note: 'SF3; usa build com libsndfile.',
    urls: ['https://cdn.jsdelivr.net/gh/wrightflyer/SF2_SoundFonts@master/FluidR3Mono_GM.sf3', 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/FluidR3Mono_GM.sf3'],
    downloadUrl: 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/FluidR3Mono_GM.sf3'
  },
  {
    name: 'GeneralUser GS MuseScore v1.442.sf2',
    note: 'Variação do GeneralUser GS.',
    urls: ['https://cdn.jsdelivr.net/gh/wrightflyer/SF2_SoundFonts@master/GeneralUser%20GS%20MuseScore%20v1.442.sf2', 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/GeneralUser%20GS%20MuseScore%20v1.442.sf2'],
    downloadUrl: 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/GeneralUser%20GS%20MuseScore%20v1.442.sf2'
  },
  {
    name: 'GeneralUser GS v1.471.sf2',
    note: 'GM/GS muito usado; ver licença do autor original.',
    urls: ['https://cdn.jsdelivr.net/gh/wrightflyer/SF2_SoundFonts@master/GeneralUser%20GS%20v1.471.sf2', 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/GeneralUser%20GS%20v1.471.sf2'],
    downloadUrl: 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/GeneralUser%20GS%20v1.471.sf2'
  },
  {
    name: 'Jnsgm2.sf2',
    note: 'JNS-GM; confirme licença.',
    urls: ['https://cdn.jsdelivr.net/gh/wrightflyer/SF2_SoundFonts@master/Jnsgm2.sf2', 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/Jnsgm2.sf2'],
    downloadUrl: 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/Jnsgm2.sf2'
  },
  {
    name: 'Masterpiece.sf2',
    note: 'Banco GM alternativo; confirme licença.',
    urls: ['https://cdn.jsdelivr.net/gh/wrightflyer/SF2_SoundFonts@master/Masterpiece.sf2', 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/Masterpiece.sf2'],
    downloadUrl: 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/Masterpiece.sf2'
  },
  {
    name: 'MuseScore_General.sf3',
    note: 'SF3; usa build com libsndfile.',
    urls: ['https://cdn.jsdelivr.net/gh/wrightflyer/SF2_SoundFonts@master/MuseScore_General.sf3', 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/MuseScore_General.sf3'],
    downloadUrl: 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/MuseScore_General.sf3'
  },
  {
    name: 'Roland_SC-88.sf2',
    note: 'Cuidado: nome sugere Roland SC-88.',
    urls: ['https://cdn.jsdelivr.net/gh/wrightflyer/SF2_SoundFonts@master/Roland_SC-88.sf2', 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/Roland_SC-88.sf2'],
    downloadUrl: 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/Roland_SC-88.sf2'
  },
  {
    name: 'TimGM6mb.sf2',
    note: 'Banco GM clássico compacto.',
    urls: ['https://cdn.jsdelivr.net/gh/wrightflyer/SF2_SoundFonts@master/TimGM6mb.sf2', 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/TimGM6mb.sf2'],
    downloadUrl: 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/TimGM6mb.sf2'
  },
  {
    name: 'Unison.SF2',
    note: 'Banco GM alternativo; confirme licença.',
    urls: ['https://cdn.jsdelivr.net/gh/wrightflyer/SF2_SoundFonts@master/Unison.SF2', 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/Unison.SF2'],
    downloadUrl: 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/Unison.SF2'
  },
  {
    name: 'Yamaha-SY22.sf2',
    note: 'Cuidado: nome sugere Yamaha SY22.',
    urls: ['https://cdn.jsdelivr.net/gh/wrightflyer/SF2_SoundFonts@master/Yamaha-SY22.sf2', 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/Yamaha-SY22.sf2'],
    downloadUrl: 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/Yamaha-SY22.sf2'
  },
  {
    name: 'gm.sf2',
    note: 'Genérico; licença não verificada.',
    urls: ['https://cdn.jsdelivr.net/gh/wrightflyer/SF2_SoundFonts@master/gm.sf2', 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/gm.sf2'],
    downloadUrl: 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/gm.sf2'
  },
  {
    name: 'gm_1.sf2',
    note: 'Genérico; licença não verificada.',
    urls: ['https://cdn.jsdelivr.net/gh/wrightflyer/SF2_SoundFonts@master/gm_1.sf2', 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/gm_1.sf2'],
    downloadUrl: 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/gm_1.sf2'
  },
  {
    name: 'merlin_gmv32.sf2',
    note: 'Merlin GM; confirme licença.',
    urls: ['https://cdn.jsdelivr.net/gh/wrightflyer/SF2_SoundFonts@master/merlin_gmv32.sf2', 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/merlin_gmv32.sf2'],
    downloadUrl: 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/merlin_gmv32.sf2'
  },
  {
    name: 'mustheory2.sf2',
    note: 'Licença não verificada.',
    urls: ['https://cdn.jsdelivr.net/gh/wrightflyer/SF2_SoundFonts@master/mustheory2.sf2', 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/mustheory2.sf2'],
    downloadUrl: 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/mustheory2.sf2'
  },
  {
    name: 'weedsgm3.sf2',
    note: 'WeedsGM3; confirme licença do autor.',
    urls: ['https://cdn.jsdelivr.net/gh/wrightflyer/SF2_SoundFonts@master/weedsgm3.sf2', 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/weedsgm3.sf2'],
    downloadUrl: 'https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/weedsgm3.sf2'
  },
];

const els = {
  presetSelect: document.getElementById('presetSelect'),
  usePresetButton: document.getElementById('usePresetButton'),
  presetDownloadLink: document.getElementById('presetDownloadLink'),
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
let selectedPreset = null;
let lastSfontBuffer = null;
let lastMidiBuffer = null;

function encodePathForUrl(path) {
  return path.split('/').map(encodeURIComponent).join('/');
}

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
  if (els.presetDownloadLink) {
    els.presetDownloadLink.href = selectedPreset.downloadUrl || selectedPreset.urls[0];
    els.presetDownloadLink.download = selectedPreset.name.replace(/ \(.*\)$/,'');
  }
  if (selectedPreset.licenseUrl) {
    log(`Licença/origem: ${selectedPreset.licenseUrl}`);
  }
  log(`URL direta primária: ${selectedPreset.urls[0]}`);
}

function selectLocalSoundFont(file) {
  selectedPreset = null;
  lastSfontBuffer = null;
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
  const response = await fetch(url, { mode: 'cors', cache: 'default' });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} ${response.statusText || ''}`.trim());
  }

  const contentType = response.headers.get('content-type') || 'desconhecido';
  const contentLength = Number(response.headers.get('content-length')) || 0;
  log(`${label}: resposta ${contentType}${contentLength ? `, ${formatBytes(contentLength)}` : ''}`);

  if (!response.body || !contentLength) {
    const buffer = await response.arrayBuffer();
    validateSoundFontBuffer(buffer, label);
    log(`${label} baixado: ${formatBytes(buffer.byteLength)}`);
    return buffer;
  }

  const reader = response.body.getReader();
  const chunks = [];
  let received = 0;
  let lastLog = -1;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
    received += value.length;

    const pct = Math.floor((received / contentLength) * 100);
    if (pct >= lastLog + 25 || pct === 100) {
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

  validateSoundFontBuffer(combined.buffer, label);
  return combined.buffer;
}

function validateSoundFontBuffer(buffer, label) {
  const bytes = new Uint8Array(buffer.slice(0, Math.min(buffer.byteLength, 512)));
  const ascii = new TextDecoder('utf-8', { fatal: false }).decode(bytes);

  if (buffer.byteLength < 1024) {
    throw new Error(`${label}: download muito pequeno (${formatBytes(buffer.byteLength)}). Provavelmente não é um SoundFont.`);
  }
  if (/^version https:\/\/git-lfs\.github\.com\/spec\/v1/.test(ascii)) {
    throw new Error(`${label}: o link retornou um ponteiro Git LFS, não o arquivo binário real.`);
  }
  if (/<!doctype html|<html|rate limit|not found/i.test(ascii)) {
    throw new Error(`${label}: o link retornou HTML/erro, não o arquivo SoundFont.`);
  }

  // SF2/SF3 normalmente é RIFF....sfbk. Alguns conversores podem variar,
  // então isto é aviso, não bloqueio.
  if (!ascii.startsWith('RIFF') || !ascii.includes('sfbk')) {
    log(`Aviso: ${label} não tem assinatura RIFF/sfbk nos primeiros bytes; vou tentar carregar mesmo assim.`);
  }
}

async function fetchPresetWithFallback(preset) {
  let lastError = null;
  for (const url of preset.urls) {
    try {
      log(`Tentando baixar por: ${url}`);
      return await fetchArrayBufferWithProgress(url, preset.name);
    } catch (err) {
      lastError = err;
      log(`Falhou: ${err.message || err}`);
    }
  }
  throw new Error(`Não foi possível baixar ${preset.name}. Último erro: ${lastError?.message || lastError}`);
}

async function ensureEngineReady() {
  if (!window.JSSynth) {
    throw new Error('JSSynth não carregou. Verifique se você abriu via http://localhost e se a internet/CDN está acessível.');
  }
  await JSSynth.waitForReady();
}

async function resetSynth() {
  loaded = false;
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

  if (!gainNode) {
    gainNode = audioContext.createGain();
    gainNode.connect(audioContext.destination);
  }
  gainNode.gain.value = Number(els.gainSlider.value);

  synth = new JSSynth.Synthesizer();
  synth.init(audioContext.sampleRate);

  synthNode = synth.createAudioNode(audioContext, 8192);
  synthNode.connect(gainNode);
}

async function getSoundFontBuffer() {
  const localFile = selectedFile(els.soundFontInput);
  if (localFile) {
    log(`SoundFont local: ${localFile.name} (${formatBytes(localFile.size)})`);
    lastSfontBuffer = await readAsArrayBuffer(localFile);
    validateSoundFontBuffer(lastSfontBuffer, localFile.name);
    return lastSfontBuffer;
  }
  if (selectedPreset) {
    if (lastSfontBuffer && els.selectedSoundFontLabel.textContent === selectedPreset.name) {
      log(`Reusando SoundFont já baixado: ${selectedPreset.name}`);
      return lastSfontBuffer;
    }
    log(`SoundFont remoto: ${selectedPreset.name}`);
    lastSfontBuffer = await fetchPresetWithFallback(selectedPreset);
    return lastSfontBuffer;
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
  setStatus('Carregando...', 'pending');
  log(`MIDI: ${midiFile.name} (${formatBytes(midiFile.size)})`);

  try {
    await ensureEngineReady();
    await resetSynth();
    await createSynth();

    const sfontBuffer = await getSoundFontBuffer();
    lastMidiBuffer = await readAsArrayBuffer(midiFile);

    setStatus('Carregando SoundFont no FluidSynth...', 'pending');
    currentSoundFontId = await synth.loadSFont(sfontBuffer);
    log(`SoundFont carregado no FluidSynth. ID: ${currentSoundFontId}`);

    setStatus('Carregando MIDI...', 'pending');
    await synth.addSMFDataToPlayer(lastMidiBuffer);
    log('MIDI carregado no player interno do FluidSynth.');

    loaded = true;
    setControls(true);
    setStatus('Pronto para tocar', 'ready');
  } catch (err) {
    console.error(err);
    setStatus('Erro ao carregar', 'error');
    log(`ERRO: ${err.message || err}`);
    log('Dica: teste primeiro com 2mb_gmgs.sf2. Se remoto falhar, clique em ‘Abrir/baixar preset direto’, baixe o .sf2/.sf3 e carregue como arquivo local.');
    setControls(false);
    await resetSynth();
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
    await synth.playPlayer();
    setStatus('Tocando', 'ready');
    log('Playback iniciado.');
    synth.waitForPlayerStopped().then(() => {
      setStatus('Playback finalizado', 'ready');
      log('Playback finalizado.');
    }).catch(() => {});
  } catch (err) {
    log(`ERRO no Play: ${err.message || err}`);
  }
}

async function pause() {
  if (!synth) return;
  try {
    await synth.stopPlayer();
    setStatus('Pausado/parado', 'pending');
    log('Pause funciona como Stop nesta API. Para reiniciar do começo, carregue novamente e clique Play.');
  } catch (err) {
    log(`ERRO no Pause: ${err.message || err}`);
  }
}

async function stop() {
  if (!synth) return;
  try {
    await synth.stopPlayer();
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
  lastSfontBuffer = null;
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
  log('Controle de Reverb visual apenas nesta versão.');
});

els.chorusSlider.addEventListener('input', () => {
  log('Controle de Chorus visual apenas nesta versão.');
});

window.addEventListener('load', async () => {
  initPresetList();
  selectPreset(0);
  try {
    await ensureEngineReady();
    setStatus('Motor FluidSynth pronto', 'ready');
    log('JSSynth/FluidSynth WebAssembly pronto.');
    log('Build com libsndfile ativado para tentar suportar .sf3.');
    log(`${SOUND_FONT_PRESETS.length} presets remotos disponíveis. O preset inicial é MuseScore_General.sf3 oficial.`);
  } catch (err) {
    setStatus('Falha ao inicializar', 'error');
    log(`ERRO: ${err.message || err}`);
  }
});
