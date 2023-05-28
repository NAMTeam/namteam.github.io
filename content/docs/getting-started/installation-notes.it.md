---
title : "Installazione"
description: "Note importanti per l'installazione di Network Addon Mod per SimCity 4."
lead: ""
date: 2022-09-06T10:09:26+00:00
lastmod: 2022-09-06T10:09:26+00:00
weight: 2
draft: false
images: []
url: "docs/getting-started/installation"
---

# Scegliere tra i seguenti...
  
   <details>

<summary>Prima installazione</summary>

## Prima installazione

* 1) Verificare la compatibilità della versione di Sim City 4 [qui](#Compatibilità della versione)</a>.

* 2) Scaricare e decomprimere il programma di installazione di NAM tramite il pulsante all'inizio di questo sito.

* 3) Installare il Java Runtime Environment preconfezionato, se non è già installato. Si trova in un file denominato "OpenJDKxxxx".

* 4) Eseguire il programma di installazione...
  - In Windows:
	- Utilizzare il file **NetworkAddonMod_Setup_Version47.bat**.  Questo installerà una patch da 4 GB che consente a NAM di funzionare correttamente nel gioco.
  - Su macOS:
	- Eseguire NetworkAddonMod_Setup_Version47.jar.
	- **Se si utilizza la versione App Store**, il programma di installazione non può installare direttamente nella posizione Plugins utilizzata dalla versione App Store, che si trova all'interno del file .app (~/Library/Containers/com.aspyr.simcity4.appstore/Data/Documents/SimCity 4). Installare prima in una posizione alternativa, quindi copiare la cartella "Plugins" in quella posizione.  Si noti che il team NAM è attualmente in grado di fornire assistenza all'installazione agli utenti dell'App Store in modo molto limitato.
  - Su Linux:
	- Eseguire NetworkAddonMod_Setup_Version47.jar o, se non si riesce, eseguire NetworkAddonMod_Setup_Version47.sh.
	
* 5) Seguire le istruzioni del programma di installazione, cliccando su ogni scheda della barra superiore, in ordine!
  - a) Accettare le condizioni del mod nella scheda iniziale "welcome".
  - b) Selezionare le opzioni che si desidera installare nella scheda "file".
  - c) Selezionare il percorso di installazione nella scheda "location".  In genere viene lasciato invariato rispetto alla cartella Plugins predefinita.
  - d) Infine, passare alla scheda "install".  Fare clic sul pulsante "Avvia installazione" per avviare il processo di installazione.  Al termine dell'installazione, la schermata di avanzamento mostrerà il messaggio "Tutti i componenti selezionati sono stati installati!".
  - e) Chiudere il programma di installazione. L'installazione è terminata.
  
* 5a) **Fase aggiuntiva per gli utenti Mac (opzionale su Windows/Linux)**: eseguire JDatPacker per consolidare i file della mod.
  - Se si utilizza la versione App Store, eseguire JDatPacker nella directory Plugins risultante, quindi spostare i file "Network Addon Mod_###.dat" (dove "###" è un numero a tre cifre) nel contenitore.
  - Sulla versione Steam (o se si utilizza JDatPacker su Windows), eseguire JDatPacker nella directory Documents\SimCity 4\Plugins (questa operazione consoliderà anche gli altri plugin).  Assicurarsi di rimuovere le directory originali che sono state consolidate e, se si aggiorna o si reinstalla il pacchetto NAM in qualsiasi momento, assicurarsi di eliminare i file "Network Addon Mod_###.dat" dai Plugin prima di eseguire la nuova installazione.  Si consiglia di utilizzare una nuova sottocartella (ad esempio "Plugins\Compressed Files") invece di installare nella radice della directory Plugins, per evitare conflitti tra le mod.
  
* 6) Caricare il gioco e godersi il NAM!

  </details>
  
  <details>

<summary>Aggiornamento da una versione precedente</summary>  

## Aggiornamento da una versione precedente

* 1) Spostare la cartella NetworkAddonMod attuale dalla cartella Plugins. Non cancellarla. Il desktop è un posto decente dove spostarla per ora. Nota: se avete consolidato i file NAM usando uno strumento come SC4DatPacker o JDatPacker, spostate il file consolidato.
* 2) Eseguire il programma di installazione NAM per la nuova versione.
* 3) Eseguire SimCity4 e testare. In caso di problemi o se si desidera tornare indietro, è sufficiente eliminare la nuova cartella "NetworkAddonMod" in Plugins e sostituirla con la cartella precedentemente spostata per ripristinare la funzionalità originale. Se necessario, contattateci per ulteriore assistenza.

</details>

 <details>

<summary>Compatibilità della versione e specifiche</summary>

**La Network Addon Mod è compatibile con le seguenti versioni di SimCity4 Deluxe/Rush Hour con la versione 1.1.641:**

{{< table class="w-auto" >}}
|         | GOG.com    | Steam       | Disc        | EA/Origin/Xbox Game Pass    | Mac App Store | Pirated 
| ------- | :---:      | :------:    | :---:       | :---:                       | :---:         | :---: 
| Windows | Si        | Si         | Limitato¹    | No³                         | N/A           | No    
| Mac     | N/A        | Si         | Limitato²    | N/A                         | Si           | No    
{{< /table >}}


<span class="fs-6">**¹** Must be running at *least* Version 1.1.638</span><br>
<span class="fs-6">**²** Running on macOS/OS X Version 10.6 (Snow Leopard) or earlier</span><br>
<span class="fs-6">**³** SimCity 4 Deluxe ottenuto riscattando una chiave CD esistente (non acquistandola) tramite il Supporto Clienti Origin (versione 1.1.641) **è compatibile**</span>

**Note**
* 1) EA/Origin/Xbox Game Pass non sono supportati in quanto queste versioni sono purtroppo perma-locked alle vecchie versioni del gioco (versione 1.1.610).
* 2) Il supporto tecnico è limitato per gli utenti della versione Steam per Mac e _molto limitato_ per gli utenti della versione Store per macOS.

## Specifiche minime

  - **NAM con opzione controller LowRAM/NoRHW**: Qualsiasi sistema costruito negli ultimi 15 anni, con 750 MB di spazio disponibile su disco.  (Gli utenti che utilizzano questa opzione non possono installare le funzioni RealHighway (RHW)).
  - **NAM con opzione controller 4GB completo**: Qualsiasi sistema con sistema operativo a 64 bit, almeno 4 GB di RAM e 1,2 GB di spazio disponibile su disco.  Se si utilizza Windows, **la patch da 4 GB deve essere applicata all'eseguibile del gioco**.
  
    </details>

  <details>

<summary>Risoluzione dei problemi</summary>  

## Cosa devo fare se il NAM non supporta la mia copia del gioco?

Il nuovo programma di installazione NAM (introdotto con la Release Candidate NAM 37) non esegue più il controllo della versione. Tuttavia, si raccomanda vivamente agli utenti di controllare la versione in uso, poiché le copie non aggiornate possono essere instabili. **La versione 1.1.610 e la versione 1.1.613 NON sono supportate.

Nel caso F, la soluzione è semplicemente installare la patch EP1 Update 1, scaricabile da EA (SKU 1-5), SimCity 4 Devotion (SKU 1-5) o Simtropolis (solo SKU 1 e 2). Per determinare la versione SKU corretta per la propria copia di SimCity 4, individuare la directory di installazione e cercare nella sottocartella denominata _sku_data_. In alternativa, si possono semplicemente provare tutte le versioni SKU della patch, finché non ne funziona una.

Per i casi G e H, consultate la [sezione su Origin](#origin-ea-play-xbox-gamepass) qui sotto.

Per i casi D ed E, si noti ancora una volta che il team NAM ha poca esperienza con la versione Mac del gioco, essendo per lo più limitato alla versione Steam, e potrebbe essere molto limitato nella capacità di fornire supporto tecnico specifico per la piattaforma, anche per quanto riguarda il processo di installazione (che è più complesso nella versione App Store). Si veda la sezione relativa a macOS [qui](#mac).

Per i casi G, H, I e J, si consiglia di acquistare una copia digitale di SimCity 4 Deluxe (NON da Origin).

**Cosa succede se la mia copia del disco ha smesso di funzionare con Windows Vista, 7, 8, 8.1 o 10?

Nel 2015, Microsoft ha deciso che secdrv.sys, il file driver utilizzato da SafeDisc e da altri sistemi di protezione della copia del disco presenti in molti giochi per PC dei primi anni 2000, costituiva una minaccia per la sicurezza. Di conseguenza, il driver non è stato incluso in Windows 10 e Microsoft ha rilasciato il Windows Update KB3086255, che disattiva secdrv.sys su Windows Vista, 7, 8 e 8.1. Nel caso delle versioni precedenti di Windows, secdrv.sys può essere riattivato quando necessario attraverso l'uso del prompt dei comandi o di un file batch.

A parte il passo avanzato di firmare manualmente un driver di periferica per Windows 10, le uniche azioni possibili sono l'acquisto di una copia digitale del gioco, da un rivenditore che offra una copia del gioco con la versione 1.1.641 completamente pre-compilata (ad es. GOG o Steam), oppure rivolgersi all'assistenza clienti EA/Origin per riscattare la chiave CD e ottenere una copia digitale gratuita del gioco (a differenza delle copie acquistate tramite Origin Store, EA App o abbonamenti EA Play, le copie riscattate con la chiave CD sono completamente pre-patinate alla versione 1.1.641).

Si noti che gli eseguibili craccati (ad esempio un .exe "No CD") non possono beneficiare del supporto tecnico. Il team NAM non sostiene la pirateria, ma comprende la frustrazione dovuta al blocco del sistema DRM originale del gioco da parte di Microsoft, che costringe ad acquistare una nuova copia digitale per poter continuare a giocare. Tuttavia, il motivo per cui gli eseguibili craccati non sono ammissibili è di natura più pratica, ovvero la possibilità di errori di versione (ad esempio un crack della versione 1.1.638 con file .DAT della versione 1.1.610/613, o viceversa), che possono complicare notevolmente gli sforzi del team per fornire un utile supporto tecnico agli utenti. I [Problemi di Origin] (#avviso agli utenti che hanno acquistato una copia digitale da Origin o che usano un gioco di Playa o di Xbox) hanno contribuito a mantenere il controllo della versione fino alla recente modifica del programma di installazione nel 2020.

Si noti che se si tenta di utilizzare una versione di Windows più vecchia, a 32 bit (ad esempio Windows XP), per far funzionare il gioco su disco, questo ostacolerà notevolmente le prestazioni del gioco con la NAM completa installata; si consiglia vivamente di eseguire il gioco su un sistema operativo a 64 bit se si intende sfruttare l'intero set di funzionalità. Se si deve eseguire il gioco su un sistema operativo a 32 bit, è necessario installare il nuovo pacchetto NAMLite oppure, per un'installazione di medie dimensioni, selezionare una delle opzioni del controller NAM "LowRAM/NoRHW". (Il sistema RealHighway (RHW) è di gran lunga la parte più grande del NAM).

## Avviso agli utenti che hanno acquistato una copia digitale da Origin, o che utilizzano EA Play o Xbox Game Pass {#origin-ea-play-xbox-gamepass}

A parte un breve periodo nel 2014-2015, Origin e EA App, le piattaforme digitali di vendita al dettaglio gestite da Electronic Arts (EA), hanno venduto ai clienti al dettaglio copie di SimCity 4 Deluxe con una versione non patchata e non patchabile del file eseguibile del gioco. Al momento dell'uscita di NAM 47, questo è ancora il caso. A differenza delle versioni retail vendute da GOG.com e Steam (e in precedenza della versione "Thin Game Download" di Amazon), che vengono fornite con la versione 1.1.641, l'edizione venduta sull'Origin Store e sull'EA App (utilizzata anche dal servizio di abbonamento EA Play), presenta un file eseguibile della versione 1.1.610, mescolato con le versioni 1.1.641 dei file SimCity_1-5.dat. Avendo sostituito la protezione anticopia originale SafeDisc con il proprio DRM, EA/Origin ha alterato il checksum dell'eseguibile del gioco, impedendo così ai patcher EP1 Update 1 (versione 1.1.638) e BAT Nightlighting/EP1 Update 2 (versione 1.1.640) di EA di aggiornare correttamente l'eseguibile. Sembra inoltre che sia più difficile applicare la patch da 4 GB con la versione dell'app EA, necessaria per eseguire un'installazione NAM completa.

Questo non solo non soddisfa i requisiti minimi del NAM, ma lascia le copie retail di EA App/Origin con molti problemi di stabilità risolti dagli sviluppatori nel 2003 e senza illuminazione notturna funzionante su qualsiasi edificio personalizzato. Inoltre, impedisce l'installazione di strumenti di creazione di contenuti di prima parte, come il Building Architect Tool (BAT), che cercano un eseguibile correttamente patchato. Questo nonostante il fatto curioso che EA utilizzi immagini del NAM e di altri contenuti personalizzati per pubblicizzare SimCity 4, sia su EA.com che nell'app EA.

Inoltre, l'app EA e il client Origin sono in grado di sbloccare le altre versioni di SimCity 4 Deluxe installate sul sistema, comprese le versioni Steam e GOG, tramite il processo di "riparazione". Anche se non state giocando a una versione EA App/Origin del gioco, sappiate che l'EA App e il client Origin possono comunque sbloccare il vostro gioco.

Per coloro che hanno acquistato il gioco tramite EA.com, EA App o Origin Store, il team NAM consiglia di contattare l'assistenza EA/Origin per ottenere un rimborso, anche dopo la scadenza del periodo di restituzione, poiché gli utenti hanno avuto successo in questo caso. Se siete tra gli utenti che si sono ritrovati con la versione retail di EA App/Origin non patchata e non patchabile, vi consigliamo di contattare l'assistenza. Il team apprezzerebbe anche una vostra risposta, poiché desideriamo fortemente che EA fornisca ai propri clienti una copia del gioco correttamente patchata e stiamo cercando di documentare il numero di utenti interessati. Coloro che giocano tramite EA Play/Xbox Game Pass dovrebbero anche far sapere a EA Play che il gioco viene distribuito con un eseguibile obsoleto, privo di correzioni fondamentali per la stabilità.

Stranamente, le copie ottenute riscattando gratuitamente una chiave CD esistente presso l'assistenza clienti di Origin (caso C) _sono_ correttamente patchate, nonostante ciò che lo stesso team di assistenza dice abitualmente a coloro che hanno acquistato copie e ricevuto copie digitali difettose della versione 1.1.610.

In breve:

* **Copia gratuita da EA/Origin Support per il riscatto della chiave CD**: Eseguibile correttamente patchato (1.1.641).
* **Copia acquistata da EA.com, EA App, Origin Store o giocata tramite EA Play/Xbox Game Pass**: Eseguibile non patchato e non patchabile (bloccato permanentemente alla versione 1.1.610).

Per una valutazione più dettagliata della situazione di Origin, lo sviluppatore di NAM Tarkus ha scritto ampiamente sull'argomento nel suo blog, [SimTarkus](https://simtarkus.wordpress.com/category/origin/).

## Nota per gli utenti Mac {#mac}

Aspyr ha rilasciato un aggiornamento al suo port di SimCity 4 Deluxe per macOS, aggiornandolo da un'applicazione a 32 bit a una a 64 bit sia su Steam che sull'App Store, in modo da renderlo compatibile con macOS Catalina (10.15) e successivi. Questo cambiamento ha però introdotto una serie di stranezze.

In particolare, ha cambiato la combinazione di tasti per scorrere i TAB Loop sotto i vari pulsanti della NAM. Invece di usare TAB per andare avanti e Shift-TAB per andare indietro, gli utenti Mac devono ora usare Ctrl-TAB per andare avanti e Ctrl-Shift-TAB per andare indietro. Sebbene TAB e Shift-TAB permettano di spostarsi attraverso il Loop TAB, queste combinazioni di tasti fanno sì che alcuni pezzi sotto i pulsanti vengano saltati.

Inoltre, le modifiche hanno anche interrotto SC4MacInjector di simmaster07, che consentiva ai plugin DLL, tra cui SC4Fix.dll (che risolveva i CTD dei pezzi del puzzle/TE Lot), di funzionare su macOS. Di conseguenza, queste correzioni non funzionano più su Mac e gli utenti devono prestare attenzione quando posizionano le stazioni in prossimità di pezzi di puzzle statici.

Inoltre, la procedura di installazione del NAM varia a seconda che si utilizzi la versione Steam o la versione App Store.

Con la versione Steam, il NAM si installa di default nella posizione corretta: `Utente/{nome utente}/Documenti/SimCity 4/Plugins/`.

Il team NAM non ha sufficiente dimestichezza con la versione App Store per fornire istruzioni affidabili sull'installazione e rimandiamo gli utenti alla [SC4 Mac Users board at Simtropolis](https://community.simtropolis.com/forums/forum/20-sc4-mac-users/) per assistenza.

## Una nota sul lato guida (RHD vs. LHD)

Sebbene il programma di installazione NAM, come indicato in precedenza, disponga di una serie di caselle di controllo in Installazione personalizzata relative al lato di guida, è opportuno ribadire che queste caselle **modificano solo i file di compatibilità installati con NAM e NON cambiano il lato di guida**. Se si dispone di un'installazione con guida a destra (RHD, veicoli che guidano sul lato destro delle strade; questo concetto **NON** è lo stesso del lato su cui ci si siede quando si guida un veicolo) e si desidera passare alla guida a sinistra (LHD, veicoli che guidano sul lato sinistro delle strade), in genere è necessario farlo regolando i file di localizzazione del gioco e quindi modificando le voci del registro di Windows o modificando il collegamento del gioco.

Il nuovo programma di installazione NAM non è in grado di determinare il lato di guida predefinito dell'installazione, quindi prima dell'installazione è necessario prendere nota del lato di guida dei veicoli nel gioco. Se si è cambiato il lato di guida modificando il collegamento del gioco, invece di modificare il registro di Windows, questo è il **solo e unico caso in cui è necessario modificare la casella selezionata qui**.

## Una nota sulla "patch da 4GB" {#4gb-patch}

A causa dei cambiamenti nei sistemi informatici e delle continue espansioni del file Controller principale del NAM, nel 2013 è stato determinato che molti sistemi più recenti, in particolare quelli con più di 4 GB di RAM e che eseguono versioni di Windows a 64 bit, necessitano di ulteriori sistemazioni. A tal fine, la NAM include una "4GB Patch", nota anche come "Large Address Aware (LAA) Patch", che consente al gioco di accedere a tutti i 4GB di RAM che un'applicazione a 32 bit può leggere, invece dei 2GB predefiniti. La patch della NAM è stata progettata da NTCore e integrata nella NAM con l'autorizzazione; gli utenti con sistemi che necessitano della patch riceveranno un prompt durante l'installazione della NAM per installarla. La patch originale può essere trovata [qui] (http://www.ntcore.com/4gb_patch.php).

L'unica cosa che questa patch fa è cambiare l'interruttore Large Address Aware, un interruttore accessibile presente in tutti gli eseguibili di Windows, da "off" ad "on" per l'eseguibile del gioco. Patch come questa sono comuni nelle comunità di modding dei giochi, comprese quelle associate alla serie The Elder Scrolls (ad esempio Skyrim) e Fallout, e possono essere utilizzate per migliorare le prestazioni di qualsiasi applicazione a 32 bit su sistemi con sistemi operativi a 64 bit e una quantità adeguata di RAM.

Il nuovo punto di partenza dell'installazione per gli utenti di Windows, **NetworkAddonMod_Setup_Version47.bat**, dovrebbe garantire che il gioco venga automaticamente patchato come necessario.

Si noti che la patch da 4 GB non è **necessaria per gli utenti di macOS**, poiché questa versione del gioco è a 64 bit e può accedere a una quantità di RAM superiore a quella della versione Windows (anche con la patch da 4 GB!) per impostazione predefinita.

La directory predefinita in cui si trova SimCity 4.exe dipende da come e dove è stata acquistata la copia del gioco.

* **GOG.com**: `C:\GOG Games\SimCity 4 Deluxe Edition\Apps`
* **Steam**: `C:´Program Files (x86)´Steam´´steamapps´´common´´SimCity 4 Deluxe´´Apps`´.
* **Disco originale**: `C:\Program Files (x86)\Maxis\SimCity 4 Deluxe\Apps`
* **Origin**: `C:\Program Files (x86)\Maxis\SimCity 4 Deluxe\Apps`

**Nota che solo le copie Origin acquistate tramite il riscatto gratuito della chiave CD (versione 1.1.641) sono compatibili con il NAM. Le copie acquistate tramite Origin Store o accessibili tramite Origin Access (versione 1.1.610) NON SONO COMPATIBILI. Vedere [qui](#origin-ea-play-xbox-gamepass) per maggiori dettagli**.

## Disinstallazione del NAM

Per disinstallare i file, è sufficiente eliminare con un bulldozer ogni elemento NAM di questo download nelle vostre città e rimuovere successivamente i file dalla cartella Plugins, che sarà contenuta in _`Plugins\Network Addon Mod`_ per impostazione predefinita.

## Modifica delle opzioni dopo l'installazione iniziale

Il NAM è una mod molto estesa, con un numero considerevole di funzioni, che all'inizio potrebbe risultare eccessivo per coloro che non hanno una buona conoscenza del suo funzionamento. Il team NAM prevede che gli utenti, in particolare quelli nuovi al NAM, possano voler modificare il set di funzioni che hanno installato, man mano che imparano a conoscere meglio i contenuti e le capacità della mod.

A tal fine, incoraggiamo gli utenti a tenere a portata di mano il programma di installazione della versione corrente dopo l'installazione iniziale. Se si intende cambiare il proprio set di opzioni, è necessario rimuovere l'installazione corrente. Si consiglia di spostarla fuori dai Plugin in una posizione sicura, nel caso in cui si vogliano conservare le impostazioni esistenti come backup.

## Installazione manuale - Avanzata

Gli utenti che non possono o non vogliono installare Java possono eseguire un'installazione manuale del NAM, cosa che la nuova architettura dei file introdotta nel 2020 rende molto più possibile rispetto alle precedenti versioni "monolitiche".

Questo metodo richiede uno strumento di decompressione dei file in grado di aprire i file .jar, come [7-zip](https://www.7-zip.org) (Windows) o [Keka](https://www.keka.io/en/) (macOS). Per iniziare, aprire NetworkAddonMod_Setup_Version47.jar utilizzando il proprio strumento di decompressione file.

Il contenuto del NAM si trova nella sottocartella "installation". Il programma di installazione corrente utilizza una serie di flag di carattere all'inizio dei nomi delle directory, per indicare al programma di installazione come ordinare le opzioni, se sono obbligatorie o facoltative, ecc.

I numeri preceduti dal segno "at" ("@"), cioè "@1", "@2" e così via, vengono ordinati semplicemente con questo flag.

Qualsiasi directory con il trattino ("^") davanti al nome (o dietro un flag di ordinamento "@") è obbligatoria.

Qualsiasi directory con il punto esclamativo ("!") davanti al nome (o dietro un flag di ordinamento "@") non viene installata per impostazione predefinita.

Tutte le opzioni in cui sono presenti il segno di uguale ("=") e il trattino ("-") si escludono a vicenda: solo una deve essere installata (l'opzione "=" è quella predefinita).

La cartella "@1^Core" è obbligatoria. Tutte le altre cartelle hanno opzioni al loro interno. Almeno una delle cartelle che iniziano con "0 NAM Controller" deve essere installata. Con "4 Automata Controller#" e "9 Traffic Simulator#", è sufficiente selezionare una delle opzioni all'interno e scartare le altre, poiché si escludono a vicenda. In "8 Texture and Drive Side Support", mantenere "z_Common Files", quindi selezionare "-EU" (per le texture UE) o "=US" (per le texture USA), e all'interno di "-EU" o "=US", sbarazzarsi di "_RightSide" o "_LeftSide" (quello che non coincide con il lato di guida dei veicoli nel gioco), e decidere se si desidera una (o nessuna) delle altre opzioni della sottocartella (ad esempio Cul-De-Sacs).

Il regolatore Automata influisce fondamentalmente sulla visualizzazione del traffico visivo nel gioco: Standard sarà il più leggero, mentre Radical sarà il più pesante, Persistent fa durare più a lungo la visualizzazione degli automi e i modificatori 24-Hour gestiscono se la visualizzazione è costante o segue i dati dell'orologio delle 24 ore nel gioco.

Il supporto per texture e lato guida include quattro opzioni, a seconda che si vogliano usare texture statunitensi/nordamericane o europee/internazionali, e il lato guida del gioco (RHD o LHD, che dovrebbe corrispondere alla selezione per il controller NAM).

Con il simulatore di traffico, questi elementi sono ordinati in base a "@1" e simili, in ordine di capacità dall'opzione più bassa a quella più alta. Media è l'opzione predefinita.

Con 5 DataView Options#, ci sono due sottocartelle. Entrambe sono semplici opzioni, che non si escludono a vicenda. Probabilmente si può lasciare questa così com'è, a meno che non si gradiscano le modifiche alla Vista dati.

Con 6 Varie, le due opzioni che si escludono a vicenda da tenere d'occhio sono Query estese delle stazioni (ci sono quattro opzioni, con differenze molto sottili) e Regolazione della capacità aeroportuale di Maxis Transit Lots#, che ha tre opzioni (predefinita, media e grande). Inoltre, le scavatrici e i sollevatori di buche sono molto raccomandati: sono molto utili anche al di fuori del normale utilizzo del NAM.

Per quanto riguarda le 3 Stazioni di transito aggiuntive, dipende se si vogliono altre stazioni di transito oltre a quelle predefinite del gioco, e da ciò che il NAM aggiunge di default per alcune reti aggiuntive di override. Non dovrebbe esserci nulla di male nell'aggiungerla interamente o nel lasciarla fuori del tutto, e se ci sono alcune stazioni aggiunte che vi piacciono/non vi piacciono, potrete personalizzarle in seguito.

2 Additional Network Features è di gran lunga l'area più grande del programma di installazione. Contiene tutti gli effettivi addon delle funzioni di rete della mod. La maggior parte delle reti/gruppi di reti avrà una cartella "Base Features", che dovrebbe essere obbligatoria, in quanto contiene molte delle aggiunte di base del NAM a ciascuna rete, insieme a tutte le curve a raggio largo/multi raggio e agli angoli frazionali, nonché alle opzioni di rotatoria per le varie reti stradali.

La principale opzione "mutuamente esclusiva" da tenere presente è quella delle autostrade Maxis (ci sono due opzioni: @1=Stile predefinito, che mantiene l'aspetto predefinito delle autostrade Maxis e vi aggiunge le aggiunte del NAM, oppure @2-Sovrapposizione di autostrade Maxis (RHW-Style), che riveste completamente le autostrade Maxis, rimuove l'accesso agli svincoli predefiniti e li sostituisce con funzionalità di svincolo modulare in stile RHW e alcuni nuovi svincoli piazzabili. L'uso dell'opzione RealHighway (RHW) è praticamente obbligatorio se si sceglie questa strada).

Le altre opzioni da tenere d'occhio sono quelle relative al trasporto su acqua, dove il Canal Addon Mod (CAN-AM) ha due stili che si escludono a vicenda (@1=Callagrafx Style e @2-SimGoober Style), e ci sono anche un bel po' di opzioni "non predefinite" in Roads, One-Way Roads e Avenues.

Le tre opzioni non predefinite sono !Legacy Auto Avenue Turn Lanes (si tratta delle vecchie corsie di svolta automatica che appaiono sulle intersezioni Avenue x Avenue - in gran parte considerate "deprecate" ora, in quanto possono interferire con alcune funzionalità più recenti), ! Legacy Semi-Auto Road Turn Lanes (il sostituto "semi-automatico" delle vecchie corsie di inversione automatica sulle intersezioni Road x Road, che ora appaiono facendo clic sulle intersezioni Road x Road + e T con lo strumento One-Way Road, anch'esso ormai in qualche modo "deprecato"), e !One-Way Road Arrow Plugins. Questi plugin freccia sono per lo più una questione di gusti e, nonostante la denominazione della cartella, in realtà dovrebbero essere reciprocamente esclusivi. "Eliminazione" elimina completamente le frecce, "Riduzione" ne nasconde alcune (e di fatto influisce in qualche misura sulla funzionalità di base della rete OWR), mentre "Frecce singole" sostituisce le doppie frecce predefinite con una sola freccia (che ha un aspetto più gradevole sulle reti NWM).

Il resto delle 2 Additional Network Features si spiega da sé, anche se non è consigliabile gestire queste opzioni in modo minuzioso, poiché in questo modo è possibile produrre un'installazione non funzionante. RealRailway è l'unica opzione predefinita per la ferrovia, mentre è meglio scegliere tutto o niente per RealHighways (RHW) e l'opzione "Additional Widths and Turn Lanes" della cartella Road, One-Way Road e Avenue (che contiene il Network Widening Mod e FLEX Turn Lanes). Se c'è scritto "Legacy" ma non è preceduto da "!", probabilmente è meglio installarlo, in quanto consente di mantenere in funzione alcuni contenuti più vecchi e deprecati, se sono stati creati con versioni precedenti.

## Informazioni per gli utenti di sistemi di fascia bassa (Windows a 32 bit/<4 GB di RAM)

Gli utenti che tentano di eseguire il NAM come installato di default con il controller NAM completo, su sistemi con Windows a 32 bit e/o meno di 4 GB di RAM, non saranno in grado di utilizzare i 4 GB di patch richiesti e incontreranno errori di Crash-to-Desktop (CTD) con il controller di default. L'unica soluzione è installare NAMLite o selezionare una delle opzioni "Low RAM/No RHW" nel programma di installazione. Si noti che le opzioni "Low RAM/No RHW" non includono alcun codice per il plugin RealHighway (RHW), per cui se si tenta di costruire sistemi RHW si ritorna alla rete RHW-2 di base. Il plugin RealHighway (RHW) è il principale responsabile delle dimensioni del controller, quindi la sua mancata installazione aiuta a tenere sotto controllo la situazione sui sistemi di fascia bassa. Si noti che il controller NAM è uno dei file più critici dell'intera mod; senza un controller NAM, **nessuno dei pulsanti del menu NAM funzionerà, risultando invece in una "freccia rossa" quando viene cliccato.**

Gli utenti che desiderano eseguire solo i miglioramenti del simulatore di traffico del NAM devono installare NAMLite.

## Distribuzione e vecchie versioni

Il team NAM fornisce supporto e consente la distribuzione solo della versione più recente del NAM. Con l'eccezione delle vecchie versioni non in lingua inglese (che sono supportate dai rispettivi siti, non dal team NAM), non sarà fornito alcun supporto tecnico agli utenti di versioni precedenti del NAM, né saranno rese disponibili per il download, su richiesta o in altro modo, le versioni precedenti del NAM. Il team non conserva un archivio ufficiale delle versioni precedenti e non dispone delle risorse necessarie per rispondere alle domande su di esse. Ogni versione include miglioramenti trasversali a funzioni vecchie e nuove, è progettata per essere il più possibile compatibile con le città costruite con le versioni precedenti e ha lo scopo di migliorare l'esperienza dell'utente finale. Le vecchie versioni sono intrinsecamente inferiori e non sono "più semplici" o "più facili" da usare.

Gli utenti che desiderano un set di funzioni più ridotto, a causa di limitazioni tecniche o di scarsa familiarità con le vaste opzioni del NAM, dovrebbero invece cercare di installare NAMLite, o un numero inferiore di opzioni nel NAM attuale, potenzialmente accoppiato con l'opzione "Low RAM/No RHW".

Gli utenti che desiderano conservare le vecchie versioni dovrebbero salvarle nei loro archivi personali. Si noti ancora una volta che non verrà fornito alcun supporto tecnico, né gli utenti o i siti potranno ridistribuire le vecchie versioni.

</details>

# Una volta terminata l'installazione, si passa alle [Nozioni di base](/docs/getting-started/in-game-basics).