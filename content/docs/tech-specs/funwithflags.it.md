---
title : "Comprendere i flag RUL"
description: "Questo documento fornisce informazioni sulle bandiere comuni utilizzate nel gioco dal NAM per creare una varietà di FLEX e altri pezzi puzzle."
lead: ""
date: 1970-01-01T10:09:26+00:00
lastmod: 1970-01-01T10:09:26+00:00
draft: false
images: []
---

I file RUL controllano il posizionamento degli elementi di rete nel gioco. Un esempio di elemento di rete è la strada che si trascina. I flag RUL si riferiscono a una combinazione specifica di valori esadecimali che indicano a ciascuna tessera di rete cosa fare.

## Comprendere i flag

### Flags di base

Le flag di rete sono la codifica del gioco delle connessioni di rete in transito per una determinata tessera.  Ogni tessera ha quattro flag, uno per ogni bordo.  Una flag definisce se esiste una connessione attraverso un bordo e la sua direzione relativa.

Nei vari file RUL vengono utilizzate cinque flag primitive:

- 0 - nessuna connessione
- 1 - diagonale sinistra
- 2 - ortogonale
- 3 - diagonale destra
- 4 - mediana (per reti a doppia larghezza, ad esempio viale)

Le singole RUL di rete fanno uso di flag aggiuntivi:

- 11 - diagonale sinistra a miscela ortogonale
- 13 - diagonale destra a miscela ortogonale

Le reti ferroviarie utilizzano ulteriori flag complessi:

- 21 - interruttore diagonale sinistro
- 23 - interruttore diagonale destro
- 22 - miscela secondaria sinistra
- 42 - miscela secondaria destra
- 32 - incrocio/scambio da ortogonale sinistro a diagonale
- 52 - incrocio/scambio ortogonale a destra a diagonale
- 62 - flag wye (usato anche per crossover/switch)
- 72 - Flag 'W' (utilizzato per gli interruttori 'W')

### Rete individuale RUL (INRUL)

Le RUL delle singole reti definiscono il comportamento autonomo delle dodici reti del gioco.  Ogni rete ha un file INRUL di <em>base</em> e uno <em>avanzato</em>.  L'INRUL di base definisce il posizionamento tipico, mentre l'INRUL avanzato gestisce situazioni più complesse.

Gli INRUL sono composti da una griglia 5x5 di piastrelle in cui sono definiti i flag e gli ID dei pezzi della rete.  Convenzionalmente, l'INRUL di base utilizza una sola tessera per definire una regola, mentre l'INRUL avanzato definisce più tessere.

### Soluzioni di intersezione RUL (RUL1)

La RUL1 definisce le piastrelle per le intersezioni tra due diversi tipi di rete.  

### Sovrapposizione di RUL (RUL2)

RUL2 viene utilizzato per annullare i risultati delle definizioni INRUL e RUL1.  Funziona riassegnando una coppia di pezzi adiacenti a un'altra coppia, sostituendo uno o entrambi i pezzi.  RUL2 è il meccanismo utilizzato per creare reti di override come SAM o RHW.

### Ordinamento dell'intersezione RUL (RUL0)

RUL0 definisce interscambi, pezzi di puzzle e pezzi in stile FLEX che possono essere posizionati con i pulsanti del menu.