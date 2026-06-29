
/* ══ SKILL METADATA ═══════════════════════════════════════════════════════════
   Mappa chiave DB → icona + label visualizzata nella griglia skill.

   Per aggiungere una NUOVA SKILL:
   1. Aggiungi il blocco dati in PROG_DB qui sotto (stessa struttura degli altri)
   2. Aggiungi una riga in SKILL_META con l'icona emoji e il nome visualizzato
   3. Commit su GitHub → Netlify aggiorna in 30 secondi
   L'HTML non va mai toccato.
   ═══════════════════════════════════════════════════════════════════════════ */
const SKILL_META = {
  'trazioni':  { icon: '🏋️', label: 'Trazioni' },
  'push-up':   { icon: '💪', label: 'Push-up' },
  'dip':       { icon: '🤸', label: 'Dip' },
  'squat':     { icon: '🦵', label: 'Squat' },
  'core':      { icon: '⚡', label: 'Core / Plank' },
  'swing':     { icon: '🔔', label: 'KB Swing' },
  'romanian-deadlift': { icon: '🏋️', label: 'Romanian Deadlift' },
};

const PROG_DB = {
  trazioni: {
    label: 'Trazioni',
    src: 'Project Calisthenics — Erik Neri (fasi 0–3)',
    fasi: [
      {
        id:'t0', label:'Fase 0', range:'0 trazioni',
        desc:'Nessuna trazione completa eseguibile. Obiettivo: costruire forza di trazione e adattamento tendineo.',
        step_next:'Introduci Australian pull-up e negativi.',
        esercizi:[
          { nome:'Australian pull-up', schema:'3×8–12', note:'Corpo orizzontale sotto la sbarra bassa o tavolo. Gomiti vicini al corpo.' },
          { nome:'Trazione negativa (eccentrica)', schema:'5×3–5 (6" di discesa)', note:'Sali con salto o box, scendi lentamente. Quando riesci 5×5 sei pronto per la fase 1.' },
          { nome:'Isometria mento sopra sbarra', schema:'6×10"', note:'Mantieni il mento sopra la sbarra. Aumenta il tempo ogni settimana.' },
          { nome:'Trazione verticale con piedi appoggiati', schema:'4×6–8', note:'Piedi a terra, angolo del corpo circa 45°. Variante più facile dell\'Australian.' },
          { nome:'Dead hang', schema:'4\' totali (serie da 20–30")', note:'Costruisce forza presa e adattamento tendini spalla.' },
        ],
        avanzamento:'Passa alla Fase 1 quando riesci a eseguire 5 negativi da 6" e 3 isometrie da 10" consecutive.',
      },
      {
        id:'t1', label:'Fase 1', range:'1–9 trazioni',
        desc:'Riesci a fare almeno 1 trazione. Obiettivo: arrivare a 10 reps e consolidare la tecnica.',
        step_next:'Lavora con singole qualitative + propedeutiche per il volume.',
        esercizi:[
          { nome:'Trazioni supine (chin-up)', schema:'5×Max-3', note:'Fermati 3 reps prima del cedimento. Qualità sopra quantità.' },
          { nome:'Piramide 1-2-3-4-5', schema:'1 serie completa, poi scendi', note:'Se non arrivi a 5, spezza (es. 4+1). Quando completi senza spezzare, aggiungi un giro.' },
          { nome:'Commando pull-up', schema:'6×6–7', note:'Presa alternata, porta il mento a sinistra e destra alternando. Lavora sul piano frontale.' },
          { nome:'Mezzo ROM dall\'alto', schema:'3×Max', note:'Parti con le braccia a 90° e porta il mento sopra la sbarra. Isola la parte alta.' },
          { nome:'Mezzo ROM dal basso', schema:'3×Max + 2" isometria', note:'Parti appeso e arriva a 90°. Isola la partenza. Tieni 2" a 90°.' },
          { nome:'Australian pull-up (volume)', schema:'3×10–15', note:'Per completare il volume totale di sessione (target 60–70 reps totali).' },
        ],
        avanzamento:'Passa alla Fase 2 quando esegui 10 trazioni pulite consecutive (chin-up o prone).',
      },
      {
        id:'t2', label:'Fase 2', range:'10–19 trazioni',
        desc:'10+ trazioni. Obiettivo: forza elevata, varianti avanzate e avvicinarsi alle 20 reps.',
        step_next:'Introduci archer pull-up e trazioni zavorrate.',
        esercizi:[
          { nome:'Trazioni prone al petto', schema:'4×(1-2-3-2-1)', note:'Piramidale interna. Porta il petto alla sbarra — ROM completo.' },
          { nome:'Archer pull-up', schema:'4×3–5 per lato', note:'Un braccio piega, l\'altro è quasi teso. Propedeutica alla trazione monobraccia.' },
          { nome:'Trazioni in L-sit', schema:'4×5–6', note:'Gambe tese orizzontali durante tutta la trazione. Difficoltà addominale elevata.' },
          { nome:'Trazioni zavorrate (5–10 kg)', schema:'5×4–6', note:'Aggiunta progressiva di carico. Usa cintura o zaino. Ramping: +2.5 kg ogni 2 sett.' },
          { nome:'Dead hang presa larga', schema:'3\' totali', note:'Mantenimento della forza presa per le varianti advanced.' },
          { nome:'Trazioni supine gambe a squadra', schema:'4×Max', note:'Aggiunge difficoltà addominale senza variare la presa.' },
        ],
        avanzamento:'Passa alla Fase 3 quando esegui 3×6 archer pull-up per lato o trazioni con +20 kg per 5 reps.',
      },
      {
        id:'t3', label:'Fase 3', range:'20+ trazioni',
        desc:'Atleta avanzato. Obiettivo: progressioni verso muscle-up e trazioni monobraccia.',
        step_next:'Archer agli anelli e zavorrate pesanti.',
        esercizi:[
          { nome:'Archer pull-up agli anelli', schema:'5×3–4 per lato', note:'Anelli = instabilità aggiuntiva. Massimo transfert verso OAP.' },
          { nome:'Trazioni zavorrate 20–40 kg', schema:'5×3–5 (ramping)', note:'Forza massima. Usa cintura da powerlifting.' },
          { nome:'Trazioni esplosive (kipping controllato)', schema:'4×5', note:'Lavoro di potenza — non kipping da CrossFit, ma esplosività controllata.' },
          { nome:'Negative monobraccia assistite', schema:'5×2 per braccio', note:'Usa elastico o piede su step per assistenza. Eccentrica di 5–8".' },
          { nome:'Muscle-up negativo', schema:'5×2', note:'Inizia sopra la sbarra, scendi lentamente attraverso la transizione.' },
        ],
        avanzamento:'Obiettivo terminale: muscle-up o 5 reps di OAP assistita.',
      },
    ]
  },

  'push-up': {
    label: 'Push-up',
    src: 'Project Calisthenics · Allenamento Funzionale — propedeutiche spinta',
    fasi: [
      {
        id:'p0', label:'Fase 0', range:'0–5 push-up',
        desc:'Forza di spinta di base insufficiente per push-up standard. Costruisci la base.',
        step_next:'Inizia da push-up al muro o sulle ginocchia.',
        esercizi:[
          { nome:'Push-up al muro', schema:'3×15', note:'Mani al muro, corpo inclinato. Più l\'angolo è verticale, più è facile.' },
          { nome:'Push-up sulle ginocchia', schema:'3×10–15', note:'Regressione classica. Glutei attivi, corpo allineato da ginocchia a testa.' },
          { nome:'Push-up su rialzo (mani alte)', schema:'3×8–12', note:'Mani su bench/step. Più il rialzo è alto, più è facile. Abbassa progressivamente.' },
          { nome:'Hollow body hold', schema:'3×20"', note:'Tensione corporea — fondamentale per la posizione corretta del push-up.' },
        ],
        avanzamento:'Passa alla Fase 1 quando esegui 3×10 push-up sulle ginocchia con tecnica perfetta.',
      },
      {
        id:'p1', label:'Fase 1', range:'5–29 push-up',
        desc:'Base stabilita. Obiettivo: arrivare a 30 reps prima di introdurre varianti avanzate.',
        step_next:'Volume progressivo su push-up standard.',
        esercizi:[
          { nome:'Push-up classici', schema:'5×Max-2', note:'Fermati 2 reps prima del cedimento. Mani larghezza spalle, gomiti a 45°.' },
          { nome:'Diamond push-up', schema:'3×8–10', note:'Mani a diamante — enfasi su tricipiti e petto centrale.' },
          { nome:'Pike push-up', schema:'3×8–10', note:'Bacino in alto (V rovesciata) — propedeutica alle spinte verticali.' },
          { nome:'Hollow push-up', schema:'3×10', note:'Corpo in hollow hold durante tutta l\'esecuzione. Alta tensione core.' },
          { nome:'Piramide 1-2-3-4-5', schema:'1 giro completo', note:'Come per le trazioni. Quando completi 2 giri senza spezzare, cambia programma.' },
        ],
        avanzamento:'Passa alla Fase 2 quando esegui 30 push-up consecutivi con tecnica pulita.',
      },
      {
        id:'p2', label:'Fase 2', range:'30–60 push-up',
        desc:'Volume alto. Introduci varianti che aumentano difficoltà e transfert verso HSPU.',
        step_next:'Archer push-up e parallele.',
        esercizi:[
          { nome:'Archer push-up', schema:'4×4–6 per lato', note:'Un braccio piega, l\'altro è teso di lato. Propedeutico al one-arm push-up.' },
          { nome:'Push-up su parallele', schema:'3×10–12', note:'ROM aumentato sotto il petto. Maggiore attivazione pettorale.' },
          { nome:'Push-up esplosivi (clap)', schema:'4×5', note:'Spingi esplosivamente fino a staccare le mani. Solo se tecnica consolidata.' },
          { nome:'Push-up pliometrici su rialzo', schema:'3×5', note:'Una mano sul rialzo, l\'altra a terra. Alterna.' },
          { nome:'V push-up (pike avanzato)', schema:'3×8', note:'Angolo più chiuso — più vicino alla verticale. Spalle molto coinvolte.' },
        ],
        avanzamento:'Passa alla Fase 3 quando esegui 5 archer push-up per lato con controllo completo.',
      },
      {
        id:'p3', label:'Fase 3', range:'Spinte verticali',
        desc:'Fase avanzata: handstand push-up e one-arm push-up.',
        step_next:'HSPU contro muro e negativi one-arm.',
        esercizi:[
          { nome:'HSPU negativo al muro', schema:'5×3 (5" di discesa)', note:'In verticale al muro, scendi lentamente fino a testa a terra.' },
          { nome:'HSPU assistito (box pike)', schema:'3×5', note:'Piedi su box, testa a terra. Progressione verso HSPU libero.' },
          { nome:'One-arm push-up assistito', schema:'4×3 per braccio', note:'Piede opposto lontano per assistenza. Ridurci progressivamente la base.' },
          { nome:'Pseudo planche push-up', schema:'3×8', note:'Mani ruotate verso l\'esterno, corpo inclinato in avanti. Spalle e tricipiti.' },
        ],
        avanzamento:'Obiettivo terminale: 5 HSPU strict al muro o 3 one-arm push-up per lato.',
      },
    ]
  },

  dip: {
    label: 'Dip',
    src: 'Project Calisthenics — progressioni spinta verticale/obliqua',
    fasi: [
      {
        id:'d0', label:'Fase 0', range:'0 dip',
        desc:'Spalla e tricipite non pronti per il dip. Costruisci la base con spinta orizzontale.',
        step_next:'Push-up avanzati e supporto isometrico.',
        esercizi:[
          { nome:'Push-up classici', schema:'3×15', note:'Base di spinta orizzontale necessaria prima del dip.' },
          { nome:'Supporto sulle parallele (isometria)', schema:'5×10–20"', note:'Braccia tese, corpo sospeso tra le parallele. Solo supporto.' },
          { nome:'Dip assistito con elastico', schema:'3×8', note:'Elastico sulle ginocchia per ridurre il carico. Abbassa l\'elastico progressivamente.' },
          { nome:'Bench dip (panche)', schema:'3×10–15', note:'Piedi a terra davanti, mani sulla panca dietro. Versione più semplice.' },
        ],
        avanzamento:'Passa alla Fase 1 quando esegui 3×10 bench dip e 5×20" di supporto isometrico.',
      },
      {
        id:'d1', label:'Fase 1', range:'1–10 dip',
        desc:'Prime reps complete. Obiettivo: arrivare a 10 dip e consolidare la tecnica.',
        step_next:'Volume progressivo su dip standard alle parallele.',
        esercizi:[
          { nome:'Dip alle parallele', schema:'5×Max-2', note:'ROM completo — spalla sotto il gomito in basso, braccia tese in alto.' },
          { nome:'Piramidale 1-2-3-2-1', schema:'1–2 giri', note:'Come per trazioni e push-up. Aggiunge un giro quando completi senza spezzare.' },
          { nome:'Dip negativo', schema:'5×3 (5" di discesa)', note:'Sali con salto, scendi lentamente. Utile se ancora poche reps positive.' },
          { nome:'Push-up su parallele (volume)', schema:'3×12', note:'Completa il volume totale di sessione.' },
        ],
        avanzamento:'Passa alla Fase 2 quando esegui 10 dip consecutivi con tecnica pulita.',
      },
      {
        id:'d2', label:'Fase 2', range:'10+ dip',
        desc:'Dip consolidati. Introduci zavorra e preparazione al muscle-up.',
        step_next:'Dip zavorrati e dip agli anelli.',
        esercizi:[
          { nome:'Dip zavorrati (5–20 kg)', schema:'5×5–8', note:'Ramping: +2.5 kg ogni 2 settimane. Usa cintura.' },
          { nome:'Dip agli anelli', schema:'3×8', note:'Altissima instabilità — coinvolge stabilizzatori di spalla. Molto più difficile delle parallele.' },
          { nome:'Dip russo (Russian dip)', schema:'3×5', note:'Aggiungi una flesso-estensione del polso nella transizione. Propedeutico al muscle-up.' },
          { nome:'Transizione muscle-up (bassa sbarra)', schema:'3×3', note:'Esercita solo la transizione, partendo sopra la sbarra e tornando su.' },
        ],
        avanzamento:'Obiettivo: dip con +30 kg o 10 reps agli anelli → pronto per muscle-up.',
      },
    ]
  },

  squat: {
    label: 'Squat',
    src: 'Allenamento Funzionale · Project Nutrition — progressioni accosciata',
    fasi: [
      {
        id:'s0', label:'Fase 0', range:'Squat limitato — mobilità carente',
        desc:'Non riesce ad accosciarsi sotto il parallelo o con busto eretto. Priorità: mobilità anca/caviglia.',
        step_next:'Goblet squat e squat con supporto per imparare il pattern.',
        esercizi:[
          { nome:'Squat con supporto (TRX o sbarra)', schema:'3×10–15', note:'Tieni il supporto davanti, siediti lentamente. Impara il pattern senza carico.' },
          { nome:'Box squat', schema:'3×10', note:'Siediti su una sedia/box, risali. Abbassa progressivamente l\'altezza del box.' },
          { nome:'Goblet squat (8–12 kg)', schema:'3×10', note:'Kettlebell al petto — aiuta a mantenere il busto eretto e profondità.' },
          { nome:'Hip hinge con bastone', schema:'3×10', note:'Bastone lungo la schiena — impara la dissociazione anca/colonna.' },
          { nome:'Mobilità caviglia (5 min)', schema:'Pre-sessione', note:'Stretching polpaccio + mobilizzazione tibiotarsica con ginocchio avanti.' },
        ],
        avanzamento:'Passa alla Fase 1 quando esegui 10 goblet squat sotto il parallelo con busto eretto.',
      },
      {
        id:'s1', label:'Fase 1', range:'Squat a corpo libero (air squat)',
        desc:'Pattern acquisito. Obiettivo: 30 air squat + introduzione front squat con bilanciere.',
        step_next:'Volume su squat a corpo libero, poi bilanciere vuoto.',
        esercizi:[
          { nome:'Air squat', schema:'3×15–20', note:'Parallelo al terreno o sotto. Piedi larghezza spalle, punte leggermente fuori.' },
          { nome:'Jump squat', schema:'3×8', note:'Esplosività dalla posizione di squat. Potenza dell\'arto inferiore.' },
          { nome:'Affondi alternati', schema:'3×10 per gamba', note:'Passo avanti — ginocchio posteriore sfiora terra. Unilaterale.' },
          { nome:'Front squat bilanciere vuoto', schema:'3×8', note:'Imposta la presa e la posizione del bilanciere prima di aggiungere carico.' },
          { nome:'Back squat (20 kg + ramping)', schema:'5×5 (ogni sett. +2.5 kg)', note:'Progressione lineare. Stop solo se tecnica cede.' },
        ],
        avanzamento:'Passa alla Fase 2 quando esegui back squat con 0.75× BW per 5 reps.',
      },
      {
        id:'s2', label:'Fase 2', range:'Back squat intermedio (0.75–1.5× BW)',
        desc:'Forza base presente. Periodizzazione e varianti.',
        step_next:'Cicli di forza 5×5 e introduzione pistol squat.',
        esercizi:[
          { nome:'Back squat 5×5 (75–85% 1RM)', schema:'5×5, +2.5 kg ogni sett.', note:'Periodizzazione forza classica. Pausa completa tra le serie (3–4 min).' },
          { nome:'Front squat', schema:'4×4–6', note:'Maggiore coinvolgimento del quadricipite e del core.' },
          { nome:'Pistol squat assistito', schema:'3×5 per gamba', note:'Con supporto o elastico. Propedeutico al pistol libero.' },
          { nome:'Pausa squat (2–3")', schema:'3×5', note:'Pausa in buca per aumentare difficoltà e controllo.' },
        ],
        avanzamento:'Fase 3 quando esegui 1.5× BW di back squat o 5 pistol squat per gamba.',
      },
      {
        id:'s3', label:'Fase 3', range:'Avanzato (1.5×+ BW)',
        desc:'Atleta avanzato. Pistol, overhead squat e lavoro di potenza.',
        step_next:'Pistol libero, overhead squat e squat jump zavorrato.',
        esercizi:[
          { nome:'Pistol squat libero', schema:'4×5 per gamba', note:'Gamba libera tesa in avanti. ROM completo.' },
          { nome:'Overhead squat (OHS)', schema:'3×5', note:'Bilanciere sopra la testa. Massima richiesta di mobilità e coordinazione.' },
          { nome:'Back squat pesante (>85%)', schema:'3×3–5', note:'Zona di forza massima. Recupero completo (5 min).' },
          { nome:'Jump squat zavorrato (20–30% BW)', schema:'4×5', note:'Potenza esplosiva. Massima velocità concentrica.' },
        ],
        avanzamento:'Obiettivo terminale: 2× BW back squat o 10 pistol squat per gamba.',
      },
    ]
  },

  core: {
    label: 'Core / Plank',
    src: 'Project Calisthenics · Allenamento Funzionale — core strength',
    fasi: [
      {
        id:'c0', label:'Fase 0', range:'< 20" plank',
        desc:'Core non ancora stabilizzato. Priorità: hollow body e dead bug.',
        step_next:'Hollow body hold e plank sulle ginocchia.',
        esercizi:[
          { nome:'Dead bug', schema:'3×6 per lato', note:'Schiena piatta a terra, estendi braccio e gamba opposta lentamente.' },
          { nome:'Hollow body hold', schema:'3×15–20"', note:'Lombare incollata a terra, braccia e gambe tese sollevate. La base di tutto.' },
          { nome:'Plank sulle ginocchia', schema:'3×20–30"', note:'Progressione verso il plank classico.' },
          { nome:'Plank forearm', schema:'3×20–30"', note:'Avambracci a terra — più stabile del plank sulle mani.' },
        ],
        avanzamento:'Passa alla Fase 1 quando tieni 30" di plank forearm con posizione corretta.',
      },
      {
        id:'c1', label:'Fase 1', range:'20–60" plank',
        desc:'Base presente. Obiettivo: 90" di plank e introduzione varianti laterali.',
        step_next:'Plank classico progressivo e side plank.',
        esercizi:[
          { nome:'Plank classico', schema:'3×Max (stop a cedimento tecnico)', note:'Glutei attivi, nessun cedimento del bacino. Qualità sopra durata.' },
          { nome:'RKC plank', schema:'3×10"', note:'Tensione massima in posizione di plank — stringi tutto. Molto più intenso del plank classico.' },
          { nome:'Side plank', schema:'3×20–30" per lato', note:'Corpo laterale, 1 piede sull\'altro o sovrapposti.' },
          { nome:'Plank con leg lift', schema:'3×10 per gamba', note:'Alza una gamba per 2" alternando. Aumenta instabilità.' },
          { nome:'Ab wheel rollout (assistito)', schema:'3×8', note:'Parti in ginocchio. Estendi solo fin dove mantieni la lombare neutra.' },
        ],
        avanzamento:'Passa alla Fase 2 quando tieni 90" di plank o 30" di RKC plank.',
      },
      {
        id:'c2', label:'Fase 2', range:'60–180" plank',
        desc:'Core solido. Introduci L-sit e hollow body avanzato.',
        step_next:'L-sit con supporto e ab wheel completo.',
        esercizi:[
          { nome:'L-sit su parallele (progressione)', schema:'5×Max', note:'Gambe tese sollevate tra le parallele. Inizia con ginocchia piegate.' },
          { nome:'Hollow body dinamico', schema:'3×10 (rock)', note:'Oscillazione avanti/indietro in hollow. Alta intensità addominale.' },
          { nome:'Ab wheel rollout completo', schema:'3×8–10', note:'Partenza da piedi. Solo se lombare è protetta durante tutta l\'esecuzione.' },
          { nome:'Plank su anelli', schema:'3×20–30"', note:'Anelli instabili aumentano molto la difficoltà.' },
          { nome:'Dragon flag negativo', schema:'3×3 (5" di discesa)', note:'Partenza sopra con tutto il corpo teso. Scendi lentamente.' },
        ],
        avanzamento:'Obiettivo: L-sit libero per 10" o dragon flag completo.',
      },
    ]
  },

  swing: {
    label: 'KB Swing',
    src: 'Project Nutrition — progressione swing russo',
    fasi: [
      {
        id:'sw0', label:'Fase 0', range:'Hip hinge non acquisito',
        desc:'Il pattern di hip hinge (cerniera d\'anca) non è presente. Senza di esso lo swing è pericoloso.',
        step_next:'Hip hinge con bastone prima di toccare il kettlebell.',
        esercizi:[
          { nome:'Hip hinge con bastone', schema:'3×10', note:'Bastone lungo la schiena (testa, dorso, glutei a contatto). Spingi il bacino indietro.' },
          { nome:'Romanian deadlift (RDL) leggero', schema:'3×10', note:'Bilanciere o manubri leggeri. Gambe quasi tese, schiena neutra.' },
          { nome:'Deadlift con KB (peso leggero)', schema:'3×8', note:'Introduzione al gesto con il kettlebell tra i piedi.' },
          { nome:'Hip hinge esplosivo (senza carico)', schema:'3×10', note:'Pattern cerniera con chiusura esplosiva — snap dei fianchi.' },
        ],
        avanzamento:'Passa alla Fase 1 quando esegui 10 RDL con tecnica pulita.',
      },
      {
        id:'sw1', label:'Fase 1', range:'Swing base (8–12 kg)',
        desc:'Hip hinge acquisito. Impara lo swing russo con carico leggero.',
        step_next:'Swing russo a 2 mani 3×15.',
        esercizi:[
          { nome:'Swing russo 2 mani (8 kg)', schema:'3×15', note:'Il KB sale fino all\'altezza degli occhi. Non è uno squat — è una spinta dei fianchi.' },
          { nome:'Swing americano 2 mani', schema:'3×10', note:'Il KB arriva sopra la testa. Solo se mobilità spalla ottimale.' },
          { nome:'Deadlift con KB', schema:'3×8', note:'Mantieni il pattern in ogni ripetizione dello swing.' },
        ],
        avanzamento:'Passa alla Fase 2 quando esegui 3×20 swing russo puliti senza perdere il pattern.',
      },
      {
        id:'sw2', label:'Fase 2', range:'Swing intermedio (12–24 kg)',
        desc:'Swing consolidato. Aumenta il carico e introduci il singolo braccio.',
        step_next:'Swing 1 mano e aumento progressivo del carico.',
        esercizi:[
          { nome:'Swing russo 1 mano (12 kg)', schema:'3×10 per lato', note:'Transizione tra le mani possibile a metà serie.' },
          { nome:'Swing alternato (h2h)', schema:'3×20 totali', note:'Passa il KB da una mano all\'altra in cima alla traiettoria.' },
          { nome:'Swing 2 mani carico crescente', schema:'5×10 (ramping peso)', note:'Ogni serie aumenta il carico. Stop quando tecnica cede.' },
          { nome:'EMOM swing (15 cal)', schema:'10 min EMOM', note:'15 swing all\'inizio di ogni minuto — condizionamento metabolico.' },
        ],
        avanzamento:'Passa alla Fase 3 quando esegui 3×20 swing 1 mano con 16 kg con tecnica solida.',
      },
      {
        id:'sw3', label:'Fase 3', range:'Avanzato (24+ kg · Turkish Get-Up)',
        desc:'Swing pesante consolidato. Introduci TGU e clean.',
        step_next:'TGU completo e clean tecnico.',
        esercizi:[
          { nome:'Turkish Get-Up (TGU)', schema:'3×3 per lato', note:'Movimento completo dal suolo in verticale con KB. Massima coordinazione.' },
          { nome:'KB Clean', schema:'3×5 per lato', note:'Porta il KB in rack position (spalla). Propedeutico al press.' },
          { nome:'Swing snatch', schema:'3×5 per lato', note:'Dal basso direttamente sopra la testa in un unico movimento.' },
          { nome:'Double swing (2 KB)', schema:'3×10', note:'2 kettlebell contemporaneamente. Alta richiesta lombare e cardiovascolare.' },
        ],
        avanzamento:'Obiettivo terminale: TGU con 24–32 kg o 10 clean+press per lato.',
 romanian-deadlift: {
  label: 'Romanian Deadlift',
  src: 'Fonte metodologica',
  fasi: [
    {
      id: 'beginner', label: 'Beginner', range: 'BW',
      desc: 'Descrizione fase...',
      step_next: 'Obiettivo da raggiungere',
      esercizi: [
        { nome: 'RDL con bilanciere', schema: '3×8', note: 'Nota coaching' }
      ],
      avanzamento: 'Criterio per passare alla fase successiva'
    }
    ]
  }
};
