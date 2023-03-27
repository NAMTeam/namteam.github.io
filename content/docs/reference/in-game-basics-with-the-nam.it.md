---
title : "Nozioni di base sul gioco con il NAM"
description: "Il NAM ha una gamma incredibilmente completa di funzioni: la comprensione di questi concetti renderà molto più facile l'uso dei vari strumenti del NAM."
lead: "Sebbene il NAM disponga di una serie incredibilmente esaustiva di funzionalità - al punto che pochi giocatori le utilizzeranno tutte - ci sono alcuni concetti di base che sono alla base di tutte le espansioni della rete di trasporto all'interno del mod. La comprensione di questi concetti renderà molto più semplice il processo di adattamento ai vari strumenti inclusi nel NAM."
date: 2022-09-06T10:09:26+00:00
lastmod: 2022-09-06T10:09:26+00:00
weight: 3
draft: false
images: []
url: "docs/reference/in-game-basics"
---



## Tipi di contenuto di base

Le espansioni della rete di trasporto all'interno del NAM si dividono in due categorie: **Oggetti trascinabili**, prodotti trascinando in qualche modo la rete di trasporto, e **Oggetti sovrapponibili**, che vengono posizionati con un solo clic. All'interno di queste due categorie, ci sono delle distinzioni.

### Sottotipi di elementi trascinabili

* Elementi trascinabili semplici, che si costruiscono semplicemente trascinando la rete (o la combinazione di reti) in modo immediatamente evidente e intuitivo.
* Elementi trascinabili basati su schemi, che si costruiscono trascinando uno schema speciale con una determinata rete (o combinazione di reti).

### Sottotipi di oggetti posizionabili

* Pezzi puzzle statici (spesso chiamati semplicemente "pezzi puzzle"), che sono pezzi di rete di trasporto che non interagiscono con i tratti di rete circostanti e rimangono fissi nella forma dopo il posizionamento.
* Pezzi Starter, che sono pezzi di rete di trasporto molto semplici, progettati specificamente per interagire con le reti di trasporto di base del gioco e sovrascriverle caso per caso, modificandone l'aspetto e il comportamento. In assenza della possibilità di aggiungere ulteriori reti di trasporto "vere", gli Starter Pieces hanno permesso al NAM di emulare tali aggiunte. I prodotti delle trasformazioni degli Starter Piece sono denominati _Reti di scavalcamento_.
* Pezzi FLEX, che sono pezzi di rete di trasporto che interagiscono con i tratti di rete circostanti e possono accettare sostituzioni da vari tipi di Oggetti trascinabili, Pezzi Starter e altri Pezzi FLEX, consentendo a un singolo pezzo di svolgere più funzioni, a differenza di un Pezzo Puzzle statico. I pezzi FLEX, in alcuni casi, possono anche agire come pezzi iniziali più complessi, progettati per scopi specifici.
* Disconnettori, che sono versioni più delicate dello strumento Bulldozer predefinito del gioco, destinati principalmente all'uso con il plugin [RealHighway](/docs/feature-guides/realhighway/).
* Effetti Hole Digger/Raiser, che alzano o abbassano il terreno di quantità specifiche al momento del posizionamento. (Non vanno confusi con i vecchi lotti Hole Digger/Raiser).
* Lotti abilitati al transito (o "Lotti TE"), che tecnicamente non sono oggetti della rete di trasporto, ma lotti che possono accettare input dalle reti di trasporto, trasportare traffico e servire per altri scopi legati al trasporto. In genere, sono utilizzati per le stazioni di transito, in quanto consentono ai sim di cambiare tipo di transito (ad esempio, passando da un treno a una passeggiata). Anche le cabine di pedaggio sono un uso comune dei Lotti TE.

## Navigazione nei menu e nelle voci del NAM

Mentre gli oggetti trascinabili semplici e a schema sono costruiti direttamente trascinando le reti di trasporto di base del gioco, tutti gli oggetti trascinabili devono essere selezionati tramite il sistema di menu del gioco. Il posizionamento di un determinato oggetto può essere controllato utilizzando i seguenti tasti:

* _Home_ - ruota in senso orario
* _Fine_ - ruota in senso antiorario

Si noti che con alcuni oggetti, la rotazione di Home/End può produrre una variante del pezzo (ad esempio un equivalente diagonale), o in alcuni casi - in particolare con i sottopassaggi flessibili (FLUP) - può essere il mezzo per accedere a pezzi completamente diversi. Queste situazioni saranno segnalate negli elenchi del catalogo nelle [Guide alle caratteristiche] (/docs/feature-guides/) incluse in questa documentazione.

Tutti gli Oggetti Plottabili, eccetto i Lotti Abilitati al Transito, possono essere combinati in un insieme accessibile con un unico pulsante di menu, attraverso l'uso di un _TAB Loop_ (noto internamente come "RotationRing"). I cicli TAB sono così chiamati perché l'uso del tasto _TAB_, e le combinazioni di tasti che lo prevedono, consentono di scorrere le varie voci sotto il pulsante selezionato. La navigazione tra le varie opzioni di un singolo pulsante è controllata dai seguenti tasti:

* _TAB_ - avanzamento del ciclo
* _Shift-TAB_ - indietro nel loop

Ad esempio, se un ciclo TAB contiene un totale di 10 elementi ploppabili, inizierà con l'elemento 1, TAB si sposterà in avanti all'elemento 2, all'elemento 3 e così via, mentre Shift-TAB si sposterà all'indietro all'elemento 10, all'elemento 9 e così via. Una volta raggiunta la fine del ciclo, si torna all'elemento 1 e si continua da lì.

Ogni lotto abilitato al transito deve avere il proprio pulsante di menu, poiché gli elementi basati sul lotto non possono essere inseriti nei cicli TAB. Per ulteriori informazioni, consultare la documentazione [Informazioni tecniche](/docs/reference/technical-information/).

**Nota speciale per gli utenti di _Steam_**: L'overlay di Steam è impostato per utilizzare la combinazione di tasti _Maiusc-TAB_ per impostazione predefinita. Attraverso il client Steam, è necessario cambiare la combinazione di tasti per l'overlay o disabilitarla del tutto per consentire la rotazione all'indietro attraverso i TAB Loop. L'uso di TAB e Shift-TAB da parte di SimCity 4 è codificato in modo rigido e il tentativo di usare Shift-TAB senza cambiare la scorciatoia per l'overlay causerà la comparsa dell'overlay, invece di consentire la navigazione di un TAB Loop al contrario come previsto.

## Utilizzo di pezzi di puzzle statici

I pezzi statici, una volta selezionati, producono un'anteprima in bilico che mostra l'impronta del pezzo sul terreno. È sufficiente allineare l'impronta alla posizione desiderata, usando i tasti Home e End per ruotare e il mouse per allineare, e fare clic sul pulsante sinistro del mouse per posizionare il pezzo. Se l'anteprima è evidenziata in rosso, significa che il terreno o la rete di trasporto esistente o la configurazione del lotto sottostante non consentono di posizionare il pezzo. I pezzi del puzzle statico possono generalmente essere posizionati sopra gli edifici RCI (Residenziale/Commerciale/Industriale) coltivabili e distruggeranno quelli che si trovano nell'area di ingombro.

Se si prevede di utilizzare sezioni di rete trascinabile in prossimità del pezzo statico, a meno che il pezzo non abbia dei connettori, è generalmente consigliabile costruire prima la rete trascinabile, almeno fino al bordo dell'impronta del pezzo statico, e poi posizionare il pezzo stesso sopra di esso.

Alcuni pezzi di puzzle statici, in particolare quelli del plugin RealHighway (RHW), possono avere degli stub per i pezzi di partenza, il che, se da un lato facilita il processo di connessione del pezzo alla rete circostante, dall'altro limita le opzioni di posizionamento del pezzo a un terreno per lo più pianeggiante.

I pezzi statici non accettano sovrascritture e, oltre a non cambiare per adattarsi all'ambiente circostante, bloccano la continuazione delle reti di sovrascrittura. L'unico modo per cambiare la configurazione è demolire il pezzo statico e sostituirlo con qualcos'altro.

## Utilizzo di Starter Pieces e reti di override

I pezzi iniziali, una volta selezionati, produrranno un'anteprima in bilico, mostrando l'impronta del pezzo sul terreno. È sufficiente allineare l'impronta alla posizione desiderata, usando i tasti Home e End per ruotare e il mouse per allineare, e fare clic con il pulsante sinistro del mouse per posizionare il pezzo. Se l'anteprima è evidenziata in rosso, significa che il terreno o la rete di trasporto esistente o la configurazione del lotto sottostante non consentono di posizionare il pezzo.

Tutti i pezzi Starter hanno una "tessera di costruzione", necessaria per il gioco. La tessera di costruzione viene posizionata nel punto in cui si trova il cursore e si autodistrugge al momento del posizionamento. Se sotto la tessera di costruzione c'è un tratto di rete esistente, al suo posto apparirà un "vuoto" di 1x1 dopo il posizionamento. I pezzi starter possono generalmente essere posizionati sopra gli edifici RCI (Residenziali/Commerciali/Industriali) in crescita, e distruggeranno quelli che si trovano nell'area di ingombro; questo vale sia per lo starter stesso che per la tessera di costruzione.

Ogni Pezzo iniziale avrà una "rete di base" associata, che sarà indicata nel tool-tip del Pezzo iniziale, visualizzato mentre il pezzo è selezionato. Per attivare l'override consentito dal pezzo iniziale, selezionare la rete indicata e trascinare la rete di base attraverso il pezzo iniziale. In questo modo, la rete trascinabile di base si convertirà in modo da corrispondere all'aspetto del pezzo iniziale, producendo una rete di esclusione.

## Utilizzo dei pezzi FLEX

I pezzi FLEX, una volta selezionati, producono un'anteprima in bilico che mostra l'impronta del pezzo sul terreno. È sufficiente allineare l'impronta alla posizione desiderata, usando i tasti Home e End per ruotare e il mouse per allineare, e fare clic con il pulsante sinistro del mouse per posizionare il pezzo. Se l'anteprima è evidenziata in rosso, significa che il terreno o la rete di trasporto esistente o la configurazione del lotto sottostante non consentono il posizionamento del pezzo.

Tutti i pezzi FLEX hanno una "tessera di costruzione", necessaria per il gioco. La tessera di costruzione viene posizionata nel punto in cui si trova il cursore e si autodistrugge al momento del posizionamento. Se sotto la tessera di costruzione c'è un tratto di rete esistente, al suo posto apparirà un "vuoto" di 1x1 dopo il posizionamento. I pezzi FLEX possono generalmente essere posizionati sopra gli edifici RCI (Residenziali/Commerciali/Industriali) in crescita, e distruggeranno quelli che si trovano nell'area di ingombro: questo vale sia per lo starter stesso che per la tessera di costruzione.

Molti pezzi FLEX accettano input dalle Reti di Override, cambiando di conseguenza il loro aspetto e la loro funzione. Per trasformare un pezzo FLEX in una nuova configurazione, è sufficiente trascinare la rete Override nella parte appropriata del pezzo FLEX. Se la configurazione è supportata, si trasformerà per adattarsi.

Alcuni pezzi di questo tipo possono anche fungere da Starter Piece. Per casi specifici, consultare le [Guide alle funzioni] (/docs/feature-guides/).

## Utilizzo di elementi trascinabili basati su modelli

Gli oggetti trascinabili basati su schemi sono oggetti costruiti utilizzando uno specifico schema di trascinamento con una delle reti di base del gioco. Una volta completato lo schema appropriato, l'oggetto si converte nella configurazione desiderata. Gli oggetti trascinabili basati su schemi sono presenti in tutti i plugin del NAM, con esempi importanti nei plugin Roundabout, Wide-Radius Curves e Fractional Angle Networking, nelle transizioni del plugin Network Widening Mod (NWM) e negli on/offramp del plugin RealHighway.

Molti elementi trascinabili basati su modelli accettano input dalle reti predefinite e/o dalle reti di sovrascrittura, modificandone l'aspetto e la funzione di conseguenza. Per trasformare un elemento trascinabile basato su modello in una nuova configurazione, è sufficiente trascinare la rete desiderata nella parte appropriata del modello. Se la configurazione è supportata, si trasformerà per adattarsi.