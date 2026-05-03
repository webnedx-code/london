// =============================================================================
// trip.js — SINGLE SOURCE OF TRUTH for the London 2026 trip
// =============================================================================
// Edit ONLY this file to change holiday data: dates, places, stops, bookings.
// Everything else (UI, map, sheet) reads from these exports.
// =============================================================================

// -- Trip-wide metadata -------------------------------------------------------
export const TRIP = {
  title: "London 2026",
  flag: "https://flagcdn.com/gb.svg",
  datesLabel: "17–22 IUNIE 2026",
  startIso: "2026-06-17",
  endIso:   "2026-06-22",
  totalDays: 6,
};

// -- Day-by-day itinerary -----------------------------------------------------
export const DAYS = [
  {
    id:1, label:"Ziua 1", short:"Mie", date:"17 Iun", iso:"2026-06-17",
    stops:[
      {time:"07:30", name:"Stansted Airport — Sosiri", lat:51.8857, lng:0.2352, type:"transport", wiki:"London Stansted Airport"},
      {time:"~08:15", name:"Stansted Express spre Liverpool Street", lat:51.5178, lng:-0.0823, type:"transport", wiki:"Stansted Express",
        tip:"Metroul londonez: plătești cu cardul bancar contactless direct — același preț ca Oyster, fără card separat. Tap in și tap out la bariere. Funcționează pe tot metroul, DLR, Overground și autobuze."},
      {time:"~09:05", name:"Liverpool Street — depozitare bagaje", lat:51.5178, lng:-0.0823, type:"transport", wiki:"London Liverpool Street station",
        tip:"Left luggage disponibil în gară, ~£12/bag/zi. Verifică deschiderea la sosire."},
      {time:"09:30", name:"Old Spitalfields Market", lat:51.5192, lng:-0.0726, type:"market", wiki:"Old Spitalfields Market",
        tip:"Piața deschide la 10:00 (nu 09:30!). Folosește intervalul pentru mic dejun pe Brushfield Street — cafenele deschise devreme chiar lângă piață. Promenează zona exterioară și artizanii locali înainte de deschidere.",
        desc:"Piața Spitalfields funcționează pe același loc din 1638, când Regele Carol I a acordat permisul de comercializare. Zona a primit valuri succesive de imigranți — hughenoți, evrei, bangladezieni — fiecare lăsând urme vizibile în arhitectură, gastronomie și artă."},
      {time:"10:00", name:"Shoreditch Street Art Walk — Redchurch St & Brick Lane", lat:51.5228, lng:-0.0717, type:"attraction", wiki:"Brick Lane",
        tip:"Cele mai bune murale sunt pe Hanbury St, Redchurch St și Sclater St. Fă-ți propriul tur — nu ai nevoie de ghid.",
        desc:"Brick Lane este inima comunității bangladeze din Londra și epicentrul artei stradale europene. Zidul de pe Hanbury Street este re-pictat complet la fiecare câteva săptămâni de artiști internaționali — nu există o operă permanentă, totul e efemer. Strada a apărut în sec. XVII ca loc de fabricat cărămizi pentru construcția Londrei post-incendiu."},
      {time:"11:30", name:"Beigel Bake — 159 Brick Lane (prânz iconic)", lat:51.5226, lng:-0.0718, type:"food", wiki:"Beigel Bake",
        tip:"Coada merge repede. Covrigi cu somon afumat sau cu carne sărată (~£3-4). Plătești cu card sau numerar.",
        desc:"Deschis în 1855 de imigranți evrei din Europa de Est, Beigel Bake este cel mai vechi magazin de covrigi din Londra. Funcționează 24/7, 365 de zile pe an, de 170 de ani. Prețurile n-au urmat inflația — un covrig cu somon afumat costă în continuare sub £5."},
      {time:"12:10", name:"Museum of the Home — Hoxton (gratuit)", lat:51.5278, lng:-0.0793, type:"museum", wiki:"Museum of the Home", tags:["free"], travelMode:"bus",
        tip:"Muzeu subestimat despre istoria casei britanice. Gratuit. Plan 1 oră. Grădina interioară este o bijuterie ascunsă. IMPORTANT: La 13:20 fix ia autobuzul 35 sau 48 spre sud (stație: Hoxton Street) — mersul pe jos până la St Dunstan-in-the-East este 2.5km și nu e acoperit în program."},
      {time:"13:20", name:"St Dunstan-in-the-East — grădina ruinată", lat:51.5094, lng:-0.0834, type:"church", wiki:"St Dunstan-in-the-East", tags:["free"],
        tip:"Hidden gem absolut. Ruinele bisericii secolului XVII transformate în grădină publică. Puțini turiști știu de el. Planifică 25-30 min.",
        desc:"Originară din anul 1100, biserica St Dunstan a supraviețuit Marii Ciume din 1665, dar a fost distrusă de Marele Incendiu din 1666. Reconstruită de Christopher Wren, a fost bombardată din nou în Blitz-ul din 1941. Ruinele au rămas intacte și au fost transformate în grădină publică în 1967 — unul din cele mai surreale și liniștite locuri din City."},
      {time:"13:55", name:"Tower Bridge — traversare pietonală", lat:51.5055, lng:-0.0754, type:"attraction", wiki:"Tower Bridge", tags:["free"],
        tip:"Traversarea pietonală este gratuită. Nu plăti £15 pentru podul de sticlă — nu merită. Fotografiază de pe ambele maluri.",
        desc:"Construit între 1886-1894, Tower Bridge a costat £1,184,000 — echivalentul a ~£170 milioane azi. Ironia arhitecturală: turnurile gotice impozante ascund în interior o structură de oțel pur. Gothicul a fost ales exclusiv pentru a se integra vizual cu Tower of London din apropiere."},
      {time:"14:30", name:"St Paul's Cathedral — explorare exterioară și interioară", lat:51.5138, lng:-0.0984, type:"church", wiki:"St Paul's Cathedral",
        tip:"Intrarea gratuită pentru Evensong la 17:00. Poți intra și explora naosul gratuit. Cupola costă £15 dar durează 1.5h — sari peste dacă ești obosit.",
        desc:"Domul lui Christopher Wren, finalizat în 1710, a rămas cel mai înalt punct din Londra timp de 253 de ani. În Blitz-ul din 1940-41, Winston Churchill a ordonat personal salvarea catedralei cu orice preț — fotografia ei înconjurată de fum a devenit cel mai iconic simbol al rezistenței britanice în cel de-al Doilea Război Mondial."},
      {time:"15:20", name:"Postman's Park — Memorialul Eroismului (5 min de St Paul's)", lat:51.5165, lng:-0.0972, type:"park", wiki:"Postman's Park", tags:["free"],
        tip:"Unul din cele mai emoționante locuri din Londra. Perete de plăci ceramice victoriene ale lui G.F. Watts, commemorând oameni obișnuiți care și-au dat viața salvând pe alții. 5 minute de St Paul's. Aproape nimeni nu știe de el. 15 min vizită.",
        desc:"Creat în 1880 pe terenul fostei biserici St Botolph, parcul conține Memorialul pentru Eroism al artistului victorian G.F. Watts — 120 de plăci ceramice dedicate oamenilor obișnuiți care au murit salvând pe alții între 1863-2009. Fiecare placă spune o poveste reală: pompieri, copii, muncitori portuari. A apărut în filmul 'Closer' (2004) cu Natalie Portman."},
      {time:"15:40", name:"Odihnă / cafea înainte de Evensong", lat:51.5138, lng:-0.0984, type:"food", wiki:"St Paul's Cathedral",
        tip:"50 min înainte de coadă. Ia o cafea, șezi, hidratează-te. Evensong durează 45 min în picioare sau pe băncile dure — merită să fii odihnit."},
      {time:"16:30", name:"St Paul's — coadă pentru Evensong", lat:51.5138, lng:-0.0984, type:"church", wiki:"St Paul's Cathedral", tags:["free"],
        tip:"Vino la 16:30 pentru loc bun. Securitate + verificare bagaje durează 10 min. Încearcă să te asezi în naos aproape de cor."},
      {time:"17:00", name:"St Paul's Cathedral — Evensong FREE (45 min)", lat:51.5138, lng:-0.0984, type:"church", wiki:"St Paul's Cathedral", tags:["free"]},
      {time:"18:10", name:"Liverpool Street — check-in hotel", lat:51.5178, lng:-0.0823, type:"transport", wiki:"London Liverpool Street station"},
      {time:"19:30", name:"Brick Lane noaptea — curry & street art", lat:51.5226, lng:-0.0718, type:"food", wiki:"Chicken tikka masala",
        tip:"Brick Lane la 19:30 arată complet diferit față de dimineață. Restaurantul Aladin (132 Brick Lane) este alegerea localnicilor — nu restaurantele cu touts pe ușă. Muralele arată spectaculos în lumina stradală, mai ales pe Sclater Street (la est față de Brick Lane). Beigel Bake (nr. 159) deschis 24/7 — prinde un covrig de încheiere.",
        desc:"Brick Lane seara devine epicentrul cultural al East End-ului londonez — restaurante bangladeze cu arome de cardamom și curry în aer, galerii independente deschise târziu, artă stradală luminată de becuri galbene. Tradiția restaurantelor curry pe Brick Lane datează din anii '70, când imigranții bangladezi au deschis primele restaurante 'baltis'. Astăzi strada găzduiește peste 40 de restaurante curry.",
        status:"verified-by-claude", lastChecked:"2026-05-03",
        verifyBefore:"Verifică https://www.aladinbricklane.co.uk — ore confirmate: Lun-Joi până la 00:00, Vin-Sâm până la 01:00. Fără rezervare — sosește înainte de 20:00 în serile de vârf. BYOB permis cu discount 20% la off-licence vecin. Vânzătorii cu touts pe ușă = evită."},
      {time:"21:30", name:"Shoreditch seara — baruri și pub-uri locale", lat:51.5260, lng:-0.0756, type:"food", wiki:"Shoreditch",
        tip:"5 min mers nord de Brick Lane pe Shoreditch High Street. Callooh Callay (65 Rivington Street) — bar cocktail iconic, intri printr-un dulap Narnia, fără rezervare. The Owl & Pussycat (34 Redchurch Street) — pub local fără turiști. Sau simplu mergi pe Rivington Street și intri unde îți place. Întoarcere: 15 min mers sau 5 min Overground de la Shoreditch High Street spre Liverpool Street.",
        status:"verified-by-claude", lastChecked:"2026-05-03",
        verifyBefore:"Callooh Callay confirmat deschis (Mart 2026): https://calloohcallaybar.com — program 18:00–01:00 zilnic. Funcționează din 2008 (17 ani, Top 500 World's Best Bars). Fără rezervare la intrare — posibil coadă după 22:00 vinerea."},
    ]
  },
  {
    id:2, label:"Ziua 2", short:"Joi", date:"18 Iun", iso:"2026-06-18",
    stops:[
      {time:"09:45", name:"Metrou Liverpool Street spre Holborn", lat:51.5174, lng:-0.1200, type:"transport", wiki:"Holborn tube station"},
      {time:"10:00", name:"British Museum — deschidere (evită aglomerația)", lat:51.5194, lng:-0.1270, type:"museum", wiki:"British Museum", tags:["free"],
        tip:"CRITIC: Sosești la deschidere (10:00) — aglomerația maximă e 10:30-12:30. Du-te DIRECT la etaj (Mesopotamia, Asia, Americas) — mai puțini oameni. Piatra Rosetta și mumiificările sunt la parter — lasă pe urmă.",
        desc:"Fondat în 1753, British Museum a fost primul muzeu public național din lume. Colecția de 8 milioane de obiecte acoperă 2 milioane de ani de istorie umană. Controversele legate de Marmurele Partenonului — aduse din Atena de Lord Elgin în 1801 — continuă să agite relațiile diplomatice cu Grecia până în prezent.",
        guide:["Etaj 1 întâi: Room 56 (Mesopotamia) și Room 11–23 (Grecia Antică) — aproape goale la deschidere","Piatra Rosetta: Room 4, parter — lasă pentru după ce ai explorat etajul, să eviți aglomerația","Momiile Egipt: Room 62–63, etaj 3 — printre cele mai impresionante exponate","Lewis Chessmen: Room 40 (etaj 3) — piese de șah medieval din sec. XII, bijuterie ascunsă","Evită Great Court în primele 2 ore — e aglomerată. Intră direct pe scări spre etaje"]},
      {time:"12:30", name:"Prânz lângă Holborn / Covent Garden", lat:51.5194, lng:-0.1270, type:"food", wiki:"Covent Garden",
        tip:"Lamb's Conduit Street (10 min mers) — pub istoric cu plăcinte excelente. Sau Dishoom Covent Garden — Indian contemporan, reservă în avans."},
      {time:"13:30", name:"Metrou Holborn spre Bank / City", lat:51.5133, lng:-0.0886, type:"transport", wiki:"Bank station, London"},
      {time:"13:45", name:"St Stephen Walbrook — bijuteria lui Wren", lat:51.5128, lng:-0.0909, type:"church", wiki:"St Stephen Walbrook", tags:["free"],
        tip:"Una dintre cele mai frumoase biserici ale lui Christopher Wren. Interior baroc sublim, aproape mereu goală. Donație sugerată. 15-20 min.",
        desc:"Construită de Christopher Wren în 1679, St Stephen Walbrook este considerată capodopera sa supremă și experimentul-pilot pentru domul Catedralei St Paul's. Altarul de travertin din centrul boltei este opera sculptorului Henry Moore, adăugat controversat în 1987 — unii l-au numit 'camembert pe roți'."},
      {time:"14:15", name:"Sky Garden — 20 Fenchurch Street (Walkie-Talkie)", lat:51.5109, lng:-0.0832, type:"viewpoint", wiki:"Sky Garden, London", tags:["booking"],
        bookingId:"sky-garden",
        tip:"REZERVARE OBLIGATORIE — locurile se dau în fiecare Luni dimineața la 10:00 pentru 3 săptămâni înainte. Rezervă slotul de 14:00 și sosește la 13:55 — o sosire la 14:15 riscă să rateze fereastra de check-in. Aduce act de identitate.",
        desc:"Clădirea 20 Fenchurch Street, poreclită 'Walkie-Talkie', a câștigat în 2015 premiul Carbuncle Cup pentru 'cea mai urâtă clădire nouă din Marea Britanie'. În vara lui 2013, fațada sa concavă a concentrat razele solare ca o lupă și a topit caroseria unui Jaguar parcat pe stradă. Grădina de la etajul 35 este cel mai mare spațiu verde interior din Londra.",
        guide:["Check-in parter: act de identitate obligatoriu, securitate ~5 min — sosește la 13:55","Terasa exterioară (Nivel 35): ieși imediat la dreapta din lift — vedere spre Shard și Tamisa","Explorează ambele niveluri: Nivel 35 (grădina principală) și Nivel 37 (terasa superioară)","Cel mai bun unghi foto: terasa nordică spre Tower Bridge și City","Bar: nu e obligatoriu să consumi, dar o băutură mică (~£6) merită priveliștea de 1h"]},
      {time:"15:20", name:"Leadenhall Market — piața victoriană acoperită", lat:51.5131, lng:-0.0832, type:"market", wiki:"Leadenhall Market",
        tip:"Arhitectură victoriană spectaculoasă. A servit ca decor pentru Diagon Alley în Harry Potter. Vizitează podul de fier turnat. 20-25 min.",
        desc:"Pe locul actualei piețe se afla Forumul Roman din Londinium — capitala romană a Britaniei din sec. I d.Hr. Structura victoriană din fier turnat și sticlă colorată datează din 1881. Apare ca Diagon Alley în filmele Harry Potter și ca Knockturn Alley în 'Camera Secretelor'."},
      {time:"15:50", name:"St Mary Woolnoth — Hawksmoor la Bank Station", lat:51.5129, lng:-0.0882, type:"church", wiki:"St Mary Woolnoth", tags:["free"],
        tip:"Cea mai stranie și dramatică dintre bisericile lui Hawksmoor. Interior baroc ca o cutie de bijuterii. Intrare via Bank Station. 10-15 min. CRITIC: Pleacă la 16:08 fix — fereastra pentru Bank → Westminster (coadă Evensong 16:30) este de exact 22 min."},
      {time:"16:10", name:"Metrou Bank spre Westminster (15 min)", lat:51.4994, lng:-0.1273, type:"transport", wiki:"Westminster tube station",
        tip:"Linia District sau Circle până la Westminster. Scoate-te pe Westminster Bridge Road pentru intrare la Westminster Abbey."},
      {time:"16:30", name:"Westminster Abbey — coadă pentru Evensong", lat:51.4994, lng:-0.1273, type:"church", wiki:"Westminster Abbey", tags:["free"],
        tip:"TREBUIE să fii la coadă la 16:30 cel târziu. Intrare via Great West Door. First-come, first-served. Fotografierea NU este permisă în interior.",
        desc:"Westminster Abbey este cel mai dens loc de înmormântare din Anglia — 3.300 de persoane sunt înhumate sau comemorate aici. Toți monarhii englezi din 1066, Isaac Newton, Charles Darwin și Geoffrey Chaucer sunt înmormântați în interiorul său. Clădirea gotică actuală datează din 1245, construită de Henric III."},
      {time:"17:00", name:"Westminster Abbey — Evensong FREE (45 min)", lat:51.4994, lng:-0.1273, type:"church", wiki:"Westminster Abbey", tags:["free"],
        guide:["Intri prin Great West Door (nu intrarea pentru turiști — coadă diferită)","Ocupă locuri în Nave (naos) — mai aproape de cor, sunetul e incomparabil mai bun","Serviciul alternează latină și engleză veche — atmosfera contează mai mult decât textul","Fotografierea este STRICT INTERZISĂ — securitatea verifică activ","Rămâi 5 min după final: corul iese formal prin naos, e parte din spectacol"]},
      {time:"18:30", name:"Plimbare + Cină South Bank — Gabriel's Wharf", lat:51.5073, lng:-0.1078, type:"food", wiki:"Gabriel's Wharf",
        tip:"Traversează Westminster Bridge spre sud, mergi est pe Albert Embankment ~25 min până la Gabriel's Wharf (2km plăcut pe malul Tamisei). Cină în aer liber cu vedere spre St Paul's: Limin Southbank (Caribbean, G.O.A.T. curry iconic — confirmat Apr 2026) sau Gourmet Pizza. Ia masa până la 20:00, apoi 15 min mers est spre Bankside Pier (lângă Tate Modern) pentru croazieră la 20:15.",
        desc:"Gabriel's Wharf este un complex de restaurante, galerii de artă și ateliere de artiști construit în 1988 pe un teren vizat inițial pentru blocuri de birouri. Comunitatea locală a câștigat o luptă de 10 ani cu urbaniștii pentru a păstra spațiul deschis. Mesele în aer liber cu vedere spre St Paul's și Tamisa sunt printre cele mai bune din South Bank, fără prețuri de hotel.",
        status:"verified-by-claude", lastChecked:"2026-05-03",
        verifyBefore:"Verifică lista curentă de tenanți pe https://southbank.london/see-and-do/gabriels-wharf — Limin Southbank confirmat Apr 2026 (Gourmet Goat înlocuit). Sosește la 18:45 cel târziu pentru a termina masa și a ajunge la Bankside Pier la 20:10."},
      {time:"20:15", name:"City Cruises — Croazieră la ora de aur pe Tamisa", lat:51.5079, lng:-0.0965, type:"attraction", wiki:"River Thames",
        tip:"Plecare de la Bankside Pier (lângă Tate Modern, malul sudic). Fără rezervare, plătești la îmbarcare (~£22/persoană). Croazieră ~1.5 ore: apusul pe 18 Iunie este la 21:19 BST — pleci în lumina aurie și prinzi apusul pe apă. Tower Bridge portocaliu, Shard, Parlament în amurg. La 21:30 luminile orașului se aprind, reflecțiile pe Tamisa sunt de vis. O departura la 19:20 ar prinde lumina plată de zi — 20:15 este departura optimă.",
        desc:"City Cruises operează pe Tamisa din 1987 și este cel mai mare operator de croaziere fluviale din Londra. Vasele circulă circular: Westminster — Embankment — London Eye — Bankside — Tower. Vederea de la nivelul apei spre Tower Bridge iluminat rămâne una dintre cele mai spectaculoase priveliști din Londra, imposibil de replicat de la mal."},
      {time:"21:50", name:"Băutură finală — The Anchor Bankside (pub din 1616)", lat:51.5071, lng:-0.0960, type:"food", wiki:"The Anchor, Bankside",
        tip:"Croaziera se termină la Bankside Pier (~21:45). The Anchor Bankside (1 Park Street, 2 min de pier) — pub din 1616 cu terasă directă pe malul Tamisei și vedere la St Paul's în amurgul albastru. Ultima comandă la 23:00. Metrou: Southwark (Jubilee Line, 10 min mers) sau London Bridge (8 min mers).",
        status:"verified-by-claude", lastChecked:"2026-05-03",
        verifyBefore:"Verifică orele de vară pe https://www.greeneking-pubs.co.uk/pubs/greater-london/anchor — terasă confirmată pentru sezon cald. Pub pe același loc din 1616. Ultima comandă 23:00 standard."},
    ]
  },
  {
    id:3, label:"Ziua 3", short:"Vin", date:"19 Iun", iso:"2026-06-19",
    stops:[
      {time:"08:00", name:"Metrou spre Green Park (plecare devreme)", lat:51.5067, lng:-0.1428, type:"transport", wiki:"Green Park tube station",
        tip:"Pleacă devreme — ai nevoie de mic dejun liniștit înainte de ceremonie. Linia District de la Liverpool Street."},
      {time:"08:30", name:"Mic dejun lângă Green Park", lat:51.5067, lng:-0.1428, type:"food", wiki:"Green Park, London",
        tip:"Fortnum & Mason (clasic, mai scump) sau Pret A Manger. Hidratează-te — vei sta în picioare 45+ min la ceremonie. Ai 105 minute până la Victoria Memorial — după micul dejun, plimbă-te prin St James's Park (intri de pe The Mall): pelicanii sunt activi dimineața, lacul e liniștit, și ajungi la Memorial în mod natural."},
      {time:"10:15", name:"Victoria Memorial — poziționare pentru Gardă", lat:51.5021, lng:-0.1408, type:"attraction", wiki:"Victoria Memorial, London",
        tip:"Cel mai bun loc: latura de sud-est a Victoria Memorial — mai puțini oameni, fotografii mai bune. Evită The Mall (blocat). Fii acolo la 10:30.",
        desc:"Palatul Buckingham a fost casa privată a Ducelui de Buckingham înainte de a fi cumpărat de Regele George III în 1761 ca reședință privată. A devenit reședința oficială a monarhiei britanice abia în 1837, când Regina Victoria s-a mutat acolo. Palatul are 775 de camere, 78 de băi și o grădină de 16 hectare în centrul Londrei."},
      {time:"11:00", name:"Schimbarea Gărzii — Buckingham Palace (ceremonie completă, Vineri)", lat:51.5014, lng:-0.1419, type:"attraction", wiki:"Buckingham Palace", tags:["free"],
        tip:"Ceremonie completă în fiecare VINERI la 11:00 (Sâmbătă e Captain's Inspection la 15:00 — mai scurtă). Durează ~45 min. Bandă militară inclusă.",
        desc:"Tradiția Schimbării Gărzii datează din 1660, când Carol II a reinstautat monarhia britanică. Cele mai vechi regimente: Life Guards (1660) și Blues and Royals (1661). Aproximativ 200 de soldați, 3 ofițeri și o bandă militară participă la ceremonia completă. Căștile negre de păr de urs sunt fabricate din blana ursului negru canadian și costă £600 fiecare.",
        guide:["Stai la colțul de sud-est al Victoria Memorial — mai puțini oameni, fotografii mai bune decât pe The Mall","La 10:50 pornește muzica: primul marș anunță Garda Nouă venind dinspre Wellington Barracks","Ceremonia are 3 acte: Marș de sosire → Schimbul de santinele (la poartă) → Marș de retragere","Nu te mișca cu mulțimea spre poarta palatului — priveliștea de la Memorial e mai bună","Ultimele 10 min (Retreat) sunt cele mai spectaculoase — nu pleca devreme"]},
      {time:"11:55", name:"St James's Park — odihnă + picnic", lat:51.5025, lng:-0.1333, type:"park", wiki:"St James's Park", tags:["free"],
        tip:"Cel mai frumos parc royal din Londra. Lac cu pelicani. Cumpără merinde de la M&S Victoria (8 min mers) dacă nu ai deja. Stai lângă lac.",
        desc:"Transformat din mlaștină în 1532 de Henric VIII, St James's Park este cel mai vechi parc royal din Londra. Pelicanii trăiesc oficial în parc din 1664, când Ambasadorul Rusiei a dăruit primii exemplari Regelui Carol II — tradiția continuă neîntreruptă de 360 de ani."},
      {time:"13:00", name:"Big Ben / Parlamentul / Westminster Bridge", lat:51.4994, lng:-0.1246, type:"attraction", wiki:"Palace of Westminster", tags:["free"],
        tip:"Exterior gratuit și impresionant. Cel mai bun unghiul fotografic: din mijlocul Westminster Bridge spre nord. 20-30 min suficient.",
        desc:"Palatul Westminster original a ars în 1834 în cel mai spectaculos incendiu din istoria Londrei — mii de londonezi au privit de pe maluri, inclusiv pictorul Turner. Actuala clădire neoGotică a fost construită între 1840-1870 de Charles Barry și Augustus Pugin. Turnul 'Big Ben' a fost redenumit Elizabeth Tower în 2012."},
      {time:"13:35", name:"Mers / metrou spre Holborn (prânz)", lat:51.5170, lng:-0.1183, type:"transport", wiki:"Whitehall",
        tip:"Din Westminster: Linia Circle/District spre Holborn sau mers pe jos 20 min via Whitehall → Covent Garden."},
      {time:"14:00", name:"Prânz lângă Sir John Soane's Museum", lat:51.5170, lng:-0.1183, type:"food", wiki:"Sir John Soane's Museum",
        tip:"Cafenele și restaurante pe Museum Street sau Lamb's Conduit Street. Odihnă înainte de muzeu."},
      {time:"14:50", name:"Sir John Soane's Museum — coadă pentru Picture Room", lat:51.5170, lng:-0.1183, type:"museum", wiki:"Sir John Soane's Museum",
        tip:"CRITIC: Muzeul e deschis Miercuri–Duminică (Luni și Marți ÎNCHIS). Picture Room: prezentare de panouri la 11:00, 14:00 și 15:00. Vineri 19 Iunie ✓. Fii la coadă la 14:50 — spațiu mic, locuri limitate."},
      {time:"15:00", name:"Sir John Soane's Museum — Picture Room 3PM", lat:51.5170, lng:-0.1183, type:"museum", wiki:"Sir John Soane's Museum", tags:["free"],
        tip:"Una dintre cele mai fascinante case-muzeu din lume. Fondată de arhitectul regal John Soane. Plin de antichități, picturi, sarcofage. Plan 1.5 ore.",
        desc:"Sir John Soane (1753-1837), arhitectul Băncii Angliei, și-a transformat propria casă în muzeu deschis publicului printr-un act al Parlamentului, cu condiția să rămână neschimbată pentru totdeauna. Colecția cuprinde 45.000 de obiecte, inclusiv sarcofagul alabastru al Faraonului Seti I, cumpărat pentru £2.000 în 1824 — Muzeul Britanic oferise £2.000 și a fost refuzat.",
        guide:["Picture Room (15:00): 13 tablouri Hogarth — panourile se deschid în 3 straturi succesive, cel mai unic efect din orice muzeu londonez","Basement: sarcofagul faraonului Seti I din alabastru translucid — uriaș, iluminat de jos","Monument Court: privește de sus prin plafonul de sticlă spre sarcofag — perspectivă unică","Model Room (etaj 1): machete ale proiectelor lui Soane, inclusiv Banca Angliei","Library (parter): Canaletto, Turner, Piranesi — spațiu mic, cald, plin de detalii ascunse"]},
      {time:"16:40", name:"Metrou Holborn spre Southwark / Waterloo", lat:51.5076, lng:-0.0994, type:"transport", wiki:"Waterloo tube station"},
      {time:"17:00", name:"Tate Modern — seară de Vineri (deschis până la 21:00)", lat:51.5076, lng:-0.0994, type:"museum", wiki:"Tate Modern", tags:["free"],
        tip:"EXCLUSIV VINERI ȘI SÂMBĂTĂ: deschis până la 21:00. Terasă Nivel 10 (vedere panoramică, gratuită) + colecție permanentă. Mult mai liniștit seara.",
        desc:"Tate Modern ocupă fosta Centrală Electrică Bankside, construită în 1947 și închisă în 1981. Reconvertită în muzeu de artă modernă în 2000 de arhitecții Herzog & de Meuron, este acum cel mai vizitat muzeu de artă modernă din lume — 5-6 milioane de vizitatori anual. Turbine Hall, fosta sală a turbinelor, este una din cele mai mari expoziții gratuite din lume.",
        guide:["Turbine Hall (parter): instalația curentă — stai 10 min în centru și privește spre plafon, efectul e copleșitor","Nivelul 10 (terasa): NU apare pe butoanele liftului — urcă la 9 și ia scările până sus. Vedere spre St Paul's și Millennium Bridge","Colecție permanentă: Nivelurile 2–4, Blavatnik Building (blocul nou) — Picasso, Matisse, Rothko","The Tanks (subteran, intrare separată): video art și performance — gratuit, de obicei gol","Switch House (blocul nou din 2016): arhitectura brutalistă în cărămidă — merită 10 min explorare exterioară"]},
      {time:"19:30", name:"National Gallery — Friday Lates ULTIMA SEARĂ 2026 (Trafalgar Square)", lat:51.5089, lng:-0.1283, type:"museum", wiki:"National Gallery, London", tags:["free"],
        tip:"EVENIMENT UNIC: 19 Iunie 2026 este ULTIMA seară a programului Friday Lates 2026 al National Gallery (serie 1 Mai–19 Iunie — confirmat). Rută de la Tate Modern: Jubilee Line Southwark → Westminster (2 stații, 8 min) + 10 min mers pe jos = 18 min total. Galeria deschisă până la 21:00. Seara include: conferințe filosofie/arhitectură, performances muzicale, sesiuni de life drawing (ESEA Life Drawing & London Drawing), proiecție film de artist Ming Wong. Bar Giorgio (Sainsbury Wing) + cocktail bar Ochre Brasserie la intrarea Getty.",
        desc:"Programul Friday Lates al National Gallery a rulat în 2026 de la 1 Mai la 19 Iunie — sereri culturale cu takeover-uri studențești (Royal Holloway, Central Saint Martins), music, poezie și life drawing. Seara de 19 Iunie este ultima din serie — mai festivă față de o seară obișnuită. Spre deosebire de o a doua vizită la British Museum (în direcție opusă față de South Bank, fără eveniment special), National Gallery Lates oferă un program unic și se află pe ruta naturală dinspre Tate Modern spre Soho pentru cina de seară.",
        status:"verified-by-claude", lastChecked:"2026-05-03",
        verifyBefore:"Confirmă programul serii pe https://www.nationalgallery.org.uk/events/friday-lates — detalii complete apar cu 3-4 săptămâni înainte (mijlocul lui Mai 2026). Unele sesiuni de life drawing necesită înregistrare gratuită separată pe pagina evenimentului."},
      {time:"21:00", name:"Cina — Wong Kei, Chinatown (41-43 Wardour Street)", lat:51.5117, lng:-0.1316, type:"food", wiki:"Wong Kei",
        tip:"10 min mers de la National Gallery: Trafalgar Square → Haymarket → Shaftesbury Avenue → Wardour Street. Wong Kei (41-43 Wardour Street, Soho): restaurant cantonez iconic funcționând din 1985, deschis Lun-Sâm până la 23:30. Meniu complet £10-15/persoană — BBQ pork rice, beef ho fun, dim sum de seară. Etaje multiple, fără rezervare, rotație rapidă.",
        desc:"Wong Kei pe Wardour Street funcționează din 1985 (40+ ani) și este una din puținele instituții culinare londoneze cu prețuri neschimbate față de deceniile trecute. Un dinner cantonez complet sub £15/persoană în Soho este imposibil de găsit în altă parte. Celebru inițial pentru serviciul de o impertinență proverbială — documentat în ghiduri ca un fenomen cultural londonez — restaurantul și-a rafinat stilul după 2014 păstrând esențialul: mâncare bună, repede, ieftin.",
        status:"verified-by-claude", lastChecked:"2026-05-03",
        verifyBefore:"Verifică orele pe https://wongkei.has.restaurant — confirmat Apr 2026: Lun-Sâm 12:00-23:30, Dum 12:00-22:30. Fără rezervări. Coadă max 10-15 min vineri seara. Nu acceptă Amex."},
    ]
  },
  {
    id:4, label:"Ziua 4", short:"Sâm", date:"20 Iun", iso:"2026-06-20",
    stops:[
      {time:"08:30", name:"Metrou spre Tower Hill (ieși devreme)", lat:51.5101, lng:-0.0766, type:"transport", wiki:"Tower Hill tube station",
        tip:"Linia District/Circle până la Tower Hill. Intri în Tower of London la 09:00 fix — nu întârzia. Coada la Crown Jewels e minimă la deschidere."},
      {time:"09:00", name:"Tower of London — bilet £37 (cumpără online)", lat:51.5081, lng:-0.0759, type:"museum", wiki:"Tower of London", tags:["ticket"],
        bookingId:"tower-london",
        tip:"CUMPĂRĂ BILETUL ONLINE în avans — mai ieftin și eviți coada la casierie. La intrare, securitate + verificare bilet = 10 min. Fii pregătit.",
        desc:"Construit de Wilhelm Cuceritorul în 1078 ca simbol al dominației normande, Tower of London a servit pe rând ca palat royal, temnița regală, tezaur al Coroanei, menajerie cu lei și elefanți, observator astronomic și monetărie. Anne Boleyn, Catherine Howard și Lady Jane Grey au fost decapitate în curtea interioară — ghidul Yeoman Warder îți arată exact locul."},
      {time:"09:10", name:"Bijuteriile Coroanei — PRIMA OPRIRE (fără negociere)", lat:51.5081, lng:-0.0759, type:"attraction", wiki:"Crown Jewels of the United Kingdom",
        tip:"OBLIGATORIU: mergi DIRECT la Jewel House imediat după intrare. Dacă aștepți până la 10:30, coada e 45-60 min. La deschidere în Iunie: 15-25 min (sezon de vârf — alocă 30-35 min total). Benzile rulante nu se opresc — mișcă-te cu fluxul.",
        desc:"Bijuteriile Coroanei includ Sceptrul Regal cu Cullinan I — cel mai mare diamant tăiat din lume (530 carate). Coroana Imperială de Stat conține 2.868 diamante, 17 safire, 11 smaralde și 269 perle. Toată colecția este evaluată la aproximativ £3-5 miliarde și nu este asigurată — nu există asigurare care să acopere o astfel de pierdere.",
        guide:["Treci de două ori pe banda rulantă: prima dată pentru imaginea de ansamblu, a doua pentru detalii pe fiecare piesă","Cullinan I (Sceptrul Regal): cel mai mare diamant tăiat din lume — 530 carate, cât un ou de porumbel","Coroana Imperială: 2.868 diamante. Safirul lui Eduard Mărturisitorul datează din sec. XI","Orb-ul Suveranului: crucea de deasupra simbolizează dominația creștinismului asupra lumii","La ieșire: vitrinele laterale cu coroane istorice sunt ignorate de toată lumea — stai 5 min extra"]},
      {time:"09:35", name:"White Tower — Turnul Norman (sec. XI)", lat:51.5081, lng:-0.0759, type:"museum", wiki:"White Tower, London",
        tip:"Cel mai vechi turn. Armuri medievale, colecție de arme. Priveliște excelentă de pe etajul superior. Plan 50-60 min."},
      {time:"10:40", name:"Bloody Tower & Traitors' Gate", lat:51.5081, lng:-0.0759, type:"attraction", wiki:"Bloody Tower",
        tip:"Locul unde prințișorii au fost ținuți închiși. Traitors' Gate — poarta pe unde intrau prizonierii cu barca. Povești fascinante."},
      {time:"11:20", name:"Zidurile de apărare + Corbii Turnului", lat:51.5081, lng:-0.0759, type:"attraction", wiki:"Ravens of the Tower of London",
        tip:"Corvii sunt creaturi inteligente și fotogenice. Legendă: dacă corbii pleacă, Imperiul cade. Yeoman Warder tours gratuite incluse în bilet — 45 min, valoroase.",
        desc:"Legenda corbilor la Tower datează oficial din perioada lui Carol II (sec. XVII). Cei 6 corbi oficiali au asistente personale, diete speciale și sunt considerați angajați ai Coroanei. Aripa unui corb este ușor tăiată pentru a-l împiedica să zboare — dar un corb pe nume Grip a evadat în 1981 și a fost găsit în East End câteva zile mai târziu."},
      {time:"12:05", name:"Tower Bridge + Shad Thames — traversare gratuită", lat:51.5055, lng:-0.0754, type:"attraction", wiki:"Tower Bridge", tags:["free"],
        tip:"Traversare gratuită la nivel de stradă. NU plăti £15 pentru pasarela de sticlă. După traversare, virează dreapta pe Shad Thames — strada victoriană cu pasarele de fier suspendate între depozite. Spectaculoasă, aproape fără turiști la 12:00 sâmbăta. 10 min detour."},
      {time:"12:35", name:"Maltby Street Market — Bermondsey (NUMAI SÂMBĂTĂ)", lat:51.5012, lng:-0.0803, type:"food", wiki:"Maltby Street Market",
        tip:"Piață de street food cu vibe local (nu touristy ca Borough Market). Fornetti, Vietnamese, Tacos, brânzeturi. Deschisă Sâmbătă 10:00–17:00. Mânâncă în picioare."},
      {time:"13:45", name:"Bermondsey Street — White Cube Gallery + artă stradală", lat:51.5007, lng:-0.0836, type:"museum", wiki:"White Cube (gallery)", tags:["free"],
        tip:"Stradă vibrantă cu galerii de artă independente, cafenele specialty coffee. White Cube este una dintre cele mai importante galerii contemporane din Londra. Intrare gratuită."},
      {time:"14:20", name:"Southwark Cathedral — Wren ascuns", lat:51.5056, lng:-0.0901, type:"church", wiki:"Southwark Cathedral", tags:["free"],
        tip:"Una dintre cele mai vechi catedrale gotice din Londra, frecvent trecută cu vederea. Shakespeare a fost botezat în parohia vecină. 15-20 min. Liniște deplină."},
      {time:"14:50", name:"Tren London Bridge → Greenwich (Southeastern, 8 min)", lat:51.5031, lng:-0.0839, type:"transport", wiki:"London Bridge station",
        tip:"RUTA RAPIDĂ: Mergi pe jos de la Southwark Cathedral spre London Bridge Station (8 min, spre nord). Tren Southeastern spre Greenwich — numai 8 minute, ajungi la ~15:10. Economisești 20 min față de DLR via Tower Gateway. Pe peron: direcția Gravesend, Hayes sau Dartford — nu Cannon Street."},
      {time:"15:20", name:"National Maritime Museum + Queen's House (gratuit)", lat:51.4807, lng:-0.0058, type:"museum", wiki:"National Maritime Museum", tags:["free"],
        tip:"NU RATA Painted Hall (Old Royal Naval College, 5 min mers vest) — plafon baroc pictat 19 ani de Sir James Thornhill, bilet £19 (merită). Bate Maritime Museum pentru vizitatori generali. Queen's House: Tulip Staircase magnifică (gratuită). Maritime Museum: povești navale (gratuit). Plan total: 75-90 min.",
        desc:"Cel mai mare muzeu naval din lume adăpostește uniforma purtată de Amiralul Nelson la Bătălia de la Trafalgar (1805) — cu gaura glonțului care l-a ucis vizibilă pe umărul stâng. Colecția cuprinde 2 milioane de obiecte. Painted Hall din vecinătate a luat 19 ani de lucru lui Sir James Thornhill (1707-1726) și este supranumit 'Capella Sixtină britanică'.",
        guide:["ÎNTÂI Painted Hall (Old Royal Naval College, 5 min vest) — bilet £19, închide la 17:00, nu rata!","Painted Hall: privește plafonul din centrul sălii cu capul pe spate — 19 ani de pictură barocă","Maritime Museum: Nelson Gallery (parter) — uniforma lui Nelson cu gaura glonțului vizibilă pe umăr","Queen's House (lângă muzeu): Tulip Staircase — prima scară helicoidală din Marea Britanie (1635)","Urcă 10 min la Observatorul Regal — panorama Londrei e mai valoroasă decât orice exponat din muzeu"]},
      {time:"16:25", name:"Greenwich Park — priveliște de pe colină", lat:51.4773, lng:-0.0015, type:"viewpoint", wiki:"Greenwich Park",
        tip:"Urcă la Observatorul Regal (colină de 10 min). Linia meridianului zero e marcată pe jos. Panoramă 360° asupra Londrei și Tamisei. Fotografii spectaculoase.",
        desc:"Observatorul Regal a fost fondat în 1675 de Regele Carol II pentru rezolvarea problemei determinării longitudinii pe mare — o problemă care ucidea mii de marinari anual. Meridianul Zero de la Greenwich a fost adoptat ca referință globală în 1884, când 25 de țări au votat la Washington. Astăzi, linia zero este marcată cu un laser verde vizibil noaptea."},
      {time:"17:00", name:"DLR înapoi spre London Bridge / Tower Gateway", lat:51.5059, lng:-0.0877, type:"transport", wiki:"Tower Bridge"},
      {time:"17:30", name:"Summer by the River — The Scoop (evenimente gratuite)", lat:51.5059, lng:-0.0877, type:"attraction", wiki:"The Scoop, London", tags:["free"],
        tip:"Amfiteatru în aer liber lângă Tower Bridge. Verifică programul la visitlondon.com — concerte, cinema, teatru gratuite vara. Dacă nu-i nimic, plimbă-te pe Riverwalk."},
      {time:"18:30", name:"Shad Thames la apus + Butler's Wharf", lat:51.5041, lng:-0.0769, type:"viewpoint", wiki:"Shad Thames",
        tip:"Ai trecut prin Shad Thames la prânz — la 18:30 arată complet diferit. Pasarelele de fier între depozitele victoriene prind lumina serii. Butlers Wharf Chop House are bar exterior fără rezervare — o băutură cu Tower Bridge în față. Rămâi până la 20:30 pentru lumina de aur a apusului (apus la 21:21 pe 20 Iunie). Stradă: intră mai adânc în Bermondsey pentru pub-uri locale (Woolpack pe Bermondsey Street).",
        desc:"Shad Thames este una dintre puținele străzi victoriene din Londra care a supraviețuit intactă bombardamentelor din al Doilea Război Mondial și demolărilor postbelice. Depozitele de condimente și ceai din sec. XIX (Brooke Bond Tea, Branston Pickle) au fost reconvertite în locuințe de lux în anii '80, dar pasarelele aeriene de fier forjat dintre clădiri — originale, neschimbate — au rămas. La apus, lumina portocalie intră pe alei ca printr-un defileu medieval."},
      {time:"20:30", name:"Tower Bridge la asfințit — fotografii de pe malul sudic", lat:51.5055, lng:-0.0754, type:"viewpoint", wiki:"Tower Bridge", tags:["free"],
        tip:"Apusul e la 21:17 pe 20 Iunie. Cel mai bun unghi: poteca de lângă Potters Fields Park, malul sudic la est de Tower Bridge — lumina portocalie lovește turnurile din față. Podul începe să se aprindă electric în jurul orei 21:00. O băutură la Butlers Wharf Chop House (bar exterior) cu Tower Bridge în față: priveliștea cea mai cinematografică din Londra. 45-60 min."},
      {time:"21:30", name:"Cina — Flat Iron Square / Bermondsey Street", lat:51.5030, lng:-0.0868, type:"food", wiki:"Street food",
        tip:"Flat Iron Square (Southwark Street, 15 min mers vest de Tower Bridge) — food trucks, bere artizanală, muzică live, animat sâmbăta, deschis până la miezul nopții. Sau Bermondsey Street (mai liniștit): Antico (wine bar, nr. 214), Tentazioni (Italian, nr. 2). London Bridge station la 10 min mers pentru întoarcere.",
        status:"verified-by-claude", lastChecked:"2026-05-03",
        verifyBefore:"Flat Iron Square confirmat deschis (Apr 2026): https://flatironsquare.co.uk — 7 arce de cale ferată cu food vendors, 5 baruri, open până la 00:00 Joi-Sâm. Funcționează din 2016 (9 ani). Bermondsey Street: verifică Antico și Tentazioni pe Google Maps pentru program sâmbătă seara."},
    ]
  },
  {
    id:5, label:"Ziua 5", short:"Dum", date:"21 Iun", iso:"2026-06-21",
    stops:[
      {time:"08:00", name:"Columbia Road Flower Market (NUMAI DUMINICĂ, 8-15h)", lat:51.5290, lng:-0.0726, type:"market", wiki:"Columbia Road Flower Market", tags:["free"],
        tip:"Sosești devreme! La 08:00 e animat dar circulabil. La 10:00 devine copleșitor. Florari strigă prețurile — atmosferă autentică londoneză. Cafenele deschise devreme pe stradă.",
        desc:"Columbia Road a fost construită în 1869 de filantropa Angela Burdett-Coutts ca piață acoperită pentru săracii din East End — proiectul a eșuat economic și a fost demolat. Piața de flori de duminică a luat naștere spontan în anii '60 din inițiativa comercianților locali și a devenit unul din simbolurile culturii est-londoneze."},
      {time:"09:15", name:"Brick Lane Sunday Market — vintage & street food", lat:51.5228, lng:-0.0717, type:"market", wiki:"Brick Lane", tags:["free"],
        tip:"Haine vintage, artă, mâncare internațională. Bagel shops deschise de dimineață. Mai puțin animat decât sâmbăta — perfect pentru browsing relaxat."},
      {time:"10:30", name:"Metrou spre Trafalgar Square / Charing Cross", lat:51.5080, lng:-0.1281, type:"transport", wiki:"Charing Cross tube station"},
      {time:"11:00", name:"National Gallery (gratuit) — Impressioniști & Turner", lat:51.5089, lng:-0.1283, type:"museum", wiki:"National Gallery, London", tags:["free"],
        tip:"Rezervă intrare online (gratuit dar evită coada). Focalizează pe: Sala 34 (Van Gogh, Seurat), Sala 41 (Monet), Sala 32 (Renoir), Sala 34 (Cézanne). Sălile cu Turner (etaj 2) sunt mai liniștite.",
        desc:"Fondată în 1824 cu doar 38 de picturi cumpărate de guvernul britanic pentru £57.000, National Gallery adăpostește acum 2.300 de lucrări de la Giotto (sec. XIII) la Cézanne (sec. XX). Este una din puținele mari galerii din lume cu intrare complet gratuită — o decizie politică britanică din 1824 care a rezistat 200 de ani.",
        guide:["Room 8: Leonardo da Vinci — Virgin of the Rocks (ORIGINAL), singurul din Regatul Unit","Room 34: Van Gogh (Floarea Soarelui), Seurat (Bathers at Asnières) — punctul de start recomandat","Room 41: Monet — 5 tablouri într-un singur spațiu, inclusiv Gare Saint-Lazare","Room 30: Velázquez — Vénus la oglindă, singura nudă a sa existentă în lume","Room 32: Renoir — La Loge, Les Parapluies — luminos, accesibil, aproape mereu liber"]},
      {time:"12:00", name:"WEST END LIVE — Trafalgar Square (gratuit, 12:00–17:00)", lat:51.5080, lng:-0.1281, type:"attraction", wiki:"Trafalgar Square", tags:["free"],
        tip:"Festival anual cu spectacole din musicaluri West End — gratuit. Duminică 21 Iunie: 12:00–17:00 (nu 21:00!). Stai pe treptele National Gallery sau adu o pătură. Cel mai bun loc gratuit din Londra pentru musicaluri."},
      {time:"14:00", name:"Prânz — Covent Garden Market", lat:51.5121, lng:-0.1237, type:"food", wiki:"Covent Garden",
        tip:"Covent Garden e la 5 min nord de Trafalgar Square. Food halls și food trucks cu mâncare internațională. Sau Dishoom (Indian) — rezervă în avans."},
      {time:"15:00", name:"Metrou spre South Kensington (Piccadilly Line)", lat:51.4942, lng:-0.1741, type:"transport", wiki:"South Kensington tube station"},
      {time:"15:30", name:"V&A Museum — Victoria and Albert (gratuit)", lat:51.4966, lng:-0.1722, type:"museum", wiki:"Victoria and Albert Museum building", tags:["free"],
        tip:"Cel mai mare muzeu de design și arte decorative din lume. Focalizează: Fashion (Level 3), Jewelry Gallery, Cast Courts (replici la scară a marilor sculpturi). Impresionant și relativ liniștit după-amiaza.",
        desc:"Victoria and Albert Museum, deschis în 1852, a fost primul muzeu din lume creat explicit pentru educarea designerilor industriali. Adăpostește o replică la scară reală a lui David de Michelangelo (cu un fig leaf adăugat la cererea Reginei Victoria), prima pereche de blugi Levi's, și costumul Jagged Edge al lui David Bowie.",
        guide:["Cast Courts (Room 46A/B): replici la scară a lui David și Coloanei lui Traian — copleșitor ca dimensiune","Fashion Gallery (Level 3): 4 secole de modă, de la corset elizabetan la Alexander McQueen","Jewellery Gallery (Level 3): bijuterii europene din Evul Mediu — slab iluminate, atmosferă de tezaur","Raphael Cartoons (Room 48A): 7 tablouri uriașe originale ale lui Rafael — gratuite și aproape mereu goale","Islamic Art (Level 1): Ardabil Carpet (1539) — cel mai mare covor persan existent, 10.5m × 5.3m"]},
      {time:"17:00", name:"Hyde Park & Kensington Gardens — plimbare liberă", lat:51.5073, lng:-0.1657, type:"park", wiki:"Hyde Park, London", tags:["free"],
        tip:"Cel mai mare parc central al Londrei. Intrarea din South Kensington duce direct spre Serpentine Lake. Relaxează-te înainte de Serpentine Pavilion."},
      {time:"17:30", name:"Diana Memorial Fountain", lat:51.5038, lng:-0.1649, type:"attraction", wiki:"Diana, Princess of Wales Memorial Fountain",
        tip:"Monument contemporan sub formă de canal oval. Oamenii umblă prin apă (vara). 10-15 min. Intrare gratuită."},
      {time:"18:00", name:"Serpentine Pavilion 2026 + Serpentine Galleries (gratuit)", lat:51.5058, lng:-0.1747, type:"museum", wiki:"Serpentine Galleries", tags:["free"],
        tip:"Pavilionul Serpentine 2026: LANZA atelier (Isabel Abascal & Alessandro Arienzo) — un zid șerpuit de cărămidă roșie, în premiera arhitecturii mondiale. Deschis din 6 Iunie 2026 până în Octombrie. Intrare gratuită. Confirmat ✓"},
      {time:"19:15", name:"Metrou spre Chalk Farm (Primrose Hill)", lat:51.5440, lng:-0.1592, type:"transport", wiki:"Chalk Farm tube station",
        tip:"Din Hyde Park Corner: linia Piccadilly → King's Cross → linia Northern (Edgware branch) → Chalk Farm. Total ~30 min. La ieșirea din stație, mergi pe Gloucester Avenue (DREAPTA, spre Primrose Hill) — nu spre Camden Market."},
      {time:"19:45", name:"Cina — The Engineer, Primrose Hill (65 Gloucester Avenue)", lat:51.5407, lng:-0.1534, type:"food", wiki:"Primrose Hill",
        tip:"3 min mers de la Chalk Farm tube pe Gloucester Avenue. The Engineer — pub-restaurant victorian din sec. XIX, renovat 2024. Meniu: pui prăjit, burger artizanal, Sunday roast tradițional. Preț: £15-20/persoană. Rezervă dacă posibil: 020 7483 1890. Mânâncă rapid — pleacă la 20:20 pentru a fi pe vârful dealului la apus.",
        desc:"The Engineer de pe Gloucester Avenue datează din epoca victoriană și este emblematic pentru 'Primrose Hill Set' — zona unde au locuit Sylvia Plath, Alan Bennett și Jude Law. Recent renovat ca prim pub 'Innovation' al Castle Pubs, menține caracterul autentic: grădina cu zid, bar central, meniu sezonier. O masă reală într-un pub local — la polul opus față de food courts-urile turistice din Camden Market.",
        status:"verified-by-claude", lastChecked:"2026-05-03",
        verifyBefore:"Verifică program duminică pe https://www.theengineerprimrosehill.co.uk — confirmat deschis pentru cina. Rezervare: 020 7483 1890. Alternativă dacă e complet: Odette's (130 Regent's Park Road, 5 min mers, bistro local, rez. necesară)."},
      {time:"20:30", name:"Primrose Hill — vârful dealului", lat:51.5388, lng:-0.1614, type:"viewpoint", wiki:"Primrose Hill",
        tip:"12 min mers de la The Engineer. Instalează-te pe vârf: ai 52 min până la apus. Panoramă completă asupra Londrei — Shard, Gherkin, BT Tower. Seara solstițiului aduce localnici cu pături și vin, nu turiști — o tradiție londoneză autentică.",
        desc:"Primrose Hill apare pe hărți din 1086. Scriitoarea Sylvia Plath și-a petrecut ultimii ani ai vieții pe stradele adiacente, iar zona a fost reședința unor personalități ca Alan Bennett și Jude Law — numită ironic 'Primrose Hill Set'. Pe 21 Iunie, dealul se umple de londonezi care serbează solstițiul — o tradiție neoficială cu origini druidice."},
      {time:"21:22", name:"Apusul Solstițiului de Vară — cea mai lungă zi din an", lat:51.5388, lng:-0.1614, type:"attraction", wiki:"Primrose Hill",
        tip:"Apus exact la 21:22 BST pe 21 Iunie 2026 (solstițiu — confirmat astronomic). Lumina roz-aurie durează 20-30 min după apus. Fotografii extraordinare. Cel mai frumos moment al vacanței. IMPORTANT: Parcul Primrose Hill se închide la 22:00 duminica — coboară dealul până la 21:55."},
      {time:"22:00", name:"The Hawley Arms — Camden Town (2 Castlehaven Road)", lat:51.5390, lng:-0.1426, type:"food", wiki:"Amy Winehouse",
        tip:"Coboară dealul și mergi 12 min pe Regent's Park Road → Parkway → Castlehaven Road. The Hawley Arms (nr. 2, colț cu Hawley Road) — pub local cu muzică live, barul obișnuit al lui Amy Winehouse. Evită zona pieței Camden și Stables Market — tourist trap. Pub-ul închide la 23:00-23:30 duminica. Metrou: Camden Town (Northern line), 5 min mers.",
        desc:"The Hawley Arms funcționează neîntrerupt din 1979 și era locul obișnuit al lui Amy Winehouse în ultimii ani ai vieții — fostul ei apartament se afla la 100m distanță. Spre deosebire de Stables Market și Proud Camden din apropiere (transformate în experiențe turistice), The Hawley Arms rămâne un pub de cartier frecventat de rezidenți, cu muzică live autentică.",
        status:"verified-by-claude", lastChecked:"2026-05-03",
        verifyBefore:"Verifică program duminică pe https://thehawleyarms.com — funcționare confirmată ca pub local activ (nu parte din complexul Camden Market). Nu confunda cu barul Proud Camden din The Stables."},
    ]
  },
  {
    id:6, label:"Ziua 6", short:"Lun", date:"22 Iun", iso:"2026-06-22",
    stops:[
      {time:"09:00", name:"Mic dejun Liverpool Street — M&S sau Greggs", lat:51.5178, lng:-0.0823, type:"food", wiki:"London Liverpool Street station"},
      {time:"09:30", name:"Old Spitalfields Market — ultima plimbare", lat:51.5192, lng:-0.0726, type:"market", wiki:"Old Spitalfields Market",
        tip:"Vizita de adio. Luni dimineața e liniștit — poți discuta cu artizanii. Ultima șansă pentru suveniruri autentice."},
      {time:"10:30", name:"Mers spre Horizon 22 (10 min de la Liverpool Street)", lat:51.5148, lng:-0.0808, type:"transport", wiki:"22 Bishopsgate"},
      {time:"10:45", name:"Horizon 22 — coadă pentru slot de 11:00", lat:51.5148, lng:-0.0808, type:"viewpoint", wiki:"Horizon 22",
        tip:"REZERVARE ONLINE OBLIGATORIE — nu există walk-in. Rezervă slotul de 11:00 în avans pe horizon22.co.uk. Aduce act de identitate — verificare obligatorie la intrare. Securitate 5-10 min. Ajunge cu 15 min înainte de slot."},
      {time:"11:00", name:"Horizon 22 — etaj 58, cel mai înalt punct gratuit", lat:51.5148, lng:-0.0808, type:"viewpoint", wiki:"Horizon 22", tags:["booking"],
        bookingId:"horizon22",
        tip:"Cel mai înalt punct de vedere gratuit din Londra (230m). Vedere 360° — poți vedea până la 40 km în zi senină. Cafea disponibilă la etaj. Ultima amintire perfectă din Londra.",
        desc:"La 230 de metri înălțime, 22 Bishopsgate este cea mai înaltă clădire din Londra cu acces gratuit. Construită în 2020 după ce precedentul proiect a fost oprit de criza financiară din 2008 (structura de oțel a stat abandonată 8 ani), adăpostește 12.000 de angajați și a costat £1 miliard. Galeria publică de la etajul 58 a fost deschisă în 2022.",
        guide:["Securitate la intrare: saci la scanner, curea și monede la tavă — alocă 8–10 min","Ieși din lift și virează STÂNGA pentru vederea spre City (Gherkin, Walkie-Talkie, Tower Bridge)","Fereastra spre nord: Primrose Hill, Alexandra Palace și Essex la 40km în zile senine","Cafenea la etaj: cafea £5 — merită să stai 20–30 min cu priveliștea ultimei zile","Cel mai bun moment: înainte de 12:00, înainte să vină coada de prânz a angajaților din clădire"]},
      {time:"12:05", name:"Mers înapoi spre Liverpool Street (10 min)", lat:51.5178, lng:-0.0823, type:"transport", wiki:"London Liverpool Street station"},
      {time:"12:20", name:"Tesco Bishopsgate — cumpărături pentru drum", lat:51.5178, lng:-0.0823, type:"food", wiki:"Bishopsgate"},
      {time:"12:55", name:"Peron Stansted Express — Liverpool Street", lat:51.5178, lng:-0.0823, type:"transport", wiki:"Stansted Express",
        tip:"Verifică peronul pe tabela de afișaj — Stansted Express pleacă de pe peroane specifice. Biletul se poate cumpăra din mers dar e mai scump."},
      {time:"~13:30", name:"Stansted Express — plecare", lat:51.5178, lng:-0.0823, type:"transport", wiki:"Stansted Express"},
      {time:"~14:18", name:"Sosire Stansted Airport", lat:51.8857, lng:0.2352, type:"transport", wiki:"London Stansted Airport"},
    ]
  }
];;

// -- Reservations & tickets ---------------------------------------------------
export const BOOKINGS = [
  {
    id:"eta-uk",
    deadlineIso:"2026-06-12",
    badge:"Aplică cât mai curând",
    name:"UK ETA — Autorizație Electronică de Călătorie",
    when:"Înainte de zbor — 17 Iun · £10/persoană",
    note:"Cetățenii români au nevoie de UK ETA (Electronic Travel Authorisation) pentru a intra în Marea Britanie. Fără ETA aprobat nu poți urca în avion. Costă £20/persoană (tarif actualizat Aprilie 2026), se aprobă în câteva ore dar poate dura până la 3 zile lucrătoare. Valabil 2 ani de la aprobare.",
    deadline:"Cel târziu 12 Iunie (Joi) — 3 zile lucrătoare înainte de zbor",
    url:"https://www.gov.uk/eta",
    btn:"Aplică pentru UK ETA →"
  },
  {
    id:"sky-garden",
    deadlineIso:"2026-05-28",
    badge:"Rezervă Luni 28 Mai la 10:00",
    name:"Sky Garden — 20 Fenchurch Street",
    when:"Ziua 2 — Joi 18 Iun · 14:00",
    note:"Intrare 100% gratuită dar locurile se rezervă în fiecare Luni la 10:00 pentru 3 săptămâni înainte. Rezervă pe 28 Mai (Luni) la 10:00 fix. Rezervă slotul de 14:00 și sosește la 13:55. Aduce act de identitate la vizită.",
    deadline:"Rezervă pe 28 Mai (Luni la 10:00 fix)",
    url:"https://skygarden.london/booking/",
    btn:"Rezervă Sky Garden →"
  },
  {
    id:"city-cruises",
    deadlineIso:"2026-06-17",
    badge:"Fără rezervare necesară",
    name:"City Cruises — Croazieră de seară pe Tamisa",
    when:"Ziua 2 — Joi 18 Iun · 20:15 · Bankside Pier (lângă Tate Modern)",
    note:"Bateaux London și-a suspendat operațiunile în 2025-2026. Alternativa recomandată: City Cruises — croazieră la 20:15 de la Bankside Pier (lângă Tate Modern, malul sudic). Departura la 20:15 prinde ora de aur (20:45–21:19) și apusul exact (21:19 BST pe 18 Iunie) pe apă — incomparabil față de 19:20 (lumina plată de zi). Fără rezervare, plătești la îmbarcare (~£22/persoană). Durată ~1.5 ore.",
    deadline:"Fără rezervare — prezintă-te la Bankside Pier (lângă Tate Modern) la 20:10",
    url:"https://www.citycruises.com/",
    btn:"Vezi City Cruises →"
  },
  {
    id:"tower-london",
    deadlineIso:"2026-06-06",
    badge:"Rezervă în curând",
    name:"Tower of London — Bilet intrare",
    when:"Ziua 4 — Sâmbătă 20 Iun · 09:00 · £37/persoană",
    note:"Biletul online evită coada la casierie (20-30 min în sezon). Preț online: £34.80/persoană (la casierie £39.80). Cumpărând online intri direct la control. Sosești la 09:00 și mergi DIRECT la Crown Jewels — alocă 30-35 min pentru coadă (sezon de vârf).",
    deadline:"Rezervă cu 1-2 săptămâni înainte",
    url:"https://www.hrp.org.uk/tower-of-london/visit/tickets-and-prices/",
    btn:"Cumpără bilet Tower of London →"
  },
  {
    id:"horizon22",
    deadlineIso:"2026-06-09",
    badge:"Rezervă Luni 9 Iunie la 10:00",
    name:"Horizon 22 — Etajul 58 (22 Bishopsgate)",
    when:"Ziua 6 — Luni 22 Iun · 11:00",
    note:"Cel mai înalt punct de vedere gratuit din Londra (230m). Sloturile online se eliberează în fiecare Luni la 10:00 pentru 2 săptămâni înainte. Walk-in posibil pe zi (QR code la intrare) dar negarantat. Rezervă online pe 9 Iunie (Luni) pentru siguranță.",
    deadline:"Rezervă pe 9 Iunie (Luni la 10:00) — 8 Iunie e Duminică",
    url:"https://horizon22.co.uk/",
    btn:"Rezervă Horizon 22 →"
  },
  {
    id:"soane-museum",
    deadlineIso:"2026-06-12",
    badge:"Rezervă online — gratuit",
    name:"Sir John Soane's Museum — Picture Room",
    when:"Ziua 3 — Vin 19 Iun · 15:00",
    note:"Intrare GRATUITĂ, walk-in acceptat — nu e necesară rezervare online pentru intrare generală. Picture Room: panouri nord la 11:00 și 14:00, panouri sud la 11:00, 15:00 și 16:00 (zilnic). Muzeul este ÎNCHIS Luni și Marți. Vineri 19 Iunie: deschis ✓",
    deadline:"Nu necesită rezervare — prezintă-te direct",
    url:"https://www.soane.org/your-visit",
    btn:"Rezervă Sir John Soane's →"
  }
];;

// -- Verified travel times between consecutive stops --------------------------
// Key format: "<dayId>-<stopIndex>" → travel from that stop to the next.
export const TRAVEL_DATA = {
  // DAY 1
  "1-1":{min:47,mode:"train"}, // Stansted Express → Liverpool Street
  "1-2":{min:10,mode:"walk"},  // Liverpool Street → Spitalfields
  "1-3":{min:5, mode:"walk"},  // Spitalfields → Shoreditch
  "1-4":{min:2, mode:"walk"},  // Shoreditch → Beigel Bake
  "1-5":{min:11,mode:"walk"},  // Beigel Bake → Museum of Home
  "1-6":{min:25,mode:"bus"},   // Museum of Home → St Dunstan (bus 149/242, 2.6km)
  "1-7":{min:8, mode:"walk"},  // St Dunstan → Tower Bridge
  "1-8":{min:20,mode:"walk"},  // Tower Bridge → St Paul's (1.6km)
  "1-9":{min:5, mode:"walk"},  // St Paul's → Postman's Park
  "1-10":{min:4,mode:"walk"},  // Postman's Park → Coffee rest
  "1-11":{min:2,mode:"walk"},  // Coffee → Evensong queue
  "1-13":{min:8,mode:"tube"},  // Evensong done → Liverpool Street (Central line, 2 stops)
  "1-14":{min:10,mode:"walk"}, // Liverpool Street hotel → Brick Lane evening
  "1-15":{min:5, mode:"walk"}, // Brick Lane → Shoreditch bars (north on Shoreditch High St)
  // DAY 2
  "2-0":{min:13,mode:"tube"},  // Liverpool Street → British Museum (Elizabeth line)
  "2-1":{min:3, mode:"walk"},  // British Museum → Prânz Holborn
  "2-2":{min:5, mode:"walk"},  // Prânz → Metrou Holborn
  "2-3":{min:10,mode:"tube"},  // Metrou Holborn → St Stephen Walbrook (Central→Bank)
  "2-4":{min:7, mode:"walk"},  // St Stephen → Sky Garden (~600m est)
  "2-5":{min:5, mode:"walk"},  // Sky Garden → Leadenhall
  "2-6":{min:6, mode:"walk"},  // Leadenhall → St Mary Woolnoth
  "2-7":{min:2, mode:"walk"},  // St Mary Woolnoth → Metrou Bank
  "2-8":{min:17,mode:"tube"},  // Bank → Westminster (W&C + Jubilee, change at Waterloo)
  "2-10":{min:25,mode:"walk"}, // Westminster Evensong → Gabriel's Wharf dinner (2km south bank walk)
  "2-11":{min:15,mode:"walk"}, // Gabriel's Wharf → Bankside Pier/Tate Modern (1.2km east)
  "2-12":{min:3, mode:"walk"}, // Bankside Pier → The Anchor Bankside (2 min, same area)
  // DAY 3
  "3-0":{min:5, mode:"walk"},  // Metrou Green Park → Mic dejun
  "3-1":{min:8, mode:"walk"},  // Mic dejun → Victoria Memorial
  "3-2":{min:3, mode:"walk"},  // Victoria Memorial → Schimbarea Gărzii
  "3-3":{min:3, mode:"walk"},  // Garda → St James's Park
  "3-4":{min:15,mode:"walk"},  // St James's Park → Big Ben
  "3-5":{min:15,mode:"walk"},  // Big Ben → Metrou spre Holborn
  "3-6":{min:15,mode:"tube"},  // Metrou → Prânz Soane's
  "3-7":{min:2, mode:"walk"},  // Prânz → Coadă Soane's
  "3-9":{min:3, mode:"walk"},  // Soane's → Metrou Holborn
  "3-10":{min:20,mode:"tube"}, // Metrou Holborn → Tate Modern
  "3-11":{min:15,mode:"tube"}, // Tate Modern → British Museum seară (Southwark → Holborn)
  "3-12":{min:3, mode:"walk"}, // British Museum → Dinner Bloomsbury (Museum Tavern vizavi)
  // DAY 4
  "4-0":{min:3, mode:"walk"},  // Metrou Tower Hill → Tower of London
  "4-1":{min:2, mode:"walk"},  // Tower intrare → Crown Jewels
  "4-2":{min:3, mode:"walk"},  // Crown Jewels → White Tower
  "4-3":{min:3, mode:"walk"},  // White Tower → Bloody Tower
  "4-4":{min:3, mode:"walk"},  // Bloody Tower → Ravens/Ziduri
  "4-5":{min:5, mode:"walk"},  // Ravens → Tower Bridge
  "4-6":{min:15,mode:"walk"},  // Tower Bridge → Maltby Street
  "4-7":{min:5, mode:"walk"},  // Maltby Street → White Cube
  "4-8":{min:10,mode:"walk"},  // White Cube → Southwark Cathedral
  "4-9":{min:3, mode:"walk"},  // Southwark Cathedral → London Bridge
  "4-10":{min:15,mode:"train"},// London Bridge → National Maritime Museum (8min train + 7min walk)
  "4-11":{min:10,mode:"walk"}, // Maritime Museum → Greenwich Park hill
  "4-12":{min:12,mode:"walk"}, // Greenwich Park → DLR/tren retur
  "4-13":{min:5, mode:"walk"}, // DLR Tower area → The Scoop
  "4-14":{min:5, mode:"walk"}, // The Scoop → Shad Thames apus
  "4-15":{min:5, mode:"walk"}, // Shad Thames → Tower Bridge golden hour (same area)
  "4-16":{min:15,mode:"walk"}, // Tower Bridge → Flat Iron Square / London Bridge dinner
  // DAY 5
  "5-0":{min:15,mode:"walk"},  // Columbia Road → Brick Lane Sunday (1.5km)
  "5-1":{min:5, mode:"walk"},  // Brick Lane → Metrou Aldgate East
  "5-2":{min:3, mode:"walk"},  // Metrou Charing Cross → National Gallery
  "5-4":{min:8, mode:"walk"},  // West End Live → Prânz Covent Garden
  "5-5":{min:11,mode:"tube"},  // Prânz → Metrou South Kensington (Piccadilly direct, 7 stops)
  "5-6":{min:5, mode:"walk"},  // Metrou South Kensington → V&A
  "5-7":{min:8, mode:"walk"},  // V&A → Hyde Park
  "5-8":{min:12,mode:"walk"},  // Hyde Park → Diana Memorial Fountain
  "5-9":{min:5, mode:"walk"},  // Diana Fountain → Serpentine
  "5-10":{min:15,mode:"walk"}, // Serpentine → Metrou Hyde Park Corner
  "5-11":{min:12,mode:"walk"}, // Chalk Farm tube → Primrose Hill summit
  "5-13":{min:12,mode:"walk"}, // Primrose Hill sunset → Camden Town (down hill + 5min walk)
  // DAY 6
  "6-0":{min:10,mode:"walk"},  // Mic dejun → Old Spitalfields
  "6-1":{min:8, mode:"walk"},  // Old Spitalfields → Horizon 22 (spre clădire)
  "6-2":{min:2, mode:"walk"},  // Transport stop → coadă Horizon 22
  "6-4":{min:7, mode:"walk"},  // Horizon 22 → Liverpool Street
  "6-5":{min:5, mode:"walk"},  // Liverpool Street → Tesco
  "6-6":{min:3, mode:"walk"},  // Tesco → Peron Stansted Express
  "6-8":{min:47,mode:"train"}, // Stansted Express → Stansted Airport
};;

// -- Visual classification ----------------------------------------------------
export const TYPE_ICON = {
  transport: "train-simple",
  museum:    "bank",
  church:    "church",
  market:    "storefront",
  food:      "fork-knife",
  park:      "tree",
  viewpoint: "binoculars",
  attraction:"star"
};

export const LEGEND_ITEMS = [
  { color: "#C8102E", label: "Atracție" },
  { color: "#3B82F6", label: "Muzeu" },
  { color: "#8B5CF6", label: "Biserică" },
  { color: "#F97316", label: "Piață" },
  { color: "#EF4444", label: "Mâncare" },
  { color: "#22C55E", label: "Parc" },
  { color: "#D97706", label: "Panoramă" },
];

export const PIN_COLORS = {
  museum:    "#3B82F6",
  church:    "#8B5CF6",
  market:    "#F97316",
  food:      "#EF4444",
  park:      "#22C55E",
  viewpoint: "#D97706",
  attraction:"#C8102E",
  transport: "#9CA3AF",
};

export const TRAVEL_ICON = {
  tube:  "train-simple",
  bus:   "bus",
  train: "train",
  walk:  "person-simple-walk",
  dlr:   "train-simple",
};

export const MODE_LABEL = {
  tube:  "metrou",
  bus:   "autobuz",
  train: "tren",
  walk:  "mers",
  dlr:   "DLR",
};

// =============================================================================
// SUGGESTIONS — alternative dinners (street food / value) + 7-11PM activities
// =============================================================================
// Curated cu două criterii stricte:
//   1. STREET FOOD / BANG-FOR-BUCK: piețe stabilite (5+ ani), nu pop-up-uri
//   2. ACTIVE NIGHT (NU BAR): muzee deschise seara, galerii, evenimente culturale
//
// FIECARE intrare are un câmp `verifyBefore` cu URL-ul oficial și exact ce
// trebuie verificat înainte de plecare. NU rezerva nimic fără să confirmi.
//
// Conflictele cu programul existent au fost verificate — fiecare sugestie
// menționează ce slot din DAYS[] ar înlocui sau completa.
// =============================================================================

export const SUGGESTIONS = {

  // ---------------------------------------------------------------------------
  // ZIUA 1 — Mie 17 Iun (East End: Spitalfields, Brick Lane, Shoreditch)
  // ---------------------------------------------------------------------------
  day1: {
    streetFood: [
      {
        name: "Old Spitalfields Market — food traders interiori",
        slot: "În loc de cina pe Brick Lane (19:30) sau ca prânz",
        time: "Deschis până ~19:00 zilnic; food court intern până la 21:00 Joi",
        price: "£8–12/farfurie",
        why: "Bleecker Burger (vita uscată 35 zile, £10–12 — premiat în mod repetat ca cel mai bun smashburger din Londra), Sud Italia (pizza napoletană autentică, £9–11), Pleasant Lady (jianbing — clătită chinezească street food, £6–8). Calitate de chef la prețuri de stradă, în piața istorică pe care deja o vizitezi dimineața.",
        valueJustification: "Aceleași burgeri/pizza/clătite ca în restaurantele scumpe din Soho, dar la 40-50% din preț pentru că vendorii nu plătesc chirie de restaurant — doar taxa de tarabă. Ai economisit ~£15-20/persoană vs. un restaurant Brick Lane.",
        address: "16 Horner Square, E1 6EW",
        url: "https://oldspitalfieldsmarket.com/food-and-drink",
        verifyBefore: "Confirmă că Bleecker Burger și Sud Italia sunt încă în piață — vendorii pot rota. Sună la +44 20 7375 2963 sau verifică pagina 'Food & Drink' cu ~2 săptămâni înainte."
      },
      {
        name: "The Brick Lane Upmarket — Truman Brewery (street food internațional)",
        slot: "Înlocuiește 'Brick Lane noaptea — curry & street art' (19:30)",
        time: "Sâmbăta 11:00–18:00, Duminica 10:00–17:00 — NU este disponibil Miercuri 17 Iun",
        price: "£6–10/farfurie",
        why: "40+ vendori street food (etiopian, vietnamez, malaysian, mexican, taiwanese) — varietate imposibil de găsit la un singur restaurant.",
        valueJustification: "AVERTISMENT: Upmarket NU e disponibil Miercuri. Pentru Ziua 1 rămâi la Old Spitalfields sau la curry-ul originar pe Brick Lane (Aladin nr. 132 — institutie din 1979, £8-12/curry). Recomandare: păstrează planul original Aladin pentru Ziua 1 și vezi Upmarket pe Ziua 5 (Duminică).",
        address: "Truman Brewery, 91 Brick Lane, E1 6QL",
        url: "https://www.bricklanemarket.com/",
        verifyBefore: "Confirmă orele Sâmbătă/Duminică pentru Ziua 5. Pagina oficială bricklanemarket.com."
      }
    ],
    nightActivity: [
      {
        name: "Rich Mix — cinema independent + galerie (Bethnal Green Rd)",
        slot: "După cină, 20:00–22:30 — în loc de barurile Shoreditch (21:30)",
        time: "Filme până la 22:30, foaier deschis 09:00–23:00",
        price: "£8–13/bilet film",
        why: "Centru cultural multi-disciplinar: cinema cu 3 săli (filme indie, documentare, repertoire), galerie de artă în foaier (gratuită), evenimente literare și muzicale. La 5 min mers de Brick Lane.",
        valueJustification: "Activitate culturală 2h la prețul unei beri în Shoreditch (~£8). Aer condiționat, scaune confortabile, programare programată — opusul unei seri de bar.",
        address: "35-47 Bethnal Green Road, E1 6LA",
        url: "https://richmix.org.uk/whats-on/",
        verifyBefore: "Verifică programul filmelor pentru Mie 17 Iun 2026 cu ~2 săptămâni înainte. Site-ul publică programul lunar."
      },
      {
        name: "Beigel Bake nocturn (24/7) + plimbare Sclater Street art",
        slot: "21:30–22:30 — alternativă la baruri, low-cost",
        time: "Beigel Bake: deschis 24/7, 365 zile/an (deschis din 1855)",
        price: "£3–5",
        why: "Bagel cu salt beef sau somon afumat la cea mai veche bagelarie din Londra (170 ani). Apoi plimbare pe Sclater Street și Hanbury Street — cele mai bune murale Brick Lane sunt iluminate noaptea. Activitate, nu băut.",
        valueJustification: "£4 pentru o gustare iconică + plimbare gratuită prin galerie de artă stradală în aer liber. Total: £4-8 vs. £25-40 într-un bar Shoreditch.",
        address: "159 Brick Lane, E1 6SB",
        url: "https://en.wikipedia.org/wiki/Beigel_Bake",
        verifyBefore: "Beigel Bake e instituție din 1855, fără rezervare. Doar verifică că nu e închisă temporar (Google Maps live)."
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // ZIUA 2 — Joi 18 Iun (City: Holborn, Bank, South Bank)
  // ---------------------------------------------------------------------------
  day2: {
    streetFood: [
      {
        name: "Mercato Mayfair — biserică recondiționată în piață alimentară",
        slot: "Prânz alternativ (12:30) sau cină devreme — NU pentru cina la 18:30 (e prea departe de Westminster/South Bank)",
        time: "Lu-Ma 08:00–22:00, Mi-Sa 08:00–23:00, Du 08:00–21:00",
        price: "£10–15/farfurie",
        why: "Biserica St Mark's North Audley din 1828, abandonată 70 de ani, transformată în 2019 într-un mall culinar pe 3 niveluri cu 25+ vendori (italian, japonez, levantin, brazilian).",
        valueJustification: "Mâncare de calitate restaurant la 40% mai puțin pentru că nu plătești serviciul individual la masă. Atmosfera e neegalată — mănânci sub vitralii victoriene.",
        address: "13-14 N Audley St, W1K 6ZB (Mayfair)",
        url: "https://www.mercatomayfair.com/",
        verifyBefore: "Confirmă orele Joi pentru 18 Iun 2026. Conflict de localizare: e în Mayfair, nu South Bank. Rezervă doar dacă schimbi restul programului din Ziua 2."
      },
      {
        name: "Vinegar Yard — pe lângă London Bridge (street food + bere artizanală)",
        slot: "Înlocuiește cina la Gabriel's Wharf (18:30) DACĂ schimbi traseul cu 15 min spre est",
        time: "Joi 12:00–23:00",
        price: "£8–14/farfurie",
        why: "Curte exterioară mare cu 8-10 vendori street food (Indian dosa, Korean fried chicken, taco, pizza), bar de bere artizanală, atmosferă de Berlin/Brooklyn. Direct lângă London Bridge Station.",
        valueJustification: "Cină completă cu băutură pentru £15-18 vs. £30-40 la Gabriel's Wharf cu vedere similară (Tamisa la 5 min mers). Atmosferă mai relaxată decât restaurantele South Bank.",
        address: "74-82 St Thomas St, SE1 3QU",
        url: "https://www.vinegaryard.london/",
        verifyBefore: "Confirmă că Vinegar Yard nu este închis pentru un eveniment privat pe 18 Iun (verifică pagina What's On cu ~1 săptămână înainte)."
      }
    ],
    nightActivity: [
      {
        name: "City Cruises — croazieră Tamisa (DEJA ÎN PROGRAM)",
        slot: "20:15 — deja confirmat în program",
        time: "1.5 ore",
        price: "£22/persoană",
        why: "Activitate, nu băut. Apus pe Tamisa la 21:19. Deja optimizat — păstrează.",
        valueJustification: "Validată de program — nu necesită schimbare.",
        verifyBefore: "Vezi BOOKINGS.city-cruises pentru detalii."
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // ZIUA 3 — Vineri 19 Iun (Bloomsbury, Westminster, Bankside)
  // ---------------------------------------------------------------------------
  day3: {
    streetFood: [
      {
        name: "Southbank Centre Food Market — sub Royal Festival Hall",
        slot: "În loc de cina Bloomsbury/Covent Garden (21:00) — sau cină devreme între Tate Modern și British Museum",
        time: "Vineri 12:00–20:00 — INCHIDE LA 20:00, mănânci între 18:30–19:45",
        price: "£8–13/farfurie",
        why: "Piață stabilă de 12+ ani sub centrul cultural South Bank — vendori rotativi dar curatat strict (Mama's Jerk, Yum Bun, Greedy Khao, Brick Lane Bagels). Tot pe ruta ta deja (Tate Modern → British Museum).",
        valueJustification: "Mâncare de calitate la £10/farfurie, mâncată afară pe terasa cu vedere spre Tamisa și Westminster. Restaurantele cu aceeași priveliște costă £35+ și au rezervare.",
        address: "Belvedere Road, SE1 8XX (sub Royal Festival Hall)",
        url: "https://www.southbankcentre.co.uk/visit/cafes-restaurants-bars/southbank-centre-food-market",
        verifyBefore: "Confirmă orele Vineri 19 Iun. Site oficial southbankcentre.co.uk → Food Market. Atenție: închide la 20:00, planifică cina până la 19:45.",
        scheduleConflict: "Programul actual te ține la Tate Modern până la 19:00, apoi British Museum 19:00-20:30. Pentru a folosi Food Market, mănâncă între Westminster Abbey (terminat ~17:45) și Tate Modern — adică între 18:00 și 19:30 la Southbank Food Market, apoi spre Tate Modern e 5 min mers."
      }
    ],
    nightActivity: [
      {
        name: "National Portrait Gallery — Friday Lates (gratuit)",
        slot: "ALTERNATIVĂ la combinația Tate Modern + British Museum seara — sau ÎN LOC DE cina la 21:00",
        time: "Vineri seara, până la 21:00 — săptămânal, drop-in",
        price: "GRATUIT (intrare permanentă), evenimente £0-15",
        why: "Conform programului oficial: seri tematice cu talks, philosophy salons, life drawing, DJ sets, live music. Drop-in, fără rezervare. Galeria reproiectată în 2023 — colecție de portrete istorice + contemporane spectaculoasă.",
        valueJustification: "Cea mai bună 'activitate, nu băut' din Londra Vineri seara. Gratuit, cultural, social — exact ce ai cerut. La 5 min de Trafalgar Square și 10 min de Covent Garden pentru cină după.",
        address: "St Martin's Place, WC2H 0HE",
        url: "https://www.npg.org.uk/whatson/",
        verifyBefore: "CRITIC: Confirmă programul exact pentru Vineri 19 Iun 2026 pe npg.org.uk/whatson cu ~2 săptămâni înainte. Programul tematic se schimbă săptămânal."
      },
      {
        name: "National Gallery — Friday Lates (gratuit)",
        slot: "Alternativă la Tate Modern (17:00–19:00) — și e Vinerea seara, până la 21:00",
        time: "Vineri seara, până la 21:00",
        price: "GRATUIT (colecția permanentă)",
        why: "Galeria națională rămâne deschisă târziu doar Vineri. Mai puține turiști decât ziua. Oferă talks, tururi ghidate, ore de desen, muzică live, deschideri târzii ale expozițiilor.",
        valueJustification: "Aceeași colecție pe care o vezi Duminică (în programul actual Ziua 5), dar cu atmosfera unei seri liniștite și evenimente live. Recomand: SCHIMBĂ vizita National Gallery din Ziua 5 → Ziua 3 seara.",
        address: "Trafalgar Square, WC2N 5DN",
        url: "https://www.nationalgallery.org.uk/visiting/calendar/friday-lates",
        verifyBefore: "Confirmă programul Friday Lates pentru 19 Iun 2026 (nationalgallery.org.uk/visiting/calendar/friday-lates).",
        scheduleConflict: "Programul actual are Tate Modern la 17:00 și British Museum la 19:00 în Ziua 3. Dacă alegi National Gallery seara, sacrifici una din celelalte — sugerez să sacrifici British Museum seara (l-ai văzut deja Joi dimineața)."
      },
      {
        name: "Tate Modern + British Museum (Friday Late) — DEJA ÎN PROGRAM",
        slot: "17:00–20:30 — deja confirmat",
        why: "Tate Modern Vinerea până la 21:00 ✓, British Museum până la 20:30 ✓ — verificat. Activitate culturală, nu bar. Rămâne valid.",
        verifyBefore: "Confirmă pe tate.org.uk și britishmuseum.org orele Vineri pentru iunie 2026."
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // ZIUA 4 — Sâmbătă 20 Iun (Tower, Bermondsey, Greenwich)
  // ---------------------------------------------------------------------------
  day4: {
    streetFood: [
      {
        name: "Maltby Street Market — Bermondsey (DEJA ÎN PROGRAM)",
        slot: "12:35 prânz — deja confirmat",
        why: "Validat — piață sâmbăta cu vibe local (nu turistic). Păstrează.",
        verifyBefore: "Confirmă orele Sâmbătă 20 Iun. Site: maltby.st"
      },
      {
        name: "Flat Iron Square — Bermondsey (DEJA ÎN PROGRAM)",
        slot: "21:30 cina — deja confirmat",
        why: "Validat — food trucks + bere + muzică live, atmosferă de stradă. Păstrează.",
        verifyBefore: "Confirmă programul muzical Sâmbătă 20 Iun pe flatironsquare.co.uk"
      },
      {
        name: "Borough Market — alternativă rapid pentru prânz",
        slot: "Alternativă la Maltby Street DACĂ vrei volume mai mare",
        time: "Sâmbătă 09:00–17:00",
        price: "£8–15/farfurie",
        why: "Cea mai veche piață alimentară din Londra (1014). 100+ vendori. Mai turistic decât Maltby Street, dar calitate înaltă consistent.",
        valueJustification: "Recomand SĂ NU SCHIMBI — Maltby Street e mai puțin aglomerat și aceeași calitate. Borough Sâmbătă e foarte aglomerat (atenție la furtul de telefon).",
        address: "8 Southwark St, SE1 1TL",
        url: "https://boroughmarket.org.uk/",
        verifyBefore: "Doar dacă schimbi planul — verifică maltby.st pentru închideri ocazionale Sâmbătă."
      }
    ],
    nightActivity: [
      {
        name: "Open House London — sezonul de iunie",
        slot: "Posibilă vizită gratuită clădire istorică — verifică program",
        time: "Variabil — Open House are evenimente speciale tot anul",
        price: "GRATUIT",
        why: "Acces la clădiri istorice și moderne în mod normal închise publicului. Vizite ghidate de arhitecți.",
        valueJustification: "ALERT: Open House London principal e în Septembrie, NU în Iunie. POSIBIL să existe evenimente speciale. Verifică doar dacă e ceva special pe 20 Iun.",
        url: "https://www.openhouselondon.openhousecharitabletrust.org/",
        verifyBefore: "Verifică openhouselondon.openhousecharitabletrust.org pentru evenimente speciale Iunie 2026 — probabil NIMIC, dar merită check rapid."
      },
      {
        name: "Tower Bridge la apus + Shad Thames (DEJA ÎN PROGRAM)",
        slot: "20:30 — deja confirmat",
        why: "Activitate vizuală/culturală gratuită, nu bar. Apus la 21:17 pe 20 Iun. Validat.",
        verifyBefore: "Apusul confirmat astronomic — nu necesită verificare."
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // ZIUA 5 — Duminică 21 Iun (West End, Hyde Park, Primrose Hill)
  // ---------------------------------------------------------------------------
  day5: {
    streetFood: [
      {
        name: "Seven Dials Market — Covent Garden (depozit de banane recondiționat)",
        slot: "ÎNLOCUIEȘTE prânzul Covent Garden Market (14:00)",
        time: "Duminică 11:00–22:00",
        price: "£8–13/farfurie",
        why: "Fost depozit de banane din anii '20 transformat în 2019 în piață acoperită cu 20+ traders și 2 baruri (Kin + Deer, Pick & Cheese cu sushi conveyor de brânzeturi, Yum Bun, Bao). Atmosfera unui hangar industrial. Alternativă mult mai bună decât 'food trucks Covent Garden'.",
        valueJustification: "Mâncare premiată (Bao, Pick & Cheese — au început aici și au deschis restaurante separate) la prețuri de stradă. £10/farfurie vs. £25+ în restaurante Covent Garden cu același nume.",
        address: "35 Earlham St, WC2H 9LD",
        url: "https://www.sevendialsmarket.com/",
        verifyBefore: "Confirmă orele Duminică pentru 21 Iun 2026. Pagina sevendialsmarket.com."
      },
      {
        name: "The Brick Lane Upmarket — Truman Brewery (NUMAI Sâmbătă/Duminică)",
        slot: "Cină Duminică între Hyde Park și Primrose Hill — DAR e DEPARTE de traseul tău",
        time: "Duminică 10:00–17:00",
        price: "£6–10/farfurie",
        why: "40+ vendori internaționali la Truman Brewery, deschis de 20+ ani.",
        valueJustification: "AVERTISMENT: Închide la 17:00 — prea devreme pentru cina Duminică. NU recomand pentru Ziua 5 (programul tău e în West End/Hyde Park 17:00-19:00, nu în East End). Sari peste.",
        address: "91 Brick Lane, E1 6QL",
        url: "https://www.bricklanemarket.com/"
      }
    ],
    nightActivity: [
      {
        name: "West End Live — Trafalgar Square (DEJA ÎN PROGRAM)",
        slot: "12:00 — deja confirmat",
        why: "Cea mai bună activitate gratuită din Londra Duminică. Validat.",
        verifyBefore: "Confirmă datele West End Live 2026 pe westendlive.co.uk — festivalul e anual în Iunie."
      },
      {
        name: "Solstițiul de Vară pe Primrose Hill (DEJA ÎN PROGRAM)",
        slot: "21:22 — deja confirmat",
        why: "Activitatea perfectă pentru solstițiu — gratuită, naturală, atmosferă unică. Validat.",
        verifyBefore: "Apusul confirmat astronomic pentru 21 Iun 2026 BST."
      },
      {
        name: "Royal Albert Hall — concerte Proms (din mijlocul Iulie)",
        slot: "AR FI ideal — DAR Proms începe doar pe ~17 Iulie 2026",
        why: "Proms (BBC) sunt în Iulie-Septembrie. Vacanța ta (17-22 Iun) e ÎNAINTE de începutul sezonului.",
        valueJustification: "EXCLUS — nu se aliniază cu datele. Bilete Proms 'Promenade' standing sunt £8 — bang-for-buck legendar — dar nu pentru tine în Iunie 2026.",
        verifyBefore: "Nu necesar — exclus din motive de date."
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // ZIUA 6 — Luni 22 Iun (departure)
  // ---------------------------------------------------------------------------
  day6: {
    streetFood: [
      {
        name: "Mercato Metropolitano — Elephant & Castle (cea mai mare piață din Londra)",
        slot: "Brunch alternativ înainte de Horizon 22 (DACĂ ai timp și vrei un mic dejun memorabil)",
        time: "Luni 08:00–24:00",
        price: "£8–14/farfurie",
        why: "Fost depozit recondiționat de 5000mp cu 40+ vendori italieni autentici, panificie deschisă, brutărie pizza, gelato artizanal. Atmosferă de piazza italiană în Londra.",
        valueJustification: "EXCLUS pentru Luni dimineață — e la Elephant & Castle, 25 min de Liverpool Street unde te cazezi. Programul tău începe la 09:00 cu mic dejun la M&S/Greggs și apoi Spitalfields/Horizon 22. NU schimba.",
        address: "42 Newington Causeway, SE1 6DR",
        url: "https://www.mercatometropolitano.com/london/",
        verifyBefore: "Doar dacă vrei să restructurezi Ziua 6 dimineața — nerecomandat."
      }
    ],
    nightActivity: []
  }
};

