---
title : "Domande frequenti"
description: "Queste sono le domande più comuni che sono state poste sulla Network Addon Mod."
lead: "Queste sono le domande più comuni che sono state poste sulla Network Addon Mod."
date: 2022-09-06T10:09:26+00:00
lastmod: 2022-09-06T10:09:26+00:00
weight: 5
draft: false
images: []
url: "docs/getting-started/frequently-asked-questions"
---

{{< docstatus status="untranslated" >}}

1. **Che cos'è il Network Addon Mod?**

   	Se non conoscete la risposta a questa domanda, significa che avete saltato l'importantissima pagina [Inizia Qui](/docs/getting-started/start-here).

2. **Qual è la differenza tra NAM e NAMLite?**

    NAMLite è un pacchetto di dimensioni ridotte per gli utenti che desiderano un'installazione minima. Considerate NAMLite come un "best hits".
	
3. **Perché il gioco si blocca sul desktop quando carico una città dopo aver installato questa mod?**

    I problemi di crash al desktop (CTD) al caricamento della città sono dovuti all'installazione di un controller NAM completo, ma senza che la patch NTCore 4GB sia stata installata correttamente. Il file .bat consigliato agli utenti di Windows per iniziare l'installazione di NAM dovrebbe applicare automaticamente la patch al gioco, ma i problemi di permessi di Windows possono complicare questa operazione (l'esecuzione del file .bat come amministratore può essere d'aiuto) e la presenza di questo tipo di CTD indica che il processo non è stato completato correttamente.

    La patch 4GB è una piccola patch, utilizzabile su qualsiasi file eseguibile a 32 bit (non solo SimCity 4) che consente all'applicazione di accedere a 4 GB di RAM anziché a soli 2 GB, ed è stata storicamente utilizzata in molte comunità di modding associate a giochi più vecchi. Questo può accadere anche se il vostro sistema esegue una versione di Windows a 32 bit (cioè se state ancora usando Windows XP) e/o se avete meno di 4 GB di RAM. Entrambe le situazioni rendono di fatto inutili i miglioramenti della patch da 4 GB (e la compatibilità con la versione completa del controller NAM). Si noti che le opzioni del controller "LowRam/NoRHW" non richiedono la patch da 4 GB, ma omettono completamente quasi tutto il codice necessario per il funzionamento del plugin RealHighway (RHW) di NAM.

4. **Questa mod funziona su Mac?**

    Sì. Il NAM è una mod multipiattaforma, con un programma di installazione Java multipiattaforma. Essendo multipiattaforma, funzionerà anche su macOS, a condizione che sia stato installato Java. La versione di Java inclusa in questo pacchetto è destinata agli utenti di Windows, quindi non funzionerà per voi. Per scaricare una versione di Java per Mac, visitare [Adoptium](https://adoptium.net/) o [Oracle](https://www.java.com/). Inoltre, poiché Aspyr ha aggiornato la versione Mac di SimCity 4 per renderla un'applicazione a 64 bit (e da gennaio 2023 ha anche implementato il supporto per Apple Silicon), la patch da 4 GB NON è necessaria per gli utenti Mac. 
	
	Una stranezza da notare è che le voci della rete NAM nei TAB Loop richiederanno all'utente di premere Ctrl-TAB o Ctrl-Shift-TAB per scorrere, anziché il semplice TAB o Shift-TAB di altri sistemi operativi (o della versione precedente del Mac), per accedere a tutte le voci disponibili sotto ogni pulsante di menu.

5. **Quanto spazio richiede il NAM sul disco rigido?**

    Dipende dalle opzioni installate.  Per un'installazione completa di NAM con il plugin RealHighway ci si aspetta circa 1,2 GB, che scendono a circa 30 MB se si è installato NAM Lite.

6. **Questa mod avrà un impatto sulle prestazioni del gioco?**

    L'aggiunta di qualsiasi plugin al gioco avrà un impatto sulle prestazioni, almeno in parte: più tempo per il caricamento del gioco.  Con l'hardware moderno (a partire dal 2023), gli impatti più evidenti si avranno con il caricamento iniziale del gioco e quando si carica una città per la prima volta dopo il caricamento iniziale. La differenza può essere notevole, in particolare se si è installato il NAM completo dopo aver eseguito il gioco completamente "vanilla" (senza plugin).

7. **Che cosa comprende il NAM?**

    Si veda la pagina [Panoramica dei contenuti](/docs/content-overview) per un breve sguardo e la sezione completa [Features](/docs/features) di questa documentazione per uno sguardo più approfondito. I contenuti dell'ultima versione si trovano nella sezione [History](/docs/history).

8. **Questa mod è stabile?**

    Il NAM esiste da quasi 19 anni ed è la mod più utilizzata per SimCity 4 Deluxe/Rush Hour. Anche se il NAM è sempre in fase di miglioramento, ha un'accettazione così ampia perché è generalmente considerato un'aggiunta stabile al gioco. Se si riscontrano problemi durante l'utilizzo della mod, il team NAM desidera saperlo, in quanto vogliamo garantire agli utenti di questa mod un'esperienza piacevole.
	
9. **L'utilizzo di questa mod è considerato un imbroglio?**

    La maggior parte dei giocatori di SC4 è concorde nel dire che non è così. Il NAM riporta il simulatore di traffico a qualcosa di molto più in linea con le intenzioni originarie di Maxis, prima di essere costretta a ridimensionarlo in modo significativo per consentire il funzionamento del gioco su un Pentium III a 500 MHz. Sebbene il NAM consenta di regolare la capacità del simulatore, potenzialmente fino a livelli significativamente superiori a quelli del gioco base, l'utilizzo dell'impostazione "Classic" può effettivamente fornire un'esperienza più impegnativa di quella offerta dal gioco base. Molte delle espansioni del NAM sono state progettate per offrire maggiori opzioni di gestione della griglia e sono state concepite, per quanto possibile, come aggiunte funzionali, non come trucchi.
	
10. **Il NAM è compatibile con altri mod di trasporto?**

    Il NAM include modifiche ai file Network Rule ("RUL") (che gestiscono il posizionamento della rete) e al Traffic Simulator Exemplar. Non è compatibile con nessun'altra mod che modifichi questi file. A parte le versioni precedenti del NAM, ci sono pochissimi file di questo tipo in circolazione. Le stazioni (ad esempio per la ferrovia leggera terrestre/Tram, la ferrovia ad alta velocità, ecc.) e le modifiche estetiche (ad esempio texture in euro, lampioni diversi, ecc.) sono compatibili con il NAM. Le mod cosmetiche più vecchie non gestite dal team, tuttavia, potrebbero non avere una copertura completa di tutti gli elementi rilevanti del NAM.
	
11. **Devo rimuovere le versioni precedenti del NAM e dei relativi plugin?**

    Sì. La situazione è cambiata dal rilascio della NAM 37 nel luglio 2020. I contenuti del NAM sono installati per impostazione predefinita nella directory My Documents\SimCity 4\Plugins\Network Addon Mod (su Windows, e directory simili su altri sistemi operativi). Le NAM da 31 a 36 utilizzavano anche una cartella "z___NAM" nella stessa directory Plugins, che deve essere rimossa.
	
12. **Come la pensano EA e Maxis su questa mod? È legale?**

    Il NAM è legale al 100% e Maxis è stata estremamente favorevole ai nostri sforzi. Il dipendente di Maxis Frank Simon (alias MaxisFrank) ha incoraggiato il cofondatore di NAM **the7trumpets** a intraprendere la modifica del simulatore di traffico, poiché l'azienda non poteva rilasciare una patch da sola, a causa della necessità di soddisfare i requisiti tecnici minimi pubblicati.
	
	EA sta attualmente utilizzando una serie di schermate con il NAM sulla sua pagina ufficiale di SimCity 4 (anche se, ironia della sorte, la versione in vendita su quella pagina è la versione EA App, che presenta un eseguibile della versione 1.1.610 e non è supportata dal NAM).
	
13. **Che cos'è questa cosa del CAM? È collegato al NAM?**

    Il NAM e il CAM (abbreviazione di _Colossus Addon Mod_) sono mod completamente indipendenti tra loro. Il NAM si occupa delle reti di trasporto, mentre il CAM influisce sulla simulazione degli edifici RCI coltivabili, aggiungendo nuovi stadi di crescita. La versione originale ancora disponibile del CAM (CAM 1.0, luglio 2007) include un plugin opzionale per il simulatore di traffico, che è incompatibile con i plugin del simulatore di traffico del NAM e non dovrebbe essere installato se si utilizza il NAM. I creatori del CAM ritengono che l'attuale simulatore del NAM sia molto più adatto al CAM rispetto al plugin del traffico del CAM. Il plugin per il traffico è stato rimosso nelle versioni successive di CAM 2.x pubblicate da **InvisiChem**.
	
14. **Ci sono tutorial o video che spiegano questa mod e le sue funzionalità?**

    Sì, ci sono alcuni tutorial inclusi in questa documentazione. Ce ne sono anche alcuni sul forum principale di SC4 e su YouTube, ma considerando che il NAM esiste da più tempo di YouTube (!), è importante prestare attenzione alla data del tutorial, poiché il NAM è cambiato in modo significativo dai primi giorni e sta ancora cambiando (in particolare alla luce del progetto a lungo termine di abbandonare i pezzi di puzzle standard).
	
15. **Il NAM ha delle dipendenze?**

    Il NAM richiede zero dipendenze. Da quando, nel 2013, il NAM ha abolito il divieto di includere i lotti, le stazioni di base per alcune opzioni di reti ferroviarie aggiuntive del NAM fanno parte del pacchetto. Se si incontrano le famigerate "scatole marroni" da qualche parte, sono il prodotto dell'installazione di un mod o di un plugin non NAM, senza tutte le sue dipendenze.
	
16. **Perché il gioco si blocca sul desktop immediatamente dopo l'installazione di questa mod?**

    L'unica ragione per cui il NAM potrebbe causare un crash immediato del desktop (CTD) è se si sta eseguendo la versione originale di SimCity 4 (non Deluxe/Rush Hour) o se il gioco è configurato in modo improprio per l'hardware (nel qual caso si bloccherebbe in modo simile senza il NAM). Se si sta eseguendo la versione Deluxe/Rush Hour, si consiglia di controllare eventuali altri plugin installati.
	
17. **Cosa sono tutti questi acronimi? Esiste un elenco del loro significato?**

    Gli acronimi sono onnipresenti nel mondo dei contenuti di SC4 e hanno un'importante funzione di stenografia. Tuttavia, all'inizio possono sembrare un po' arcani. Il [Glossario](/docs/glossary) di questa documentazione contiene tutti quelli pertinenti al NAM che si possono incontrare.
	
18. **Perché nessuna delle icone viene visualizzata dopo aver installato il NAM?**

    È possibile che il NAM non sia stato installato correttamente. Vedere la pagina [Istruzioni per l'installazione](/docs/installation-notes/).

19. **Perché vedo icone duplicate?**

    È possibile che siano installate due copie di un determinato plugin NAM. È necessario trovare e rimuovere il duplicato, che potrebbe provenire da una versione precedente del plugin NAM o di un componente NAM, che potrebbe interferire con l'installazione di NAM in altri modi.

20. **Perché quando clicco su una delle nuove icone del gioco mi appare una freccia rossa/un cursore grigio?**

    Nella maggior parte dei casi, ciò indica che è stato installato il file Controller di una versione NAM obsoleta o un mod di transito incompatibile con RUL. È necessario rimuovere i file incriminati. L'unica eccezione è rappresentata dalla piccola icona con il logo NAM in fondo al menu Autostrade: questo pulsante non deve essere premuto, ma deve essere tenuto premuto per visualizzare le informazioni sulla versione. Se le informazioni sulla versione dicono qualcosa di diverso da "{{< param docsversion >}}", è un chiaro segno che c'è un file obsoleto/incompatibile nella cartella Plugins.
	
21. **Dopo aver installato il NAM, perché i riquadri che portano alle mie intersezioni sono improvvisamente arancioni o rossi nella vista dei dati sulla congestione?**

    Il plugin del simulatore di traffico del NAM, con le sue impostazioni predefinite, amplifica l'effetto della proprietà Intersection and Turn Capacity Effect, influenzando i riquadri della rete che si trovano entro un raggio di 2 riquadri da un'intersezione (o da una transizione) per simulare meglio gli effetti delle code alle intersezioni (soprattutto quelle segnalate).
	
22. **Perché le auto scompaiono nel gioco?**

    Le "auto", o "automi", non sono realmente presenti nella simulazione del traffico: sono semplicemente un effetto visivo che ha una correlazione casuale con i dati reali del traffico nel gioco. Essendo effetti visivi, possono consumare potenza di elaborazione e, per evitare che il gioco si sovraccarichi, il motore del gioco pone un limite al numero di automi veicolari che possono comparire contemporaneamente. Se si supera questo limite, gli automi scompaiono. Alcune opzioni dell'Automata Plugin possono consentire la presenza di un maggior numero di automi sullo schermo, anche se, a causa del modo in cui il gioco è programmato, è semplicemente impossibile mantenere le auto in strada per tutto il tempo. SimCity 4 è un simulatore basato sulle statistiche, non un simulatore basato sugli agenti (come SimCity (2013) e Cities: Skylines).

23. **Quali sono le differenze tra "pezzi puzzle", "pezzi FLEX", "pezzi starter" e lotti TE"?**

    I _Puzzle pieces_ sono elementi di rete plottabili e vengono posizionati tramite il file RUL IntersectionOrdering (noto anche come RUL 0x10000000 o RUL-0). Gli svincoli inclusi nel gioco base per le reti Elevated e Ground Highway sono pezzi di puzzle. Sono di fatto statici nella loro implementazione: una volta posizionati, non possono essere modificati senza demolirli. In effetti, sono cani vecchi a cui non si possono insegnare nuovi trucchi.

    I _Starter pieces_ sono oggetti di rete ploppabili, di solito di piccole dimensioni, progettati principalmente per avviare un override di rete, consentendo a qualsiasi rete di base trascinabile del gioco di assumere un nuovo aspetto e/o nuove funzionalità, spesso al punto da comportarsi come una nuova rete. È sufficiente posizionare un'istanza del pezzo iniziale e trascinare la rete di base appropriata attraverso il pezzo iniziale per avviare l'override. La tecnica utilizzata per realizzarli è stata sviluppata per la prima volta da **smoncrie** nel 2006 ed è stata utilizzata per la prima volta nell'implementazione di Draggable Ground Light Rail (GLR) nella versione 21 del giugno 2007. Esempi di starter pieces si trovano in tutto il NAM, in particolare nel plugin RealHighway (RHW), nel Network Widening Mod (NWM) e nello Street Addon Mod (SAM).

    I _pezzi FLEX_ potrebbero inizialmente sembrare identici ai pezzi del puzzle, in quanto sono anch'essi oggetti ploppabili, ma a differenza dei classici pezzi del puzzle, essi _possono_ ricevere nuovi trucchi e possono cambiare per adattarsi meglio all'ambiente circostante, accettando input dai pezzi iniziali, o a volte anche agendo come combinazione di pezzi iniziali/transizioni. Ne sono un esempio i pezzi di aiuto per le strade diagonali, le rotatorie avenue e molti componenti più recenti del sistema RealHighway (RHW) (quasi tutti preceduti dal termine "FLEX" nel loro nome). Per questo motivo, un singolo pezzo FLEX può svolgere una serie di funzioni che altrimenti richiederebbero ben 50 pezzi di puzzle tradizionali. Inoltre, al momento del loro inserimento nel gioco, i pezzi FLEX vengono trattati come oggetti di rete trascinabili.

    I lotti TE (abbreviazione di "lotti abilitati al transito") sono oggetti basati su lotti, anch'essi ploppabili, ma non vincolati a RUL, e sono principalmente destinati a consentire ai propri sims di cambiare tipo di transito (ad esempio, da un treno a una passeggiata) o di aggiungere uno scopo non transitorio a un particolare tratto di rete. Gli usi più comuni dei lotti TE sono le stazioni di transito e i caselli autostradali.

    <!-- For more details, see here. -->

24. **Come si fa a spostarsi tra i diversi pezzi del puzzle/FLEX/starter e come si fa a ruotarli?**

    Il tasto TAB si sposta in avanti attraverso una determinata serie di pezzi del puzzle sotto una singola icona, mentre Shift-TAB si sposta indietro. La rotazione avviene tramite i tasti Home e End. Su macOS, i tasti Ctrl-TAB e Ctrl-Shift-TAB (TAB e Shift-TAB funzionano comunque, ma tendono a saltare ogni altro elemento).

25. **Cosa succede all'icona con il logo NAM in fondo al menu Autostrade e perché non fa nulla quando la clicco?**

    L'icona con il logo NAM è uno strumento di diagnostica che, se viene sorvolato, mostra la versione del controller NAM attualmente in uso. Può essere utile per diagnosticare problemi relativi al controller NAM.  Non è prevista alcuna azione quando si fa clic su di essa.
	
26. **Perché il gioco si blocca dopo aver posizionato un pezzo di puzzle?**

    Si tratta di un bug del gioco stesso, tipicamente innescato dal tentativo di posizionare pezzi di puzzle convenzionali in prossimità di lotti TE. Se, nel processo di costruzione di un pezzo di puzzle, l'impronta del pezzo di puzzle si sovrappone a quella del lotto TE, anche prima che il pezzo di puzzle venga posizionato, il gioco generalmente non capisce la configurazione e si blocca immediatamente. Si tratta di un problema all'interno dell'eseguibile del gioco e per questo è stato a lungo ritenuto un problema irrisolvibile.

    Tuttavia **simmaster07** è riuscito a decodificare una parte sufficiente del framework che SimCity 4 utilizza per caricare i file DLL da altre fonti ed è riuscito a risolvere il problema con il suo file _SC4Fix.dll_. SC4Fix è disponibile presso [Simtropolis](http://community.simtropolis.com/files/file/30883-sc4fix-third-party-patches-for-sc4/).

27. **Perché non è possibile aggiungere vere e proprie nuove reti, invece di utilizzare pezzi di partenza?**

    L'aggiunta di nuove reti è al momento impossibile. La rete RHW di base era possibile solo perché utilizzava uno stub di rete inutilizzato lasciato nel gioco. Sebbene i file di gioco suggeriscano che teoricamente c'è spazio per altre tre reti vere (per un totale di 16), non c'è abbastanza stub per questi tre slot finali per poterli abilitare. Il paradigma del pezzo iniziale ci permette comunque di imitare molto da vicino gli effetti dell'aggiunta di nuove reti vere.
	
28. **Perché non avete aggiunto dei sottomenu invece di usare i cicli TAB?**

    Aggiungere nuovi sottomenu è, al momento, impossibile. Gli sviluppatori di mod di SC4 ci hanno provato per molti anni, senza successo, anche se hanno escogitato soluzioni come il Daeley's Advanced Menu Navigator (DAMN), che riprende il sistema di notizie del gioco, e i Menu Management Lots (MML).
	
29. **Alcuni elementi trascinabili non funzionano e sto seguendo le indicazioni. Perché non funziona?**

    Se ci si riferisce ai pezzi di partenza, assicurarsi di trascinare la rete predefinita specificata dall'estremità corretta del pezzo. Se si cerca di "trascinare" il pezzo iniziale vero e proprio non si ottiene nulla. Se l'estensione di rete basata su un pezzo iniziale non collabora con una particolare configurazione che si sta cercando di costruire, è possibile che la configurazione non sia supportata. Se si ottengono piastrelle "vuote" quando si disegna l'oggetto, questo è generalmente un segno di installazione errata e/o di file in conflitto presenti nei plugin.

30. **La mia richiesta RCI sembra essere cambiata da quando ho installato il NAM. Cosa sta succedendo?**

    Il NAM non influisce direttamente sulla domanda di RCI. Non modifica nient'altro che i file relativi ai trasporti. Tuttavia, potreste aver installato di recente qualcos'altro che modifica altre parti del gioco. Poiché il NAM è popolare e si tratta di una mod su larga scala, molti nuovi giocatori che hanno installato altri file nello stesso momento pensano erroneamente che il NAM sia il colpevole. Inoltre, se in qualche modo avete deselezionato troppe caselle nel programma di installazione, è possibile che abbiate fatto in modo che il programma di installazione saltasse l'installazione del plugin Traffic Simulator, causando il ritorno del gioco alle impostazioni predefinite di Maxis.

31. **Ho difficoltà a utilizzare la funzionalità U-Drive-It (UDI) su alcuni articoli NAM. C'è un modo per risolvere il problema?**

   Dipende dall'elemento: le rotaie a binario singolo (STR) e le varie opzioni di Turning Lane Avenue (TLA) nel Network Widening Mod (NWM) sono forse le più soggette a problemi. L'UDI è stata un'aggiunta dell'ultimo minuto a SimCity 4 Deluxe/Ora di punta ed è nota per avere una serie di stranezze. Non c'è un modo per risolverli a causa di queste stranezze, anche se le stranezze del TLA possono essere mitigate disabilitando "Snap To Road" e guidando manualmente.
   
32. **Vengo dal Nord America. Perché i segnali stradali non sono sul lato opposto dell'incrocio, come qui? Posso cambiare questa situazione?**

    Per il modo in cui i segnali stradali predefiniti del gioco funzionano con il sistema di punti di arresto sui file dei percorsi di rete, i segnali devono essere sul lato vicino per poter funzionare. Alcune delle opzioni FLEX Turn Lane (FTL) e Turn Lane Extension Pieces (TuLEPs) utilizzano punti di arresto artificiosi per consentire l'uso di segnali lontani, ma questa tecnica presenta dei limiti. Recentemente, tuttavia, sono stati compiuti progressi nel modding dei segnali, utilizzando puntelli true-3D, che hanno permesso di sviluppare puntelli offset, aggirando questo problema. I puntelli offset non sono stati rilasciati al momento della stesura del presente documento, ma potrebbero essere resi disponibili in futuro come aggiunta di terze parti.
	
33. **Vengo da un paese in cui si guida a sinistra. Posso cambiare il lato dei segnali stradali?**

    Sì. Controlla il progetto di sostituzione dei segnali, sviluppato da MandelSoft, membro del team NAM. Si noti che MandelSoft non è più attivo nella comunità di SC4 e gli elementi più recenti potrebbero non essere coperti da questa mod. Non è responsabilità del team NAM aggiornare le mod cosmetiche indipendenti.
	
34. **Devo utilizzare gli strumenti SC4 DatPacker o JDatPacker per consolidare l'installazione di NAM in un unico file?**

    Con la versione Mac, è effettivamente necessario consolidare i file di mods utilizzando JDatPacker, a causa del problema del "limite del numero di file". Con la versione per Windows, i tempi di caricamento saranno più rapidi, ma dovrete assicurarvi di rimuovere i file DatPacked dopo l'installazione di qualsiasi aggiornamento di NAM, altrimenti interferiranno con la corretta funzionalità dell'aggiornamento. A meno che non si conservi anche l'installazione di NAM precedente al DatPacked, non sarà possibile utilizzare la capacità del programma di installazione di NAM di installare le stesse opzioni quando si aggiorna a una nuova versione. Per questo motivo, il team NAM generalmente non consiglia agli utenti di Windows di eseguire il DatPack delle loro installazioni.
	
35. **Come si costruisce un interscambio con il sistema RealHighway (RHW)?**

    Invece degli svincoli monoblocco prefabbricati del sistema autostradale predefinito del gioco, il sistema RealHighway è stato progettato tenendo conto del concetto di costruzione modulare degli svincoli. Maggiori dettagli sono disponibili nella parte RHW della documentazione. Detto questo, NAM 45 (settembre 2022) ha introdotto il sistema QuickChange Xpress (QCX), che attualmente aggiunge al repertorio dell'RHW gli svincoli a diamante completi.  Questi possono essere trovati sotto il pulsante QuickChanges nel menu Highways.

36. **Perché le connessioni dei miei vicini non funzionano su RealHighways e/o strade più ampie, viali e strade a senso unico? Come posso risolverli?**

    La maggior parte delle RealHighways (eccetto le reti RHW-2 e RHW-3) e alcuni oggetti basati su starter a più piastrelle richiedono l'uso di speciali "Neighbor Connector Puzzle Pieces" (NCPP) per funzionare. Per le reti "combinate", che hanno un traffico bidirezionale adiacente, è sufficiente trascinare la rete sul bordo della tessera della città, come si farebbe normalmente (ignorando il fatto che le frecce di connessione dei vicini sono entrambe rivolte nella stessa direzione), e posizionarvi sopra il pezzo di puzzle di connessione dei vicini appropriato. Dovrete fare questa operazione su entrambi i lati della connessione di vicinato. Per le reti a senso unico o "divise", seguite le stesse indicazioni e se c'è uno spazio tra le due direzioni, dovrete posizionare i pezzi del circuito sotterraneo accanto al bordo della città, tra le due carreggiate.
	
37. **Perché le mie reti RealHighway rimangono a due corsie e a livello del suolo dopo aver trascinato la rete attraverso uno degli elementi di avvio?**

    Se gli avvii della RealHighway non funzionano e la rete rimane RealHighway-2 (RHW-2) dopo aver trascinato un avvio, è probabile che sia installata la versione "LowRAM/NoRHW" del controller NAM che, come indica il nome, non include il codice RUL2 necessario per il funzionamento degli avvii della RealHighway. Reinstallare la mod con la versione completa del controller e assicurarsi che il sistema soddisfi i requisiti minimi per il plugin RealHighway (4 GB di patch installati, sistema operativo a 64 bit e almeno 4 GB di RAM).
	
38. **Perché non è possibile costruire intersezioni diagonali con alcune strade, viali e strade a senso unico più ampie?**

    A partire dalla NAM 46, sono ora possibili intersezioni e incroci diagonali a 4 vie ("+") tra le reti Network Widening Mod (NWM) a singola tessera (TLA-3, AVE-2, ARD-3, OWR-1, OWR-3 e NRD-4) e tutte le reti di base del gioco, oltre a Ground Light Rail (GLR), Single-Track Rail (STR) e tutte le altre reti NWM a singola tessera.  Le intersezioni a 3 vie ("T") non sono attualmente disponibili, così come le opzioni di intersezione o attraversamento diagonale per le reti NWM a più mattonelle.
  
39. **Quando verrà rilasciata la prossima versione di NAM?**

    Non esiste una data o una tempistica per il prossimo rilascio. Onestamente non ne abbiamo idea. Questo progetto è un hobby molto appassionato per molti membri del team NAM, ma è ancora solo questo: un hobby, qualcosa che facciamo nel nostro tempo libero, come volontari. È anche un'impresa tecnicamente complessa, in cui le cose possono andare inaspettatamente storte durante lo sviluppo. Non è possibile per noi prevedere quando avremo terminato una release, e proporre date di rilascio arbitrarie porta solo a release estremamente buggate o a rinvii, deludendo tutti nel processo. L'unica volta che lo abbiamo fatto (nel 2013), non è andata bene. Inoltre, ci piace sorprendere le persone.
	
40. **Sono un utente che non vive in Nord America: ci sono texture stradali in euro per rendere le strade più familiari?**

    Sì, basta selezionare l'opzione "EU_Right Side" o "EU_Left Side" (a seconda del lato dell'unità) in "8 Texture and Drive Side Support".
	
41. **Ho delle idee per nuove funzionalità. Il team NAM accetta richieste?**

    Certamente. Detto questo, essendo noi dei fanatici dei trasporti, probabilmente vogliamo molte delle stesse cose che volete voi, e c'è una buona probabilità che siano in fase di sviluppo o in programma.
	
42. **Vorrei contribuire al NAM. Come posso fare?**

    Per quanto riguarda la partecipazione al team NAM o al gruppo di test NAM Associates, siamo sempre alla ricerca di persone con le giuste competenze sui forum. Se volete aggiungere qualcosa alla mod, mostrateci un prototipo di qualche tipo: vi aiuteremo a capire il modo migliore per realizzarlo. Tuttavia, non abbiamo iscrizioni aperte per posizioni di sviluppo o di test.
	
43. **Ma siete pazzi a fare una mod così estesa per un gioco di 20 anni fa?!**

    Sì, sono sempre stati e sempre saranno. Lo sono sempre stati e lo saranno sempre.