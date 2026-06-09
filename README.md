# FluidSynth WebAssembly Player

Protótipo HTML de player MIDI usando **FluidSynth em WebAssembly**, via a biblioteca `js-synthesizer`.

## O que ele faz

- Carrega um SoundFont `.sf2` escolhido pelo usuário.
- Carrega um arquivo MIDI `.mid` ou `.midi`.
- Sintetiza áudio no navegador com Web Audio API.
- Tem interface simples com Play, Pause/Stop, Stop e volume geral.

## Como rodar

Por causa das restrições de segurança do navegador, rode por um servidor local, não abrindo o `index.html` diretamente por `file://`.

Opção com Python:

```bash
cd fluidsynth-web-app
python3 -m http.server 8000
```

Depois abra:

```text
http://localhost:8000
```

## Arquivos necessários do usuário

Você precisa selecionar:

1. Um SoundFont `.sf2`, por exemplo:
   - FluidR3 GM
   - GeneralUser GS
   - MuseScore General
2. Um arquivo MIDI `.mid` ou `.midi`.

## Dependência usada

O protótipo carrega via CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/js-synthesizer@1.13.0/externals/libfluidsynth-2.4.6.js"></script>
<script src="https://cdn.jsdelivr.net/npm/js-synthesizer@1.13.0/dist/js-synthesizer.min.js"></script>
```

A documentação do `js-synthesizer` informa que ele usa uma versão WebAssembly de FluidSynth como motor de síntese.

## Limitações desta primeira versão

- O botão Pause atua como parada suave nesta implementação simples; pausa/resume real pode ser adicionado com controle mais fino do sequencer/player.
- Reverb e Chorus estão previstos na interface, mas o ajuste fino precisa mapear os métodos/parâmetros exatos da versão carregada.
- SoundFonts grandes podem demorar para carregar e consumir bastante memória.
- Alguns navegadores bloqueiam áudio até o primeiro clique do usuário; por isso o carregamento também ativa/resume o AudioContext.

## Próximos recursos recomendados

- Mixer dos 16 canais MIDI.
- Visualização de eventos MIDI.
- Piano roll.
- Troca de instrumento por canal.
- Exportação WAV via renderização offline.
- Modo totalmente offline, baixando os arquivos JS/WASM da dependência para a pasta local.
