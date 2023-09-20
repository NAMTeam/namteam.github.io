---
title : "Ferrovia ibrida"
description: "Le specifiche tecniche della ferrovia ibrida si trovano qui. In questa pagina sono riportati valori e attributi utili sia per gli utenti finali che per gli sviluppatori."
lead: "Le specifiche tecniche della Ferrovia Ibrida si trovano qui. In questa pagina sono indicati i valori, gli attributi e il livello di compatibilità con altri componenti del NAM, utili sia per gli utenti finali che per gli sviluppatori."
date: 2022-09-06T10:09:26+00:00
lastmod: 2022-09-06T10:09:26+00:00
draft: false
images: []
url: "docs/tech-specs/hybrid-railway"
---
<!-- markdownlint-disable MD001 -->
{{< feature-guide link="docs/feature-guides/hybrid-railway" mod="Hybrid Railway feature guide" >}}

## Capacità della rete e del pezzo FLEX

### Chiave

<table class="table-bordered nam-compat-status processed">
<tr>
    <td data-compat="yes"> SI </td>
    <td>Questa particolare caratteristica può essere costruita, con limitazioni minime (se non addirittura nulle).</td>
</tr>
<tr>
    <td data-compat="partial"> Supporto parziale </td>
    <td>Questa particolare caratteristica può essere costruita, ma non in tutti i casi. Verranno forniti dettagli su ciò che è/non è possibile. Il supporto parziale può essere dovuto a ragioni di progettazione intenzionali (come il realismo o la non fattibilità generale), o semplicemente perché la caratteristica non è stata completamente sviluppata.</td>
</tr>
<tr>
    <td data-compat="limited"> Supporto limitato </td>
    <td>Questa particolare caratteristica può essere costruita, ma solo in circostanze estremamente limitate. I casi possibili possono essere elencati, nella misura in cui è possibile. L'uso è a proprio rischio e pericolo.</td>
</tr>
<tr>
    <td data-compat="no"> Nessun supporto </td>
    <td>Questa particolare caratteristica non può essere costruita. Questa restrizione può essere dovuta a ragioni di progettazione intenzionali (come il realismo, la non fattibilità generale o le limitazioni del gioco) o semplicemente perché non è ancora stata sviluppata.</td>
</tr>
</table>

### Additional Notes

**OxO**: OxO sta per "ortogonale x ortogonale" e si riferisce a una situazione in cui entrambe le reti sono ortogonali (in linea retta) lungo la griglia di gioco, intersecandosi perpendicolarmente (con angoli di 90° in tutti gli angoli).

**OxD**: OxD sta per "ortogonale x diagonale" e si riferisce a una situazione in cui la rete data è ortogonale (in linea retta) lungo la griglia di gioco e la rete trasversale è diagonale (con un angolo di 45°).

**DxO**: DxO sta per "diagonale x ortogonale" e si riferisce a una situazione in cui la rete di base è diagonale (con un angolo di 45°) e la rete trasversale è ortogonale (in linea retta) lungo la griglia di gioco.

**DxD**: DxD sta per "diagonale x diagonale" e si riferisce a una situazione in cui entrambe le reti sono diagonali (con un angolo di 45°) lungo la griglia di gioco e si intersecano perpendicolarmente (con angoli di 90° in tutti gli angoli).

### Available Height Levels

{{< table class="table-bordered nam-compat-status w-auto" >}}
|         | L0    | L1       | L2    | L3    | L4    | DD    |
| ------- | :---: | :------: | :---: | :---: | :---: | :---: |
| HRW     | Si   | Limitato¹ | No    | No    | No    | No    |
{{< /table >}}

<span class="fs-6">**¹** Sono supportati solo i segmenti *ortogonali* e diagonali *dritti* di HRW.</span>

### Caratteristiche della rete di base

L'HRW è creato da una duplice rete di reti Monorotaia e Ferrovia pesante.

### Interfacce FLEXSwitch

##### Linea principale ortogonale

##### Linea principale diagonale

##### Linea principale ad angolo frazionario

### Transizioni FLEX in altezza e FLEX in larghezza

##### Transizioni ortogonali a rampa

##### Transizioni ortogonali in pendenza

##### Transizioni diagonali a rampa

##### Transizioni ortogonali in pendenza

##### Transizioni di larghezza ortogonali

##### Transizioni di larghezza diagonale

*Attualmente non è supportato.*

##### Transizioni ad angolo frazionario

*Attualmente non è supportato.*

### Curve ad ampio raggio / multiraggio

{{< table class="table-bordered nam-compat-status w-auto" >}}
|         | R1    | R2    | R3    | R4    | R5    |
| ------- | :---: | :---: | :---: | :---: | :---: |
| HRW L0  | Si¹   | Si¹   | Si¹   | Si    | Si    |
| HRW L1  | No    | No    | No    | No    | No    |
{{< /table >}}

<span class="fs-6">**¹** Queste curve sono più grandi delle loro controparti RRW. Fare riferimento a [questa sezione](/docs/feature-guides/hybrid-railway/#multi-radius-curves-mrcs) della Guida alle funzioni per saperne di più.</span>

### Supporto ad angolo frazionario

{{< table class="table-bordered nam-compat-status w-auto" >}}
|         | FA-3 | FA-2 | FA-1.5 | FA-1.5 (Alt) | FA-6 |
| ------- | :--: | :--: | :----: | :----------: | :--: |
| HRW L0  | ?    | Si ¹ | ?      | ?            | ?    |
| HRW L1  | No   | No   | No     | No           | No   |
{{< /table >}}

<span class="fs-6">**¹** I pezzi Flex FA-2 possono essere utilizzati anche per costruire interruttori. A questo scopo è disponibile anche un pezzo FA-2 corto. Fare riferimento a [questa sezione].(/docs/feature-guides/hybrid-railway/#fa-2-short-flex-switch-piece) della Guida alle funzioni per saperne di più.</span>

### Supporto all'intersezione

La ferrovia ibrida supporta una grande quantità di incroci, ma non tutti, nel Network Addon Mod (NAM). Gli incroci ortogonali hanno una copertura significativa in aggiunta alle altre configurazioni.

Tutte le intersezioni HRW, ad eccezione degli incroci HRW x HRW, richiedono la costruzione con il metodo [Stub to Stub].(/docs/feature-guides/hybrid-railway/#stub-to-stub-sts-crossing-construction-method).

##### Intersezioni ortogonali x ortogonali (OxO)

**HRW L0**
{{< table class="table-bordered nam-compat-status w-auto" >}}
| RETE         | HRW L0 x L0 | HRW L0 x L1 | HRW L0 x L2 | HRW L0 x L3 | HRW L0 x L4 |
| ------------ | :---------: | :---------: | :---------: | :---------: | :---------: |
| Via          | Si¹        | ---         | ---         | ---         | ---         |
| Strada       | Si         | No          | No          | ---         | ---         |
| Strada a senso unico | No          | No          | No          | ---         | ---         |
| Viale       | Si         | No          | No          | ---         | ---         |
| Ferrovia         | No          | No          | No          | ---         | ---         |
| STR          | No          | No          | No          | ---         | ---         |
| Ferrovia sopraelevata      | ---         | ---         | No          | ---         | ---         |
| GLR          | No          | No          | No          | ---         | ---         |
| Monorotaia     | ---         | ---         | No          | ---         | ---         |
| Autostrada Maxis²   | No          | ---         | No          | ---         | ---         |
| MHO (PS)²    | No          | ---         | No          | ---         | ---         |
| AVE-2        | No          | No          | No          | ---         | ---         |
| TLA-3        | No          | No          | No          | ---         | ---         |
| ARD-3        | No          | No          | No          | ---         | ---         |
| NRD-4        | No          | No          | No          | ---         | ---         |
| RD-4         | No          | No          | No          | ---         | ---         |
| TLA-5        | No          | No          | No          | ---         | ---         |
| RD-6         | No          | No          | No          | ---         | ---         |
| AVE-6        | No          | No          | No          | ---         | ---         |
| TLA-7        | No          | No          | No          | ---         | ---         |
| MIS          | No          | No          | No          | No          | No          |
| RHW-2        | No          | No          | No          | No          | No          |
| RHW-3        | No          | No          | No          | No          | No          |
| RHW-4        | No          | No          | No          | No          | No          |
| RHW-6S       | No          | No          | No          | No          | No          |
| RHW-6C       | No          | No          | No          | No          | No          |
| RHW-8S       | No          | No          | No          | No          | No          |
| RHW-8C       | No          | No          | No          | No          | No          |
| RHW-10S      | No          | No          | No          | No          | No          |
{{< /table >}}

<span class="fs-6">¹ Per impostazione predefinita, la rete stradale per l'attraversamento</span><br/>
<span class="fs-6">² Entrambe le varianti di Maxis Highway sono considerate come un'unica rete per facilitare la visualizzazione. MHW non ha una rete L1, L3 o L4. Questo vale anche per il progetto Maxis Highway Override.</span>

**HRW L1**
{{< table class="table-bordered nam-compat-status w-auto" >}}
| NETWORK      | HRW L1 x L0 | HRW L1 x L1 | HRW L1 x L2 | HRW L1 x L3 | HRW L1 x L4 |
| ------------ | :---------: | :---------: | :---------: | :---------: | :---------: |
| Via       | Si         | No          | No          | No          | No          |
| Strada       | Si         | No          | No          | No          | No          |
| Strada a senso unico | Si         | No          | No          | No          | No          |
| Viale       | Si         | No          | No          | No          | No          |
| AVE-2        | Si         | No          | No          | No          | No          |
| TLA-3        | Si         | No          | No          | No          | No          |
| ARD-3        | Si         | No          | No          | No          | No          |
| NRD-4        | Si         | No          | No          | No          | No          |
| RD-4         | Si         | No          | No          | No          | No          |
| TLA-5        | Si         | No          | No          | No          | No          |
| RD-6         | Si         | No          | No          | No          | No          |
| AVE-6        | Si         | No          | No          | No          | No          |
| TLA-7        | Si         | No          | No          | No          | No          |
| MIS          | Si         | No          | No          | No          | No          |
| RHW-2        | Si         | No          | No          | No          | No          |
| RHW-3        | Si         | No          | No          | No          | No          |
| RHW-4        | Si         | No          | No          | No          | No          |
| RHW-6S       | Si         | No          | No          | No          | No          |
| RHW-6C       | Si         | No          | No          | No          | No          |
| RHW-8S       | Si         | No          | No          | No          | No          |
| RHW-8C       | Si         | No          | No          | No          | No          |
| RHW-10S      | Si         | No          | No          | No          | No          |
| Ferrovia        | No          | No          | No          | No          | No          |
| Ferrovia Elevata      | No          | No          | No          | No          | No          |
| GLR          | No          | No          | No          | No          | No          |
| Monorotaia    | No          | No          | No          | No          | No          |
{{< /table >}}

##### Intersezioni ortogonali x diagonali (OxD)

**HRW L0**
{{< table class="table-bordered nam-compat-status w-auto" >}}
| NETWORK      | HRW L0 x L0 | HRW L0 x L1 | HRW L0 x L2 | HRW L0 x L3 | HRW L0 x L4 |
| ------------ | :---------: | :---------: | :---------: | :---------: | :---------: |
| HRW          | ?           | ?           | No          | No          | No          |
| Via      | No          | No          | No          | No          | No          |
| Strada      | No          | No          | No          | No          | No          |
| Strada a senso unico | No          | No          | No          | No          | No          |
| Viale      | No          | No          | No          | No          | No          |
| AVE-2        | No          | No          | No          | No          | No          |
| TLA-3        | No          | No          | No          | No          | No          |
| ARD-3        | No          | No          | No          | No          | No          |
| NRD-4        | No          | No          | No          | No          | No          |
| RD-4         | No          | No          | No          | No          | No          |
| TLA-5        | No          | No          | No          | No          | No          |
| RD-6         | No          | No          | No          | No          | No          |
| AVE-6        | No          | No          | No          | No          | No          |
| TLA-7        | No          | No          | No          | No          | No          |
| MIS          | No          | No          | No          | No          | No          |
| RHW-2        | No          | No          | No          | No          | No          |
| RHW-3        | No          | No          | No          | No          | No          |
| RHW-4        | No          | No          | No          | No          | No          |
| RHW-6S       | No          | No          | No          | No          | No          |
| RHW-6C       | No          | No          | No          | No          | No          |
| RHW-8S       | No          | No          | No          | No          | No          |
| RHW-8C       | No          | No          | No          | No          | No          |
| RHW-10S      | No          | No          | No          | No          | No          |
| Ferrovia         | No          | No          | No          | No          | No          |
| Ferrovia Elevata     | No          | No          | No          | No          | No          |
| GLR          | No          | No          | No          | No          | No          |
| Monorotaia     | No          | No          | No          | No          | No          |
{{< /table >}}

¹ Per impostazione predefinita, la rete stradale per l'attraversamento

**HRW L1**
{{< table class="table-bordered nam-compat-status w-auto" >}}
| NETWORK      | HRW L1 x L0 | HRW L1 x L1 | HRW L1 x L2 | HRW L1 x L3 | HRW L1 x L4 |
| ------------ | :---------: | :---------: | :---------: | :---------: | :---------: |
| HRW          | ?           | ?           | No          | No          | No          |
| Via       | Si         | No          | No          | No          | No          |
| Strada        | Si         | No          | No          | No          | No          |
| Strada a senso unico | Si         | No          | No          | No          | No          |
| Viale      | Si        | No          | No          | No          | No          |
| AVE-2        | Si         | No          | No          | No          | No          |
| TLA-3        | Si         | No          | No          | No          | No          |
| ARD-3        | Si         | No          | No          | No          | No          |
| NRD-4        | Si         | No          | No          | No          | No          |
| RD-4         | Si         | No          | No          | No          | No          |
| TLA-5        | Si         | No          | No          | No          | No          |
| RD-6         | Si         | No          | No          | No          | No          |
| AVE-6        | Si         | No          | No          | No          | No          |
| TLA-7        | Si         | No          | No          | No          | No          |
| MIS          | Si         | No          | No          | No          | No          |
| RHW-2        | Si         | No          | No          | No          | No          |
| RHW-3        | Si         | No          | No          | No          | No          |
| RHW-4        | Si         | No          | No          | No          | No          |
| RHW-6S       | Si         | No          | No          | No          | No          |
| RHW-6C       | Si         | No          | No          | No          | No          |
| RHW-8S       | Si         | No          | No          | No          | No          |
| RHW-8C       | Si         | No          | No          | No          | No          |
| RHW-10S      | Si         | No          | No          | No          | No          |
| Ferrovia        | No          | No          | No          | No          | No          |
| Ferrovia Elevata     | No          | No          | No          | No          | No          |
| GLR          | No          | No          | No          | No          | No          |
| Monorotaia    | No          | No          | No          | No          | No          |
{{< /table >}}

² Tessere stradali necessarie per attivare l'attraversamento

##### Intersezioni diagonali x ortogonali (DxO)

**HRW L0**
{{< table class="table-bordered nam-compat-status w-auto" >}}
| NETWORK      | HRW L0 x L0 | HRW L0 x L1 | HRW L0 x L2 | HRW L0 x L3 | HRW L0 x L4 |
| ------------ | :---------: | :---------: | :---------: | :---------: | :---------: |
| HRW          | ?           | ?           | No          | No          | No          |
| Via      | No          | No          | No          | No          | No          |
| Strada       | No          | No          | No          | No          | No          |
| Strada a senso unico | No          | No          | No          | No          | No          |
| Viale       | No          | No          | No          | No          | No          |
| AVE-2        | No          | No          | No          | No          | No          |
| TLA-3        | No          | No          | No          | No          | No          |
| ARD-3        | No          | No          | No          | No          | No          |
| NRD-4        | No          | No          | No          | No          | No          |
| RD-4         | No          | No          | No          | No          | No          |
| TLA-5        | No          | No          | No          | No          | No          |
| RD-6         | No          | No          | No          | No          | No          |
| AVE-6        | No          | No          | No          | No          | No          |
| TLA-7        | No          | No          | No          | No          | No          |
| MIS          | No          | No          | No          | No          | No          |
| RHW-2        | No          | No          | No          | No          | No          |
| RHW-3        | No          | No          | No          | No          | No          |
| RHW-4        | No          | No          | No          | No          | No          |
| RHW-6S       | No          | No          | No          | No          | No          |
| RHW-6C       | No          | No          | No          | No          | No          |
| RHW-8S       | No          | No          | No          | No          | No          |
| RHW-8C       | No          | No          | No          | No          | No          |
| RHW-10S      | No          | No          | No          | No          | No          |
| Ferrovia        | No          | No          | No          | No          | No          |
| El-Rail      | No          | No          | No          | No          | No          |
| GLR          | No          | No          | No          | No          | No          |
| Monorotaia     | No          | No          | No          | No          | No          |
{{< /table >}}

* ¹ Per impostazione predefinita, la rete stradale per l'attraversamento
* ² Tessere stradali necessarie per attivare l'attraversamento

**HRW L1**
{{< table class="table-bordered nam-compat-status w-auto" >}}
| NETWORK      | HRW L1 x L0 | HRW L1 x L1 | HRW L1 x L2 | HRW L1 x L3 | HRW L1 x L4 |
| ------------ | :---------: | :---------: | :---------: | :---------: | :---------: |
| HRW          | ?           | ?           | No          | No          | No          |
| Via       | Si         | No          | No          | No          | No          |
| Strada       | Si         | No          | No          | No          | No          |
| Strada a senso unico | Si         | No          | No          | No          | No          |
| Viale       | No          | No          | No          | No          | No          |
| AVE-2        | No          | No          | No          | No          | No          |
| TLA-3        | No          | No          | No          | No          | No          |
| ARD-3        | No          | No          | No          | No          | No          |
| NRD-4        | No          | No          | No          | No          | No          |
| RD-4         | No          | No          | No          | No          | No          |
| TLA-5        | No          | No          | No          | No          | No          |
| RD-6         | No          | No          | No          | No          | No          |
| AVE-6        | No          | No          | No          | No          | No          |
| TLA-7        | No          | No          | No          | No          | No          |
| MIS          | Si         | No          | No          | No          | No          |
| RHW-2        | Si         | No          | No          | No          | No          |
| RHW-3        | Si         | No          | No          | No          | No          |
| RHW-4        | Si         | No          | No          | No          | No          |
| RHW-6S       | Si         | No          | No          | No          | No          |
| RHW-6C       | No          | No          | No          | No          | No          |
| RHW-8S       | Si         | No          | No          | No          | No          |
| RHW-8C       | No          | No          | No          | No          | No          |
| RHW-10S      | Si         | No          | No          | No          | No          |
| Ferrovia        | No          | No          | No          | No          | No          |
| Ferrovia Elevata      | No          | No          | No          | No          | No          |
| GLR          | No          | No          | No          | No          | No          |
| Monorotaia     | No          | No          | No          | No          | No          |
{{< /table >}}

##### Intersezioni diagonale x diagonale (DxD)

**HRW L0**
{{< table class="table-bordered nam-compat-status w-auto" >}}
| NETWORK      | HRW L0 x L0 | HRW L0 x L1 | HRW L0 x L2 | HRW L0 x L3 | HRW L0 x L4 |
| ------------ | :---------: | :---------: | :---------: | :---------: | :---------: |
| HRW          | ?           | ?           | No          | No          | No          |
| Via      | Si        | No          | No          | No          | No          |
| Strada        | Si         | No          | No          | No          | No          |
| Strada a senso unico | No          | No          | No          | No          | No          |
| Viale      | Si         | No          | No          | No          | No          |
| AVE-2        | No          | No          | No          | No          | No          |
| TLA-3        | No          | No          | No          | No          | No          |
| ARD-3        | No          | No          | No          | No          | No          |
| NRD-4        | No          | No          | No          | No          | No          |
| RD-4         | No          | No          | No          | No          | No          |
| TLA-5        | No          | No          | No          | No          | No          |
| RD-6         | No          | No          | No          | No          | No          |
| AVE-6        | No          | No          | No          | No          | No          |
| TLA-7        | No          | No          | No          | No          | No          |
| MIS          | No          | No          | No          | No          | No          |
| RHW-2        | No          | No          | No          | No          | No          |
| RHW-3        | No          | No          | No          | No          | No          |
| RHW-4        | No          | No          | No          | No          | No          |
| RHW-6S       | No          | No          | No          | No          | No          |
| RHW-6C       | No          | No          | No          | No          | No          |
| RHW-8S       | No          | No          | No          | No          | No          |
| RHW-8C       | No          | No          | No          | No          | No          |
| RHW-10S      | No          | No          | No          | No          | No          |
| Ferrovia         | No          | No          | No          | No          | No          |
| Ferrovia Elevata      | No          | No          | No          | No          | No          |
| GLR          | No          | No          | No          | No          | No          |
| Monorotaia    | No          | No          | No          | No          | No          |
{{< /table >}}

* ¹ Per impostazione predefinita, la rete stradale per l'attraversamento
* ² Tessere stradali necessarie per attivare l'attraversamento

**HRW L1**
{{< table class="table-bordered nam-compat-status w-auto" >}}
| NETWORK      | HRW L1 x L0 | HRW L1 x L1 | HRW L1 x L2 | HRW L1 x L3 | HRW L1 x L4 |
| ------------ | :---------: | :---------: | :---------: | :---------: | :---------: |
| HRW          | ?           | ?           | No          | No          | No          |
| Via      | Si         | No          | No          | No          | No          |
| Strada         | Si         | No          | No          | No          | No          |
| Strada a senso unico | Si         | No          | No          | No          | No          |
| Viale       | Si         | No          | No          | No          | No          |
| AVE-2        | Si         | No          | No          | No          | No          |
| TLA-3        | Si         | No          | No          | No          | No          |
| ARD-3        | Si         | No          | No          | No          | No          |
| NRD-4        | Si         | No          | No          | No          | No          |
| RD-4         | Si         | No          | No          | No          | No          |
| TLA-5        | Si         | No          | No          | No          | No          |
| RD-6         | Si         | No          | No          | No          | No          |
| AVE-6        | Si         | No          | No          | No          | No          |
| TLA-7        | Si         | No          | No          | No          | No          |
| MIS          | Si         | No          | No          | No          | No          |
| RHW-2        | Si         | No          | No          | No          | No          |
| RHW-3        | Si         | No          | No          | No          | No          |
| RHW-4        | Si         | No          | No          | No          | No          |
| RHW-6S       | Si         | No          | No          | No          | No          |
| RHW-6C       | Si         | No          | No          | No          | No          |
| RHW-8S       | Si         | No          | No          | No          | No          |
| RHW-8C       | Si         | No          | No          | No          | No          |
| RHW-10S      | Si         | No          | No          | No          | No          |
| Ferrovia        | No          | No          | No          | No          | No          |
| Ferrovia Elevata     | No          | No          | No          | No          | No          |
| GLR          | No          | No          | No          | No          | No          |
| Monorotaia     | No          | No          | No          | No          | No          |
{{< /table >}}

### Ponti

*Non è attualmente supportato.*

### Tunnels

*Non è attualmente supportato.*

## Assegnazione dell'ID di rete
