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

// Media reali (Cloudinary). Immagini con q_auto,f_auto; video lasciati grezzi.
// Video serviti come .mp4 (Cloudinary transcodifica dai .mov originali) per
// compatibilità cross-browser: Chrome/Firefox non riproducono i QuickTime .mov.
const M = {
  cover: 'https://res.cloudinary.com/dligvuje7/video/upload/f_auto,q_auto/v1783965261/dji_fly_20251012_134212_108_1760268531535_video_ndkgwk.mp4',
  arrive: 'https://res.cloudinary.com/dligvuje7/image/upload/q_auto,f_auto/v1783965784/IMG_8817_sdhbgj.jpg',
  map: 'https://res.cloudinary.com/dligvuje7/image/upload/q_auto,f_auto/v1783970284/Gemini_Generated_Image_tlq7cqtlq7cqtlq7_bncfja.png',
  piaynemo: 'https://res.cloudinary.com/dligvuje7/video/upload/f_auto,q_auto/v1783970653/dji_fly_20251012_124414_98_1760268534519_video_vhx30u.mp4',
  scenery: 'https://res.cloudinary.com/dligvuje7/image/upload/q_auto,f_auto/v1783965783/IMG_8816_cmexod.jpg',
  diving: 'https://res.cloudinary.com/dligvuje7/image/upload/q_auto,f_auto/v1783967443/IMG_8571_2_xsjewk.jpg',
  hs1: 'https://res.cloudinary.com/dligvuje7/image/upload/q_auto,f_auto/v1783963185/IMG_8812_masehq.jpg',
  hs2: 'https://res.cloudinary.com/dligvuje7/image/upload/q_auto,f_auto/v1783963185/IMG_8813_nwuzes.jpg',
  hs3: 'https://res.cloudinary.com/dligvuje7/image/upload/q_auto,f_auto/v1783963186/IMG_8811_cy43xf.jpg',
  hs4: 'https://res.cloudinary.com/dligvuje7/image/upload/q_auto,f_auto/v1783963937/IMG_9475_kylnm2.jpg',
  corepen: 'https://res.cloudinary.com/dligvuje7/video/upload/f_auto,q_auto/v1783962769/dji_fly_20251008_092056_79_1759883175502_video_k2igtz.mp4',
  ethics: 'https://res.cloudinary.com/dligvuje7/video/upload/f_auto,q_auto/v1783963033/IMG_9402_i3wrc0.mp4',
};

const slider = (alt: string, cap: string) => `
<div class="tdp-gallery"><div class="tdp-track" id="tdpTrack">
<img src="${M.hs1}" alt="${alt}"><img src="${M.hs2}" alt="${alt}"><img src="${M.hs3}" alt="${alt}"><img src="${M.hs4}" alt="${alt}">
</div><button class="tdp-arrow tdp-prev" onclick="tdpSlide(-1)" aria-label="Prev">&#8249;</button><button class="tdp-arrow tdp-next" onclick="tdpSlide(1)" aria-label="Next">&#8250;</button><div class="tdp-dots" id="tdpDots"></div></div>
<div class="tdp-cap-live">${cap}</div>`;

const hsModal = (t: { k: string; title: string; body: string; close: string }) => `
<div class="backdrop" id="rajaHs" onclick="if(event.target===this)rajaHs(false)">
  <div class="modal">
    <div class="modal-h"><div><p class="ms">${t.k}</p><p class="mt">${t.title}</p></div><button class="modal-x" onclick="rajaHs(false)" aria-label="${t.close}">&#10005;</button></div>
    <div class="stay"><p class="s-note">${t.body}</p></div>
  </div>
</div>`;

// ─────────────────────────── ENGLISH ───────────────────────────
const en_body = `
<div class="tdp-fig"><video muted loop playsinline src="${M.cover}"></video></div>

<section><p class="lead"><span class="drop">R</span>aja Ampat is an Indonesian archipelago off West Papua, the epicentre of marine biodiversity on the planet. In the heart of the «Coral Triangle» it holds over 1,500 largely uninhabited islands, 75% of the world's known coral species and more than 1,500 fish species. Its name, «The Four Kings», comes from a legend tied to four islands: Waigeo, Batanta, Salawati and Misool. What follows is a field-tested plan, a week in the west, a week in the east.</p></section>

<section id="getting-there"><span class="eyebrow">01</span><h2>Getting there</h2>
<p>No airline flies direct from Europe. Route through a major Indonesian hub, Jakarta, Bali or Makassar, then take a domestic leg into <strong>Sorong (SOQ)</strong>, the mainland gateway city. From Sorong you still need to reach <strong>Waisai</strong>, the regency capital on Waigeo island:</p>
<ul><li><strong>Public ferry</strong>, about two hours. One sailing daily at 14:00, plus an extra 9:00 departure on Sundays. Economy ~150,000 IDR (~€9); VIP cabin with air-con and private bathroom ~250,000 IDR (~€15). Bought same-day at the port.</li>
<li><strong>Private speedboat</strong>, faster, but roughly €350/400 each way.</li></ul>
<div class="tip"><b>Buffer nights, both ends</b>Ferry and flight connections are tight and delays are common, so plan <strong>two extra nights in Sorong</strong>, one on the way in, one on the way out. A good excuse to treat yourself to a proper hotel before and after the spartan homestay stretch: the <strong>Aston Sorong</strong> (~€35/night) is the reliable pick, or the <strong>Favehotel</strong> for a fair balance of comfort and price, with a small but decent spa.</div>
<div class="tip"><b>Bali/Sorong: only Garuda</b><strong>Garuda Indonesia</strong> is currently the only carrier on the Bali/Sorong route, and it isn't always reliable, mine was cancelled and rerouted via Jakarta.</div>
FLIGHT
<div class="tdp-fig"><img src="${M.arrive}" alt="Arriving in Raja Ampat"></div>
</section>

<section id="getting-around"><span class="eyebrow">02</span><h2>Moving between the islands</h2>
<p>Past Waisai, boats are the only way to get anywhere, and this is the single biggest line item of the whole trip. Fares are quoted <strong>per boat, not per person</strong>, so sharing a ride cuts the cost drastically.</p>
<div class="tdp-fig"><img src="${M.map}" alt="Map of Raja Ampat"><div class="tdp-cap">The islands around the Dampier Strait and Waisai.</div></div>
<table><tr><th>Route</th><th class="r">Price per boat</th></tr>
<tr><td>Waisai → Corepen Homestay</td><td class="r">500,000 IDR</td></tr>
<tr><td>Waisai → Kri Island</td><td class="r">500k/700k IDR</td></tr>
<tr><td>Waisai → Fam Islands</td><td class="r">2m/3m IDR</td></tr>
<tr><td>Waisai → Gam</td><td class="r">700k/1m IDR</td></tr></table>
<div class="tip"><b>Find a boat-share</b>Ask at your homestay or reception first, they'll often help arrange a shared ride. Otherwise the Facebook group «Raja Ampat Backpackers / Travellers» or the newer <a href="https://rajaride.com/" target="_blank" rel="noopener">Raja Ride</a> both work well for finding people to split a transfer with.</div>
</section>

<section id="when-to-go"><span class="eyebrow">03</span><h2>When to go</h2>
<p>Aim for <strong>October/November through April</strong>, the local dry season, which runs opposite the rainy season elsewhere in Indonesia. Rain still falls year-round, usually short heavy bursts that clear into dramatic sunsets. Seas are calmest and visibility best in this window; manta encounters peak December/March.</p>
</section>

<section id="fees"><span class="eyebrow">04</span><h2>Mandatory fees</h2>
<p>Two separate fees are required to enter the marine park. Pay both <strong>online before you arrive</strong> if you can, since the local offices are often closed.</p>
<table><tr><th>Fee</th><th class="r">International</th><th class="r">Indonesian</th></tr>
<tr><td>Marine Park Environmental Service Fee</td><td class="r">700,000</td><td class="r">425,000</td></tr>
<tr><td>Visitor Entry Ticket</td><td class="r">1,000,000</td><td class="r">300,000</td></tr></table>
<ul><li><strong>Marine Park fee</strong>, pay <a href="https://kkprajaampat.com/en/marine-park-fees-2/" target="_blank" rel="noopener">online in advance</a>.</li>
<li><strong>Visitor Entry Ticket</strong>, pay <a href="https://sipari-rajaampat.id/en/registrasi/international-online-registration/" target="_blank" rel="noopener">online</a>, or in person at the port office on arrival.</li></ul>
</section>

<section id="duration"><span class="eyebrow">05</span><h2>How long to stay</h2>
<ul><li><strong>Minimum worth it</strong>, 6/7 days on the ground, travel days excluded.</li>
<li><strong>Comfortable</strong>, 10/14 days to move between islands without rushing.</li>
<li><strong>~15 days</strong> lets you pair the north (Waigeo, Piaynemo) with remote Misool in the south, at the cost of longer crossings.</li></ul>
</section>

<section id="see-do"><span class="eyebrow">06</span><h2>What to see and do</h2>
<p><strong>Underwater</strong> is why most people come: mantas, wobbegong sharks, dense fish schools, coral walls, pygmy seahorses. Reefs often start metres from shore or right under the jetties, so snorkelling works for beginners too, though currents at some sites demand real experience.</p>
<div class="tdp-fig"><video muted loop playsinline src="${M.piaynemo}"></video></div>
<p><strong>Piaynemo</strong> holds the archipelago's signature karst viewpoint, turquoise, islet-studded lagoons seen from above after a short, steep climb.</p>
<div class="tip"><b>Wayag currently closed</b>Wayag is closed to all visitors for now, following local protests tied to disputes over regional mining permits. Check the latest status before planning around it, Piaynemo remains open and is the more accessible viewpoint anyway.</div>
<p><strong>Arborek village</strong> is worth a slow wander on its own, not just a snorkel stop, a genuine look at local life and tradition. On land, <strong>Kali Biru</strong> on Waigeo is a strikingly clear freshwater river through the jungle, and guided dawn walks, especially on Batanta, can turn up the Red and Wilson's Birds of Paradise.</p>
<p>Further south, <strong>Misool</strong> stands apart: dramatic karst rising straight from the sea, hidden caves and submerged archaeological remains, a longer trip, but a different side of Raja Ampat.</p>
<div class="tdp-fig"><img src="${M.scenery}" alt="Raja Ampat scenery"></div>
</section>

<section id="diving"><span class="eyebrow">07</span><h2>Diving notes</h2>
<p>Diving is the main character of any Raja Ampat trip, and genuinely one of the most stunning underwater experiences on the planet, but this isn't an easy destination for everyone. Currents can be extremely strong and shift fast, so you need to be comfortable both in the water and with your gear before you get here. Come with at least an <strong>Advanced Open Water</strong> licence and a fair number of logged dives. This isn't the place to be figuring out buoyancy for the first time.</p>
<div class="tip"><b>Not a beginner spot</b>Steer clear of discovery or «baptism» dives, and avoid dive centres that offer them at all. The conditions here aren't forgiving enough for someone diving without real experience, and it puts everyone else on the boat at risk too.</div>
<p>Because Raja Ampat is remote, plan for the worst case even if you never need it. The nearest hyperbaric chamber is in <strong>Sorong</strong>, hours away by boat from most homestays, so travel with proper <strong>DAN</strong> diving insurance and make sure your dive centre knows the evacuation procedure. On the flight side, don't fly for at least 18 hours after your last dive, 24 hours is the safer rule, and give yourself more if you've been diving several days in a row.</p>
<div class="tdp-fig"><img src="${M.diving}" alt="Diving in Raja Ampat"></div>
<p>None of this is meant to scare you off, it's meant to make sure you actually get to enjoy it. Few places on earth compare, and for any diver this is a once-in-a-lifetime experience genuinely worth the effort to get there.</p>
<details class="tdp-acc"><summary>My favourite dive sites</summary><div class="acc-body">
<p><strong>Cape Kri</strong>, one of my personal favourites, and a genuine bucket-list site. Currents can be very strong, so this is exactly where reef hooks come in: on many dives you'll want one to hold position and watch the show go by. Don't show up never having used one, get shown the proper technique first, since a badly placed hook damages the reef and a badly used one can put you in a bad spot in a strong current.</p>
<p><strong>Mayhem</strong>, less famous than Cape Kri, but the density of life makes it easily worth the trip.</p>
<p><strong>Sawandarek</strong>, a gentler, easy-going dive, great to mix in between the more current-heavy sites.</p>
<p><strong>Batu Lima, at night</strong>, the best night dive I did in Raja Ampat. If you're into big pelagics, prioritise this one after dark.</p>
<p><strong>Manta Point</strong>, watching mantas glide by, unhurried and enormous, is worth the whole trip on its own. Elegance is the only word for it.</p>
</div></details>
</section>

<section id="stay"><span class="eyebrow">08</span><h2>Where to stay</h2>
<table><tr><th>Type</th><th class="r">Typical price / night</th></tr>
<tr><td>Homestay <button type="button" class="hs-i" onclick="rajaHs(true)" aria-label="About homestays">i</button></td><td class="r">€30/€50</td></tr>
<tr><td>Eco-lodge / dive resort</td><td class="r">€150/€280</td></tr>
<tr><td>Liveaboard</td><td class="r">€200/€400</td></tr></table>
<p>Homestays are wood or bamboo bungalows run by Papuan families, the cheapest, most authentic option. Resorts and liveaboards trade that simplicity for comfort and easier access to remote dive sites.</p>
${slider('Homestay room', 'Rooms and homestays.')}
<div class="tip"><b>Choosing an island</b><strong>Kri</strong>: lively, social. <strong>Arborek</strong>: fishing village, close to Manta Point. <strong>Gam</strong>: quieter, near Manta Sandy and Kali Biru. <strong>Batanta</strong>: inland excursions, birdwatching, jungle walks, but off the main routes, so budget extra time and cost.</div>
STAY
</section>

<section id="experience"><span class="eyebrow">09</span><h2>My split: west and east of the Dampier Strait</h2>
<p>I'd strongly recommend homestays over resorts. To keep the budget down, the main lever is minimising inter-island moves, so split your stay between the <strong>west and east side of the Dampier Strait</strong> rather than hopping around.</p>
<div class="tip"><b>Coral under stress</b>The Dampier Strait is also where climate change is starting to show, warming water and rising salinity are visibly stressing sites like <strong>Melissa's Garden</strong>, once a textbook-perfect coral garden. Still worth diving, but the change is noticeable year to year.</div>
<p>Dives generally run about <strong>€30 each</strong> and include transfer to the site within a certain radius. Based in <strong>Corepen</strong>, Cape Kri was covered at no extra cost, but reaching Mayhem meant an extra transport fee. Based in <strong>Arborek</strong>, Mayhem was reachable with no extra charge, worth factoring in when picking a base.</p>
<h3>West side pick: Corepen</h3>
<div class="tdp-fig"><video muted loop playsinline src="${M.corepen}"></video></div>
<p>My top choice overall. Great food, and a dive centre on-site, so no need to book dives in advance, you just get priority on the boat as a guest.</p>
<details class="tdp-acc"><summary>Corepen, diving prices</summary><div class="acc-body"><table>
<tr><td>Day dive (with equipment)</td><td class="r">600,000 IDR</td></tr>
<tr><td>Night dive</td><td class="r">700,000 IDR</td></tr></table></div></details>
<h3>East side pick: Arborek</h3>
<p>For a different flavour of the trip, Arborek is the only true town-island in the area, a real chance to see daily life and local tradition up close. I'd recommend <strong>Arborek Dive Shop</strong> without hesitation.</p>
<details class="tdp-acc"><summary>Arborek Dive Shop, price list</summary><div class="acc-body"><table>
<tr><td>1 dive</td><td class="r">600,000 IDR / dive</td></tr>
<tr><td>6 dives</td><td class="r">575,000 IDR / dive</td></tr>
<tr><td>10 dives</td><td class="r">550,000 IDR / dive</td></tr>
<tr><td>BCD &amp; regulator rental</td><td class="r">400,000 IDR / day</td></tr>
<tr><td>Mask, snorkel, fins rental</td><td class="r">150,000 IDR / day</td></tr></table></div></details>
<h3>Splitting the boat transfers</h3>
<p>Shared, these legs came down a lot, here's how I split mine:</p>
<table><tr><th>Leg</th><th class="r">Boat</th><th class="r">Split</th><th class="r">Per person</th></tr>
<tr><td>Waisai → Corepen</td><td class="r">500k</td><td class="r">4</td><td class="r">~125k · €6</td></tr>
<tr><td>Corepen → Arborek</td><td class="r">600k</td><td class="r">3</td><td class="r">~200k · €10</td></tr>
<tr><td>Arborek → Waisai</td><td class="r">1.1m</td><td class="r">2</td><td class="r">~550k · €27</td></tr></table>
</section>

<section id="misool"><span class="eyebrow">10</span><h2>Misool</h2>
<p>Misool is supposed to be paradise, and by every account it's still largely untouched: dramatic karst islands rising straight out of the water, hidden lagoons and some of the healthiest reef density in the region. I haven't made it there myself yet, it's next on the list, so treat this as a placeholder to fill in properly once I have.</p>
<p><strong>Getting there:</strong> the public ferry to Misool usually departs <strong>Monday at 22:00</strong>, arriving the following morning. That's the theory, <strong>public ferries are not reliable at all</strong>: schedules shift, sailings get cancelled outright, and there's no real way to confirm a departure until you're at the port.</p>
<div class="tip"><b>Build in slack</b>Don't plan a tight connection around the Misool ferry. Treat the Monday sailing as a target, not a guarantee, and keep a buffer day on both ends in case it's delayed or skipped entirely.</div>
<details class="tdp-acc"><summary>What to do in Misool</summary><div class="acc-body">
<p>Everything below is second-hand, from other divers' accounts and research, not personal experience, so treat it as a starting point.</p>
<p><strong>Diving</strong> is the main draw and consistently rated among the best in Raja Ampat, if not the world: steep walls, huge fish biomass and healthier coral than much of the north, partly thanks to a long-running no-take zone around the Misool Eco Resort area.</p>
<p><strong>Karst lagoons by kayak or boat</strong>, threading between the limestone islets at low tide is one of the calmer, non-diving highlights.</p>
<p><strong>Hidden caves and blue-water mangroves</strong>, swimmable caves and lagoons tucked into the karst, plus mangrove channels clear enough to snorkel.</p>
<p><strong>Ancient rock art</strong>, hand stencils and petroglyphs on some cliff faces, left by early inhabitants, worth asking a local guide about.</p>
</div></details>
</section>

<section id="budget"><span class="eyebrow">11</span><h2>Budget</h2>
<p>On the ground, costs stay reasonable thanks to the exchange rate, and sharing boat transfers is what makes the biggest dent. Flights are the real variable, so here's the full picture, not just the on-site spend.</p>
<table><tr><th>Item</th><th class="r">Cost</th></tr>
<tr><td>Corepen Homestay, 7 nights, full board</td><td class="r">€288</td></tr>
<tr><td>Kalabia Homestay (Arborek), 4 nights, full board</td><td class="r">€128</td></tr>
<tr><td>Sorong ↔ Waisai ferry, round trip (economy)</td><td class="r">~€18</td></tr>
<tr><td>Marine Park + Visitor Entry fees (intl.)</td><td class="r">~€82</td></tr>
<tr><td>Boat transfers, shared</td><td class="r">~€6/27 per leg</td></tr>
<tr><td>Diving, per dive</td><td class="r">~€29 day / ~€34 night</td></tr></table>
<h3>Full trip, door to door</h3>
<table><tr><td>Return international flight (Europe ↔ Bali/Jakarta)</td><td class="r">~€850/1,050</td></tr>
<tr><td>Domestic leg(s) to Sorong, return</td><td class="r">~€150/250</td></tr>
<tr><td>On-site spend (stays, dives, fees, transfers, food)</td><td class="r">~€600/700</td></tr>
<tr><td>Buffer nights in Sorong (2, hotel + food)</td><td class="r">~€80/120</td></tr>
<tr class="total"><td>Rough total per person</td><td class="r big">~€1,700/2,100</td></tr></table>
<div class="tip"><b>On airfares</b>Fares swing a lot with season and how far ahead you book, the figure above assumes an average fare, not a rock-bottom deal. Booking the domestic leg together with the international ticket, on the same alliance, is usually the cheapest way to avoid a pricier one-off domestic fare.</div>
</section>

<section id="ethics"><span class="eyebrow">12</span><h2>Travelling ethically</h2>
<p>Raja Ampat's reefs and its economy run on the same principle: keep the money and the impact local. Book Papuan family-run homestays over resort chains, it's the difference between the trip funding a household directly or a distant investor, and pay both marine park fees in full, since patrolling and conservation are financed directly off that money.</p>
<p>The reef asks for little: don't touch it, don't stand on it, and keep your hands to yourself around mantas, sharks and anything else protected. On land, carry a reusable bottle, homestays run on tank water and there's no waste infrastructure to absorb plastic once it's here.</p>
<p>Village life deserves the same care. Ask before pointing a camera at someone, especially in a place like Arborek, and keep shoulders and knees covered once you're off the beach and among houses. Buy souvenirs and snacks from residents rather than imported shops, and if you're bringing gifts, notebooks or school supplies land better than cash. A little homework before you arrive, Arborek's two-family social structure is a good example, goes a long way.</p>
<div class="tdp-fig"><video muted loop playsinline src="${M.ethics}"></video></div>
<div class="tip"><b>In short</b>Go fewer places, stay longer in each, choose the homestay over the resort, and remember you're a guest in both the reef and the village, not a customer of either.</div>
</section>

<section id="tips" style="border-bottom:0"><span class="eyebrow">13</span><h2>Practical tips</h2>
<ul><li><strong>Visa</strong>, visa-on-arrival (30 days) for many nationalities; verify current rules before departure.</li>
<li><strong>Connectivity</strong>, weak or nonexistent phone/internet on many islands; plan around it.</li>
<li><strong>Clothing</strong>, tropical heat overall, cool after rain or in wind; pack a light rain shell.</li>
<li><strong>Insurance</strong>, given the remoteness, travel insurance with medical evacuation and delay/cancellation cover is worth having, on top of DAN diving cover.</li></ul>
<p class="rf-foot" style="margin-top:20px">Field notes from someone who's actually been there: <b>7 days at Corepen, 5 on Arborek</b>, Misool still to come.</p>
</section>
${hsModal({ k: 'Homestays', title: 'What to expect', close: 'Close', body: "Basic by design, that's the trade-off for the price and the access to local life. Electricity usually runs only in the evening, roughly <strong>6pm to 11pm</strong>. Food is simple and balanced: typically a protein, rice and beans, plus fruit." })}
`;

const en_flight = flightForm({ k: 'SEARCH FLIGHTS', title: 'Find your flight to Sorong', src: 'Price comparison · Skyscanner', from: 'From', to: 'To', dep: 'Depart', ret: 'Return', btn: 'Search flights' });
const en_stay = stayForm({ k: 'BOOK YOUR STAY', title: 'Find where to sleep', src: 'Availability · Stay Raja Ampat', zone: 'Area', zoneph: 'e.g. Kri, Arborek…', cin: 'Check-in', cout: 'Check-out', btn: 'Search' });

// ─────────────────────────── ITALIANO ───────────────────────────
const it_body = `
<div class="tdp-fig"><video muted loop playsinline src="${M.cover}"></video></div>

<section><p class="lead"><span class="drop">R</span>aja Ampat è un arcipelago indonesiano al largo della Papua Occidentale, l'epicentro mondiale della biodiversità marina. Nel cuore del «Triangolo dei Coralli» ospita oltre 1.500 isole in gran parte disabitate, il 75% delle specie di corallo conosciute e più di 1.500 specie di pesci. Il nome, «I Quattro Re», deriva da una leggenda legata a quattro isole: Waigeo, Batanta, Salawati e Misool. Quella che segue è un'organizzazione provata sul campo, una settimana a ovest, una a est.</p></section>

<section id="getting-there"><span class="eyebrow">01</span><h2>Come arrivare</h2>
<p>Nessuna compagnia vola diretta dall'Europa. Si passa da un hub indonesiano, Giacarta, Bali o Makassar, e da lì un volo interno fino a <strong>Sorong (SOQ)</strong>, la città-porta sulla terraferma. Da Sorong bisogna raggiungere <strong>Waisai</strong>, capoluogo della reggenza sull'isola di Waigeo:</p>
<ul><li><strong>Traghetto pubblico</strong>, circa due ore. Una corsa al giorno alle 14:00, più una extra alle 9:00 la domenica. Economy ~150.000 IDR (~9€); cabina VIP con aria condizionata e bagno privato ~250.000 IDR (~15€). Si compra in giornata al porto.</li>
<li><strong>Speedboat privato</strong>, più veloce, ma sui 350/400€ a tratta.</li></ul>
<div class="tip"><b>Notti cuscinetto, a inizio e fine</b>Le coincidenze tra traghetti e voli sono strette e i ritardi frequenti: metti in conto <strong>due notti in più a Sorong</strong>, una all'andata e una al ritorno. Ottima scusa per concederti un vero hotel prima e dopo la parte spartana in homestay: l'<strong>Aston Sorong</strong> (~35€/notte) è la scelta affidabile, oppure il <strong>Favehotel</strong> per un buon equilibrio tra comfort e prezzo, con una spa piccola ma dignitosa.</div>
<div class="tip"><b>Bali/Sorong: solo Garuda</b><strong>Garuda Indonesia</strong> è al momento l'unica compagnia sulla tratta Bali/Sorong, e non sempre affidabile, il mio volo è stato cancellato e dirottato via Giacarta.</div>
FLIGHT
<div class="tdp-fig"><img src="${M.arrive}" alt="Arrivo a Raja Ampat"></div>
</section>

<section id="getting-around"><span class="eyebrow">02</span><h2>Spostarsi tra le isole</h2>
<p>Dopo Waisai la barca è l'unico modo per muoversi, ed è la voce di spesa più pesante di tutto il viaggio. I prezzi sono <strong>a barca, non a persona</strong>: condividere il passaggio abbatte drasticamente il costo.</p>
<div class="tdp-fig"><img src="${M.map}" alt="Mappa di Raja Ampat"><div class="tdp-cap">Le isole intorno allo Stretto di Dampier e a Waisai.</div></div>
<table><tr><th>Tratta</th><th class="r">Prezzo a barca</th></tr>
<tr><td>Waisai → Corepen Homestay</td><td class="r">500.000 IDR</td></tr>
<tr><td>Waisai → Kri</td><td class="r">500k/700k IDR</td></tr>
<tr><td>Waisai → Isole Fam</td><td class="r">2m/3m IDR</td></tr>
<tr><td>Waisai → Gam</td><td class="r">700k/1m IDR</td></tr></table>
<div class="tip"><b>Trova con chi dividere</b>Chiedi prima in homestay o alla reception, spesso ti aiutano a organizzare un passaggio condiviso. In alternativa il gruppo Facebook «Raja Ampat Backpackers / Travellers» o il più recente <a href="https://rajaride.com/" target="_blank" rel="noopener">Raja Ride</a> funzionano bene per trovare compagni con cui dividere il transfer.</div>
</section>

<section id="when-to-go"><span class="eyebrow">03</span><h2>Quando andare</h2>
<p>Punta su <strong>ottobre/novembre ad aprile</strong>, la stagione secca locale, opposta a quella delle piogge nel resto dell'Indonesia. Piove comunque tutto l'anno, di solito brevi rovesci intensi che aprono a tramonti spettacolari. In questa finestra il mare è calmo e la visibilità è al massimo; gli incontri con le mante sono più frequenti tra dicembre e marzo.</p>
</section>

<section id="fees"><span class="eyebrow">04</span><h2>Tasse obbligatorie</h2>
<p>Per entrare nel parco marino servono due tasse distinte. Pagale entrambe <strong>online prima di arrivare</strong>, se puoi: gli uffici locali sono spesso chiusi.</p>
<table><tr><th>Tassa</th><th class="r">Straniero</th><th class="r">Indonesiano</th></tr>
<tr><td>Marine Park Environmental Service Fee</td><td class="r">700.000</td><td class="r">425.000</td></tr>
<tr><td>Visitor Entry Ticket</td><td class="r">1.000.000</td><td class="r">300.000</td></tr></table>
<ul><li><strong>Marine Park fee</strong>, paga <a href="https://kkprajaampat.com/en/marine-park-fees-2/" target="_blank" rel="noopener">online in anticipo</a>.</li>
<li><strong>Visitor Entry Ticket</strong>, paga <a href="https://sipari-rajaampat.id/en/registrasi/international-online-registration/" target="_blank" rel="noopener">online</a>, oppure di persona all'ufficio del porto all'arrivo.</li></ul>
</section>

<section id="duration"><span class="eyebrow">05</span><h2>Quanti giorni servono</h2>
<ul><li><strong>Minimo che valga la pena</strong>, 6/7 giorni sul posto, esclusi i giorni di viaggio.</li>
<li><strong>Comodo</strong>, 10/14 giorni per muoversi tra le isole senza fretta.</li>
<li><strong>~15 giorni</strong> per abbinare il nord (Waigeo, Piaynemo) alla remota Misool a sud, al prezzo di traversate più lunghe.</li></ul>
</section>

<section id="see-do"><span class="eyebrow">06</span><h2>Cosa vedere e fare</h2>
<p><strong>Il sottacqua</strong> è il motivo per cui quasi tutti arrivano fin qui: mante, squali wobbegong, banchi fittissimi, pareti di corallo, cavallucci pigmei. Spesso la barriera parte a pochi metri dalla riva o sotto i pontili, quindi lo snorkeling è alla portata anche dei principianti, ma in alcuni siti le correnti richiedono vera esperienza.</p>
<div class="tdp-fig"><video muted loop playsinline src="${M.piaynemo}"></video></div>
<p><strong>Piaynemo</strong> è il punto panoramico kárstico simbolo dell'arcipelago, lagune turchesi punteggiate di isolotti viste dall'alto dopo una breve salita ripida.</p>
<div class="tip"><b>Wayag al momento chiusa</b>Wayag è per ora chiusa ai visitatori, dopo proteste locali legate a dispute sui permessi minerari regionali. Verifica lo stato aggiornato prima di pianificarci sopra, Piaynemo resta aperta ed è comunque il belvedere più accessibile.</div>
<p>Il <strong>villaggio di Arborek</strong> merita una passeggiata lenta, non solo una sosta snorkeling, uno sguardo autentico sulla vita e le tradizioni locali. Sulla terraferma, <strong>Kali Biru</strong> su Waigeo è un fiume d'acqua dolce di una trasparenza sorprendente nella giungla, e le camminate guidate all'alba, soprattutto su Batanta, possono regalare l'Uccello del Paradiso Rosso e quello di Wilson.</p>
<p>Più a sud, <strong>Misool</strong> è un mondo a parte: karst che emerge dritto dal mare, grotte nascoste e resti archeologici sommersi, un viaggio più lungo, ma un altro volto di Raja Ampat.</p>
<div class="tdp-fig"><img src="${M.scenery}" alt="Paesaggi di Raja Ampat"></div>
</section>

<section id="diving"><span class="eyebrow">07</span><h2>Immersioni</h2>
<p>Le immersioni sono il vero protagonista di qualsiasi viaggio a Raja Ampat, e tra le esperienze subacquee più belle del pianeta, ma non è una meta facile per tutti. Le correnti possono essere fortissime e cambiare in fretta, quindi devi essere a tuo agio sia in acqua sia con l'attrezzatura prima di arrivare. Vieni con almeno un brevetto <strong>Advanced Open Water</strong> e un buon numero di immersioni loggate. Non è il posto dove imparare l'assetto per la prima volta.</p>
<div class="tip"><b>Non è un posto da principianti</b>Evita i battesimi e le immersioni «prova», ed evita i centri che li propongono. Le condizioni qui non perdonano chi si immerge senza vera esperienza, e mette a rischio anche gli altri sulla barca.</div>
<p>Essendo Raja Ampat remota, metti in conto lo scenario peggiore anche se non ti servirà. La camera iperbarica più vicina è a <strong>Sorong</strong>, a ore di barca dalla maggior parte delle homestay: viaggia con una vera assicurazione subacquea <strong>DAN</strong> e assicurati che il centro conosca la procedura di evacuazione. Sul volo, non prenderlo per almeno 18 ore dopo l'ultima immersione, 24 ore è la regola più prudente, e concediti di più se hai fatto immersioni per più giorni di fila.</p>
<div class="tdp-fig"><img src="${M.diving}" alt="Immersioni a Raja Ampat"></div>
<p>Niente di tutto questo vuole spaventarti, serve solo perché tu te la goda davvero. Pochi posti al mondo reggono il confronto, e per qualsiasi subacqueo è un'esperienza da una volta nella vita che vale ogni fatica per arrivarci.</p>
<details class="tdp-acc"><summary>I miei siti preferiti</summary><div class="acc-body">
<p><strong>Cape Kri</strong>, uno dei miei preferiti in assoluto, un sito da lista dei desideri. Le correnti possono essere fortissime, ed è proprio qui che serve il reef hook: in molte immersioni vorrai agganciarti per tenere la posizione e goderti lo spettacolo. Non presentarti senza averlo mai usato, fatti mostrare prima la tecnica corretta, perché un gancio piazzato male danneggia la barriera e usato male può metterti in difficoltà in corrente forte.</p>
<p><strong>Mayhem</strong>, meno famoso di Cape Kri, ma la densità di vita lo rende assolutamente da fare.</p>
<p><strong>Sawandarek</strong>, un'immersione più tranquilla, ottima da alternare ai siti con più corrente.</p>
<p><strong>Batu Lima, di notte</strong>, la miglior immersione notturna che ho fatto a Raja Ampat. Se ami i grandi pelagici, dalle priorità dopo il tramonto.</p>
<p><strong>Manta Point</strong>, vedere le mante scivolare via, lente ed enormi, vale da solo l'intero viaggio. Eleganza è l'unica parola giusta.</p>
</div></details>
</section>

<section id="stay"><span class="eyebrow">08</span><h2>Dove dormire</h2>
<table><tr><th>Tipo</th><th class="r">Prezzo tipico / notte</th></tr>
<tr><td>Homestay <button type="button" class="hs-i" onclick="rajaHs(true)" aria-label="Sulle homestay">i</button></td><td class="r">30€/50€</td></tr>
<tr><td>Eco-lodge / dive resort</td><td class="r">150€/280€</td></tr>
<tr><td>Liveaboard</td><td class="r">200€/400€</td></tr></table>
<p>Le homestay sono bungalow di legno o bambù gestiti da famiglie papuane, l'opzione più economica e autentica. Resort e liveaboard barattano quella semplicità con più comfort e un accesso più facile ai siti remoti.</p>
${slider('Camera in homestay', 'Camere e homestay.')}
<div class="tip"><b>Scegliere l'isola</b><strong>Kri</strong>: viva, socievole. <strong>Arborek</strong>: villaggio di pescatori, vicino a Manta Point. <strong>Gam</strong>: più tranquilla, vicino a Manta Sandy e Kali Biru. <strong>Batanta</strong>: escursioni nell'entroterra, birdwatching, giungla, ma fuori dalle rotte principali, quindi metti in conto tempo e costi extra.</div>
STAY
</section>

<section id="experience"><span class="eyebrow">09</span><h2>La mia scelta: ovest ed est dello Stretto di Dampier</h2>
<p>Consiglio con forza le homestay ai resort. Per tenere basso il budget la leva principale è ridurre gli spostamenti tra isole, quindi dividi il soggiorno tra il <strong>lato ovest e il lato est dello Stretto di Dampier</strong> invece di saltare da un'isola all'altra.</p>
<div class="tip"><b>Corallo sotto stress</b>Lo Stretto di Dampier è anche dove il cambiamento climatico inizia a vedersi, acqua più calda e salinità in aumento stressano visibilmente siti come <strong>Melissa's Garden</strong>, un tempo un giardino di corallo da manuale. Vale ancora l'immersione, ma il cambiamento si nota di anno in anno.</p>
<p>Le immersioni costano in genere circa <strong>30€</strong> e includono il transfer al sito entro un certo raggio. Con base a <strong>Corepen</strong>, Cape Kri era coperto senza sovrapprezzo, ma per Mayhem c'era un costo di trasporto extra. Con base ad <strong>Arborek</strong>, Mayhem si raggiungeva senza costi aggiuntivi, da valutare nella scelta della base.</p>
<h3>Lato ovest: Corepen</h3>
<div class="tdp-fig"><video muted loop playsinline src="${M.corepen}"></video></div>
<p>La mia scelta preferita in assoluto. Ottimo cibo e centro immersioni in loco, quindi non serve prenotare le immersioni in anticipo, come ospite hai la precedenza sulla barca.</p>
<details class="tdp-acc"><summary>Corepen, prezzi immersioni</summary><div class="acc-body"><table>
<tr><td>Immersione diurna (con attrezzatura)</td><td class="r">600.000 IDR</td></tr>
<tr><td>Immersione notturna</td><td class="r">700.000 IDR</td></tr></table></div></details>
<h3>Lato est: Arborek</h3>
<p>Per un sapore diverso del viaggio, Arborek è l'unica vera isola-paese della zona, l'occasione di vedere da vicino la vita quotidiana e le tradizioni locali. Consiglio l'<strong>Arborek Dive Shop</strong> senza esitazioni.</p>
<details class="tdp-acc"><summary>Arborek Dive Shop, listino</summary><div class="acc-body"><table>
<tr><td>1 immersione</td><td class="r">600.000 IDR / imm.</td></tr>
<tr><td>6 immersioni</td><td class="r">575.000 IDR / imm.</td></tr>
<tr><td>10 immersioni</td><td class="r">550.000 IDR / imm.</td></tr>
<tr><td>Noleggio GAV &amp; erogatore</td><td class="r">400.000 IDR / giorno</td></tr>
<tr><td>Noleggio maschera, snorkel, pinne</td><td class="r">150.000 IDR / giorno</td></tr></table></div></details>
<h3>Dividere i transfer in barca</h3>
<p>Condivise, queste tratte sono scese molto, ecco come ho diviso le mie:</p>
<table><tr><th>Tratta</th><th class="r">Barca</th><th class="r">In</th><th class="r">A testa</th></tr>
<tr><td>Waisai → Corepen</td><td class="r">500k</td><td class="r">4</td><td class="r">~125k · 6€</td></tr>
<tr><td>Corepen → Arborek</td><td class="r">600k</td><td class="r">3</td><td class="r">~200k · 10€</td></tr>
<tr><td>Arborek → Waisai</td><td class="r">1.1m</td><td class="r">2</td><td class="r">~550k · 27€</td></tr></table>
</section>

<section id="misool"><span class="eyebrow">10</span><h2>Misool</h2>
<p>Misool dovrebbe essere il paradiso, e a detta di tutti è ancora in gran parte intatta: isole kárstiche che si alzano dritte dall'acqua, lagune nascoste e una delle barriere più sane della regione. Non ci sono ancora stato, è la prossima in lista, quindi consideralo un segnaposto da riempire come si deve una volta andato.</p>
<p><strong>Come arrivare:</strong> il traghetto pubblico per Misool parte di solito il <strong>lunedì alle 22:00</strong>, con arrivo la mattina dopo. Questa è la teoria, <strong>i traghetti pubblici non sono per niente affidabili</strong>: gli orari cambiano, le corse vengono cancellate del tutto e non c'è modo di confermare la partenza finché non sei al porto.</p>
<div class="tip"><b>Lascia margine</b>Non incastrare coincidenze strette attorno al traghetto per Misool. Considera la corsa del lunedì un obiettivo, non una certezza, e tieni un giorno cuscinetto a entrambe le estremità in caso di ritardo o cancellazione.</div>
<details class="tdp-acc"><summary>Cosa fare a Misool</summary><div class="acc-body">
<p>Tutto ciò che segue è di seconda mano, dai racconti di altri sub e dalle ricerche, non da esperienza diretta, quindi prendilo come punto di partenza.</p>
<p><strong>Le immersioni</strong> sono l'attrattiva principale e costantemente tra le migliori di Raja Ampat, se non del mondo: pareti verticali, enorme biomassa ittica e corallo più sano che in gran parte del nord, grazie anche a una zona no-take di lunga data attorno al Misool Eco Resort.</p>
<p><strong>Lagune kárstiche in kayak o barca</strong>, infilarsi tra gli isolotti calcarei con la bassa marea è uno dei momenti più tranquilli, non subacquei.</p>
<p><strong>Grotte nascoste e mangrovie</strong>, grotte e lagune nuotabili incastonate nel karst, più canali di mangrovie limpidi da fare in snorkeling.</p>
<p><strong>Arte rupestre antica</strong>, stencil di mani e petroglifi su alcune pareti, lasciati dai primi abitanti, vale la pena chiedere a una guida locale.</p>
</div></details>
</section>

<section id="budget"><span class="eyebrow">11</span><h2>Budget</h2>
<p>Sul posto i costi restano ragionevoli grazie al cambio, e dividere i transfer è ciò che incide di più. I voli sono la vera variabile, quindi ecco il quadro completo, non solo la spesa in loco.</p>
<table><tr><th>Voce</th><th class="r">Costo</th></tr>
<tr><td>Corepen Homestay, 7 notti, pensione completa</td><td class="r">288€</td></tr>
<tr><td>Kalabia Homestay (Arborek), 4 notti, pensione completa</td><td class="r">128€</td></tr>
<tr><td>Traghetto Sorong ↔ Waisai, a/r (economy)</td><td class="r">~18€</td></tr>
<tr><td>Marine Park + Visitor Entry (straniero)</td><td class="r">~82€</td></tr>
<tr><td>Transfer in barca, condivisi</td><td class="r">~6/27€ per tratta</td></tr>
<tr><td>Immersioni, a immersione</td><td class="r">~29€ diurna / ~34€ notturna</td></tr></table>
<h3>Viaggio intero, porta a porta</h3>
<table><tr><td>Volo internazionale a/r (Europa ↔ Bali/Giacarta)</td><td class="r">~850/1.050€</td></tr>
<tr><td>Tratta/e interne per Sorong, a/r</td><td class="r">~150/250€</td></tr>
<tr><td>Spesa in loco (alloggi, immersioni, tasse, transfer, cibo)</td><td class="r">~600/700€</td></tr>
<tr><td>Notti cuscinetto a Sorong (2, hotel + cibo)</td><td class="r">~80/120€</td></tr>
<tr class="total"><td>Totale indicativo a persona</td><td class="r big">~1.700/2.100€</td></tr></table>
<div class="tip"><b>Sui voli</b>Le tariffe oscillano molto con la stagione e con quanto prenoti in anticipo, la cifra sopra ipotizza un prezzo medio, non un'occasione. Prenotare la tratta interna insieme al biglietto internazionale, sulla stessa alleanza, è di solito il modo più economico per evitare un volo interno singolo più caro.</div>
</section>

<section id="ethics"><span class="eyebrow">12</span><h2>Viaggiare in modo etico</h2>
<p>Le barriere di Raja Ampat e la sua economia seguono lo stesso principio: tieni locali i soldi e l'impatto. Prenota homestay a gestione familiare papuana invece delle catene resort, è la differenza tra finanziare direttamente una famiglia o un investitore lontano, e paga per intero entrambe le tasse del parco, perché pattugliamento e conservazione si finanziano proprio con quei soldi.</p>
<p>La barriera chiede poco: non toccarla, non calpestarla e tieni le mani a posto con mante, squali e qualsiasi specie protetta. A terra, porta una borraccia riutilizzabile, le homestay vanno ad acqua di cisterna e non c'è alcun sistema per smaltire la plastica una volta qui.</p>
<p>La vita del villaggio merita la stessa cura. Chiedi prima di puntare la fotocamera su qualcuno, soprattutto in un posto come Arborek, e tieni spalle e ginocchia coperte quando lasci la spiaggia e sei tra le case. Compra souvenir e spuntini dai residenti invece che dai negozi d'importazione, e se porti regali, quaderni o materiale scolastico funzionano meglio dei contanti. Un po' di preparazione prima di arrivare, la struttura a due famiglie di Arborek ne è un buon esempio, fa una gran differenza.</p>
<div class="tdp-fig"><video muted loop playsinline src="${M.ethics}"></video></div>
<div class="tip"><b>In sintesi</b>Vai in meno posti, fermati più a lungo in ognuno, scegli l'homestay al resort, e ricorda che sei un ospite sia nella barriera sia nel villaggio, non un cliente di nessuno dei due.</div>
</section>

<section id="tips" style="border-bottom:0"><span class="eyebrow">13</span><h2>Consigli pratici</h2>
<ul><li><strong>Visto</strong>, visto all'arrivo (30 giorni) per molte nazionalità; verifica le regole aggiornate prima di partire.</li>
<li><strong>Connettività</strong>, segnale telefonico/internet debole o assente su molte isole; organizzati di conseguenza.</li>
<li><strong>Abbigliamento</strong>, caldo tropicale in generale, fresco dopo la pioggia o con vento; porta una giacca antipioggia leggera.</li>
<li><strong>Assicurazione</strong>, vista la remotezza, un'assicurazione viaggio con evacuazione medica e copertura ritardi/cancellazioni è consigliata, oltre alla copertura subacquea DAN.</li></ul>
<p class="rf-foot" style="margin-top:20px">Appunti di chi c'è stato davvero: <b>7 giorni a Corepen, 5 ad Arborek</b>, Misool ancora da fare.</p>
</section>
${hsModal({ k: 'Homestay', title: 'Cosa aspettarsi', close: 'Chiudi', body: "Spartane per scelta, è il compromesso per il prezzo e per l'accesso alla vita locale. La corrente di solito c'è solo la sera, all'incirca <strong>dalle 18 alle 23</strong>. Il cibo è semplice ed equilibrato: in genere una proteina, riso e fagioli, più frutta." })}
`;

const it_flight = flightForm({ k: 'CERCA I VOLI', title: 'Trova il tuo volo per Sorong', src: 'Confronto prezzi · Skyscanner', from: 'Partenza', to: 'Destinazione', dep: 'Andata', ret: 'Ritorno', btn: 'Cerca voli' });
const it_stay = stayForm({ k: 'PRENOTA IL SOGGIORNO', title: 'Trova dove dormire', src: 'Disponibilità · Stay Raja Ampat', zone: 'Zona', zoneph: 'es. Kri, Arborek…', cin: 'Check-in', cout: 'Check-out', btn: 'Cerca' });

// ─────────────────────────── ESPAÑOL ───────────────────────────
const es_body = `
<div class="tdp-fig"><video muted loop playsinline src="${M.cover}"></video></div>

<section><p class="lead"><span class="drop">R</span>aja Ampat es un archipiélago indonesio frente a Papúa Occidental, el epicentro mundial de la biodiversidad marina. En el corazón del «Triángulo de Coral» reúne más de 1.500 islas en gran parte deshabitadas, el 75% de las especies de coral conocidas y más de 1.500 especies de peces. Su nombre, «Los Cuatro Reyes», viene de una leyenda ligada a cuatro islas: Waigeo, Batanta, Salawati y Misool. Lo que sigue es un plan probado sobre el terreno, una semana al oeste, una al este.</p></section>

<section id="getting-there"><span class="eyebrow">01</span><h2>Cómo llegar</h2>
<p>Ninguna aerolínea vuela directa desde Europa. Se hace escala en un hub indonesio, Yakarta, Bali o Makassar, y desde allí un vuelo interno hasta <strong>Sorong (SOQ)</strong>, la ciudad-puerta en tierra firme. Desde Sorong aún hay que llegar a <strong>Waisai</strong>, capital de la regencia en la isla de Waigeo:</p>
<ul><li><strong>Ferry público</strong>, unas dos horas. Una salida diaria a las 14:00, más una extra a las 9:00 los domingos. Economy ~150.000 IDR (~9€); camarote VIP con aire acondicionado y baño privado ~250.000 IDR (~15€). Se compra el mismo día en el puerto.</li>
<li><strong>Lancha privada</strong>, más rápida, pero unos 350/400€ por trayecto.</li></ul>
<div class="tip"><b>Noches colchón, a la ida y a la vuelta</b>Las conexiones entre ferries y vuelos son ajustadas y los retrasos frecuentes: cuenta con <strong>dos noches extra en Sorong</strong>, una a la ida y otra a la vuelta. Buena excusa para darte un hotel decente antes y después de la parte espartana en homestay: el <strong>Aston Sorong</strong> (~35€/noche) es la opción fiable, o el <strong>Favehotel</strong> por un buen equilibrio entre comodidad y precio, con un pequeño pero digno spa.</div>
<div class="tip"><b>Bali/Sorong: solo Garuda</b><strong>Garuda Indonesia</strong> es de momento la única compañía en la ruta Bali/Sorong, y no siempre fiable, el mío fue cancelado y desviado por Yakarta.</div>
FLIGHT
<div class="tdp-fig"><img src="${M.arrive}" alt="Llegada a Raja Ampat"></div>
</section>

<section id="getting-around"><span class="eyebrow">02</span><h2>Moverse entre las islas</h2>
<p>Pasado Waisai, el barco es la única forma de moverse, y es la mayor partida de gasto de todo el viaje. Las tarifas son <strong>por barco, no por persona</strong>: compartir el trayecto reduce muchísimo el coste.</p>
<div class="tdp-fig"><img src="${M.map}" alt="Mapa de Raja Ampat"><div class="tdp-cap">Las islas alrededor del Estrecho de Dampier y Waisai.</div></div>
<table><tr><th>Ruta</th><th class="r">Precio por barco</th></tr>
<tr><td>Waisai → Corepen Homestay</td><td class="r">500.000 IDR</td></tr>
<tr><td>Waisai → Kri</td><td class="r">500k/700k IDR</td></tr>
<tr><td>Waisai → Islas Fam</td><td class="r">2m/3m IDR</td></tr>
<tr><td>Waisai → Gam</td><td class="r">700k/1m IDR</td></tr></table>
<div class="tip"><b>Encuentra con quién compartir</b>Pregunta primero en tu homestay o en recepción, suelen ayudar a organizar un trayecto compartido. Si no, el grupo de Facebook «Raja Ampat Backpackers / Travellers» o el más reciente <a href="https://rajaride.com/" target="_blank" rel="noopener">Raja Ride</a> funcionan bien para encontrar gente con quien compartir el traslado.</div>
</section>

<section id="when-to-go"><span class="eyebrow">03</span><h2>Cuándo ir</h2>
<p>Apunta a <strong>octubre/noviembre a abril</strong>, la estación seca local, opuesta a la de lluvias en el resto de Indonesia. Llueve algo todo el año, normalmente chubascos breves e intensos que dan paso a atardeceres espectaculares. En esta ventana el mar está más en calma y la visibilidad es máxima; los encuentros con mantas son más frecuentes entre diciembre y marzo.</p>
</section>

<section id="fees"><span class="eyebrow">04</span><h2>Tasas obligatorias</h2>
<p>Para entrar al parque marino se requieren dos tasas distintas. Paga ambas <strong>online antes de llegar</strong>, si puedes: las oficinas locales suelen estar cerradas.</p>
<table><tr><th>Tasa</th><th class="r">Extranjero</th><th class="r">Indonesio</th></tr>
<tr><td>Marine Park Environmental Service Fee</td><td class="r">700.000</td><td class="r">425.000</td></tr>
<tr><td>Visitor Entry Ticket</td><td class="r">1.000.000</td><td class="r">300.000</td></tr></table>
<ul><li><strong>Marine Park fee</strong>, paga <a href="https://kkprajaampat.com/en/marine-park-fees-2/" target="_blank" rel="noopener">online por adelantado</a>.</li>
<li><strong>Visitor Entry Ticket</strong>, paga <a href="https://sipari-rajaampat.id/en/registrasi/international-online-registration/" target="_blank" rel="noopener">online</a>, o en persona en la oficina del puerto al llegar.</li></ul>
</section>

<section id="duration"><span class="eyebrow">05</span><h2>Cuántos días</h2>
<ul><li><strong>Mínimo que merece la pena</strong>, 6/7 días sobre el terreno, sin contar los de viaje.</li>
<li><strong>Cómodo</strong>, 10/14 días para moverse entre islas sin prisas.</li>
<li><strong>~15 días</strong> para combinar el norte (Waigeo, Piaynemo) con la remota Misool al sur, a costa de travesías más largas.</li></ul>
</section>

<section id="see-do"><span class="eyebrow">06</span><h2>Qué ver y hacer</h2>
<p><strong>El fondo marino</strong> es el motivo por el que casi todos vienen: mantas, tiburones wobbegong, cardúmenes densos, paredes de coral, caballitos pigmeos. A menudo el arrecife empieza a metros de la orilla o justo bajo los pontones, así que el snorkel vale también para principiantes, aunque las corrientes en algunos sitios exigen experiencia real.</p>
<div class="tdp-fig"><video muted loop playsinline src="${M.piaynemo}"></video></div>
<p><strong>Piaynemo</strong> tiene el mirador kárstico emblema del archipiélago, lagunas turquesa salpicadas de islotes vistas desde arriba tras una subida corta y empinada.</p>
<div class="tip"><b>Wayag cerrada por ahora</b>Wayag está cerrada a los visitantes por ahora, tras protestas locales ligadas a disputas sobre permisos mineros regionales. Comprueba el estado actualizado antes de planificar en torno a ella, Piaynemo sigue abierta y es de todos modos el mirador más accesible.</div>
<p>El <strong>pueblo de Arborek</strong> merece un paseo tranquilo por sí mismo, no solo una parada de snorkel, una mirada auténtica a la vida y las tradiciones locales. En tierra, <strong>Kali Biru</strong> en Waigeo es un río de agua dulce de una claridad asombrosa en plena selva, y las caminatas guiadas al amanecer, sobre todo en Batanta, pueden dar con el Ave del Paraíso Roja y la de Wilson.</p>
<p>Más al sur, <strong>Misool</strong> es otro mundo: karst que emerge recto del mar, cuevas ocultas y restos arqueológicos sumergidos, un viaje más largo, pero otra cara de Raja Ampat.</p>
<div class="tdp-fig"><img src="${M.scenery}" alt="Paisajes de Raja Ampat"></div>
</section>

<section id="diving"><span class="eyebrow">07</span><h2>Buceo</h2>
<p>El buceo es el gran protagonista de cualquier viaje a Raja Ampat, y de verdad una de las experiencias submarinas más espectaculares del planeta, pero no es un destino fácil para todos. Las corrientes pueden ser fortísimas y cambiar rápido, así que tienes que sentirte cómodo tanto en el agua como con el equipo antes de llegar. Ven con al menos un título <strong>Advanced Open Water</strong> y un buen número de inmersiones registradas. No es el lugar para descubrir la flotabilidad por primera vez.</p>
<div class="tip"><b>No es un sitio para principiantes</b>Evita los bautismos y las inmersiones «de prueba», y evita los centros que los ofrecen. Las condiciones aquí no perdonan a quien bucea sin experiencia real, y ponen en riesgo también al resto del barco.</div>
<p>Como Raja Ampat es remota, planifica el peor escenario aunque nunca lo necesites. La cámara hiperbárica más cercana está en <strong>Sorong</strong>, a horas de barco de la mayoría de las homestays: viaja con un buen seguro de buceo <strong>DAN</strong> y asegúrate de que tu centro conoce el procedimiento de evacuación. En cuanto al vuelo, no vueles al menos 18 horas tras la última inmersión, 24 horas es la regla más segura, y date más margen si has buceado varios días seguidos.</p>
<div class="tdp-fig"><img src="${M.diving}" alt="Buceo en Raja Ampat"></div>
<p>Nada de esto pretende asustarte, solo asegurarse de que lo disfrutes de verdad. Pocos lugares en la tierra se le comparan, y para cualquier buceador es una experiencia única en la vida que vale cada esfuerzo por llegar.</p>
<details class="tdp-acc"><summary>Mis puntos de buceo favoritos</summary><div class="acc-body">
<p><strong>Cape Kri</strong>, uno de mis favoritos, un sitio de lista de deseos. Las corrientes pueden ser muy fuertes, y es justo aquí donde entra el reef hook: en muchas inmersiones querrás uno para mantener la posición y disfrutar del espectáculo. No aparezcas sin haberlo usado nunca, que te enseñen antes la técnica correcta, porque un gancho mal colocado daña el arrecife y mal usado puede meterte en un aprieto con corriente fuerte.</p>
<p><strong>Mayhem</strong>, menos famoso que Cape Kri, pero la densidad de vida lo hace más que digno del viaje.</p>
<p><strong>Sawandarek</strong>, una inmersión más tranquila, ideal para alternar con los sitios de más corriente.</p>
<p><strong>Batu Lima, de noche</strong>, la mejor inmersión nocturna que hice en Raja Ampat. Si te van los grandes pelágicos, priorízala tras el anochecer.</p>
<p><strong>Manta Point</strong>, ver las mantas deslizarse, lentas y enormes, vale por sí solo todo el viaje. Elegancia es la única palabra.</p>
</div></details>
</section>

<section id="stay"><span class="eyebrow">08</span><h2>Dónde dormir</h2>
<table><tr><th>Tipo</th><th class="r">Precio típico / noche</th></tr>
<tr><td>Homestay <button type="button" class="hs-i" onclick="rajaHs(true)" aria-label="Sobre las homestays">i</button></td><td class="r">30€/50€</td></tr>
<tr><td>Eco-lodge / dive resort</td><td class="r">150€/280€</td></tr>
<tr><td>Liveaboard</td><td class="r">200€/400€</td></tr></table>
<p>Las homestays son bungalós de madera o bambú gestionados por familias papúes, la opción más económica y auténtica. Resorts y liveaboards cambian esa sencillez por comodidad y acceso más fácil a los puntos de buceo remotos.</p>
${slider('Habitación de homestay', 'Habitaciones y homestays.')}
<div class="tip"><b>Elegir la isla</b><strong>Kri</strong>: animada, sociable. <strong>Arborek</strong>: pueblo pesquero, cerca de Manta Point. <strong>Gam</strong>: más tranquila, cerca de Manta Sandy y Kali Biru. <strong>Batanta</strong>: excursiones al interior, aves, selva, pero fuera de las rutas principales, así que cuenta con tiempo y coste extra.</div>
STAY
</section>

<section id="experience"><span class="eyebrow">09</span><h2>Mi reparto: oeste y este del Estrecho de Dampier</h2>
<p>Recomiendo con fuerza las homestays frente a los resorts. Para mantener bajo el presupuesto, la palanca principal es reducir los traslados entre islas, así que divide la estancia entre el <strong>lado oeste y el lado este del Estrecho de Dampier</strong> en vez de ir saltando.</p>
<div class="tip"><b>Coral bajo estrés</b>El Estrecho de Dampier es también donde el cambio climático empieza a notarse, el agua más cálida y la mayor salinidad estresan visiblemente sitios como <strong>Melissa's Garden</strong>, antaño un jardín de coral de manual. Sigue mereciendo la inmersión, pero el cambio se nota de un año a otro.</p>
<p>Las inmersiones cuestan en general unos <strong>30€</strong> e incluyen el traslado al punto dentro de cierto radio. Con base en <strong>Corepen</strong>, Cape Kri estaba cubierto sin coste extra, pero llegar a Mayhem suponía un transporte adicional. Con base en <strong>Arborek</strong>, Mayhem se alcanzaba sin coste extra, algo a tener en cuenta al elegir base.</p>
<h3>Lado oeste: Corepen</h3>
<div class="tdp-fig"><video muted loop playsinline src="${M.corepen}"></video></div>
<p>Mi elección preferida en general. Gran comida y centro de buceo in situ, así que no hace falta reservar las inmersiones con antelación, como huésped tienes prioridad en el barco.</p>
<details class="tdp-acc"><summary>Corepen, precios de buceo</summary><div class="acc-body"><table>
<tr><td>Inmersión diurna (con equipo)</td><td class="r">600.000 IDR</td></tr>
<tr><td>Inmersión nocturna</td><td class="r">700.000 IDR</td></tr></table></div></details>
<h3>Lado este: Arborek</h3>
<p>Para un sabor distinto del viaje, Arborek es la única verdadera isla-pueblo de la zona, una ocasión real de ver de cerca la vida diaria y la tradición local. Recomiendo el <strong>Arborek Dive Shop</strong> sin dudarlo.</p>
<details class="tdp-acc"><summary>Arborek Dive Shop, tarifas</summary><div class="acc-body"><table>
<tr><td>1 inmersión</td><td class="r">600.000 IDR / inm.</td></tr>
<tr><td>6 inmersiones</td><td class="r">575.000 IDR / inm.</td></tr>
<tr><td>10 inmersiones</td><td class="r">550.000 IDR / inm.</td></tr>
<tr><td>Alquiler chaleco &amp; regulador</td><td class="r">400.000 IDR / día</td></tr>
<tr><td>Alquiler máscara, snorkel, aletas</td><td class="r">150.000 IDR / día</td></tr></table></div></details>
<h3>Dividir los traslados en barco</h3>
<p>Compartidos, estos trayectos bajaron mucho, así dividí los míos:</p>
<table><tr><th>Trayecto</th><th class="r">Barco</th><th class="r">Entre</th><th class="r">Por persona</th></tr>
<tr><td>Waisai → Corepen</td><td class="r">500k</td><td class="r">4</td><td class="r">~125k · 6€</td></tr>
<tr><td>Corepen → Arborek</td><td class="r">600k</td><td class="r">3</td><td class="r">~200k · 10€</td></tr>
<tr><td>Arborek → Waisai</td><td class="r">1.1m</td><td class="r">2</td><td class="r">~550k · 27€</td></tr></table>
</section>

<section id="misool"><span class="eyebrow">10</span><h2>Misool</h2>
<p>Misool se supone que es el paraíso, y por todos los relatos sigue en gran parte intacta: islas kársticas que se alzan rectas del agua, lagunas ocultas y una de las densidades de arrecife más sanas de la región. Yo aún no he estado, es la próxima en la lista, así que tómalo como un marcador para completar como es debido cuando vaya.</p>
<p><strong>Cómo llegar:</strong> el ferry público a Misool suele salir el <strong>lunes a las 22:00</strong>, llegando a la mañana siguiente. Esa es la teoría, <strong>los ferries públicos no son nada fiables</strong>: los horarios cambian, las salidas se cancelan sin más y no hay forma real de confirmar una salida hasta que estás en el puerto.</p>
<div class="tip"><b>Deja margen</b>No planifiques una conexión ajustada en torno al ferry de Misool. Toma la salida del lunes como un objetivo, no una garantía, y guarda un día colchón a ambos lados por si se retrasa o se cancela.</div>
<details class="tdp-acc"><summary>Qué hacer en Misool</summary><div class="acc-body">
<p>Todo lo de abajo es de segunda mano, de relatos de otros buceadores e investigación, no de experiencia propia, así que tómalo como punto de partida.</p>
<p><strong>El buceo</strong> es el gran reclamo y de forma constante entre los mejores de Raja Ampat, si no del mundo: paredes verticales, enorme biomasa de peces y coral más sano que en gran parte del norte, en parte gracias a una zona no-take de largo recorrido en torno al Misool Eco Resort.</p>
<p><strong>Lagunas kársticas en kayak o barco</strong>, colarse entre los islotes calcáreos con marea baja es uno de los momentos más tranquilos, no de buceo.</p>
<p><strong>Cuevas ocultas y manglares</strong>, cuevas y lagunas nadables encajadas en el karst, más canales de manglar lo bastante claros para snorkel.</p>
<p><strong>Arte rupestre antiguo</strong>, plantillas de manos y petroglifos en algunas paredes, dejados por los primeros habitantes, vale la pena preguntar a un guía local.</p>
</div></details>
</section>

<section id="budget"><span class="eyebrow">11</span><h2>Presupuesto</h2>
<p>Sobre el terreno los costes se mantienen razonables gracias al cambio, y compartir los traslados es lo que más recorta. Los vuelos son la verdadera variable, así que aquí va el cuadro completo, no solo el gasto en el sitio.</p>
<table><tr><th>Concepto</th><th class="r">Coste</th></tr>
<tr><td>Corepen Homestay, 7 noches, pensión completa</td><td class="r">288€</td></tr>
<tr><td>Kalabia Homestay (Arborek), 4 noches, pensión completa</td><td class="r">128€</td></tr>
<tr><td>Ferry Sorong ↔ Waisai, ida y vuelta (economy)</td><td class="r">~18€</td></tr>
<tr><td>Marine Park + Visitor Entry (extranjero)</td><td class="r">~82€</td></tr>
<tr><td>Traslados en barco, compartidos</td><td class="r">~6/27€ por trayecto</td></tr>
<tr><td>Buceo, por inmersión</td><td class="r">~29€ diurna / ~34€ nocturna</td></tr></table>
<h3>Viaje completo, puerta a puerta</h3>
<table><tr><td>Vuelo internacional ida y vuelta (Europa ↔ Bali/Yakarta)</td><td class="r">~850/1.050€</td></tr>
<tr><td>Tramo(s) interno(s) a Sorong, ida y vuelta</td><td class="r">~150/250€</td></tr>
<tr><td>Gasto en el sitio (alojamiento, buceo, tasas, traslados, comida)</td><td class="r">~600/700€</td></tr>
<tr><td>Noches colchón en Sorong (2, hotel + comida)</td><td class="r">~80/120€</td></tr>
<tr class="total"><td>Total aproximado por persona</td><td class="r big">~1.700/2.100€</td></tr></table>
<div class="tip"><b>Sobre los vuelos</b>Las tarifas oscilan mucho con la temporada y con cuánto reserves de antelación, la cifra de arriba supone un precio medio, no un chollo. Reservar el tramo interno junto con el billete internacional, en la misma alianza, suele ser la forma más barata de evitar un vuelo interno suelto más caro.</div>
</section>

<section id="ethics"><span class="eyebrow">12</span><h2>Viajar con ética</h2>
<p>Los arrecifes de Raja Ampat y su economía se rigen por el mismo principio: mantén locales el dinero y el impacto. Reserva homestays de familias papúes frente a las cadenas de resort, es la diferencia entre financiar directamente a un hogar o a un inversor lejano, y paga íntegras ambas tasas del parque, porque la vigilancia y la conservación se financian justo con ese dinero.</p>
<p>El arrecife pide poco: no lo toques, no lo pises y mantén las manos quietas con mantas, tiburones y cualquier especie protegida. En tierra, lleva una botella reutilizable, las homestays van con agua de cisterna y no hay infraestructura para absorber el plástico una vez aquí.</p>
<p>La vida del pueblo merece el mismo cuidado. Pregunta antes de apuntar la cámara a alguien, sobre todo en un lugar como Arborek, y cubre hombros y rodillas al dejar la playa y estar entre las casas. Compra souvenirs y aperitivos a los residentes en vez de a tiendas de importación, y si llevas regalos, cuadernos o material escolar funcionan mejor que el dinero. Un poco de preparación antes de llegar, la estructura de dos familias de Arborek es un buen ejemplo, marca la diferencia.</p>
<div class="tdp-fig"><video muted loop playsinline src="${M.ethics}"></video></div>
<div class="tip"><b>En resumen</b>Ve a menos sitios, quédate más en cada uno, elige la homestay frente al resort, y recuerda que eres un huésped tanto del arrecife como del pueblo, no un cliente de ninguno.</div>
</section>

<section id="tips" style="border-bottom:0"><span class="eyebrow">13</span><h2>Consejos prácticos</h2>
<ul><li><strong>Visado</strong>, visado a la llegada (30 días) para muchas nacionalidades; verifica las reglas actuales antes de salir.</li>
<li><strong>Conectividad</strong>, señal de teléfono/internet débil o inexistente en muchas islas; organízate en consecuencia.</li>
<li><strong>Ropa</strong>, calor tropical en general, fresco tras la lluvia o con viento; lleva un chubasquero ligero.</li>
<li><strong>Seguro</strong>, dada la lejanía, un seguro de viaje con evacuación médica y cobertura de retrasos/cancelaciones merece la pena, además de la cobertura de buceo DAN.</li></ul>
<p class="rf-foot" style="margin-top:20px">Apuntes de quien ha estado de verdad: <b>7 días en Corepen, 5 en Arborek</b>, Misool aún pendiente.</p>
</section>
${hsModal({ k: 'Homestays', title: 'Qué esperar', close: 'Cerrar', body: 'Básicas a propósito, es el intercambio por el precio y el acceso a la vida local. La electricidad suele funcionar solo por la tarde-noche, aproximadamente <strong>de 18:00 a 23:00</strong>. La comida es sencilla y equilibrada: normalmente una proteína, arroz y frijoles, más fruta.' })}
`;

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

const tocEn = [
  ['01', 'getting-there', 'How to get there'], ['02', 'getting-around', 'Island transfers'],
  ['03', 'when-to-go', 'When to go'], ['04', 'fees', 'Mandatory fees'],
  ['05', 'duration', 'How long to stay'], ['06', 'see-do', 'What to see & do'],
  ['07', 'diving', 'Diving notes'], ['08', 'stay', 'Where to stay'],
  ['09', 'experience', 'West + east split'], ['10', 'misool', 'Misool'],
  ['11', 'budget', 'Budget'], ['12', 'ethics', 'Travelling ethically'],
  ['13', 'tips', 'Practical tips'],
];
const tocIt = [
  ['01', 'getting-there', 'Come arrivare'], ['02', 'getting-around', 'Trasferimenti in barca'],
  ['03', 'when-to-go', 'Quando andare'], ['04', 'fees', 'Tasse obbligatorie'],
  ['05', 'duration', 'Quanti giorni'], ['06', 'see-do', 'Cosa vedere e fare'],
  ['07', 'diving', 'Immersioni'], ['08', 'stay', 'Dove dormire'],
  ['09', 'experience', 'Ovest + est'], ['10', 'misool', 'Misool'],
  ['11', 'budget', 'Budget'], ['12', 'ethics', 'Viaggiare in modo etico'],
  ['13', 'tips', 'Consigli pratici'],
];
const tocEs = [
  ['01', 'getting-there', 'Cómo llegar'], ['02', 'getting-around', 'Traslados en barco'],
  ['03', 'when-to-go', 'Cuándo ir'], ['04', 'fees', 'Tasas obligatorias'],
  ['05', 'duration', 'Cuántos días'], ['06', 'see-do', 'Qué ver y hacer'],
  ['07', 'diving', 'Buceo'], ['08', 'stay', 'Dónde dormir'],
  ['09', 'experience', 'Oeste + este'], ['10', 'misool', 'Misool'],
  ['11', 'budget', 'Presupuesto'], ['12', 'ethics', 'Viajar con ética'],
  ['13', 'tips', 'Consejos prácticos'],
];
const toc = (a: string[][]) => a.map(([n, id, label]) => ({ n, id, label }));

export const raja: Record<Lang, RajaLang> = {
  it: {
    kicker: 'Diario · Papua Occidentale · Indonesia',
    title: 'Raja Ampat: guida completa per uno degli ultimi paradisi terrestri',
    sub: "Sette giorni a ovest, cinque a est, tutto quello che serve per organizzare l'arcipelago dei Quattro Re, raccontato da chi ci è stato davvero.",
    facts: [{ n: '12', l: 'giorni' }, { n: 'SOQ', l: 'scalo' }, { n: '~610€', l: 'in loco' }, { n: 'Ott/Apr', l: 'stagione' }],
    tocTitle: 'In questa guida',
    toc: toc(tocIt),
    body: assemble(it_body, it_flight, it_stay),
    back: '← Journal',
  },
  en: {
    kicker: 'Diary · West Papua · Indonesia',
    title: 'Raja Ampat: the complete guide to one of the last paradises on Earth',
    sub: "Seven days west, five east, everything you need to plan the archipelago of the Four Kings, told by someone who's actually been there.",
    facts: [{ n: '12', l: 'days' }, { n: 'SOQ', l: 'hub' }, { n: '~€610', l: 'on-site' }, { n: 'Oct/Apr', l: 'season' }],
    tocTitle: 'In this guide',
    toc: toc(tocEn),
    body: assemble(en_body, en_flight, en_stay),
    back: '← Journal',
  },
  es: {
    kicker: 'Diario · Papúa Occidental · Indonesia',
    title: 'Raja Ampat: la guía completa a uno de los últimos paraísos de la Tierra',
    sub: 'Siete días al oeste, cinco al este, todo lo que necesitas para organizar el archipiélago de los Cuatro Reyes, contado por quien ha estado de verdad.',
    facts: [{ n: '12', l: 'días' }, { n: 'SOQ', l: 'escala' }, { n: '~610€', l: 'en el sitio' }, { n: 'Oct/Abr', l: 'temporada' }],
    tocTitle: 'En esta guía',
    toc: toc(tocEs),
    body: assemble(es_body, es_flight, es_stay),
    back: '← Journal',
  },
};

export const rajaMeta = {
  slug: 'raja-ampat',
  date: '2026-07-13',
  cover: 'https://res.cloudinary.com/dligvuje7/image/upload/q_auto,f_auto/v1783965784/IMG_8817_sdhbgj.jpg',
  meta: { en: 'Indonesia · West Papua · Guide · 2026', it: 'Indonesia · Papua Occidentale · Guida · 2026', es: 'Indonesia · Papúa Occidental · Guía · 2026' } as Record<Lang, string>,
  title: {
    en: 'Raja Ampat: the complete guide to one of the last paradises on Earth',
    it: 'Raja Ampat: guida completa per uno degli ultimi paradisi terrestri',
    es: 'Raja Ampat: la guía completa a uno de los últimos paraísos de la Tierra',
  } as Record<Lang, string>,
  desc: {
    en: 'Seven days west, five east, the complete backpacker guide to the Four Kings archipelago.',
    it: "Sette giorni a ovest, cinque a est, la guida completa all'arcipelago dei Quattro Re.",
    es: 'Siete días al oeste, cinco al este, la guía completa al archipiélago de los Cuatro Reyes.',
  } as Record<Lang, string>,
};
