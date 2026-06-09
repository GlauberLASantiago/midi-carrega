# FluidSynth WebAssembly Player

Protótipo de player MIDI no navegador usando **FluidSynth em WebAssembly** via `js-synthesizer`.

## O que esta versão faz

- Carrega um arquivo MIDI `.mid` ou `.midi` local.
- Carrega SoundFont local `.sf2/.sf3`.
- Inclui `MuseScore_General.sf3` como primeiro preset externo, apontando para o mirror público OSUOSL do MuseScore, além dos presets remotos anteriores.
- Não embute os arquivos `.sf2/.sf3` no projeto; apenas guarda os links.
- Toca o MIDI usando Web Audio.

## Como rodar

Não abra o `index.html` diretamente com `file://`. Sirva por HTTP local:

```bash
cd fluidsynth-web-app
python3 -m http.server 8000
```

Abra:

```text
http://localhost:8000
```

## Como usar

1. Escolha um preset remoto e clique em **Usar preset remoto**.
2. Ou selecione um SoundFont local `.sf2/.sf3`.
3. Selecione um MIDI `.mid/.midi`.
4. Clique em **Carregar no sintetizador**.
5. Clique em **Play**.

## Observações técnicas

- Presets remotos são baixados com `fetch()` a partir de URLs diretas. O preset MuseScore usa `https://ftp.osuosl.org/pub/musescore/soundfont/MuseScore_General/MuseScore_General.sf3`.
- Arquivos grandes podem demorar ou consumir bastante memória.
- Alguns `.sf3` podem falhar se o build WebAssembly do FluidSynth não tiver suporte de decodificação adequado.
- O botão Pause funciona como parada suave nesta versão.

## Licença e redistribuição de SoundFonts

Este projeto **não redistribui** os SoundFonts; ele apenas contém links para arquivos remotos que você forneceu.

Antes de publicar, vender, empacotar em app, ou hospedar uma cópia própria dos `.sf2/.sf3`, verifique a licença individual de cada banco. SoundFont geralmente contém samples de áudio; portanto “estar no GitHub” ou “ser grátis para baixar” não significa automaticamente que pode ser redistribuído.

Os nomes `Roland_SC-88.sf2`, `Yamaha-SY22.sf2`, `AWE ROM gm.sf2` e `CTK-230_SoundFont.sf2` indicam possível origem de hardware/ROM comercial. Eles foram mantidos como presets porque você pediu, mas não devem ser tratados como livres sem verificação.


## Versão corrigida dos presets

Esta versão carrega presets remotos com fallback:

1. Primeiro tenta `cdn.jsdelivr.net/gh/wrightflyer/SF2_SoundFonts@master/...`
2. Se falhar, tenta `raw.githubusercontent.com/wrightflyer/SF2_SoundFonts/master/...`
3. Valida se o download parece um SoundFont real, e não HTML/erro/Git LFS pointer.
4. Usa `libfluidsynth-2.4.6-with-libsndfile.js`, necessário para tentar carregar `.sf3`.

Se um preset remoto ainda falhar, abra o link no navegador, baixe o arquivo manualmente e use a opção de SoundFont local. Comece testando com `2mb_gmgs.sf2`, que é pequeno.


## Ajuste desta versão

Os presets agora usam URLs diretas explícitas por arquivo. A ordem de tentativa é:

1. `https://cdn.jsdelivr.net/gh/wrightflyer/SF2_SoundFonts@master/<arquivo>`
2. `https://github.com/wrightflyer/SF2_SoundFonts/raw/refs/heads/master/<arquivo>`

A versão não usa `raw.githubusercontent.com` como URL de preset. Se o navegador ainda bloquear o download remoto, clique em “Abrir/baixar preset direto”, salve o arquivo `.sf2`/`.sf3` e carregue pelo seletor local.


## Preset MuseScore adicionado

O primeiro item do menu é agora:

```text
MuseScore_General.sf3 (oficial)
```

URL usada pelo app:

```text
https://ftp.osuosl.org/pub/musescore/soundfont/MuseScore_General/MuseScore_General.sf3
```

Licença/origem indicada no app:

```text
https://ftp.osuosl.org/pub/musescore/soundfont/MuseScore_General/MuseScore_General_License.md
```

Também deixei a versão `.sf2` oficial como fallback manual/remoto:

```text
https://ftp.osuosl.org/pub/musescore/soundfont/MuseScore_General/MuseScore_General.sf2
```

A versão `.sf3` é muito menor e deve ser testada primeiro. Se o navegador bloquear o `fetch()` do servidor externo por CORS, clique em **Abrir/baixar preset direto**, baixe o arquivo e carregue como SoundFont local.
