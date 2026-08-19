// Guida Guaviare, nel layout della guida W-Trek (#journal-post-wtrek), trilingue.
export type Lang = 'en' | 'it' | 'es';

const IMG = 'https://res.cloudinary.com/dligvuje7/image/upload';
const M = {
  cover: `${IMG}/q_auto,f_auto/v1787080141/DSCF7689_2_v8quwj.jpg`,
  tranq: `${IMG}/q_auto,f_auto/v1786135640/IMG_9356_bayorl.jpg`,
  cerro: `${IMG}/q_auto,f_auto/v1786135243/DSCF7689_acjcls.jpg`,
  comm1: `${IMG}/q_auto,f_auto/v1786135441/DSCF7825_dgvbs5.jpg`,
  comm2: `${IMG}/q_auto,f_auto/v1786135401/DSCF7796_jzvvg0.jpg`,
  herra: `${IMG}/q_auto,f_auto/v1786135452/DSCF7752_aqdccl.jpg`,
  closing: `${IMG}/q_auto,f_auto/v1786135628/DSCF7705_yo4ujv.jpg`,
  palms: `${IMG}/q_auto,f_auto/v1787080131/DSCF7746_ofmqsg.jpg`,
  raudalVid: 'https://res.cloudinary.com/dligvuje7/video/upload/f_auto,q_auto/v1787080343/IMG_9438_chfjvw.mp4',
  commVid: 'https://res.cloudinary.com/dligvuje7/video/upload/f_auto,q_auto/v1787080409/0801_2_uvh0wi.mp4',
};

const wide = (src: string, alt: string, cap: string) =>
  `<figure class="rja-wide"><img src="${src}" alt="${alt}" loading="lazy"><figcaption>${cap}</figcaption></figure>`;
const floatFig = (src: string, alt: string, cap: string) =>
  `<figure class="rja-float"><img src="${src}" alt="${alt}" loading="lazy"><figcaption>${cap}</figcaption></figure>`;
const bleed = (src: string, alt: string, cap: string) =>
  `<figure class="rja-bleed"><img src="${src}" alt="${alt}" loading="lazy"><figcaption>${cap}</figcaption></figure>`;
const floatVid = (src: string, cap: string) =>
  `<figure class="rja-float"><video src="${src}" autoplay muted loop playsinline></video><figcaption>${cap}</figcaption></figure>`;
const wideVid = (src: string, cap: string) =>
  `<figure class="rja-wide"><video src="${src}" autoplay muted loop playsinline></video><figcaption>${cap}</figcaption></figure>`;

// Album a scorrimento orizzontale (foto a proporzioni reali) in fondo alla pagina.
const albumPics = [
  `${IMG}/f_jpg,q_auto/v1786135643/IMG_9455_re1mwz.heic`,
  `${IMG}/q_auto,f_auto/v1787080194/IMG_9318_2_i7tnyl.jpg`,
  M.comm1,
  `${IMG}/q_auto,f_auto/v1787080125/DSCF7810_blmjcb.jpg`,
  M.comm2,
  `${IMG}/q_auto,f_auto/v1787080133/DSCF7803_bye4my.jpg`,
  `${IMG}/q_auto,f_auto/v1786135241/IMG_9335_cqcs9f.jpg`,
  `${IMG}/q_auto,f_auto/v1786135246/DSCF7676_xad4er.jpg`,
  `${IMG}/q_auto,f_auto/v1787080130/DSCF7713_zxl9xq.jpg`,
  `${IMG}/q_auto,f_auto/v1787080154/DSCF7726_2_apvve9.jpg`,
];
const albumScroller = `<div class="rja-album">${albumPics.map((u) => `<img src="${u}" alt="Guaviare" loading="lazy">`).join('')}</div>`;
const albumSection = (heading: string) =>
  `<section id="album" style="border-bottom:0"><span class="eyebrow">Album</span><h2>${heading}</h2>${albumScroller}</section>`;

// ─────────────────────────── ENGLISH ───────────────────────────
const en_body = `
<section><p class="lead"><span class="drop">T</span>he Guaviare sits on the seam of Colombia where the eastern plains, the <em>llanos</em>, dissolve into the Amazon. It is hot, green and thinly populated, a frontier of sandstone towers, tannin-dark rivers and forest that runs unbroken to the horizon. And for most of recent history, it was a place you could not travel to.</p></section>

<section id="what"><span class="eyebrow">01</span><h2>What the Guaviare is</h2>
${floatFig(M.palms, 'Flooded palm forest in the Guaviare', 'Flooded palms and still water: the Guaviare on the seam between llano and Amazon.')}
<p>For decades this was coca country and FARC territory, one of the corners of Colombia where the armed conflict, the drug economy and the absence of the state were knotted most tightly together. The 2016 peace agreement changed that. Security improved, the region opened, and San José del Guaviare, the small departmental capital, became the base for one of the most surprising trips in the country: rock art painted more than twelve thousand years ago, a river that turns red, natural rock arches, pink river dolphins, and communities deciding for themselves how they want to be met.</p>
</section>

<section id="access"><span class="eyebrow">02</span><h2>Is Guaviare Safe for Solo Travelers &amp; Backpackers?</h2>
<p><strong>Short answer: yes.</strong> Since the 2016 peace agreement San José del Guaviare has become a calm, easygoing town and a comfortable base for solo travellers and backpackers. The catch isn't safety, it's access, and it's the single most important thing to understand before you plan a trip here: it's what makes the Guaviare different from most of Colombia.</p>
<div class="rja-panel"><b>You cannot do this one independently</b>
<p>Almost every site worth seeing, the rock art, the coloured river, the rapids, the forest trails, lies inside protected land of enormous archaeological and ecological value. Access is regulated: you visit with <strong>authorised local guides, and usually a jeep</strong>, arranged through a licensed operator. You do not turn up and wander in.</p>
<p>This is not bureaucracy for its own sake. The rock paintings are among the oldest on the continent and irreplaceable, the ecosystems are fragile, and much of the land and its stories belong to communities who are only now shaping how tourism works here. The permit system, the guides and the community protocols are what keep all of it intact, and what make sure the money reaches the people who live here. Booking through a local tour is not a compromise on the adventure. It <em>is</em> the way in.</p></div>
<p>In practice that means picking a local agency in San José and letting them handle permits, guides and transport. I went with <strong>Geotours del Guaviare</strong>, a three-day package for 400€ all in, and it was well run. Any reputable local operator will cover the same classic circuit.</p>
<a class="rja-btn" href="https://wa.me/573182269161" target="_blank" rel="noopener">Book with Geotours · WhatsApp →</a>
</section>

<section id="when"><span class="eyebrow">03</span><h2>When to go</h2>
<p>The Guaviare is hot and humid year round, usually between 28 and 30°C. What changes with the calendar is water, and water is what most of the attractions are made of. There are two seasons, and the wetter one is, counter-intuitively, the better one to travel in.</p>
<div class="rja-cols">
<div class="rja-box hi"><span class="rb-tag">Approx. May/Nov · best</span><h4>Green season</h4><p>Rivers, waterfalls and natural pools are full and at their most spectacular. This is when the region is at its best. More clear, sunny days come towards August to November.</p></div>
<div class="rja-box"><span class="rb-tag">Approx. Dec/Mar</span><h4>Dry season</h4><p>Clearer skies, but many of the water sites run low or dry, including the coloured river. Some of the region's signature attractions simply aren't there in these months.</p></div>
</div>
<div class="tip"><b>If the coloured river is your priority</b>Tranquilandia's water only turns red when its endemic plant, the <em>Macarenia clavigera</em>, blooms, roughly <strong>July to November</strong>, and the colour is brightest on a sunny day. Outside that window the river runs clear and the visit is much less worth the trip. I went in late July and it was already in full colour.</div>
</section>

<section id="getting"><span class="eyebrow">04</span><h2>How to Get to San José del Guaviare from Bogotá</h2>
<p>San José del Guaviare is about 400 km south of Bogotá, and getting there has become straightforward. There are two ways in: a <strong>short domestic flight from Bogotá</strong> straight into San José, or the <strong>bus</strong>, which is slower on paper but has far more going for it than the distance suggests.</p>
<p>My own route came through <strong>Villavicencio</strong>, the gateway to the eastern plains. I flew <strong>Cali to Villavicencio with Clic Air for 60€</strong>, on one of its Tuesday, Thursday, Saturday and Sunday departures, then took the <strong>bus on to San José, about six hours for 26€</strong>. It is cheaper than flying the whole way and an easy connection if you are coming from the south or west of the country.</p>
<div class="tip"><b>Take the bus if you can</b>Given the choice, I would take the bus over the plane. It is the cheapest way in, the simplest to arrange and book, and by far the lightest on the environment. A single company runs the route, <strong>Flota La Macarena</strong>, so there is nothing to compare or agonise over. Look for the <strong>overnight services</strong>: the best of them run <em>diamante</em> seats, the wide reclining executive class, nine to a coach and comfortable enough to actually sleep. You cross the distance overnight and arrive rested, without losing a day to travel.</div>
<a class="rja-btn" href="https://www.flotalamacarena.com/inicio/ruta/villavicencio-san-jose-del-guaviare/" target="_blank" rel="noopener">Find the bus · Flota La Macarena →</a>
<p>Once you arrive, remember the rule from the section above: to reach the sites you go with a guide and a vehicle, arranged through your operator. San José itself is small, safe and easygoing, and every excursion leaves from here.</p>
</section>

<section id="see"><span class="eyebrow">05</span><h2>What to see and do</h2>
<p>The classic loop, the one a three-day tour covers, strings together the four sights that define the region. Here is what each one is, and why it earns its place.</p>
<h3>Tranquilandia and the coloured river</h3>
${floatFig(M.tranq, 'Tranquilandia, the coloured river of the Guaviare', 'Tranquilandia: the Caño Sabana runs red when the <em>Macarenia clavigera</em> blooms, roughly July to November.')}
<p>Tranquilandia, on the Caño Sabana, is the Guaviare's quiet answer to Caño Cristales. In season, the same endemic plant that made La Macarena famous carpets the riverbed and turns the water red and pink, and here you get it without the crowds or the price tag. Nearby stands the <strong>Puerta de Orión</strong>, a huge sandstone arch that frames the forest through the rock, best in the low light of morning or late afternoon.</p>
<h3>Cerro Azul and the rock art</h3>
<p>On the Serranía de la Lindosa, the rock walls of <strong>Cerro Azul</strong> carry some of the oldest paintings in South America, ochre-red figures of animals, hands and hunters that have earned the site the nickname the Sistine Chapel of the Amazon. Some panels are dated to more than twelve thousand years ago, though the exact chronology is still debated. The scramble up is short but steep, and the reward at the top is a long view over an unbroken sea of canopy.</p>
${wide(M.cerro, 'Ancient rock paintings on the wall of Cerro Azul', 'Cerro Azul: ochre figures painted on the rock, among the oldest on the continent.')}
<h3>Finca Chontaduro: a project that keeps the memory alive</h3>
<p>This is the stop that gives the whole trip its meaning, and it is far more than a farm. Finca Chontaduro is a project of awareness and memory. Its owner, <strong>Edison</strong>, walks you through what actually happened on this land: the political and social process behind it, the work a coca <em>finca</em> really involved, and how it all changed for the better.</p>
<p>He does not soften any of it. Edison remembers the fear, the days working up to fourteen hours, the fires set over the fincas, and what he calls the harm of the Uribe years, the era of the <em>falsos positivos</em>, when civilians were killed and passed off as guerrillas. The others I met were just as direct. They knew it was nothing to be proud of, but they said plainly that the coca money is what let them change their lives, study, find a way out. Opportunities the state was not giving them, and that for a while the plant was.</p>
<details class="tdp-acc"><summary>The Guaviare, the cartels and the FARC: a short history</summary><div class="acc-body">
<p>The Guaviare sits on the vast, thinly populated frontier where the eastern plains give way to the Amazon. Its distance from the centre of the country left it on the margins of the Colombian state for most of the twentieth century, a place people migrated to precisely because no one was watching.</p>
<p>The 1980s and 90s were the cartel decades, the era of the great narcos: Pablo Escobar and the Medellín cartel, Griselda Blanco. Cocaine remade whole regions of Colombia, and coca spread across frontiers like the Guaviare, where the climate and the isolation made it ideal to grow.</p>
<p>As the cartels fell, control of the trade in regions like this passed to the guerrilla. By the 2000s the FARC dominated much of the Guaviare's coca economy, and here the armed conflict, the drug trade and the absence of the state became almost impossible to separate. For outsiders, the department was effectively closed.</p>
<p>The 2016 peace agreement between the government and the FARC changed the trajectory. Security improved, the guerrilla demobilised across much of the department, and communities turned towards other economies, tourism among them. Projects like Finca Chontaduro now tell that history directly, on the ground where coca once grew. It is a young and fragile transformation, and worth understanding before you arrive.</p>
</div></details>
<h3>The Raudal del Guayabero</h3>
${floatVid(M.raudalVid, 'Up the Guayabero river by boat towards the raudal.')}
<p>A day on the water. A boat carries you up the <strong>Guayabero river</strong> to the <em>raudal</em>, where the current breaks over rock into rapids, past more painted panels on the cliffs and a string of viewpoints out over the river and the forest. It is the most cinematic day of the loop, and the one where the scale of the landscape really lands.</p>
<h2 id="itinerary">Guaviare 3-Day Itinerary: Cerro Azul, Puerta de Orión &amp; Tranquilandia</h2>
<p>How the classic Geotours circuit breaks down, and a good template whoever you book with.</p>
<table>
<tr><td>Day 1</td><td><strong>Tranquilandia</strong> and the Puerta de Orión</td></tr>
<tr><td>Day 2</td><td><strong>Finca Chontaduro</strong> and <strong>Cerro Azul</strong></td></tr>
<tr><td>Day 3</td><td><strong>Raudal del Guayabero</strong> by boat</td></tr>
<tr><td>+ Day 4</td><td>The extra day I added: the <strong>communities</strong>, plus <strong>Ciudad de Piedra</strong>'s sculpted rock</td></tr>
</table>
<h3>If you have more days</h3>
<p>The classic loop is three days, but the region holds far more. With extra time, ask your operator about the <strong>Pozos Naturales</strong> and <strong>Puentes Naturales</strong>, the sculpted rock of <strong>Los Túneles</strong>, and <strong>Laguna Damas de Nare</strong>, where you can swim with pink river dolphins. A full week here is easy to fill.</p>
</section>

<section id="community"><span class="eyebrow">06</span><h2>Meeting the communities</h2>
<p>The classic loop covers the icons, and covers them well. But the day I keep coming back to was not on the standard itinerary. I asked the person who handles bookings at Geotours whether it would be possible to spend a real day with the indigenous communities of the Guaviare. Not a <em>velada</em> staged for visitors, an hour of dancing laid on and paid for, but an ordinary day, on their terms. He arranged it directly, and the 50€ it cost went to the communities as an offering rather than to an agency.</p>
<p>What it held was ordinary work, not performance: cassava sieved and toasted into <em>fariña</em>, the coarse flour that anchors daily life here, things made by hand, the slow rhythm of a household going about its day with us in it rather than watching from the outside. That is exactly why it stayed with me. Nothing was staged, and nothing needed to be.</p>
<div class="tip"><b>How to arrange it</b>Ask for it when you book, and let your operator set it up through the same regulated, community-linked channel that protects everything else here. What you pay goes to the communities directly. Treat the day as a privilege, not a product. It is the single thing that turned a good tour into a trip I won't forget.</div>
${wideVid(M.commVid, 'Cassava worked into fariña, the staple that anchors the day.')}
</section>

<section id="sleep"><span class="eyebrow">07</span><h2>Where to stay</h2>
<p>Most tours include lodging, but it is worth knowing what you are getting. San José has options for every budget, from simple hostels in town to ecolodges just outside it. These are the two I used.</p>
<div class="rja-cols">
<div class="rja-box hi"><span class="rb-tag">3 nights · half board</span><h4>La Herradura Ecolodge</h4><p>Included in the Geotours package. Beautiful setting, genuinely good food, attentive service on half board. The kind of base that makes the long excursion days easy to come back to, and one of the nicest places I stayed in Colombia.</p></div>
<div class="rja-box"><span class="rb-tag">1 night · 18€</span><h4>Hotel Garden House Guaviare</h4><p>In town, San José del Guaviare. Cheap and good. A straightforward spot in the centre for a night either side of the tour, when you want to be walkable to town.</p></div>
</div>
${wide(M.herra, 'Sunset over La Herradura Ecolodge', 'Sunset over La Herradura, the ecolodge that was my base for the trip.')}
</section>

<section id="costs"><span class="eyebrow">08</span><h2>Total Cost Breakdown: Local Guides, Food, and Stays</h2>
<p>The Geotours package was 400€ for three days, everything included: excursions, guiding, and three nights at La Herradura on half board. On top of that sat the transport in, the extra community day and the night in town. Here is the whole thing.</p>
<table><tr><th>Item</th><th class="r">EUR</th></tr>
<tr><td>Cali → Villavicencio (Clic Air)</td><td class="r">60€</td></tr>
<tr><td>Villavicencio → San José (bus, ~6 h)</td><td class="r">26€</td></tr>
<tr><td>Geotours 3-day tour, all inclusive</td><td class="r">400€</td></tr>
<tr><td>Extra day · communities (offering)</td><td class="r">50€</td></tr>
<tr><td>Hotel Garden House (1 night)</td><td class="r">18€</td></tr>
<tr class="total"><td>Total</td><td class="r big">554€</td></tr></table>
<p>Meals on the tour days are covered by La Herradura's half board, so extras on the ground come down to food and drinks in town. These are the prices I paid when I went; the tour was booked directly with Geotours del Guaviare. Around 550€ door to door, most of it the package, for four guided days in one of the regions of Colombia hardest to reach on your own.</p>
</section>

<section id="tips" style="border-bottom:0"><span class="eyebrow">09</span><h2>Know before you go</h2>
<ul>
<li><strong>You need a guide.</strong> The sites cannot be visited alone. Book through a licensed San José operator who arranges permits, guides and transport.</li>
<li><strong>Bring cash.</strong> Card acceptance is limited outside the main hotels. Carry enough Colombian pesos for the trip.</li>
<li><strong>Time it for the water.</strong> Come in the green season, and July to November if you want the coloured river. The dry months leave many sites low or empty.</li>
<li><strong>Pack for heat and jungle.</strong> Light clothing, real sun protection, insect repellent, water, and shoes with grip for the short but steep scrambles like Cerro Azul.</li>
<li><strong>Respect the rock art.</strong> Never touch the paintings and follow your guide's rules. They are thousands of years old and cannot be repaired.</li>
<li><strong>Book ahead at peak.</strong> Colombian holiday periods, the February festival and mid-year, fill up and cost more. Outside them you have room to move.</li>
</ul>
${bleed(M.closing, 'Where the Guaviare gives way to the Amazon', 'Onward: where the Guaviare gives way to the Amazon proper.')}
<p class="rf-foot" style="margin-top:20px">Words and photographs from the ground in <b>San José del Guaviare</b>.</p>
</section>
${albumSection('More from the Guaviare')}
`;

// ─────────────────────────── ITALIANO ───────────────────────────
const it_body = `
<section><p class="lead"><span class="drop">I</span>l Guaviare si trova sulla cucitura della Colombia, dove le pianure orientali, i <em>llanos</em>, si dissolvono nell'Amazzonia. È caldo, verde e poco popolato, una frontiera di torri di arenaria, fiumi scuri di tannino e foresta che corre ininterrotta fino all'orizzonte. E per gran parte della storia recente è stato un posto in cui non si poteva viaggiare.</p></section>

<section id="what"><span class="eyebrow">01</span><h2>Cos'è il Guaviare</h2>
${floatFig(M.palms, 'Foresta di palme allagata nel Guaviare', 'Palme allagate e acqua immobile: il Guaviare sulla cucitura tra llano e Amazzonia.')}
<p>Per decenni è stato terra di coca e territorio delle FARC, uno degli angoli della Colombia dove il conflitto armato, l'economia della droga e l'assenza dello Stato erano annodati più strettamente. L'accordo di pace del 2016 ha cambiato le cose. La sicurezza è migliorata, la regione si è aperta e San José del Guaviare, la piccola capitale del dipartimento, è diventata la base per uno dei viaggi più sorprendenti del Paese: arte rupestre dipinta più di dodicimila anni fa, un fiume che diventa rosso, archi naturali di roccia, delfini rosa di fiume, e comunità che decidono da sé come vogliono essere incontrate.</p>
</section>

<section id="access"><span class="eyebrow">02</span><h2>Il Guaviare è sicuro per chi viaggia da solo e per i backpacker?</h2>
<p><strong>Risposta breve: sì.</strong> Dopo l'accordo di pace del 2016 San José del Guaviare è diventata una cittadina tranquilla e accogliente, un'ottima base per chi viaggia da solo e per i backpacker. Il vincolo non è la sicurezza, è l'accesso: ed è la cosa più importante da capire prima di pianificare un viaggio qui, ciò che rende il Guaviare diverso da gran parte della Colombia.</p>
<div class="rja-panel"><b>Non si può fare in autonomia</b>
<p>Quasi ogni sito che valga la pena vedere, l'arte rupestre, il fiume colorato, le rapide, i sentieri nella foresta, si trova dentro terre protette di enorme valore archeologico ed ecologico. L'accesso è regolato: si visita con <strong>guide locali autorizzate, e di solito una jeep</strong>, tramite un operatore con licenza. Non ci si presenta e si entra a piacere.</p>
<p>Non è burocrazia fine a sé stessa. Le pitture rupestri sono tra le più antiche del continente e insostituibili, gli ecosistemi sono fragili, e gran parte della terra e delle sue storie appartiene a comunità che solo ora stanno definendo come deve funzionare il turismo qui. Il sistema dei permessi, le guide e i protocolli comunitari sono ciò che tiene tutto integro, e ciò che fa arrivare i soldi alle persone che ci vivono. Prenotare con un tour locale non è un compromesso sull'avventura. <em>È</em> il modo per entrarci.</p></div>
<p>In pratica significa scegliere un'agenzia locale a San José e lasciare che gestisca permessi, guide e trasporti. Io sono andato con <strong>Geotours del Guaviare</strong>, un pacchetto di tre giorni a 400€ tutto incluso, ben organizzato. Qualsiasi operatore locale serio copre lo stesso circuito classico.</p>
<a class="rja-btn" href="https://wa.me/573182269161" target="_blank" rel="noopener">Prenota con Geotours · WhatsApp →</a>
</section>

<section id="when"><span class="eyebrow">03</span><h2>Quando andare</h2>
<p>Il Guaviare è caldo e umido tutto l'anno, di solito tra i 28 e i 30°C. Ciò che cambia col calendario è l'acqua, e l'acqua è ciò di cui è fatta gran parte delle attrazioni. Ci sono due stagioni, e quella più piovosa è, controintuitivamente, la migliore per viaggiare.</p>
<div class="rja-cols">
<div class="rja-box hi"><span class="rb-tag">Circa mag/nov · la migliore</span><h4>Stagione verde</h4><p>Fiumi, cascate e piscine naturali sono pieni e al loro massimo splendore. È il periodo in cui la regione dà il meglio. Più giornate limpide e soleggiate arrivano verso agosto/novembre.</p></div>
<div class="rja-box"><span class="rb-tag">Circa dic/mar</span><h4>Stagione secca</h4><p>Cieli più limpidi, ma molti siti d'acqua si abbassano o si prosciugano, compreso il fiume colorato. Alcune attrazioni-simbolo della regione semplicemente non ci sono in questi mesi.</p></div>
</div>
<div class="tip"><b>Se la priorità è il fiume colorato</b>L'acqua di Tranquilandia diventa rossa solo quando fiorisce la sua pianta endemica, la <em>Macarenia clavigera</em>, all'incirca da <strong>luglio a novembre</strong>, e il colore è più acceso nelle giornate di sole. Fuori da quella finestra il fiume è trasparente e la visita vale molto meno il viaggio. Io ci sono andato a fine luglio ed era già in pieno colore.</div>
</section>

<section id="getting"><span class="eyebrow">04</span><h2>Come arrivare a San José del Guaviare da Bogotá</h2>
<p>San José del Guaviare è a circa 400 km a sud di Bogotá, e arrivarci è diventato semplice. Ci sono due modi: un <strong>breve volo interno da Bogotá</strong> direttamente a San José, oppure il <strong>bus</strong>, più lento sulla carta ma con molto più a favore di quanto la distanza suggerisca.</p>
<p>Il mio percorso è passato per <strong>Villavicencio</strong>, la porta delle pianure orientali. Ho volato <strong>da Cali a Villavicencio con Clic Air per 60€</strong>, su uno dei voli di martedì, giovedì, sabato e domenica, poi ho preso il <strong>bus fino a San José, circa sei ore per 26€</strong>. Costa meno che volare per tutto il tragitto ed è una coincidenza facile se arrivi dal sud o dall'ovest del Paese.</p>
<div class="tip"><b>Se puoi, prendi il bus</b>Potendo scegliere, prenderei il bus invece dell'aereo. È il modo più economico, il più semplice da organizzare e prenotare, e di gran lunga il più leggero per l'ambiente. La tratta è servita da una sola compagnia, <strong>Flota La Macarena</strong>, quindi non c'è nulla da confrontare. Cerca le <strong>corse notturne</strong>: le migliori hanno i sedili <em>diamante</em>, l'ampia classe executive reclinabile, nove per pullman e comodi abbastanza da dormire davvero. Copri la distanza di notte e arrivi riposato, senza perdere una giornata in viaggio.</div>
<a class="rja-btn" href="https://www.flotalamacarena.com/inicio/ruta/villavicencio-san-jose-del-guaviare/" target="_blank" rel="noopener">Trova il bus · Flota La Macarena →</a>
<p>Una volta arrivato, ricorda la regola della sezione precedente: per raggiungere i siti si va con una guida e un mezzo, tramite il tuo operatore. San José è piccola, sicura e tranquilla, e ogni escursione parte da qui.</p>
</section>

<section id="see"><span class="eyebrow">05</span><h2>Cosa vedere e fare</h2>
<p>Il circuito classico, quello che copre un tour di tre giorni, mette in fila le quattro attrazioni che definiscono la regione. Ecco cosa sono e perché meritano il loro posto.</p>
<h3>Tranquilandia e il fiume colorato</h3>
${floatFig(M.tranq, 'Tranquilandia, il fiume colorato del Guaviare', "Tranquilandia: il Caño Sabana diventa rosso quando fiorisce la <em>Macarenia clavigera</em>, all'incirca da luglio a novembre.")}
<p>Tranquilandia, sul Caño Sabana, è la risposta tranquilla del Guaviare a Caño Cristales. In stagione, la stessa pianta endemica che ha reso famosa La Macarena tappezza il letto del fiume e tinge l'acqua di rosso e rosa, e qui la vedi senza la folla né il prezzo. Vicino sorge la <strong>Puerta de Orión</strong>, un enorme arco di arenaria che incornicia la foresta attraverso la roccia, migliore nella luce bassa del mattino o del tardo pomeriggio.</p>
<h3>Cerro Azul e l'arte rupestre</h3>
<p>Sulla Serranía de la Lindosa, le pareti di roccia di <strong>Cerro Azul</strong> custodiscono alcune delle pitture più antiche del Sud America, figure ocra-rosse di animali, mani e cacciatori che hanno valso al sito il soprannome di Cappella Sistina dell'Amazzonia. Alcuni pannelli sono datati a più di dodicimila anni fa, anche se la cronologia esatta è ancora dibattuta. La salita è breve ma ripida, e la ricompensa in cima è una lunga vista su un mare ininterrotto di chioma.</p>
${wide(M.cerro, 'Antiche pitture rupestri sulla parete di Cerro Azul', 'Cerro Azul: figure ocra dipinte sulla roccia, tra le più antiche del continente.')}
<h3>Finca Chontaduro: un progetto che tiene viva la memoria</h3>
<p>È la tappa che dà senso a tutto il viaggio, e va ben oltre una fattoria. Finca Chontaduro è un progetto di consapevolezza e memoria. Il proprietario, <strong>Edison</strong>, ti racconta cosa è successo davvero su questa terra: il processo politico e sociale dietro, il lavoro che una <em>finca</em> di coca comportava davvero, e come tutto sia cambiato in meglio.</p>
<p>Non ne addolcisce nulla. Edison ricorda la paura, i giorni di lavoro fino a quattordici ore, gli incendi appiccati alle fincas, e quello che chiama il danno degli anni di Uribe, l'epoca dei <em>falsos positivos</em>, quando i civili venivano uccisi e spacciati per guerriglieri. Gli altri che ho incontrato sono stati altrettanto diretti. Sapevano che non c'era nulla di cui andare fieri, ma dicevano chiaramente che i soldi della coca sono ciò che ha permesso loro di cambiare vita, studiare, trovare una via d'uscita. Opportunità che lo Stato non dava, e che per un po' la pianta dava.</p>
<details class="tdp-acc"><summary>Il Guaviare, i cartelli e le FARC: una breve storia</summary><div class="acc-body">
<p>Il Guaviare si trova sulla vasta frontiera poco popolata dove le pianure orientali lasciano il posto all'Amazzonia. La sua distanza dal centro del Paese lo ha lasciato ai margini dello Stato colombiano per gran parte del Novecento, un posto verso cui si migrava proprio perché nessuno guardava.</p>
<p>Gli anni '80 e '90 furono i decenni dei cartelli, l'epoca dei grandi narcos: Pablo Escobar e il cartello di Medellín, Griselda Blanco. La cocaina rifece intere regioni della Colombia, e la coca si diffuse su frontiere come il Guaviare, dove clima e isolamento la rendevano ideale da coltivare.</p>
<p>Con la caduta dei cartelli, il controllo del traffico in regioni come questa passò alla guerriglia. Negli anni 2000 le FARC dominavano gran parte dell'economia della coca del Guaviare, e qui il conflitto armato, il narcotraffico e l'assenza dello Stato divennero quasi impossibili da separare. Per chi veniva da fuori, il dipartimento era di fatto chiuso.</p>
<p>L'accordo di pace del 2016 tra governo e FARC ha cambiato la traiettoria. La sicurezza è migliorata, la guerriglia si è smobilitata in gran parte del dipartimento, e le comunità si sono rivolte ad altre economie, tra cui il turismo. Progetti come Finca Chontaduro oggi raccontano quella storia direttamente, sul terreno dove un tempo cresceva la coca. È una trasformazione giovane e fragile, che vale la pena capire prima di arrivare.</p>
</div></details>
<h3>Il Raudal del Guayabero</h3>
${floatVid(M.raudalVid, 'Su per il fiume Guayabero in barca, verso il raudal.')}
<p>Una giornata sull'acqua. Una barca ti porta su per il <strong>fiume Guayabero</strong> fino al <em>raudal</em>, dove la corrente si spezza sulla roccia in rapide, oltre altri pannelli dipinti sulle scogliere e una serie di punti panoramici sul fiume e sulla foresta. È la giornata più cinematografica del circuito, e quella in cui la scala del paesaggio si coglie davvero.</p>
<h2 id="itinerary">Itinerario di 3 giorni nel Guaviare: Cerro Azul, Puerta de Orión e Tranquilandia</h2>
<p>Come si articola il classico circuito di Geotours, e un buon modello con chiunque tu prenoti.</p>
<table>
<tr><td>Giorno 1</td><td><strong>Tranquilandia</strong> e la Puerta de Orión</td></tr>
<tr><td>Giorno 2</td><td><strong>Finca Chontaduro</strong> e <strong>Cerro Azul</strong></td></tr>
<tr><td>Giorno 3</td><td><strong>Raudal del Guayabero</strong> in barca</td></tr>
<tr><td>+ Giorno 4</td><td>Il giorno extra che ho aggiunto: le <strong>comunità</strong>, più la roccia scolpita di <strong>Ciudad de Piedra</strong></td></tr>
</table>
<h3>Se hai più giorni</h3>
<p>Il circuito classico è di tre giorni, ma la regione offre molto di più. Con più tempo, chiedi al tuo operatore dei <strong>Pozos Naturales</strong> e dei <strong>Puentes Naturales</strong>, la roccia scolpita di <strong>Los Túneles</strong>, e la <strong>Laguna Damas de Nare</strong>, dove puoi nuotare con i delfini rosa di fiume. Una settimana piena qui si riempie facilmente.</p>
</section>

<section id="community"><span class="eyebrow">06</span><h2>Incontrare le comunità</h2>
<p>Il circuito classico copre le icone, e le copre bene. Ma la giornata a cui torno col pensiero non era nell'itinerario standard. Ho chiesto alla persona che gestisce le prenotazioni di Geotours se fosse possibile passare una giornata vera con le comunità indigene del Guaviare. Non una <em>velada</em> messa in scena per i visitatori, un'ora di danze organizzata e pagata, ma una giornata ordinaria, alle loro condizioni. Ha organizzato tutto direttamente, e i 50€ che è costata sono andati alle comunità come offerta, non a un'agenzia.</p>
<p>Quello che ha offerto era lavoro ordinario, non uno spettacolo: la cassava setacciata e tostata in <em>fariña</em>, la farina grezza attorno a cui ruota la vita quotidiana qui, cose fatte a mano, il ritmo lento di una casa che va avanti con la sua giornata, con noi dentro e non a guardare da fuori. È proprio per questo che mi è rimasta. Niente era messo in scena, e non ce n'era bisogno.</p>
<div class="tip"><b>Come organizzarla</b>Chiedila al momento della prenotazione, e lascia che il tuo operatore la imposti attraverso lo stesso canale regolato e legato alle comunità che protegge tutto il resto qui. Quello che paghi va direttamente alle comunità. Trattala come un privilegio, non un prodotto. È la cosa che ha trasformato un buon tour in un viaggio che non dimenticherò.</div>
${wideVid(M.commVid, "La cassava lavorata in fariña, l'alimento base attorno a cui ruota la giornata.")}
</section>

<section id="sleep"><span class="eyebrow">07</span><h2>Dove dormire</h2>
<p>Molti tour includono l'alloggio, ma vale la pena sapere cosa ti aspetta. San José ha opzioni per ogni budget, dagli ostelli semplici in città agli ecolodge appena fuori. Questi sono i due che ho usato.</p>
<div class="rja-cols">
<div class="rja-box hi"><span class="rb-tag">3 notti · mezza pensione</span><h4>La Herradura Ecolodge</h4><p>Incluso nel pacchetto Geotours. Ambientazione bellissima, cibo davvero buono, servizio attento in mezza pensione. Il tipo di base che rende facile tornare dopo le lunghe giornate di escursione, e uno dei posti più belli in cui ho dormito in Colombia.</p></div>
<div class="rja-box"><span class="rb-tag">1 notte · 18€</span><h4>Hotel Garden House Guaviare</h4><p>In centro, a San José del Guaviare. Economico e buono. Un posto semplice per una notte prima o dopo il tour, quando vuoi essere a piedi dal centro.</p></div>
</div>
${wide(M.herra, 'Tramonto su La Herradura Ecolodge', "Tramonto su La Herradura, l'ecolodge che è stato la mia base per il viaggio.")}
</section>

<section id="costs"><span class="eyebrow">08</span><h2>Costi dettagliati: guide locali, cibo e alloggi</h2>
<p>Il pacchetto Geotours era 400€ per tre giorni, tutto incluso: escursioni, guida e tre notti a La Herradura in mezza pensione. Sopra a questo si sono aggiunti il trasporto per arrivare, il giorno extra con le comunità e la notte in città. Ecco il quadro completo.</p>
<table><tr><th>Voce</th><th class="r">EUR</th></tr>
<tr><td>Cali → Villavicencio (Clic Air)</td><td class="r">60€</td></tr>
<tr><td>Villavicencio → San José (bus, ~6 h)</td><td class="r">26€</td></tr>
<tr><td>Tour Geotours 3 giorni, tutto incluso</td><td class="r">400€</td></tr>
<tr><td>Giorno extra · comunità (offerta)</td><td class="r">50€</td></tr>
<tr><td>Hotel Garden House (1 notte)</td><td class="r">18€</td></tr>
<tr class="total"><td>Totale</td><td class="r big">554€</td></tr></table>
<p>I pasti nei giorni di tour sono coperti dalla mezza pensione di La Herradura, quindi gli extra sul posto si riducono a cibo e bevande in città. Questi sono i prezzi che ho pagato quando ci sono stato; il tour è stato prenotato direttamente con Geotours del Guaviare. Circa 550€ porta a porta, per lo più il pacchetto, per quattro giorni guidati in una delle regioni della Colombia più difficili da raggiungere da soli.</p>
</section>

<section id="tips" style="border-bottom:0"><span class="eyebrow">09</span><h2>Da sapere prima di partire</h2>
<ul>
<li><strong>Serve una guida.</strong> I siti non si possono visitare da soli. Prenota con un operatore autorizzato di San José che gestisca permessi, guide e trasporti.</li>
<li><strong>Porta contanti.</strong> L'accettazione delle carte è limitata fuori dai principali hotel. Porta abbastanza pesos colombiani per il viaggio.</li>
<li><strong>Cronometralo sull'acqua.</strong> Vieni in stagione verde, e da luglio a novembre se vuoi il fiume colorato. Nei mesi secchi molti siti restano bassi o vuoti.</li>
<li><strong>Prepara per caldo e giungla.</strong> Abiti leggeri, vera protezione solare, repellente per insetti, acqua, e scarpe con grip per le salite brevi ma ripide come Cerro Azul.</li>
<li><strong>Rispetta l'arte rupestre.</strong> Non toccare mai le pitture e segui le regole della guida. Hanno migliaia di anni e non si possono riparare.</li>
<li><strong>Prenota per tempo in alta stagione.</strong> I periodi di festa colombiani, il festival di febbraio e metà anno, si riempiono e costano di più. Fuori da questi hai margine di manovra.</li>
</ul>
${bleed(M.closing, "Dove il Guaviare lascia il posto all'Amazzonia", "Verso l'Amazzonia vera e propria, dove il Guaviare finisce.")}
<p class="rf-foot" style="margin-top:20px">Parole e fotografie sul campo a <b>San José del Guaviare</b>.</p>
</section>
${albumSection('Altro dal Guaviare')}
`;

// ─────────────────────────── ESPAÑOL ───────────────────────────
const es_body = `
<section><p class="lead"><span class="drop">E</span>l Guaviare se asienta en la costura de Colombia donde los llanos orientales, los <em>llanos</em>, se disuelven en la Amazonía. Es caluroso, verde y poco poblado, una frontera de torres de arenisca, ríos oscuros de taninos y selva que corre sin interrupción hasta el horizonte. Y durante gran parte de la historia reciente fue un lugar al que no se podía viajar.</p></section>

<section id="what"><span class="eyebrow">01</span><h2>Qué es el Guaviare</h2>
${floatFig(M.palms, 'Bosque de palmas inundado en el Guaviare', 'Palmas inundadas y agua quieta: el Guaviare en la costura entre el llano y la Amazonía.')}
<p>Durante décadas fue tierra de coca y territorio de las FARC, uno de los rincones de Colombia donde el conflicto armado, la economía de la droga y la ausencia del Estado estaban más estrechamente anudados. El acuerdo de paz de 2016 cambió eso. La seguridad mejoró, la región se abrió, y San José del Guaviare, la pequeña capital departamental, se convirtió en la base de uno de los viajes más sorprendentes del país: arte rupestre pintado hace más de doce mil años, un río que se vuelve rojo, arcos naturales de roca, delfines rosados de río, y comunidades que deciden por sí mismas cómo quieren ser encontradas.</p>
</section>

<section id="access"><span class="eyebrow">02</span><h2>¿Es seguro el Guaviare para viajeros solos y mochileros?</h2>
<p><strong>Respuesta corta: sí.</strong> Tras el acuerdo de paz de 2016 San José del Guaviare se ha convertido en un pueblo tranquilo y acogedor, una base cómoda para viajeros solos y mochileros. La limitación no es la seguridad, es el acceso: y es lo más importante que hay que entender antes de planear un viaje aquí, lo que hace al Guaviare distinto de gran parte de Colombia.</p>
<div class="rja-panel"><b>No se puede hacer por libre</b>
<p>Casi todo sitio que valga la pena ver, el arte rupestre, el río de colores, los rápidos, los senderos de la selva, está dentro de tierras protegidas de enorme valor arqueológico y ecológico. El acceso está regulado: se visita con <strong>guías locales autorizados, y normalmente un jeep</strong>, a través de un operador con licencia. No te presentas y entras a tu aire.</p>
<p>No es burocracia por sí misma. Las pinturas rupestres están entre las más antiguas del continente e irremplazables, los ecosistemas son frágiles, y gran parte de la tierra y de sus historias pertenece a comunidades que solo ahora están definiendo cómo funciona el turismo aquí. El sistema de permisos, los guías y los protocolos comunitarios son lo que mantiene todo intacto, y lo que hace que el dinero llegue a la gente que vive aquí. Reservar con un tour local no es una concesión en la aventura. <em>Es</em> la manera de entrar.</p></div>
<p>En la práctica eso significa elegir una agencia local en San José y dejar que gestione permisos, guías y transporte. Yo fui con <strong>Geotours del Guaviare</strong>, un paquete de tres días por 400€ todo incluido, bien organizado. Cualquier operador local serio cubre el mismo circuito clásico.</p>
<a class="rja-btn" href="https://wa.me/573182269161" target="_blank" rel="noopener">Reserva con Geotours · WhatsApp →</a>
</section>

<section id="when"><span class="eyebrow">03</span><h2>Cuándo ir</h2>
<p>El Guaviare es cálido y húmedo todo el año, normalmente entre 28 y 30°C. Lo que cambia con el calendario es el agua, y el agua es de lo que está hecha la mayoría de las atracciones. Hay dos temporadas, y la más lluviosa es, contra toda intuición, la mejor para viajar.</p>
<div class="rja-cols">
<div class="rja-box hi"><span class="rb-tag">Aprox. may/nov · la mejor</span><h4>Temporada verde</h4><p>Ríos, cascadas y piscinas naturales están llenos y en su punto más espectacular. Es cuando la región da lo mejor de sí. Más días despejados y soleados llegan hacia agosto/noviembre.</p></div>
<div class="rja-box"><span class="rb-tag">Aprox. dic/mar</span><h4>Temporada seca</h4><p>Cielos más despejados, pero muchos sitios de agua bajan o se secan, incluido el río de colores. Algunas atracciones emblemáticas de la región sencillamente no están en estos meses.</p></div>
</div>
<div class="tip"><b>Si tu prioridad es el río de colores</b>El agua de Tranquilandia solo se vuelve roja cuando florece su planta endémica, la <em>Macarenia clavigera</em>, aproximadamente de <strong>julio a noviembre</strong>, y el color es más intenso en un día soleado. Fuera de esa ventana el río corre claro y la visita vale mucho menos el viaje. Yo fui a finales de julio y ya estaba en pleno color.</div>
</section>

<section id="getting"><span class="eyebrow">04</span><h2>Cómo llegar a San José del Guaviare desde Bogotá</h2>
<p>San José del Guaviare está a unos 400 km al sur de Bogotá, y llegar se ha vuelto sencillo. Hay dos formas: un <strong>vuelo interno corto desde Bogotá</strong> directo a San José, o el <strong>bus</strong>, más lento sobre el papel pero con mucho más a favor de lo que sugiere la distancia.</p>
<p>Mi ruta pasó por <strong>Villavicencio</strong>, la puerta de los llanos orientales. Volé <strong>de Cali a Villavicencio con Clic Air por 60€</strong>, en uno de sus vuelos de martes, jueves, sábado y domingo, y luego tomé el <strong>bus hasta San José, unas seis horas por 26€</strong>. Es más barato que volar todo el trayecto y una conexión fácil si vienes del sur o del oeste del país.</p>
<div class="tip"><b>Si puedes, toma el bus</b>Pudiendo elegir, tomaría el bus antes que el avión. Es la forma más barata, la más sencilla de organizar y reservar, y con diferencia la más ligera para el medio ambiente. La ruta la cubre una sola compañía, <strong>Flota La Macarena</strong>, así que no hay nada que comparar. Busca los <strong>servicios nocturnos</strong>: los mejores llevan asientos <em>diamante</em>, la amplia clase ejecutiva reclinable, nueve por bus y cómodos de verdad para dormir. Cruzas la distancia de noche y llegas descansado, sin perder un día de viaje.</div>
<a class="rja-btn" href="https://www.flotalamacarena.com/inicio/ruta/villavicencio-san-jose-del-guaviare/" target="_blank" rel="noopener">Encuentra el bus · Flota La Macarena →</a>
<p>Una vez llegues, recuerda la regla de la sección anterior: para llegar a los sitios se va con un guía y un vehículo, a través de tu operador. San José en sí es pequeña, segura y tranquila, y toda excursión sale de aquí.</p>
</section>

<section id="see"><span class="eyebrow">05</span><h2>Qué ver y hacer</h2>
<p>El circuito clásico, el que cubre un tour de tres días, enlaza las cuatro atracciones que definen la región. Esto es qué es cada una, y por qué se gana su lugar.</p>
<h3>Tranquilandia y el río de colores</h3>
${floatFig(M.tranq, 'Tranquilandia, el río de colores del Guaviare', 'Tranquilandia: el Caño Sabana corre rojo cuando florece la <em>Macarenia clavigera</em>, aproximadamente de julio a noviembre.')}
<p>Tranquilandia, en el Caño Sabana, es la respuesta tranquila del Guaviare a Caño Cristales. En temporada, la misma planta endémica que hizo famosa a La Macarena tapiza el lecho del río y tiñe el agua de rojo y rosa, y aquí lo tienes sin las multitudes ni el precio. Cerca se alza la <strong>Puerta de Orión</strong>, un enorme arco de arenisca que enmarca la selva a través de la roca, mejor con la luz baja de la mañana o el atardecer.</p>
<h3>Cerro Azul y el arte rupestre</h3>
<p>En la Serranía de la Lindosa, las paredes de roca de <strong>Cerro Azul</strong> guardan algunas de las pinturas más antiguas de Sudamérica, figuras ocre-rojas de animales, manos y cazadores que le han valido al sitio el apodo de la Capilla Sixtina de la Amazonía. Algunos paneles se datan en más de doce mil años, aunque la cronología exacta sigue en debate. La subida es corta pero empinada, y la recompensa arriba es una larga vista sobre un mar ininterrumpido de dosel.</p>
${wide(M.cerro, 'Antiguas pinturas rupestres en la pared de Cerro Azul', 'Cerro Azul: figuras ocre pintadas en la roca, entre las más antiguas del continente.')}
<h3>Finca Chontaduro: un proyecto que mantiene viva la memoria</h3>
<p>Es la parada que le da sentido a todo el viaje, y es mucho más que una finca. Finca Chontaduro es un proyecto de conciencia y memoria. Su dueño, <strong>Edison</strong>, te lleva por lo que de verdad pasó en esta tierra: el proceso político y social detrás, el trabajo que una <em>finca</em> de coca implicaba realmente, y cómo todo cambió para bien.</p>
<p>No suaviza nada. Edison recuerda el miedo, los días trabajando hasta catorce horas, los incendios provocados sobre las fincas, y lo que llama el daño de los años de Uribe, la época de los <em>falsos positivos</em>, cuando civiles eran asesinados y presentados como guerrilleros. Los demás que conocí fueron igual de directos. Sabían que no era nada de lo que enorgullecerse, pero decían con claridad que el dinero de la coca es lo que les permitió cambiar de vida, estudiar, encontrar una salida. Oportunidades que el Estado no daba, y que por un tiempo la planta sí.</p>
<details class="tdp-acc"><summary>El Guaviare, los carteles y las FARC: una breve historia</summary><div class="acc-body">
<p>El Guaviare se asienta en la vasta frontera poco poblada donde los llanos orientales dan paso a la Amazonía. Su distancia del centro del país lo dejó al margen del Estado colombiano durante gran parte del siglo XX, un lugar al que se migraba precisamente porque nadie miraba.</p>
<p>Los años 80 y 90 fueron las décadas de los carteles, la época de los grandes narcos: Pablo Escobar y el cartel de Medellín, Griselda Blanco. La cocaína rehízo regiones enteras de Colombia, y la coca se extendió por fronteras como el Guaviare, donde el clima y el aislamiento la hacían ideal para cultivar.</p>
<p>Al caer los carteles, el control del negocio en regiones como esta pasó a la guerrilla. Para los años 2000 las FARC dominaban gran parte de la economía de la coca del Guaviare, y aquí el conflicto armado, el narcotráfico y la ausencia del Estado se volvieron casi imposibles de separar. Para los de fuera, el departamento estaba de hecho cerrado.</p>
<p>El acuerdo de paz de 2016 entre el gobierno y las FARC cambió la trayectoria. La seguridad mejoró, la guerrilla se desmovilizó en gran parte del departamento, y las comunidades se volcaron hacia otras economías, el turismo entre ellas. Proyectos como Finca Chontaduro cuentan hoy esa historia directamente, sobre el terreno donde antes crecía la coca. Es una transformación joven y frágil, que vale la pena entender antes de llegar.</p>
</div></details>
<h3>El Raudal del Guayabero</h3>
${floatVid(M.raudalVid, 'Río Guayabero arriba en lancha, hacia el raudal.')}
<p>Un día en el agua. Una lancha te lleva río arriba por el <strong>río Guayabero</strong> hasta el <em>raudal</em>, donde la corriente rompe sobre la roca en rápidos, pasando más paneles pintados en los acantilados y una serie de miradores sobre el río y la selva. Es el día más cinematográfico del circuito, y en el que la escala del paisaje realmente se siente.</p>
<h2 id="itinerary">Itinerario de 3 días en Guaviare: Cerro Azul, Puerta de Orión y Tranquilandia</h2>
<p>Cómo se reparte el clásico circuito de Geotours, y una buena plantilla con quien sea que reserves.</p>
<table>
<tr><td>Día 1</td><td><strong>Tranquilandia</strong> y la Puerta de Orión</td></tr>
<tr><td>Día 2</td><td><strong>Finca Chontaduro</strong> y <strong>Cerro Azul</strong></td></tr>
<tr><td>Día 3</td><td><strong>Raudal del Guayabero</strong> en lancha</td></tr>
<tr><td>+ Día 4</td><td>El día extra que añadí: las <strong>comunidades</strong>, más la roca esculpida de <strong>Ciudad de Piedra</strong></td></tr>
</table>
<h3>Si tienes más días</h3>
<p>El circuito clásico es de tres días, pero la región da para mucho más. Con más tiempo, pregunta a tu operador por los <strong>Pozos Naturales</strong> y los <strong>Puentes Naturales</strong>, la roca esculpida de <strong>Los Túneles</strong>, y la <strong>Laguna Damas de Nare</strong>, donde puedes nadar con delfines rosados de río. Una semana entera aquí se llena con facilidad.</p>
</section>

<section id="community"><span class="eyebrow">06</span><h2>Conocer a las comunidades</h2>
<p>El circuito clásico cubre los iconos, y los cubre bien. Pero el día al que sigo volviendo no estaba en el itinerario estándar. Le pregunté a la persona que lleva las reservas de Geotours si sería posible pasar un día real con las comunidades indígenas del Guaviare. No una <em>velada</em> montada para visitantes, una hora de danzas preparada y pagada, sino un día corriente, en sus términos. Lo organizó directamente, y los 50€ que costó fueron a las comunidades como ofrenda, no a una agencia.</p>
<p>Lo que ofreció fue trabajo corriente, no un espectáculo: la yuca cernida y tostada en <em>fariña</em>, la harina gruesa en torno a la que gira la vida diaria aquí, cosas hechas a mano, el ritmo lento de una casa haciendo su día con nosotros dentro y no mirando desde fuera. Por eso mismo se me quedó grabado. Nada estaba montado, y no hacía falta que lo estuviera.</p>
<div class="tip"><b>Cómo organizarlo</b>Pídelo al reservar, y deja que tu operador lo monte por el mismo canal regulado y ligado a las comunidades que protege todo lo demás aquí. Lo que pagas va directo a las comunidades. Trátalo como un privilegio, no un producto. Es lo único que convirtió un buen tour en un viaje que no olvidaré.</div>
${wideVid(M.commVid, 'La yuca trabajada en fariña, el alimento básico en torno al que gira el día.')}
</section>

<section id="sleep"><span class="eyebrow">07</span><h2>Dónde dormir</h2>
<p>La mayoría de los tours incluyen alojamiento, pero vale la pena saber qué te toca. San José tiene opciones para todos los presupuestos, desde hostales sencillos en el pueblo hasta ecolodges justo a las afueras. Estos son los dos que usé.</p>
<div class="rja-cols">
<div class="rja-box hi"><span class="rb-tag">3 noches · media pensión</span><h4>La Herradura Ecolodge</h4><p>Incluido en el paquete Geotours. Entorno precioso, comida realmente buena, servicio atento en media pensión. El tipo de base que hace fácil volver tras los largos días de excursión, y uno de los sitios más bonitos en los que dormí en Colombia.</p></div>
<div class="rja-box"><span class="rb-tag">1 noche · 18€</span><h4>Hotel Garden House Guaviare</h4><p>En el pueblo, San José del Guaviare. Barato y bueno. Un sitio sencillo en el centro para una noche antes o después del tour, cuando quieres estar a pie del pueblo.</p></div>
</div>
${wide(M.herra, 'Atardecer sobre La Herradura Ecolodge', 'Atardecer sobre La Herradura, el ecolodge que fue mi base para el viaje.')}
</section>

<section id="costs"><span class="eyebrow">08</span><h2>Desglose de costes: guías locales, comida y alojamiento</h2>
<p>El paquete Geotours fue 400€ por tres días, todo incluido: excursiones, guía y tres noches en La Herradura en media pensión. Encima de eso quedaron el transporte de llegada, el día extra con las comunidades y la noche en el pueblo. Aquí está el conjunto.</p>
<table><tr><th>Concepto</th><th class="r">EUR</th></tr>
<tr><td>Cali → Villavicencio (Clic Air)</td><td class="r">60€</td></tr>
<tr><td>Villavicencio → San José (bus, ~6 h)</td><td class="r">26€</td></tr>
<tr><td>Tour Geotours 3 días, todo incluido</td><td class="r">400€</td></tr>
<tr><td>Día extra · comunidades (ofrenda)</td><td class="r">50€</td></tr>
<tr><td>Hotel Garden House (1 noche)</td><td class="r">18€</td></tr>
<tr class="total"><td>Total</td><td class="r big">554€</td></tr></table>
<p>Las comidas en los días de tour las cubre la media pensión de La Herradura, así que los extras sobre el terreno se reducen a comida y bebidas en el pueblo. Estos son los precios que pagué cuando fui; el tour se reservó directamente con Geotours del Guaviare. Unos 550€ puerta a puerta, la mayoría el paquete, por cuatro días guiados en una de las regiones de Colombia más difíciles de alcanzar por tu cuenta.</p>
</section>

<section id="tips" style="border-bottom:0"><span class="eyebrow">09</span><h2>Antes de ir</h2>
<ul>
<li><strong>Necesitas un guía.</strong> Los sitios no se pueden visitar solos. Reserva con un operador autorizado de San José que gestione permisos, guías y transporte.</li>
<li><strong>Lleva efectivo.</strong> La aceptación de tarjetas es limitada fuera de los hoteles principales. Lleva suficientes pesos colombianos para el viaje.</li>
<li><strong>Cronométralo por el agua.</strong> Ve en temporada verde, y de julio a noviembre si quieres el río de colores. Los meses secos dejan muchos sitios bajos o vacíos.</li>
<li><strong>Prepárate para calor y selva.</strong> Ropa ligera, protección solar de verdad, repelente, agua, y zapatos con agarre para las subidas cortas pero empinadas como Cerro Azul.</li>
<li><strong>Respeta el arte rupestre.</strong> Nunca toques las pinturas y sigue las reglas de tu guía. Tienen miles de años y no se pueden reparar.</li>
<li><strong>Reserva con antelación en temporada alta.</strong> Los periodos festivos colombianos, el festival de febrero y mitad de año, se llenan y cuestan más. Fuera de ellos tienes margen.</li>
</ul>
${bleed(M.closing, 'Donde el Guaviare da paso a la Amazonía', 'Hacia adelante: donde el Guaviare da paso a la Amazonía propiamente dicha.')}
<p class="rf-foot" style="margin-top:20px">Palabras y fotografías sobre el terreno en <b>San José del Guaviare</b>.</p>
</section>
${albumSection('Más del Guaviare')}
`;

export interface GuaviareLang {
  kicker: string; title: string; sub: string;
  facts: { n: string; l: string }[];
  tocTitle: string;
  toc: { n: string; id: string; label: string }[];
  body: string;
  back: string;
}

const mkToc = (a: string[][]) => a.map(([n, id, label]) => ({ n, id, label }));
const tocEn = mkToc([
  ['01', 'what', 'What the Guaviare is'], ['02', 'access', 'Is it safe?'],
  ['03', 'when', 'When to go'], ['04', 'getting', 'How to get there'],
  ['05', 'see', 'What to see & do'], ['06', 'community', 'The communities'],
  ['07', 'sleep', 'Where to stay'], ['08', 'costs', 'Cost breakdown'],
  ['09', 'tips', 'Know before you go'],
]);
const tocIt = mkToc([
  ['01', 'what', "Cos'è il Guaviare"], ['02', 'access', 'È sicuro?'],
  ['03', 'when', 'Quando andare'], ['04', 'getting', 'Come arrivare'],
  ['05', 'see', 'Cosa vedere e fare'], ['06', 'community', 'Le comunità'],
  ['07', 'sleep', 'Dove dormire'], ['08', 'costs', 'Costi'],
  ['09', 'tips', 'Da sapere prima'],
]);
const tocEs = mkToc([
  ['01', 'what', 'Qué es el Guaviare'], ['02', 'access', '¿Es seguro?'],
  ['03', 'when', 'Cuándo ir'], ['04', 'getting', 'Cómo llegar'],
  ['05', 'see', 'Qué ver y hacer'], ['06', 'community', 'Las comunidades'],
  ['07', 'sleep', 'Dónde dormir'], ['08', 'costs', 'Costes'],
  ['09', 'tips', 'Antes de ir'],
]);

export const guaviare: Record<Lang, GuaviareLang> = {
  it: {
    kicker: 'Guida · Guaviare · Colombia',
    title: 'Guaviare guida completa: costi, itinerario e sicurezza (2026)',
    sub: 'Guida pratica a San José del Guaviare: quando andare, come arrivare, cosa vedere, e perché questa regione protetta si visita solo con tour locali regolati.',
    facts: [{ n: 'Lug/Nov', l: 'stagione migliore' }, { n: '3 giorni', l: 'circuito classico' }, { n: '12.000+ anni', l: 'arte rupestre' }, { n: 'da 400€', l: 'guidato' }],
    tocTitle: 'In questa guida',
    toc: tocIt,
    body: it_body,
    back: '← Journal',
  },
  en: {
    kicker: 'Guide · Guaviare · Colombia',
    title: 'Guaviare Complete Guide: Cost, Itinerary & Safety (2026)',
    sub: 'A practical guide to San José del Guaviare: when to go, how to get there, what to see, and why this protected region is visited only through local, regulated tours.',
    facts: [{ n: 'Jul/Nov', l: 'best season' }, { n: '3 days', l: 'classic loop' }, { n: '12,000+ yr', l: 'rock art' }, { n: 'from 400€', l: 'guided' }],
    tocTitle: 'In this guide',
    toc: tocEn,
    body: en_body,
    back: '← Journal',
  },
  es: {
    kicker: 'Guía · Guaviare · Colombia',
    title: 'Guaviare guía completa: costes, itinerario y seguridad (2026)',
    sub: 'Guía práctica a San José del Guaviare: cuándo ir, cómo llegar, qué ver, y por qué esta región protegida se visita solo con tours locales regulados.',
    facts: [{ n: 'Jul/Nov', l: 'mejor temporada' }, { n: '3 días', l: 'circuito clásico' }, { n: '12.000+ años', l: 'arte rupestre' }, { n: 'desde 400€', l: 'guiado' }],
    tocTitle: 'En esta guía',
    toc: tocEs,
    body: es_body,
    back: '← Journal',
  },
};

export const guaviareMeta = {
  slug: 'guaviare-giungla-colombia-guida',
  date: '2026-08-01',
  cover: M.cover,
  titleTag: {
    en: 'Guaviare Complete Guide: Cost, Itinerary & Safety (2026)',
    it: 'Guaviare guida completa: costi, itinerario e sicurezza (2026)',
    es: 'Guaviare guía completa: costes, itinerario y seguridad (2026)',
  } as Record<Lang, string>,
  keywords: {
    en: 'Guaviare travel guide, San José del Guaviare, Cerro Azul rock art, Tranquilandia coloured river, Raudal del Guayabero, Colombia Amazon, Guaviare tours, La Lindosa, pink river dolphins Colombia',
    it: 'guida Guaviare, San José del Guaviare, arte rupestre Cerro Azul, fiume colorato Tranquilandia, Raudal del Guayabero, Amazzonia Colombia, tour Guaviare, La Lindosa, delfini rosa',
    es: 'guía Guaviare, San José del Guaviare, arte rupestre Cerro Azul, río de colores Tranquilandia, Raudal del Guayabero, Amazonía Colombia, tours Guaviare, La Lindosa, delfines rosados',
  } as Record<Lang, string>,
  desc: {
    en: 'A practical guide to San José del Guaviare: when to go, how to get there, what to see (Cerro Azul rock art, the coloured river of Tranquilandia, the Raudal del Guayabero), costs, and why the region is visited only through local, regulated tours.',
    it: "Guida pratica a San José del Guaviare: quando andare, come arrivare, cosa vedere (l'arte rupestre di Cerro Azul, il fiume colorato di Tranquilandia, il Raudal del Guayabero), costi, e perché la regione si visita solo con tour locali regolati.",
    es: 'Guía práctica a San José del Guaviare: cuándo ir, cómo llegar, qué ver (el arte rupestre de Cerro Azul, el río de colores de Tranquilandia, el Raudal del Guayabero), costes, y por qué la región se visita solo con tours locales regulados.',
  } as Record<Lang, string>,
};
