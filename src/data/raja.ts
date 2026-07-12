// Contenuto della guida Raja Ampat, nel layout della guida W-Trek (#journal-post-wtrek).
// I widget voli/alloggi sono resi in stile wtrek (form .tdp-hotels).
export type Lang = 'en' | 'it' | 'es';

const flightForm = (t: { k: string; title: string; src: string; from: string; to: string; dep: string; ret: string; btn: string }) => `
<form class="tdp-hotels" onsubmit="return rajaFlights(event)">
  <div class="th-head"><div><span class="th-k">${t.k}</span><span class="th-t">${t.title}</span></div><span class="th-src">${t.src}</span></div>
  <div class="th-fields">
    <label class="th-field th-dest"><span>${t.from}</span><input type="text" id="rf-origin" value="Roma"></label>
    <label class="th-field th-dest"><span>${t.to}</span><input type="text" id="rf-dest" value="Sorong"></label>
    <label class="th-field"><span>${t.dep}</span><input type="date" id="rf-depart"></label>
    <label class="th-field"><span>${t.ret}</span><input type="date" id="rf-return"></label>
    <button type="submit" class="th-btn">${t.btn}</button>
  </div>
</form>`;

const stayForm = (t: { k: string; title: string; src: string; zone: string; zoneph: string; cin: string; cout: string; btn: string }) => `
<form class="tdp-hotels" onsubmit="return rajaStay(event)">
  <div class="th-head"><div><span class="th-k">${t.k}</span><span class="th-t">${t.title}</span></div><span class="th-src">${t.src}</span></div>
  <div class="th-fields">
    <label class="th-field th-dest"><span>${t.zone}</span><input type="text" id="rs-dest" placeholder="${t.zoneph}"></label>
    <label class="th-field"><span>${t.cin}</span><input type="date" id="rs-checkin"></label>
    <label class="th-field"><span>${t.cout}</span><input type="date" id="rs-checkout"></label>
    <button type="submit" class="th-btn">${t.btn}</button>
  </div>
</form>`;

// ─────────────────────────── ITALIANO ───────────────────────────
const it_body = `
<section><p class="lead"><span class="drop">R</span>aja Ampat è un arcipelago indonesiano al largo della Papua Occidentale, considerato l'epicentro mondiale della biodiversità marina. Situato nel cuore del «Triangolo dei Coralli», ospita oltre 1.500 isole in gran parte disabitate, il 75% delle specie di corallo conosciute al mondo e più di 1.500 specie di pesci. Il nome, «I Quattro Re», deriva da una leggenda locale legata a quattro isole principali: Waigeo, Batanta, Salawati e Misool.</p></section>

<section id="come-arrivare"><span class="eyebrow">01</span><h2>Come arrivare</h2>
<p>Non esistono voli diretti dall'Italia. Bisogna fare scalo in un hub indonesiano — Giacarta (CGK), Bali (DPS) o Makassar (UPG) — e da lì prendere un volo interno fino a <strong>Sorong (SOQ)</strong>, città sulla terraferma della Papua Occidentale che rappresenta la porta d'accesso all'arcipelago.</p>
<p>Da Sorong, il passo successivo è raggiungere <strong>Waisai</strong>, capitale della reggenza di Raja Ampat, sull'isola di Waigeo:</p>
<ul><li><strong>Traghetto pubblico</strong>: circa 2 ore di traversata. Partenza unica alle 14:00 tutti i giorni, tranne <strong>la domenica</strong> (due partenze, 9:00 e 14:00). Gli orari cambiano periodicamente e senza preavviso, specie nei festivi indonesiani — meglio verificare a ridosso. È l'opzione più economica: economy ~150.000 IDR (~9€) a tratta, VIP (aria condizionata, bagno) ~250.000 IDR (~15€). Si acquista in giornata allo sportello del porto.</li>
<li><strong>Motoscafo privato</strong>: più rapido e comodo, ma decisamente più caro (~350–400€ a tratta).</li></ul>
<p>Da Waisai, per raggiungere l'isola o la homestay scelta si prosegue quasi sempre in barca — spesso è l'alloggio stesso a organizzare il pick-up.</p>
<div class="tip"><b>Nota pratica</b>Gli orari di traghetti e voli interni sono soggetti a ritardi e cancellazioni. Tieni almeno <strong>due giorni di margine a Sorong</strong> prima di voli internazionali o di proseguimento, così eventuali ritardi non ti fanno perdere le coincidenze.</div>
<div class="tip"><b>Attenzione ai voli da Bali</b>Alcune compagnie pubblicizzano voli diretti Bali–Sorong, ma non sempre è affidabile: il mio volo «diretto» è stato cancellato e riprogrammato con scalo a Giacarta. Mettilo in conto, evitando coincidenze strette subito dopo l'arrivo a Sorong.</div>
FLIGHT
</section>

<section id="trasporti-locali"><span class="eyebrow">02</span><h2>Trasporti locali tra le isole</h2>
<p>Una volta a Waisai, ogni spostamento verso e tra le isole avviene in barca — non ci sono alternative. Il trasferimento è quasi sempre organizzato dalla homestay (che spesso chiede di comunicare in anticipo giorno e orario), ma il prezzo si paga a barca, non a persona: più siete, meno costa a testa.</p>
<p>Nel mio viaggio di 12 giorni ho avuto bisogno di tre trasferimenti via mare, oltre al traghetto Sorong–Waisai:</p>
<ul><li><strong>Waisai → Corepen Homestay</strong> — 500.000 IDR a barca (~24€)</li>
<li><strong>Corepen Homestay → Arborek</strong> — 600.000 IDR a barca (~29€)</li>
<li><strong>Arborek → Waisai</strong> — 1.100.000 IDR a barca (~53€)</li></ul>
<p>Ricorda: prezzi a barca, non a persona — se la condividi con altri ospiti (vedi il consiglio sul gruppo Facebook), il costo a testa scende parecchio.</p>
<div class="tip"><b>Consiglio per risparmiare</b>Unisciti al gruppo Facebook <a href="https://www.facebook.com/groups/394869816234714" target="_blank" rel="noopener">Raja Ampat Backpackers / Travellers</a>: è il modo più semplice per trovare altri viaggiatori con cui dividere una barca. In alternativa, spesso si trovano compagni di viaggio direttamente in homestay — basta chiedere all'arrivo.</div>
</section>

<section id="quando-andare"><span class="eyebrow">03</span><h2>Quando andare</h2>
<p>Il periodo migliore va da <strong>ottobre/novembre ad aprile</strong>, la stagione secca locale — che coincide, curiosamente, con la stagione delle piogge nel resto dell'Indonesia. A Raja Ampat piove comunque un po' tutto l'anno, ma di solito con rovesci brevi e intensi che lasciano spazio a tramonti spettacolari. In questi mesi il mare è calmo e la visibilità subacquea ottima; l'incontro con le mante è più frequente tra dicembre e marzo.</p>
</section>

<section id="permesso"><span class="eyebrow">04</span><h2>Permesso di ingresso obbligatorio</h2>
<p>Per accedere al parco marino serve un <strong>permesso ufficiale</strong> (marine park entry tag / PIN), obbligatorio per turisti indonesiani e stranieri, introdotto nel 2007. Costa circa 70€ a persona, valido 12 mesi, e i fondi finanziano la conservazione delle aree marine protette e le comunità locali. Si acquista all'arrivo a Waisai o Sorong.</p>
</section>

<section id="quanti-giorni"><span class="eyebrow">05</span><h2>Quanti giorni servono</h2>
<ul><li><strong>Minimo consigliato</strong>: 6–7 giorni sul posto (esclusi i giorni di viaggio)</li>
<li><strong>Ideale</strong>: 10–14 giorni, per esplorare con calma più isole</li>
<li>Un itinerario di 15 giorni permette di combinare il Nord (Waigeo, Piaynemo, Wayag) con il remoto Sud (Misool), ma richiede spostamenti via mare importanti</li></ul>
</section>

<section id="cosa-vedere"><span class="eyebrow">06</span><h2>Cosa vedere e fare</h2>
<p><strong>Immersioni e snorkeling</strong> — il vero motivo per cui si viene fin qui. Mante, squali wobbegong, banchi di pesci compatti, pareti coralline e cavallucci marini pigmei. In molti punti la barriera comincia a pochi metri dalla riva o sotto i pontili, quindi lo snorkeling è accessibile anche senza esperienza. Le correnti possono essere forti in alcuni siti, adatti solo a sub esperti.</p>
<p><strong>Punti panoramici carsici</strong> — Piaynemo e Wayag offrono i celebri belvedere sulle lagune turchesi punteggiate di isolotti calcarei, tra le immagini più iconiche di Raja Ampat.</p>
<p><strong>Manta Point / Manta Sandy</strong> e il pontile di Arborek — tra i luoghi migliori per nuotare con le mante.</p>
<p><strong>Villaggio di Arborek</strong> — piccolo villaggio di pescatori che offre uno spaccato autentico della vita locale, tra accoglienza calorosa e danze tradizionali.</p>
<p><strong>Kali Biru</strong> («fiume blu»), sull'isola di Waigeo — acque dolci trasparentissime immerse nella giungla.</p>
<p><strong>Birdwatching</strong> — le foreste pluviali ospitano l'Uccello del Paradiso Rosso e quello di Wilson, osservabili con escursioni guidate all'alba, in particolare a Batanta.</p>
<p><strong>Misool</strong>, nel sud — famosa per formazioni carsiche che emergono dall'acqua, grotte marine e siti archeologici sommersi; più remota e meno battuta del Nord.</p>
</section>

<section id="dove-dormire"><span class="eyebrow">07</span><h2>Dove dormire</h2>
<p><strong>Homestay</strong>: bungalow in legno o bambù gestiti da famiglie papuane locali. L'opzione più economica e autentica, ma con servizi essenziali (elettricità solo la sera, bagno condiviso, acqua fredda).</p>
<p><strong>Eco-resort / dive resort</strong>: standard da base a lusso, pensati soprattutto per subacquei, spesso con accesso diretto ai siti di immersione.</p>
<p><strong>Liveaboard</strong>: barche, spesso <em>phinisi</em> tradizionali, che raggiungono i siti più remoti dormendo a bordo — ideale per ottimizzare il tempo e per sub esperti.</p>
STAY
<p>Isole per orientarsi: <strong>Kri</strong> (frequentata, socievole), <strong>Arborek</strong> (villaggio di pescatori vicino a Manta Point), <strong>Batanta</strong> (più isolata, ottima per birdwatching e snorkeling ma più costosa da raggiungere).</p>
<h3>La mia esperienza: Corepen Homestay + Arborek</h3>
<p>Ho trascorso 7 giorni a <strong>Corepen Homestay</strong>, nella sezione occidentale, seguiti da 5 giorni ad <strong>Arborek</strong>. Consiglio proprio questa combinazione: una base a ovest e una a est copre i due lati dell'arcipelago senza fare la spola ogni giorno.</p>
<p>Corepen ha un dive center interno: non servono trasferimenti verso altri punti, e la posizione è strategica, proprio di fronte a <strong>Cape Kri</strong>, il miglior dive spot di Raja Ampat. Da qui si raggiungono anche siti più lontani come <strong>Mayhem</strong> e <strong>Mangrove Ridge</strong>.</p>
<p>Una giornata tipo di immersioni a Corepen:</p>
<ul><li>7:00 — due immersioni al mattino</li><li>14:00 — un'immersione pomeridiana</li><li>18:00 — un'immersione notturna</li><li>La domenica tutti i dive center restano chiusi</li></ul>
<p>Prezzi durante il mio soggiorno: <strong>36€ a notte</strong> per una singola, <strong>33€ a persona</strong> per una doppia — entrambe con tre pasti al giorno più snack, cibo ottimo. Le immersioni: <strong>600.000 IDR</strong> (~29€) la singola, oppure a pacchetto <strong>5.800.000 IDR</strong> (~280€, 10 immersioni) e <strong>11.000.000 IDR</strong> (~530€, 20 immersioni). Stando a Corepen non serve prenotare con anticipo: gli ospiti hanno priorità sui posti in barca.</p>
<p>Ad Arborek sono stato alla <strong>Kalabia Homestay</strong> (32€ a notte). Arborek è l'unica vera comunità dove entrare in contatto diretto con la cultura papuana — l'isola è divisa in due famiglie che per tradizione non possono sposarsi tra loro. Durante il mio soggiorno un matrimonio è durato tre giorni interi.</p>
<p>Le homestay sono il cuore dell'esperienza, ma nei giorni di margine a Sorong ci si può concedere un po' di comfort: io ho soggiornato all'<strong>Aston Sorong</strong> (~35€ a notte) — perfetto per una doccia calda e un letto comodo prima o dopo i giorni essenziali in homestay.</p>
<p>Ad Arborek nessuna homestay ha un dive center proprio: ci si appoggia all'<strong>Arborek Dive Center</strong>, della proprietaria <strong>Githa Anathasi</strong>, guida appassionata e rispettosa dell'ambiente — la consiglio senza esitazioni.</p>
</section>

<section id="budget"><span class="eyebrow">08</span><h2>Budget</h2>
<p>Raja Ampat non è economica: il volo dall'Italia può costare intorno ai 1.000€ a persona solo per il tratto internazionale. Sul posto, però, il costo della vita resta contenuto grazie al cambio favorevole.</p>
<p>Dettaglio spese sul posto (esclusi voli internazionali), viaggio di 12 giorni:</p>
<ul><li><strong>Corepen Homestay</strong>: 7 notti, 288€ (pensione completa)</li>
<li><strong>Arborek (Kalabia)</strong>: 4 notti, 128€ (pensione completa)</li>
<li><strong>Traghetto Sorong ↔ Waisai</strong>: a/r ~18€ a persona (economy)</li>
<li><strong>Trasferimenti in barca</strong>: 500k + 600k + 1.100k IDR = 2.200.000 IDR (~106€) totali, da dividere se condivisi</li>
<li><strong>Immersioni</strong>: 600.000 IDR (~29€) la singola; pacchetti ~280€ (10) o ~530€ (20)</li>
<li><strong>Permesso</strong>: ~70€, valido 12 mesi</li></ul>
<p>Totale alloggio + traghetto + permesso + trasferimenti (non condivisi), immersioni extra escluse: circa <strong>610€</strong> per 11 notti sul posto.</p>
</section>

<section id="viaggiare-in-modo-etico"><span class="eyebrow">09</span><h2>Viaggiare in modo etico</h2>
<p>Raja Ampat non è solo uno dei luoghi più belli della terra: è un ecosistema fragile e il territorio di comunità papuane che vivono qui da generazioni. Il turismo può essere una risorsa per loro, ma solo se praticato con attenzione. Qualche principio:</p>
<ul><li><strong>Scegli strutture a gestione locale</strong>: le homestay papuane fanno arrivare il denaro direttamente alla comunità, ed è il modo più autentico di conoscere il posto.</li>
<li><strong>Rispetta il permesso di ingresso</strong>: i fondi finanziano la sorveglianza del parco e la conservazione. Non cercare scorciatoie.</li>
<li><strong>Non toccare né calpestare i coralli</strong>: mantieni distanza e controlla l'assetto — un contatto minimo può uccidere anni di crescita. Non toccare né dare da mangiare a mante, squali o specie protette.</li>
<li><strong>Riduci la plastica monouso</strong>: non c'è un vero sistema di smaltimento; porta una borraccia (le homestay offrono acqua da taniche) ed evita bottigliette e buste.</li>
<li><strong>Chiedi il permesso prima di fotografare le persone</strong>, specie nei villaggi come Arborek.</li>
<li><strong>Vestiti con discrezione nei villaggi</strong>: in spiaggia il costume va bene, tra le case è apprezzato coprire spalle e ginocchia.</li>
<li><strong>Supporta l'economia locale</strong>: compra artigianato e snack dagli abitanti; valuta piccoli doni utili (quaderni, penne, materiale scolastico) più che denaro.</li>
<li><strong>Informati prima di partire</strong> su usanze e organizzazione sociale delle comunità (ad Arborek l'isola è divisa in due famiglie con regole precise).</li></ul>
<div class="tip"><b>In sintesi</b>Il modo più semplice per viaggiare in modo etico a Raja Ampat è rallentare: più tempo in meno posti, ospitalità locale invece del resort isolato, e trattare l'arcipelago — mare e comunità comprese — come qualcosa che stai solo attraversando in prestito.</div>
</section>

<section id="consigli-pratici"><span class="eyebrow">10</span><h2>Consigli pratici</h2>
<ul><li><strong>Visto</strong>: per molti viaggiatori è possibile il visto all'arrivo (30 giorni) — verifica i requisiti aggiornati prima di partire.</li>
<li><strong>Connessione</strong>: copertura scarsa o assente in molte isole — mettilo in conto e avvisa chi resta a casa.</li>
<li><strong>Abbigliamento</strong>: clima tropicale, ma dopo i rovesci o con vento può fare fresco; porta un k-way leggero.</li>
<li><strong>Assicurazione</strong>: data la remotezza, meglio una polizza con assistenza medica e copertura annullamento/ritardo.</li></ul>
</section>

<section id="riepilogo" style="border-bottom:0"><span class="eyebrow">In sintesi</span><h2>Riepilogo</h2>
<table>
<tr><td>Dove si trova</td><td class="r">Papua Occidentale, Indonesia</td></tr>
<tr><td>Aeroporto di riferimento</td><td class="r">Sorong (SOQ)</td></tr>
<tr><td>Periodo migliore</td><td class="r">Ott/nov – apr</td></tr>
<tr><td>Giorni consigliati</td><td class="r">6–14</td></tr>
<tr><td>Permesso obbligatorio</td><td class="r">Sì (~70€)</td></tr>
<tr><td>Dove prenotare</td><td class="r">Stay Raja Ampat</td></tr>
<tr><td>Punto di forza</td><td class="r">Biodiversità marina unica al mondo</td></tr>
</table>
<p class="rf-foot" style="margin-top:20px">Guida scritta da chi ci è stato davvero: 7 giorni a Corepen e 5 ad Arborek.</p>
</section>`;

// helper widget IT
const it_flight = flightForm({ k: 'CERCA I VOLI', title: 'Trova il tuo volo per Sorong', src: 'Confronto prezzi · Skyscanner', from: 'Partenza', to: 'Destinazione', dep: 'Andata', ret: 'Ritorno', btn: 'Cerca voli' });
const it_stay = stayForm({ k: 'PRENOTA IL SOGGIORNO', title: 'Trova dove dormire', src: 'Disponibilità · Stay Raja Ampat', zone: 'Zona', zoneph: 'es. Kri, Arborek…', cin: 'Check-in', cout: 'Check-out', btn: 'Cerca' });

// ─────────────────────────── ENGLISH ───────────────────────────
const en_body = `
<section><p class="lead"><span class="drop">R</span>aja Ampat is an Indonesian archipelago off West Papua, considered the world's epicentre of marine biodiversity. In the heart of the «Coral Triangle», it holds over 1,500 largely uninhabited islands, 75% of the world's known coral species and more than 1,500 fish species. Its name, «The Four Kings», comes from a local legend tied to four main islands: Waigeo, Batanta, Salawati and Misool.</p></section>

<section id="come-arrivare"><span class="eyebrow">01</span><h2>How to get there</h2>
<p>There are no direct flights from Europe. You connect through an Indonesian hub — Jakarta (CGK), Bali (DPS) or Makassar (UPG) — and from there take a domestic flight to <strong>Sorong (SOQ)</strong>, the mainland West Papua city that is the gateway to the archipelago.</p>
<p>From Sorong, the next step is reaching <strong>Waisai</strong>, capital of the Raja Ampat regency, on Waigeo island:</p>
<ul><li><strong>Public ferry</strong>: about a 2-hour crossing. One daily departure at 14:00, except <strong>Sunday</strong> (two, at 9:00 and 14:00). Schedules change periodically without notice, especially on Indonesian holidays — check close to departure. The cheapest option: economy ~150,000 IDR (~€9) each way, VIP (air-con, private bathroom) ~250,000 IDR (~€15). Bought same-day at the port counter.</li>
<li><strong>Private speedboat</strong>: faster and more comfortable, but far pricier (~€350–400 each way).</li></ul>
<p>From Waisai, reaching your island or homestay almost always continues by boat — often the accommodation itself arranges the pick-up.</p>
<div class="tip"><b>Practical note</b>Ferry and domestic flight times are subject to delays and cancellations. Keep at least <strong>two buffer days in Sorong</strong> before international or onward flights, so delays don't make you miss connections.</div>
<div class="tip"><b>Careful with Bali flights</b>Some airlines advertise direct Bali–Sorong flights, but it's not always reliable: my «direct» flight was cancelled and rerouted via Jakarta. Factor it in, avoiding tight connections right after landing in Sorong.</div>
FLIGHT
</section>

<section id="trasporti-locali"><span class="eyebrow">02</span><h2>Getting around between the islands</h2>
<p>Once in Waisai, every movement to and between islands is by boat — there's no alternative. Transfers are almost always arranged by the homestay (which often asks for your arrival/departure time in advance), but the price is per boat, not per person: the more of you, the less each pays.</p>
<p>On my 12-day trip I needed three sea transfers, plus the Sorong–Waisai ferry:</p>
<ul><li><strong>Waisai → Corepen Homestay</strong> — 500,000 IDR per boat (~€24)</li>
<li><strong>Corepen Homestay → Arborek</strong> — 600,000 IDR per boat (~€29)</li>
<li><strong>Arborek → Waisai</strong> — 1,100,000 IDR per boat (~€53)</li></ul>
<p>Remember: prices are per boat, not per person — share it with other guests (see the Facebook group tip) and the per-head cost drops a lot.</p>
<div class="tip"><b>Money-saving tip</b>Join the Facebook group <a href="https://www.facebook.com/groups/394869816234714" target="_blank" rel="noopener">Raja Ampat Backpackers / Travellers</a>: the easiest way to find travellers to split a boat with. Otherwise you often meet companions right at the homestay — just ask around on arrival.</div>
</section>

<section id="quando-andare"><span class="eyebrow">03</span><h2>When to go</h2>
<p>The best window is <strong>October/November to April</strong>, the local dry season — which curiously coincides with the rainy season across the rest of Indonesia. It still rains a little year-round in Raja Ampat, usually short intense showers that give way to spectacular sunsets. In these months the sea is calm and underwater visibility excellent; manta encounters are most frequent between December and March.</p>
</section>

<section id="permesso"><span class="eyebrow">04</span><h2>Mandatory entry permit</h2>
<p>To enter the marine park you need an <strong>official permit</strong> (marine park entry tag / PIN), mandatory for both Indonesian and foreign tourists, introduced in 2007. It costs around €70 per person, valid 12 months, and the funds finance conservation of the protected marine areas and local communities. Bought on arrival in Waisai or Sorong.</p>
</section>

<section id="quanti-giorni"><span class="eyebrow">05</span><h2>How many days you need</h2>
<ul><li><strong>Recommended minimum</strong>: 6–7 days on site (excluding travel days)</li>
<li><strong>Ideal</strong>: 10–14 days, to explore several islands at ease</li>
<li>A 15-day itinerary lets you combine the North (Waigeo, Piaynemo, Wayag) with the remote South (Misool), but requires major sea crossings</li></ul>
</section>

<section id="cosa-vedere"><span class="eyebrow">06</span><h2>What to see and do</h2>
<p><strong>Diving and snorkelling</strong> — the real reason you come this far. Mantas, wobbegong sharks, dense fish schools, coral walls and pygmy seahorses. In many spots the reef starts a few metres from shore or under the jetties, so snorkelling is accessible even without experience. Currents can be strong at some sites, for experienced divers only.</p>
<p><strong>Karst viewpoints</strong> — Piaynemo and Wayag offer the famous lookouts over turquoise lagoons dotted with limestone islets, among Raja Ampat's most iconic images.</p>
<p><strong>Manta Point / Manta Sandy</strong> and the Arborek jetty — among the best places to swim with mantas.</p>
<p><strong>Arborek village</strong> — a small fishing village offering an authentic glimpse of local life, with warm hospitality and traditional dances.</p>
<p><strong>Kali Biru</strong> («blue river»), on Waigeo — crystal-clear freshwater immersed in the jungle.</p>
<p><strong>Birdwatching</strong> — the rainforests host the Red and Wilson's Birds of Paradise, seen on guided dawn excursions, especially on Batanta.</p>
<p><strong>Misool</strong>, in the south — famous for karst formations rising from the water, sea caves and submerged archaeological sites; more remote and less travelled than the North.</p>
</section>

<section id="dove-dormire"><span class="eyebrow">07</span><h2>Where to stay</h2>
<p><strong>Homestays</strong>: wood or bamboo bungalows run by local Papuan families. The cheapest, most authentic option, but with essential services (electricity only in the evening, shared bathroom, cold water).</p>
<p><strong>Eco-resort / dive resort</strong>: basic to luxury, built mainly for divers, often with direct access to dive sites.</p>
<p><strong>Liveaboard</strong>: boats, often traditional <em>phinisi</em>, reaching the most remote sites while sleeping aboard — ideal to optimise time and for experienced divers.</p>
STAY
<p>Islands to know when choosing: <strong>Kri</strong> (busy, sociable), <strong>Arborek</strong> (fishing village near Manta Point), <strong>Batanta</strong> (more isolated, great for birdwatching and quality snorkelling but costlier to reach).</p>
<h3>My experience: Corepen Homestay + Arborek</h3>
<p>I spent 7 days at <strong>Corepen Homestay</strong>, in the western section, then 5 days on <strong>Arborek</strong>. I recommend exactly this combination: a base to the west and one to the east covers both sides of the archipelago without shuttling back and forth every day.</p>
<p>Corepen has its own dive centre: no transfers to other sites needed, and the location is strategic, right in front of <strong>Cape Kri</strong>, the best dive spot in Raja Ampat. From here you can also reach farther sites like <strong>Mayhem</strong> and <strong>Mangrove Ridge</strong>.</p>
<p>A typical diving day at Corepen:</p>
<ul><li>7:00 — two morning dives</li><li>14:00 — an afternoon dive</li><li>18:00 — a night dive</li><li>On Sundays all dive centres are closed</li></ul>
<p>Prices during my stay: <strong>€36 per night</strong> for a single, <strong>€33 per person</strong> for a double — both with three meals a day plus a snack, and the food is excellent. Dives: <strong>600,000 IDR</strong> (~€29) each, or as a package <strong>5,800,000 IDR</strong> (~€280, 10 dives) and <strong>11,000,000 IDR</strong> (~€530, 20 dives). Staying at Corepen you don't need to book ahead: guests get priority on the boat.</p>
<p>On Arborek I stayed at <strong>Kalabia Homestay</strong> (€32/night). Arborek is the one real community where you connect directly with Papuan culture — the island is split into two families who, by tradition, cannot marry each other. During my stay a wedding's celebrations lasted three whole days.</p>
<p>Homestays are the heart of the experience, but on the buffer days in Sorong you can treat yourself to some comfort: I stayed at the <strong>Aston Sorong</strong> (~€35/night) — perfect for a hot shower and a comfy bed before or after the more essential homestay days.</p>
<p>On Arborek no homestay has its own dive centre: you rely on the <strong>Arborek Dive Center</strong>, run by owner <strong>Githa Anathasi</strong>, a passionate, environmentally respectful guide — I recommend her without hesitation.</p>
</section>

<section id="budget"><span class="eyebrow">08</span><h2>Budget</h2>
<p>Raja Ampat isn't cheap: the flight from Europe can cost around €1,000 per person for the international leg alone. On site, though, the cost of living stays fairly low thanks to the favourable exchange rate.</p>
<p>Breakdown of on-site costs (excluding international flights), 12-day trip:</p>
<ul><li><strong>Corepen Homestay</strong>: 7 nights, €288 (full board)</li>
<li><strong>Arborek (Kalabia)</strong>: 4 nights, €128 (full board)</li>
<li><strong>Sorong ↔ Waisai ferry</strong>: round trip ~€18 per person (economy)</li>
<li><strong>Boat transfers</strong>: 500k + 600k + 1,100k IDR = 2,200,000 IDR (~€106) total, split if shared</li>
<li><strong>Diving</strong>: 600,000 IDR (~€29) each; packages ~€280 (10) or ~€530 (20)</li>
<li><strong>Permit</strong>: ~€70, valid 12 months</li></ul>
<p>Total accommodation + ferry + permit + transfers (not shared), excluding extra dives: about <strong>€610</strong> for 11 nights on site.</p>
</section>

<section id="viaggiare-in-modo-etico"><span class="eyebrow">09</span><h2>Travelling ethically</h2>
<p>Raja Ampat is not only one of the most beautiful places on earth: it's a fragile ecosystem and the home of Papuan communities who have lived here for generations. Tourism can be a resource for them, but only if practised with care. A few principles:</p>
<ul><li><strong>Choose locally-run places</strong>: Papuan family homestays put your money directly into the community, and it's the most authentic way to know the place.</li>
<li><strong>Respect the entry permit</strong>: the funds concretely finance park patrolling and conservation. Don't look for shortcuts.</li>
<li><strong>Don't touch or step on coral</strong>: keep your distance and control your buoyancy — even minimal contact can kill years of growth. Don't touch or feed mantas, sharks or protected species.</li>
<li><strong>Cut single-use plastic</strong>: there's no real waste system; bring a reusable bottle (homestays almost always offer water from tanks) and avoid plastic bottles and bags.</li>
<li><strong>Ask permission before photographing people</strong>, especially in villages like Arborek.</li>
<li><strong>Dress modestly in the villages</strong>: swimwear is fine on the beach, but among the houses it's appreciated to cover shoulders and knees.</li>
<li><strong>Support the local economy</strong>: buy crafts and snacks from residents; consider small useful gifts (notebooks, pens, school supplies) rather than money.</li>
<li><strong>Read up before you go</strong> on the customs and social organisation of the communities you visit (on Arborek the island is split into two families with precise rules).</li></ul>
<div class="tip"><b>In short</b>The simplest way to travel ethically in Raja Ampat is to slow down: more time in fewer places, local hospitality over the isolated resort, and treat the archipelago — sea and communities included — as something you're only passing through on loan.</div>
</section>

<section id="consigli-pratici"><span class="eyebrow">10</span><h2>Practical tips</h2>
<ul><li><strong>Visa</strong>: many travellers can get a visa on arrival (30 days) — still check the current requirements before leaving.</li>
<li><strong>Connectivity</strong>: phone and internet coverage is poor or absent on many islands — plan for it and warn those at home.</li>
<li><strong>Clothing</strong>: tropical climate, but after showers or with wind it can get cool; always bring a light rain jacket.</li>
<li><strong>Insurance</strong>: given the remoteness, a policy with medical assistance and cancellation/delay cover is advisable.</li></ul>
</section>

<section id="riepilogo" style="border-bottom:0"><span class="eyebrow">At a glance</span><h2>Summary</h2>
<table>
<tr><td>Where it is</td><td class="r">West Papua, Indonesia</td></tr>
<tr><td>Reference airport</td><td class="r">Sorong (SOQ)</td></tr>
<tr><td>Best season</td><td class="r">Oct/Nov – Apr</td></tr>
<tr><td>Recommended days</td><td class="r">6–14</td></tr>
<tr><td>Mandatory permit</td><td class="r">Yes (~€70)</td></tr>
<tr><td>Where to book</td><td class="r">Stay Raja Ampat</td></tr>
<tr><td>Highlight</td><td class="r">World-unique marine biodiversity</td></tr>
</table>
<p class="rf-foot" style="margin-top:20px">Guide written by someone who's actually been there: 7 days at Corepen and 5 on Arborek.</p>
</section>`;

const en_flight = flightForm({ k: 'SEARCH FLIGHTS', title: 'Find your flight to Sorong', src: 'Price comparison · Skyscanner', from: 'From', to: 'To', dep: 'Depart', ret: 'Return', btn: 'Search flights' });
const en_stay = stayForm({ k: 'BOOK YOUR STAY', title: 'Find where to sleep', src: 'Availability · Stay Raja Ampat', zone: 'Area', zoneph: 'e.g. Kri, Arborek…', cin: 'Check-in', cout: 'Check-out', btn: 'Search' });

// ─────────────────────────── ESPAÑOL ───────────────────────────
const es_body = `
<section><p class="lead"><span class="drop">R</span>aja Ampat es un archipiélago indonesio frente a Papúa Occidental, considerado el epicentro mundial de la biodiversidad marina. En el corazón del «Triángulo de Coral», reúne más de 1.500 islas en gran parte deshabitadas, el 75% de las especies de coral conocidas y más de 1.500 especies de peces. Su nombre, «Los Cuatro Reyes», viene de una leyenda local ligada a cuatro islas principales: Waigeo, Batanta, Salawati y Misool.</p></section>

<section id="come-arrivare"><span class="eyebrow">01</span><h2>Cómo llegar</h2>
<p>No hay vuelos directos desde Europa. Hay que hacer escala en un hub indonesio — Yakarta (CGK), Bali (DPS) o Makassar (UPG) — y desde allí tomar un vuelo interno hasta <strong>Sorong (SOQ)</strong>, la ciudad de Papúa Occidental que es la puerta de entrada al archipiélago.</p>
<p>Desde Sorong, el siguiente paso es llegar a <strong>Waisai</strong>, capital de la regencia de Raja Ampat, en la isla de Waigeo:</p>
<ul><li><strong>Ferry público</strong>: unas 2 horas de travesía. Una salida diaria a las 14:00, salvo <strong>el domingo</strong> (dos, a las 9:00 y 14:00). Los horarios cambian sin previo aviso, sobre todo en festivos indonesios — conviene verificar cerca de la salida. La opción más económica: economy ~150.000 IDR (~9€) por trayecto, VIP (aire acondicionado, baño) ~250.000 IDR (~15€). Se compra el mismo día en la taquilla del puerto.</li>
<li><strong>Lancha privada</strong>: más rápida y cómoda, pero mucho más cara (~350–400€ por trayecto).</li></ul>
<p>Desde Waisai, llegar a tu isla u homestay casi siempre sigue en barco — a menudo lo organiza el propio alojamiento.</p>
<div class="tip"><b>Nota práctica</b>Los horarios de ferries y vuelos internos sufren retrasos y cancelaciones. Deja al menos <strong>dos días de margen en Sorong</strong> antes de vuelos internacionales o de continuación, para que los retrasos no te hagan perder las conexiones.</div>
<div class="tip"><b>Cuidado con los vuelos desde Bali</b>Algunas compañías anuncian vuelos directos Bali–Sorong, pero no siempre es fiable: mi vuelo «directo» fue cancelado y desviado por Yakarta. Tenlo en cuenta y evita conexiones ajustadas justo tras llegar a Sorong.</div>
FLIGHT
</section>

<section id="trasporti-locali"><span class="eyebrow">02</span><h2>Transporte local entre las islas</h2>
<p>Una vez en Waisai, todo desplazamiento hacia y entre las islas es en barco — no hay alternativa. El traslado casi siempre lo organiza la homestay (que suele pedir día y hora de llegada por adelantado), pero el precio es por barco, no por persona: cuantos más seáis, menos cuesta a cada uno.</p>
<p>En mi viaje de 12 días necesité tres traslados por mar, además del ferry Sorong–Waisai:</p>
<ul><li><strong>Waisai → Corepen Homestay</strong> — 500.000 IDR por barco (~24€)</li>
<li><strong>Corepen Homestay → Arborek</strong> — 600.000 IDR por barco (~29€)</li>
<li><strong>Arborek → Waisai</strong> — 1.100.000 IDR por barco (~53€)</li></ul>
<p>Recuerda: precios por barco, no por persona — si lo compartes con otros huéspedes (mira el consejo del grupo de Facebook), el coste por cabeza baja mucho.</p>
<div class="tip"><b>Consejo para ahorrar</b>Únete al grupo de Facebook <a href="https://www.facebook.com/groups/394869816234714" target="_blank" rel="noopener">Raja Ampat Backpackers / Travellers</a>: la forma más fácil de encontrar viajeros con quien compartir barco. Si no, a menudo se encuentran compañeros en la propia homestay — basta preguntar al llegar.</div>
</section>

<section id="quando-andare"><span class="eyebrow">03</span><h2>Cuándo ir</h2>
<p>La mejor época va de <strong>octubre/noviembre a abril</strong>, la estación seca local — que coincide, curiosamente, con la de lluvias en el resto de Indonesia. En Raja Ampat llueve algo todo el año, normalmente chubascos breves e intensos que dan paso a atardeceres espectaculares. En estos meses el mar está en calma y la visibilidad es excelente; el encuentro con las mantas es más frecuente entre diciembre y marzo.</p>
</section>

<section id="permesso"><span class="eyebrow">04</span><h2>Permiso de entrada obligatorio</h2>
<p>Para acceder al parque marino se necesita un <strong>permiso oficial</strong> (marine park entry tag / PIN), obligatorio para turistas indonesios y extranjeros, introducido en 2007. Cuesta unos 70€ por persona, válido 12 meses, y los fondos financian la conservación de las áreas marinas protegidas y las comunidades locales. Se compra al llegar a Waisai o Sorong.</p>
</section>

<section id="quanti-giorni"><span class="eyebrow">05</span><h2>Cuántos días hacen falta</h2>
<ul><li><strong>Mínimo recomendado</strong>: 6–7 días en el sitio (sin contar los de viaje)</li>
<li><strong>Ideal</strong>: 10–14 días, para explorar con calma varias islas</li>
<li>Un itinerario de 15 días permite combinar el Norte (Waigeo, Piaynemo, Wayag) con el remoto Sur (Misool), pero exige grandes travesías por mar</li></ul>
</section>

<section id="cosa-vedere"><span class="eyebrow">06</span><h2>Qué ver y hacer</h2>
<p><strong>Buceo y snorkel</strong> — la verdadera razón para venir hasta aquí. Mantas, tiburones wobbegong, cardúmenes compactos, paredes de coral y caballitos de mar pigmeos. En muchos puntos el arrecife empieza a pocos metros de la orilla o bajo los pontones, así que el snorkel es accesible incluso sin experiencia. Las corrientes pueden ser fuertes en algunos sitios, solo para buceadores expertos.</p>
<p><strong>Miradores kársticos</strong> — Piaynemo y Wayag ofrecen los célebres miradores sobre lagunas turquesa salpicadas de islotes calcáreos, de las imágenes más icónicas de Raja Ampat.</p>
<p><strong>Manta Point / Manta Sandy</strong> y el pontón de Arborek — de los mejores lugares para nadar con mantas.</p>
<p><strong>Aldea de Arborek</strong> — un pequeño pueblo de pescadores que ofrece una mirada auténtica a la vida local, con acogida cálida y danzas tradicionales.</p>
<p><strong>Kali Biru</strong> («río azul»), en Waigeo — aguas dulces transparentísimas en plena jungla.</p>
<p><strong>Observación de aves</strong> — las selvas albergan el Ave del Paraíso Roja y la de Wilson, visibles en excursiones guiadas al amanecer, sobre todo en Batanta.</p>
<p><strong>Misool</strong>, en el sur — famosa por formaciones kársticas que emergen del agua, cuevas marinas y sitios arqueológicos sumergidos; más remota y menos transitada que el Norte.</p>
</section>

<section id="dove-dormire"><span class="eyebrow">07</span><h2>Dónde dormir</h2>
<p><strong>Homestays</strong>: bungalós de madera o bambú gestionados por familias papúes locales. La opción más económica y auténtica, pero con servicios esenciales (electricidad solo por la tarde, baño compartido, agua fría).</p>
<p><strong>Eco-resort / dive resort</strong>: de básico a lujo, pensados sobre todo para buceadores, a menudo con acceso directo a los sitios de buceo.</p>
<p><strong>Liveaboard</strong>: barcos, a menudo <em>phinisi</em> tradicionales, que llegan a los sitios más remotos durmiendo a bordo — ideal para optimizar el tiempo y para buceadores expertos.</p>
STAY
<p>Islas para orientarte al elegir: <strong>Kri</strong> (concurrida, sociable), <strong>Arborek</strong> (pueblo pesquero cerca de Manta Point), <strong>Batanta</strong> (más aislada, ideal para aves y snorkel de calidad pero más cara de alcanzar).</p>
<h3>Mi experiencia: Corepen Homestay + Arborek</h3>
<p>Pasé 7 días en <strong>Corepen Homestay</strong>, en la sección occidental, y luego 5 días en <strong>Arborek</strong>. Recomiendo justo esta combinación: una base al oeste y otra al este cubre ambos lados del archipiélago sin ir y venir cada día.</p>
<p>Corepen tiene su propio centro de buceo: no hacen falta traslados a otros puntos, y la ubicación es estratégica, justo frente a <strong>Cape Kri</strong>, el mejor punto de buceo de Raja Ampat. Desde aquí se llega también a sitios más lejanos como <strong>Mayhem</strong> y <strong>Mangrove Ridge</strong>.</p>
<p>Un día típico de buceo en Corepen:</p>
<ul><li>7:00 — dos inmersiones por la mañana</li><li>14:00 — una inmersión por la tarde</li><li>18:00 — una inmersión nocturna</li><li>Los domingos todos los centros de buceo cierran</li></ul>
<p>Precios durante mi estancia: <strong>36€ por noche</strong> en individual, <strong>33€ por persona</strong> en doble — ambas con tres comidas al día más snack, y la comida es excelente. Inmersiones: <strong>600.000 IDR</strong> (~29€) cada una, o en paquete <strong>5.800.000 IDR</strong> (~280€, 10 inmersiones) y <strong>11.000.000 IDR</strong> (~530€, 20 inmersiones). En Corepen no hace falta reservar con antelación: los huéspedes tienen prioridad en el barco.</p>
<p>En Arborek me alojé en la <strong>Kalabia Homestay</strong> (32€/noche). Arborek es la única comunidad real donde conectar directamente con la cultura papú — la isla está dividida en dos familias que, por tradición, no pueden casarse entre sí. Durante mi estancia una boda se celebró durante tres días enteros.</p>
<p>Las homestays son el corazón de la experiencia, pero en los días de margen en Sorong uno puede darse algo de confort: me alojé en el <strong>Aston Sorong</strong> (~35€/noche) — perfecto para una ducha caliente y una cama cómoda antes o después de los días más esenciales en homestay.</p>
<p>En Arborek ninguna homestay tiene centro de buceo propio: se recurre al <strong>Arborek Dive Center</strong>, de la propietaria <strong>Githa Anathasi</strong>, guía apasionada y respetuosa con el medio — la recomiendo sin dudarlo.</p>
</section>

<section id="budget"><span class="eyebrow">08</span><h2>Presupuesto</h2>
<p>Raja Ampat no es barata: el vuelo desde Europa puede rondar los 1.000€ por persona solo el tramo internacional. En el sitio, sin embargo, el coste de vida es contenido gracias al cambio favorable.</p>
<p>Detalle de gastos en el sitio (sin vuelos internacionales), viaje de 12 días:</p>
<ul><li><strong>Corepen Homestay</strong>: 7 noches, 288€ (pensión completa)</li>
<li><strong>Arborek (Kalabia)</strong>: 4 noches, 128€ (pensión completa)</li>
<li><strong>Ferry Sorong ↔ Waisai</strong>: ida y vuelta ~18€ por persona (economy)</li>
<li><strong>Traslados en barco</strong>: 500k + 600k + 1.100k IDR = 2.200.000 IDR (~106€) en total, a dividir si se comparten</li>
<li><strong>Buceo</strong>: 600.000 IDR (~29€) cada uno; paquetes ~280€ (10) o ~530€ (20)</li>
<li><strong>Permiso</strong>: ~70€, válido 12 meses</li></ul>
<p>Total alojamiento + ferry + permiso + traslados (no compartidos), sin contar inmersiones extra: unos <strong>610€</strong> por 11 noches en el sitio.</p>
</section>

<section id="viaggiare-in-modo-etico"><span class="eyebrow">09</span><h2>Viajar de forma ética</h2>
<p>Raja Ampat no es solo uno de los lugares más bellos de la tierra: es un ecosistema frágil y el hogar de comunidades papúes que viven aquí desde hace generaciones. El turismo puede ser un recurso para ellas, pero solo si se practica con cuidado. Algunos principios:</p>
<ul><li><strong>Elige alojamientos de gestión local</strong>: las homestays papúes hacen llegar tu dinero directamente a la comunidad, y es la forma más auténtica de conocer el lugar.</li>
<li><strong>Respeta el permiso de entrada</strong>: los fondos financian la vigilancia del parque y la conservación. No busques atajos.</li>
<li><strong>No toques ni pises el coral</strong>: mantén distancia y controla la flotabilidad — un contacto mínimo puede matar años de crecimiento. No toques ni alimentes mantas, tiburones ni especies protegidas.</li>
<li><strong>Reduce el plástico de un solo uso</strong>: no hay un sistema real de residuos; lleva una botella reutilizable (las homestays ofrecen agua de bidones) y evita botellas y bolsas.</li>
<li><strong>Pide permiso antes de fotografiar a las personas</strong>, sobre todo en aldeas como Arborek.</li>
<li><strong>Viste con discreción en las aldeas</strong>: en la playa el bañador está bien, pero entre las casas se agradece cubrir hombros y rodillas.</li>
<li><strong>Apoya la economía local</strong>: compra artesanía y snacks a los habitantes; considera pequeños regalos útiles (cuadernos, bolígrafos, material escolar) más que dinero.</li>
<li><strong>Infórmate antes de partir</strong> sobre las costumbres y la organización social de las comunidades (en Arborek la isla está dividida en dos familias con reglas precisas).</li></ul>
<div class="tip"><b>En resumen</b>La forma más sencilla de viajar de forma ética en Raja Ampat es ir despacio: más tiempo en menos sitios, hospitalidad local en vez del resort aislado, y tratar el archipiélago — mar y comunidades incluidos — como algo que solo estás atravesando en préstamo.</div>
</section>

<section id="consigli-pratici"><span class="eyebrow">10</span><h2>Consejos prácticos</h2>
<ul><li><strong>Visado</strong>: muchos viajeros pueden obtener visado a la llegada (30 días) — verifica los requisitos actuales antes de salir.</li>
<li><strong>Conexión</strong>: la cobertura de teléfono e internet es escasa o nula en muchas islas — tenlo en cuenta y avisa a quien se queda en casa.</li>
<li><strong>Ropa</strong>: clima tropical, pero tras los chubascos o con viento puede refrescar; lleva siempre un chubasquero ligero.</li>
<li><strong>Seguro</strong>: dada la lejanía, conviene una póliza con asistencia médica y cobertura de cancelación/retraso.</li></ul>
</section>

<section id="riepilogo" style="border-bottom:0"><span class="eyebrow">De un vistazo</span><h2>Resumen</h2>
<table>
<tr><td>Dónde está</td><td class="r">Papúa Occidental, Indonesia</td></tr>
<tr><td>Aeropuerto de referencia</td><td class="r">Sorong (SOQ)</td></tr>
<tr><td>Mejor temporada</td><td class="r">Oct/nov – abr</td></tr>
<tr><td>Días recomendados</td><td class="r">6–14</td></tr>
<tr><td>Permiso obligatorio</td><td class="r">Sí (~70€)</td></tr>
<tr><td>Dónde reservar</td><td class="r">Stay Raja Ampat</td></tr>
<tr><td>Punto fuerte</td><td class="r">Biodiversidad marina única en el mundo</td></tr>
</table>
<p class="rf-foot" style="margin-top:20px">Guía escrita por quien ha estado de verdad: 7 días en Corepen y 5 en Arborek.</p>
</section>`;

const es_flight = flightForm({ k: 'BUSCA VUELOS', title: 'Encuentra tu vuelo a Sorong', src: 'Comparador de precios · Skyscanner', from: 'Origen', to: 'Destino', dep: 'Ida', ret: 'Vuelta', btn: 'Buscar vuelos' });
const es_stay = stayForm({ k: 'RESERVA TU ESTANCIA', title: 'Encuentra dónde dormir', src: 'Disponibilidad · Stay Raja Ampat', zone: 'Zona', zoneph: 'ej. Kri, Arborek…', cin: 'Check-in', cout: 'Check-out', btn: 'Buscar' });

function assemble(body: string, flight: string, stay: string) {
  return body.replace('FLIGHT', flight).replace('STAY', stay);
}

export interface RajaLang {
  kicker: string; title: string; sub: string;
  facts: { n: string; l: string }[];
  tocTitle: string;
  toc: { n: string; id: string; label: string }[];
  body: string;
  back: string;
}

const tocIt = [
  ['01', 'come-arrivare', 'Come arrivare'], ['02', 'trasporti-locali', 'Trasporti locali'],
  ['03', 'quando-andare', 'Quando andare'], ['04', 'permesso', 'Permesso di ingresso'],
  ['05', 'quanti-giorni', 'Quanti giorni servono'], ['06', 'cosa-vedere', 'Cosa vedere e fare'],
  ['07', 'dove-dormire', 'Dove dormire'], ['08', 'budget', 'Budget'],
  ['09', 'viaggiare-in-modo-etico', 'Viaggiare in modo etico'], ['10', 'consigli-pratici', 'Consigli pratici'],
];
const tocEn = [
  ['01', 'come-arrivare', 'How to get there'], ['02', 'trasporti-locali', 'Getting around'],
  ['03', 'quando-andare', 'When to go'], ['04', 'permesso', 'Entry permit'],
  ['05', 'quanti-giorni', 'How many days'], ['06', 'cosa-vedere', 'What to see and do'],
  ['07', 'dove-dormire', 'Where to stay'], ['08', 'budget', 'Budget'],
  ['09', 'viaggiare-in-modo-etico', 'Travelling ethically'], ['10', 'consigli-pratici', 'Practical tips'],
];
const tocEs = [
  ['01', 'come-arrivare', 'Cómo llegar'], ['02', 'trasporti-locali', 'Transporte local'],
  ['03', 'quando-andare', 'Cuándo ir'], ['04', 'permesso', 'Permiso de entrada'],
  ['05', 'quanti-giorni', 'Cuántos días'], ['06', 'cosa-vedere', 'Qué ver y hacer'],
  ['07', 'dove-dormire', 'Dónde dormir'], ['08', 'budget', 'Presupuesto'],
  ['09', 'viaggiare-in-modo-etico', 'Viajar de forma ética'], ['10', 'consigli-pratici', 'Consejos prácticos'],
];
const toc = (a: string[][]) => a.map(([n, id, label]) => ({ n, id, label }));

export const raja: Record<Lang, RajaLang> = {
  it: {
    kicker: 'Diario · Papua Occidentale · Indonesia',
    title: 'Raja Ampat: guida completa per uno degli ultimi paradisi terrestri',
    sub: "Sette giorni a ovest, cinque a est — tutto quello che serve per organizzare l'arcipelago dei Quattro Re, raccontato da chi ci è stato davvero.",
    facts: [{ n: '12', l: 'giorni' }, { n: 'SOQ', l: 'scalo' }, { n: '~610€', l: '11 notti' }, { n: 'Oct–Apr', l: 'stagione' }],
    tocTitle: 'In questa guida',
    toc: toc(tocIt),
    body: assemble(it_body, it_flight, it_stay),
    back: '← Journal',
  },
  en: {
    kicker: 'Diary · West Papua · Indonesia',
    title: 'Raja Ampat: the complete guide to one of the last paradises on Earth',
    sub: "Seven days west, five east — everything you need to plan the archipelago of the Four Kings, told by someone who's actually been there.",
    facts: [{ n: '12', l: 'days' }, { n: 'SOQ', l: 'hub' }, { n: '~€610', l: '11 nights' }, { n: 'Oct–Apr', l: 'season' }],
    tocTitle: 'In this guide',
    toc: toc(tocEn),
    body: assemble(en_body, en_flight, en_stay),
    back: '← Journal',
  },
  es: {
    kicker: 'Diario · Papúa Occidental · Indonesia',
    title: 'Raja Ampat: la guía completa a uno de los últimos paraísos de la Tierra',
    sub: 'Siete días al oeste, cinco al este — todo lo que necesitas para organizar el archipiélago de los Cuatro Reyes, contado por quien ha estado de verdad.',
    facts: [{ n: '12', l: 'días' }, { n: 'SOQ', l: 'escala' }, { n: '~610€', l: '11 noches' }, { n: 'Oct–Abr', l: 'temporada' }],
    tocTitle: 'En esta guía',
    toc: toc(tocEs),
    body: assemble(es_body, es_flight, es_stay),
    back: '← Journal',
  },
};

export const rajaMeta = {
  slug: 'raja-ampat',
  date: '2026-06-15',
  cover: 'https://res.cloudinary.com/dligvuje7/image/upload/q_auto/f_auto/v1780954114/IMG_7954_njn95r.jpg',
  meta: { en: 'Indonesia · West Papua · Guide · 2026', it: 'Indonesia · Papua Occidentale · Guida · 2026', es: 'Indonesia · Papúa Occidental · Guía · 2026' } as Record<Lang, string>,
  title: {
    en: 'Raja Ampat: the complete guide to one of the last paradises on Earth',
    it: 'Raja Ampat: guida completa per uno degli ultimi paradisi terrestri',
    es: 'Raja Ampat: la guía completa a uno de los últimos paraísos de la Tierra',
  } as Record<Lang, string>,
  desc: {
    en: 'Seven days west, five east — the complete backpacker guide to the Four Kings archipelago.',
    it: "Sette giorni a ovest, cinque a est — la guida completa all'arcipelago dei Quattro Re.",
    es: 'Siete días al oeste, cinco al este — la guía completa al archipiélago de los Cuatro Reyes.',
  } as Record<Lang, string>,
};
