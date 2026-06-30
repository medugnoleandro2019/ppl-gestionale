/* ════════════════════════════════════════════════════════════════════════
   PPL — Database Batterie di Test (Valutazione Clienti)
   ════════════════════════════════════════════════════════════════════════
   Questo file definisce le 4 batterie di test (A/B/C/D) usate nella
   sezione Valutazione. Modificalo per aggiungere/cambiare test —
   la pagina valutazione.html lo carica automaticamente, NON serve
   toccare l'HTML.

   STRUTTURA DI OGNI BATTERIA:
     LETTERA: {
       name: "Nome visualizzato",
       tests: [
         { n:"Nome test", unit:"unità di misura", bench:"riferimento Base→Elite" },
         ... altri test
       ]
     }

   Per aggiungere un TEST a una batteria esistente:
     trova la batteria (es. A:{...}) e aggiungi una riga dentro tests:[ ]
     { n:"Nuovo test", unit:"kg", bench:"< 20kg → Base · > 60kg → Elite" },

   Per aggiungere una NUOVA BATTERIA (es. E):
     1. Aggiungi il blocco E:{name:"...",tests:[...]} qui sotto
     2. Aggiungi il pulsante corrispondente nell'HTML (vform-section)
        con data-bat="E" e onclick="selectBattery('E',this)"
   ════════════════════════════════════════════════════════════════════════ */

const BATTERIES={
  A:{name:"Performance & Forza",tests:[
    {n:"Back Squat 5RM",unit:"kg / qualità 1–5",bench:"< 0.75× BW → Base · 1.5× BW+ → Elite"},
    {n:"Push-up Max Reps",unit:"n° reps (tech. controllata)",bench:"< 10 → Base · > 40 → Elite"},
    {n:"Farmer Carry 40m",unit:"secondi @ 50% BW",bench:"> 35s → Base · < 12s → Elite"},
    {n:"Plank Isometrico",unit:"secondi",bench:"< 45s → Base · > 180s → Elite"},
    {n:"Broad Jump",unit:"cm (media 3 salti)",bench:"< 150cm → Base · > 225cm → Elite"},
  ]},
  B:{name:"Salute & Ricomposizione",tests:[
    {n:"Squat Bodyweight",unit:"qualità 1–5 / compensi",bench:"1–2 compensi severi → Base · 5 ottima → Elite"},
    {n:"Push-up Max Reps",unit:"n° reps (std o ginocchia)",bench:"< 5 → Base · > 35 → Elite"},
    {n:"Plank Isometrico",unit:"secondi",bench:"< 20s → Base · > 150s → Elite"},
    {n:"Sit & Reach",unit:"cm (+/-)",bench:"< -10cm → Base · > +20cm → Elite"},
    {n:"Step Test 3 min",unit:"FC @ 1min post (bpm)",bench:"> 120 bpm → Base · < 90 bpm → Elite"},
  ]},
  C:{name:"Mobilità & Postura",tests:[
    {n:"Overhead Squat",unit:"qualità 1–5 / checklist",bench:"1–2 → Base · 5 perfetto → Elite"},
    {n:"Wall Angel",unit:"qualità 1–5 / contatti persi",bench:"3+ contatti persi → Base · perfetto → Elite"},
    {n:"Hip Hinge (bastone)",unit:"qualità 1–5 / compensi",bench:"1–2 → Base · 5 → Elite"},
    {n:"Thomas Test",unit:"gradi coscia DX/SX",bench:"> 20° / asimm. → Base · 0° simm. → Elite"},
    {n:"Single Leg Stance",unit:"secondi (occhi aperti)",bench:"< 10s → Base · > 60s → Elite"},
  ]},
  D:{name:"Sport & Condizionamento",tests:[
    {n:"AMRAP 5min (Squat/PU/Burpee)",unit:"rounds + reps",bench:"< 3 rounds → Base · > 7 rounds → Elite"},
    {n:"Farmer Carry 40m",unit:"secondi @ 50% BW",bench:"> 35s → Base · < 12s → Elite"},
    {n:"Broad Jump",unit:"cm (media 3 salti)",bench:"< 150cm → Base · > 225cm → Elite"},
    {n:"Dead Hang",unit:"secondi (presa prona)",bench:"< 20s → Base · > 80s → Elite"},
    {n:"Δ FC recupero @1min",unit:"bpm (picco − FC 1min)",bench:"< 12 bpm → Base · > 40 bpm → Elite"},
  ]}
}
