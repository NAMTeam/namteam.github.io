---
title : "Informazioni tecniche"
description: "Informazioni importanti per le installazioni NAM."
lead: "Questo documento contiene informazioni importanti da leggere prima dell'installazione di Network Addon Mod."
date: 2022-09-06T10:09:26+00:00
lastmod: 2022-09-06T10:09:26+00:00
weight: 8
draft: false
images: []
---

{{< docstatus status="outdated" >}}

Sebbene sia destinato principalmente alle persone in grado di aprire i file associati alla NAM, contiene importanti informazioni sul gioco. Pertanto, le informazioni che seguono riguardano l'aspetto più tecnico e devono essere considerate solo come una fonte aggiuntiva di informazioni sui file del mod e/o sul gioco. Per installare la mod, consultare le [Istruzioni per l'installazione] (/docs/reference/installation-notes/).

## 1. Problemi e/o bug noti (del gioco)

Questa sezione spiega i problemi di gioco attualmente noti con il sistema di traffico/rete di SimCity 4 che potrebbero essere rilevanti per questa mod. Questa sezione non è esaustiva e pertanto potrebbero esistere altri problemi non trattati in questa sede.

### 1.1 Generalità

Poiché non disponiamo dello stesso livello di strumenti e/o grado di controllo sul gioco che ha Maxis, alcuni oggetti personalizzati potrebbero attualmente presentare problemi di Pathing, grafici e/o altri problemi sconosciuti/conosciuti, e mostrare un comportamento che non potrebbe e/o non dovrebbe verificarsi normalmente. Purtroppo, alcuni problemi sono al di fuori del nostro controllo e quindi potrebbero non essere risolvibili. Le sezioni seguenti illustrano alcuni di questi problemi in modo più dettagliato.

### 1.2 Reti

Le reti di SimCity 4, in generale, presentano un comportamento di prossimità quando si utilizza attivamente lo strumento di ruspa e/o i diversi strumenti di rete (Strada, Strada, Viale, Ferrovia, ecc.). Quando si utilizzano attivamente questi strumenti per ruspare e/o disegnare una sezione di rete, una tessera di intersezione e/o altro, questo comportamento di prossimità può talvolta causare problemi, bug di disegno e/o altro in determinate circostanze che non si verificherebbero normalmente. Tali problemi possono anche impedire il disegno di un'intersezione e/o di una sezione di rete che altrimenti sarebbe possibile disegnare. Questo comportamento di prossimità è in genere da 3 a 4 tile, ma in alcuni casi può essere superiore o inferiore.

#### **Soluzione**

Sebbene questo comportamento di prossimità possa essere superato in alcuni casi implementando le regole di gioco necessarie per questi problemi, il tempo richiesto supera i benefici dell'implementazione di tali regole nella maggior parte dei casi (anche se alcune regole sono state implementate per alcuni di questi problemi). Spesso, alcuni problemi possono essere risolti rastrellando e/o ridisegnando una sezione di rete, una tessera di intersezione e/o altro, assicurandosi che non si ripeta la stessa azione, serie di azioni o configurazione che ha generato il problema.

### 1.3 Percorsi

Il sistema di tracciatura di SimCity 4, in generale, è controllato da una serie di regole. Per ogni tessera di rete esistente nel gioco, esiste un file di tracciato e dei percorsi (o punti di tracciamento) all'interno di tale file, per la tessera in gioco. Purtroppo, alcuni aspetti del sistema di tracciatura di SimCity 4 sono controllati dal motore del gioco (o EXE). Per questo motivo, alcuni oggetti personalizzati potrebbero avere problemi di UDI/Pathing e presentare un comportamento da pendolare e/o UDI che potrebbe non verificarsi e/o non dovrebbe verificarsi normalmente. Almeno alcuni interscambi e reti ferroviarie personalizzati sono noti per essere affetti da questo problema in una certa misura.

### 1.4 Voci relative alla base di interscambio - Posizionamento

Esistono due bug critici noti nel gioco che riguardano gli oggetti correlati a Interchange-Base e il loro posizionamento. La sezione seguente spiega questi due bug.

#### 1.4.1 Posizionamento e zone

Esiste un bug che può potenzialmente impedire la rimozione di un edificio/lotto di una zona. Questo stesso bug può anche causare l'arresto anomalo del gioco. La causa esatta del problema non è nota. Di seguito viene illustrato lo scenario generale in cui possono verificarsi questi problemi e la possibile soluzione:

##### **Items relativi al problema noto:**

* Zone di qualsiasi tipo (escluse le discariche) e gli edifici/lotti associati che derivano e/o si trovano su queste zone. Possono essere incluse zone residenziali, commerciali, industriali, di tutti i livelli di densità, e i relativi edifici e/o lotti. Questi edifici/lotti collegati possono includere sia gli originali di Maxis che qualsiasi edificio/lotto personalizzato collegato alle zone.
* Elementi relativi agli interscambi (IRI); possono includere sia gli originali Maxis che qualsiasi elemento personalizzato relativo agli interscambi, come cavalcavia autostradali, rampe, quadrifogli, pezzi di puzzle e altri elementi simili.
* Strumento di interrogazione dei percorsi e/o Strumento di interrogazione normale (nel caso in cui il gioco si blocchi).

##### **Punto in cui si è verificato il problema e/o l'arresto anomalo:**

Se un IRI viene costruito su edifici/lotti di zone già esistenti, la rimozione di questi edifici in cui l'IRI è e/o è stato costruito potrebbe non essere più possibile. L'uso dello Strumento di interrogazione dei percorsi e/o dello Strumento di interrogazione normale su questi edifici/lotti interessati, compreso il semplice passaggio dello Strumento di interrogazione sui lotti interessati, può anche potenzialmente causare l'arresto istantaneo del gioco sul desktop.

##### **Soluzione:**

Affinché questo bug non venga innescato, è altamente consigliabile che quando si posiziona un IRI il terreno sotto l'elemento sia libero e non contenga zone e/o edifici correlati.

Se per qualche motivo il bug è stato attivato, cioè un IRI è stato costruito su alcune zone, assicuratevi di non usare gli Strumenti di interrogazione su e/o sopra gli edifici/lotti delle zone, altrimenti il gioco potrebbe bloccarsi istantaneamente. Per rimuovere tutti gli edifici (che sono stati colpiti) che non possono essere immediatamente demoliti o rimossi correttamente, riorganizzare l'area interessata, assicurandosi che ci sia ancora un normale accesso stradale. Attendere un periodo di alcuni mesi (di gioco) e poi tentare di rimuovere gli edifici/lotti colpiti. Questo potrebbe potenzialmente consentire di rimuovere correttamente gli edifici/lotti interessati.

#### 1.4.2 Posizionamento e lotti abilitati al transito

È stato identificato un problema che potrebbe causare un **crash** del gioco. Al momento la causa esatta del problema non è ancora stata determinata. Di seguito viene descritto lo scenario generale in cui il problema può causare l'arresto anomalo del gioco:

##### **Items relativi al problema noto:**

* Lotto(i) abilitato(i) al transito (TEL); può includere sia gli originali Maxis sia qualsiasi TEL personalizzato.
* Elementi correlati all'interscambio (IRI); possono includere sia gli originali Maxis che qualsiasi elemento personalizzato correlato all'interscambio, come cavalcavia autostradali, rampe, quadrifogli, pezzi di puzzle e altri elementi simili.
* Cursore degli elementi correlati alla base di interscambio.

##### **Punto di arresto: **

Se il Cursore contiene un IRI e poi questo Cursore viene sorvolato e/o cliccato (e/o ripetuto) su una TEL, in alcuni casi circostanziati può causare il crash istantaneo del gioco sul desktop. Al momento è noto che questo accade solo se la rete dell'IRI sul Cursore è la stessa con cui è compatibile la TEL.

##### **Soluzione:**

Al momento non è ancora nota una soluzione a prova di bomba per questo problema. Si consiglia semplicemente agli utenti di evitare di spostare il Cursore su una TEL se il Cursore ha un IRI per ridurre al minimo le possibilità di crash del gioco. Si consiglia inoltre che qualsiasi TEL esistente in una città abbia la sua rete compatibile tracciata proprio all'interno/attraverso il lotto, in quanto anche questo ridurrà le possibilità di crash del gioco.

Per ulteriori informazioni su questo problema, consultare il seguente thread:[Cursore + Lotto abilitato al transito = crash](http://www.simtropolis.com/forum/messageview.cfm?catid=124&threadid=55794).

Il problema descritto sopra è stato esaminato e al momento le prove sembrano indicare che il problema esiste all'interno dell'eseguibile del gioco stesso, quindi non c'è nulla che possa (attualmente) essere fatto per eliminare completamente e correttamente il bug (a meno che Maxis non decida di affrontare il problema). Il motivo per cui il problema è stato menzionato qui è che ha un probabile impatto significativo sull'uso di questa mod e su coloro che la utilizzano.

## 2. File utilizzati

### 2.1 File esistenti usati indirettamente in associazione con il Network Addon Mod

Il Network Addon Mod si basa attualmente su una serie di file di gioco già esistenti.

Questi file includono, ma non solo, i seguenti:

* Vari file FSH. Conosciuti anche come file di texture.
* Vari file Exemplar.
* Vari file S3D. Conosciuti anche come file o modelli 3D.
* Vari file SC4Path.
* Vari file di testo.
* File UI o interfaccia utente.
* File LUA. Conosciuti anche come file di script.

Molti dei file sopra citati sono inclusi anche nel Network Addon Mod e fanno parte delle correzioni di bug relative al transito e/o di altre funzionalità aggiuntive.

Se avete cambiato l'aspetto e/o il contenuto di uno di questi file, e/o avete usato una mod o un file Bat/Lot che lo ha fatto, c'è una grande possibilità che tutte le caratteristiche di questa mod siano influenzate. L'entità di questo problema non può essere determinata, tutto dipende da cosa è stato fatto a uno qualsiasi dei tipi di file di cui sopra che sono collegati all'aspetto e/o alla funzionalità dei contenuti di Network Addon Mod.

### 2.2 File unici utilizzati direttamente all'interno del Network Addon Mod

Il Network Addon Mod include, dipende e utilizza una serie di file che sono unici per il motore del gioco. Per questo motivo, alcuni file non possono essere replicati, cambiati, rimossi e/o modificati senza cambiamenti, conseguenze e/o effetti negativi sul gioco. Questi file includono, ma non sono limitati a, i seguenti file specifici [con ID istanza]:

#### **File di coorte**

* ElTrain Cohort - 0x8BBF6D45

#### **File di Exemplar **

* Traffic Simulator - 0xC9133286
* Automata Tuning - 0x00000001
* DirtRoad - 0x0000001A
* Dirt Road Placement Tuning Parameters - 0xEBE08CDA
* Traffic Commute Graph - 0x0000000B [This file is included with " _..._10xCommute_" files]

#### **File di RUL**

* Highway - 0x00000001
* Highway - 0x00000002
* Rail - 0x00000005
* Rail - 0x00000006
* Road - 0x00000007
* Road - 0x00000008
* Street - 0x00000009
* Street - 0x0000000A
* Avenue - 0x0000000D
* Avenue - 0x0000000E
* OneWayRoad - 0x00000011
* OneWayRoad - 0x00000012
* DirtRoad - 0x00000013
* DirtRoad - 0x00000014
* Ground Highway Rules - 0x00000017
* Ground Highway Rules - 0x00000018
* OneWayRoad Bridge Specializations - 0x0000100A
* Intersection Ordering - 0x10000000
* Intersection Solutions - 0x10000001
* Rule Overrides - 0x10000002

#### **File di INI **

* Network Parameters - 0x8A5993B9

## 3. Percorsi (file)

### 3.1 Pezzi di puzzle e cavalcavia

Poiché il gioco ha versioni con guida a destra e a sinistra, coprire in modo efficiente ed efficace tutte le diverse possibilità di tracciatura dei pezzi del puzzle OneWayRoad rende a volte problematica la loro codifica/tracciatura. Per questo motivo alcuni pezzi di puzzle OneWayRoad, in particolare i pezzi di puzzle basati su **Intersezioni**, contengono un percorso bidirezionale per i file di percorso sia in avanti che in dietro, o per la guida a destra e a sinistra. Lo stesso vale anche per alcuni pezzi di puzzle basati su intersezioni stradali e viali. Questo è stato fatto come misura preventiva per superare qualsiasi problema di complicazione che potrebbe essere sorto con i giocatori che utilizzano gli elementi di questa mod che sono associati a, cioè OneWayRoad, pezzi di puzzle, con qualsiasi problema funzionale e / o solo generale con loro. Di conseguenza, i giocatori potrebbero notare alcune stranezze di percorso e/o automatismi e/o problemi con/quando utilizzano questi particolari elementi della mod.

Il paragrafo precedente non si applica ai pezzi di puzzle o ai cavalcavia che contengono **frecce direzionali**. I pezzi di puzzle e i cavalcavia che contengono **frecce direzionali** dovrebbero funzionare correttamente come dovrebbero, in genere senza stranezze di Pathing/Automata, purché siano posizionati e collegati correttamente in base alle loro **frecce direzionali**.
### 3.2 U-Drive-It &/for EI Rail

Esistono alcune limitazioni del gioco con cui abbiamo dovuto lavorare per rendere possibile l'UDI per EI Rail. Purtroppo, per alcuni aspetti dell'UDI per una rete ferroviaria, il gioco riconosce solo determinati percorsi per gli scambi di binario (gli scambi di binario sono quelli che permettono di andare in direzioni diverse agli incroci durante l'UDI). Per questo motivo, i file UDI EI Rail e/o EI Rail Path contengono una serie replicata di tracciati: una serie di tracciati per la rete originale prevista e una serie per la modalità UDI EI Rail. L'insieme di tracciati per la modalità UDI EI Rail sono tecnicamente tracciati basati su rotaie terrestri. Per questo motivo, dovrebbe essere possibile portare un treno passeggeri UDI e/o un treno merci UDI dalla ferrovia terrestre all'EI Rail utilizzando un lotto abilitato al transito (e viceversa per il treno EI Rail alla ferrovia terrestre). Per ottenere questo risultato, però, il lotto abilitato al transito dovrebbe contenere speciali file di percorso personalizzati. Questo, tuttavia, è attualmente al di fuori dello scopo di questa modifica.  
## 4. Gerarchia delle reti
Nel gioco esiste una gerarchia tra le diverse reti. Di seguito è riportata una linea guida sulla gerarchia dei diversi tipi di rete in superficie:

[In ordine dal vertice della gerarchia al fondo della gerarchia]

* Monorotaia Network
* Ferrovia Elevata Network
* Autostrada Elevata Network
* Ferrovia Network
* Autostrada Network
* Viale Network
* Strada a senso unico Network
* Strada Network
* Via Network
* ANT Network (RHW Network)

Quanto più una rete è in alto nella gerarchia, tanto maggiore è la sua priorità quando si disegna una rete su un'altra (in modo parallelo e sovrapposto). Per questo motivo non è possibile trascinare una rete che si trova all'estremità inferiore della gerarchia su una rete che si trova più in alto nella gerarchia e convertire la rete in quella della gerarchia inferiore. Questo è un aspetto definito nel motore di gioco ed è molto improbabile che possa essere modificato. A parte questo, però, in generale questa gerarchia non dovrebbe causare alcun problema, a meno che non siate un modder che cerca di modificare le reti e/o i file associati.

## 5. Lots
Questa mod non contiene affatto file di Lotti e/o di [Exemplar], come quelli che si trovano nei Lotti di edifici; in nessun modo.


## 6. ANT Item
L'elemento ANT che Maxis ha lasciato incompleto/inattivo nel gioco, con il nome tecnico di "DirtRoad", era un plugin opzionale che è stato sostituito dal Rural Highway Mod (RHW). La funzionalità completa del plugin ANT è stata trasferita all'RHW e non è più supportata dal NAM. Per ulteriori informazioni sull'RHW, consultare il file readme dell'RHW.

## 7. Convenzioni ID NAM
Questa sezione illustra brevemente le convenzioni per i file che il NAM segue tipicamente per i suoi contenuti personalizzati (ove applicabile). Queste convenzioni sono solo linee guida e pertanto alcuni elementi preesistenti risalgono a quando sono state stabilite queste linee guida e potrebbero non seguire le convenzioni. Inoltre, alcune eccezioni e/o variazioni limitate possono essere applicate o (devono) esistere per motivi funzionali, tecnici e/o di gestione interna.

La maggior parte delle convenzioni è regolata o è stata influenzata dalle convenzioni Maxis. Queste convenzioni si applicano principalmente ai file relativi alla rete e, sebbene non siano completamente complete, coprono le convenzioni relative all'ID istanza, le convenzioni di rete e/o qualsiasi altra convenzione che possa essere applicabile o appropriata per questa sezione in questo momento. Queste convenzioni comprendono i file S3D Model, i file SC4Path, i file Exemplar basati sulla rete, i file FSH basati sulla rete, i file EffectDir basati sulla rete, i file Prop basati sulla rete ed eventualmente altri.

* Designazioni GroupID: I GroupID dei vari oggetti e/o aree del gioco sono tipicamente usati come bandiere per scopi funzionali e sono solitamente regolati dai formati dei file Maxis.
* Designazioni InstanceID per gli oggetti base di Interchange: 0x5NDD##Z
* Designazione dell'ID istanza per gli oggetti di base non intercambiabili. 0x5FNDDDWZ
* Designazioni InstanceID per ponti e oggetti di rete (come i semafori personalizzati): 0x5NDDDZR0
* N = Designazione di rete. Vedere la tabella seguente.
* DDD = MeseMeseGiorno in forma decimale estesa (con tutti gli zeri iniziali) convertito in esadecimale. Dove 2004 è l'anno di base e ogni anno successivo 12+ Mese per anno deve essere aggiunto a MeseMese prima di essere convertito in esadecimale. Per più elementi in una data stabilita, aumentare/diminuire di conseguenza in base alla data iniziale.
* \# = porzione rimanente di esadecimale che compone l'intero ID istanza. Questa parte dell'ID istanza si basa tipicamente sull'ID istanza di base dell'elemento.
* W= Ricchezza. In genere si applica solo ai file S3D e FSH di riferimento (se applicabile).
* Z = Livello di zoom. In genere si applica solo ai file S3D e FSH di riferimento (se applicabile).
* R = Rotazione. Si applica di solito solo ai file S3D e FSH di riferimento (dove applicabile).

|         |   |              |   |               |   |
|---------|:-:|--------------|:-:|---------------|:-:|
| Road    | 0 | Street       | 5 | GroundHighway | A |
| Highway | 2 | Subway       | 6 | Monorail      | D |
| Rail    | 3 | ElevatedRail | 8 | ANT (RHW)     | E |
| Avenue  | 4 | OneWayRoad   | 9 |               |   |

## 8. Left Hand Version Rail Networks Fix
Questa sezione è un'estensione della sezione precedente che tratta le convenzioni per gli ID NAM. Le convenzioni di questa sezione, tuttavia, si applicano solo ai file SC4Path.

Questa sezione tratta la "correzione per le reti ferroviarie in versione sinistra" inclusa nel Network Addon Mod.

Versione con guida a destra contro versione con guida a sinistra; i file di percorso di SimCity 4 sono stati scritti pensando ai giocatori con guida a destra. Quasi tutti i **file di percorso** sono stati scritti con la guida a destra come impostazione predefinita. Questo vale per le reti stradali, come strade, vie e viali, e per le reti ferroviarie, come ferrovie, monorotaie e ferrovie sopraelevate. Per le versioni con guida a sinistra, il gioco inverte automaticamente tutti i percorsi su strada (o "auto"), ad eccezione delle strade a scorrimento veloce. Tuttavia, il gioco non applica la stessa inversione automatica per le reti ferroviarie; ecco perché è stato creato questo fix, in parte.

Questa correzione fa uso del file INI Network del gioco che consente l'inversione manuale dei file di percorso specificamente per le versioni Left Hand attraverso l'uso di uno speciale mascheramento dell'InstanceID e la sostituzione dei file di percorso, che l'exe analizza automaticamente in fase di esecuzione. Purtroppo, i test attuali mostrano che la rete Subway rappresenta un'eccezione. Per questo motivo questi percorsi sono stati inclusi in un plugin aggiuntivo per le versioni Left-Hand. Questo Plugin aggiuntivo contiene anche altri file per le versioni Left-Hand. Questo Plugin aggiuntivo deve essere utilizzato solo per le versioni con guida a sinistra. Consultare le [Istruzioni per l'installazione](/docs/installation-notes/) per quanto riguarda l'installazione di questo file aggiuntivo del Plugin.

Questa particolare correzione avrà un impatto sulle versioni con guida a sinistra. A causa dei necessari aggiustamenti apportati, questa correzione avrà successivamente un impatto sui lotti abilitati al transito, per le versioni per mancini. Di seguito viene spiegato più dettagliatamente l'impatto.
### Transit Enabled Lots

I lotti abilitati al transito che non specificano un file di percorso effettivo e/o utilizzano solo semplici flag RUL nella proprietà LotConFig non dovrebbero essere interessati e non è necessario apportare alcuna modifica. Tuttavia, i lotti abilitati al transito che specificano effettivamente i file di percorso in una qualsiasi delle loro proprietà LotConFig saranno probabilmente interessati e potrebbero dover essere modificati. I lotti abilitati al transito di questo tipo hanno in genere proprietà LotConFig di tipo 0x00000007 (o in altre parole, 0x00000007 come primo valore) e hanno 16+ valori per la proprietà LotConFig, specificando i file di percorso effettivi (cioè InstanceID) nel 16+ valore. Per ovviare agli effetti negativi che questa correzione potrebbe causare, per i lotti abilitati al transito per le versioni sinistre, leggere attentamente quanto segue;

I lotti abilitati al transito che specificano i file di percorso avranno già i file di percorso necessari per le versioni destre. Per le versioni sinistre, tuttavia, potrebbe essere necessario replicare i file di percorso, cambiare gli IID e invertire il **percorso ferroviario** per le versioni sinistre (e solo il percorso ferroviario. I percorsi basati sulle auto non devono essere invertiti. Potrebbero esistere alcune eccezioni molto limitate a questo). Quindi, in sostanza, ci saranno due serie di file di tracciato: una per le versioni destre e una per le versioni sinistre. Entrambi i Path file InstanceID della versione per la mano destra e i Path file InstanceID della versione per la mano sinistra devono rientrare in un particolare intervallo InstanceID, per poter funzionare correttamente sia per i giocatori della mano destra che per quelli della mano sinistra. I seguenti intervalli sono intervalli di conversione dell'ID istanza del file di percorso validi per i quali il gioco utilizzerà automaticamente i file di percorso sostitutivi nel caso di versioni per mancini;

(Esistono altri intervalli di inversione dell'IID, ma i seguenti sono i principali. Per una ripartizione completa ed esaustiva, consultare il file INI stesso).

Versione abbreviata

* 0x0N###### --> 0x4N######
* 0x5N###### --> 0x7N######
* 0x5FN##### --> 0x7FN#####

Dove 'N' = designazione della rete.

Versione lunga (gamme IID specifiche attuali)

* Default Path File(s) --> Replacement Path File(s)
* Right-Hand Version --> Left-Hand Version
* 0x03###### --> 0x43######
* 0x53###### --> 0x73######
* 0x5F3##### --> 0x7F3#####
* 0x08###### --> 0x48######
* 0x58###### --> 0x78######
* 0x5F8##### --> 0x7F8#####
* 0x0D###### --> 0x4D######
* 0x5D###### --> 0x7D######
* 0x5FD##### --> 0x7FD#####
* 0xEA###### --> 0x4A######

\# = l'hex rimanente dell'ID istanza del file di percorso. Questa parte dell'ID istanza deve essere esattamente la stessa sia per la versione destra che per quella sinistra. Come **examples**:

* 0x 0 **3031500** --> 0x 4 **3031500** ~ _these are actual path files found in the NAM &/or the games own files_
* 0x 5F8 **32900** --> 0x 7F8 **32900** ~ _these are actual path files found in the NAM_
* 0x 5D **123900** --> 0x 7D **123900** ~ _in the case of a Rail-based Bridge_

Tutti gli intervalli IID relativi alle rotaie sono coperti e invertiti per le versioni con guida a sinistra. Qualsiasi file di percorso che rientra negli intervalli sopra elencati, indipendentemente dal tipo di percorso contenuto, verrà analizzato dall'exe, verranno utilizzati file di percorso sostitutivi e quindi invertiti (NOTA: se non esiste un file di percorso sostitutivo, la piastrella in questione potrebbe non funzionare). Poiché l'exe non inverte effettivamente le reti ferroviarie, utilizzerà semplicemente i file di percorso sostitutivi come per le versioni per mancini. Se però nel file sostitutivo esiste un percorso di auto, l'exe invertirà solo la porzione di percorso di auto del file di percorso per le versioni con guida a sinistra. 

## 9. End Notes
### A.1

Esemplare di grafico pendolare: È stato incluso solo nei file con il nome " _..._10xCommute_". L'unica ragione è quella di cercare di compensare la visualizzazione del grafico dei pendolari in modo da dare un'idea più rappresentativa del tempo di percorrenza vissuto [rispetto a quello che si considera/aspetta di solito]. È altamente consigliabile che ogni volta che si cambia il file del Plugin del Traffico, si dia al gioco tutto il tempo necessario per aggiornare tutto ciò che è correlato e/o connesso ai percorsi e ai pendolari. Si dovrebbero concedere almeno dodici mesi di tempo al gioco. Questo tempo può variare a seconda delle dimensioni della città, delle opzioni di gioco e/o del sistema informatico.

### A.2

Si noti che alcuni file sono stati replicati, utilizzati e/o citati più volte da diversi elementi e/o aree dei file, compresi i file originali del gioco. Un esempio di ciò è rappresentato da alcuni pezzi di puzzle, che in pratica utilizzano i file dei cavalcavia (non necessariamente tutti).

### A.3

Si consiglia vivamente di non modificare il contenuto di questi file e di non modificare nessuno dei file TGI, a meno che non si sappia bene cosa si sta facendo. Poiché la modifica di uno qualsiasi di questi file potrebbe causare il mancato funzionamento dei file e/o delle correzioni/caratteristiche di Network Addon Mod e/o di altri elementi.

Ultimo aggiornamento del file: Giovedì 24 aprile 2008_