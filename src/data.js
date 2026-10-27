import { asset } from './lib/assets'

export const company = {
  name: 'Clinica Alto Vergante',
  legalName: 'Clinica Veterinaria Alto Vergante',
  tagline: 'Clinica veterinaria',
  director: 'Dott. Luca Giometti',
  address: 'Via Provinciale Alto Vergante 16',
  city: '28010 Nebbiuno (NO)',
  phone: '+39 342 170 5983',
  phoneWhatsApp: true,
  email: 'altovergante.vet@gmail.com',
  website: 'www.altovergantevet.it',
  mapEmbed:
    'https://maps.google.com/maps?q=Via%20Provinciale%20Alto%20Vergante%2016%2C%20Nebbiuno%20NO&z=16&output=embed',
}

export const openingHours = [
  { days: 'Lunedì — Venerdì', hours: '09:00 – 13:00 / 15:00 – 19:00' },
  { days: 'Sabato', hours: '09:00 – 12:30 / 15:30 – 17:30' },
]

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/la-clinica', label: 'La Clinica' },
  { href: '/staff', label: 'Staff' },
  { href: '/servizi', label: 'Servizi' },
  { href: '/degenza', label: 'Degenza' },
  { href: '/prevenzione', label: 'Prevenzione' },
  { href: '/contatti', label: 'Contatti' },
]

export const specialties = [
  { id: 'medicina-interna', name: 'Medicina interna' },
  { id: 'comportamento', name: 'Medicina comportamentale' },
  { id: 'radiologia', name: 'Radiologia' },
  { id: 'ecografia', name: 'Ecografia' },
  { id: 'ecocardiografia', name: 'Ecocardiografia' },
  { id: 'laboratorio', name: 'Laboratorio interno' },
  { id: 'chirurgia-molli', name: 'Chirurgia tessuti molli' },
  { id: 'chirurgia-duri', name: 'Chirurgia tessuti duri' },
  { id: 'odontostomatologia', name: 'Odontostomatologia' },
  { id: 'degenza', name: 'Degenza' },
  { id: 'oftalmologia', name: 'Oftalmologia' },
  { id: 'cardiologia', name: 'Cardiologia' },
  { id: 'nutrizione', name: 'Nutrizione' },
]

export const aboutGallery = [
  {
    src: asset('images/gallery/sala-visita.jpg'),
    alt: 'Sala chirurgica con strumentario sterile',
    caption: 'Chirurgia',
    description: 'Locali dedicati, sterilizzazione e macchinari di ultima generazione.',
  },
  {
    src: asset('images/gallery/laboratorio.jpg'),
    alt: 'Area degenza della clinica',
    caption: 'Degenza',
    description: 'Due degenze separate per cani e gatti, con accesso al giardino.',
  },
  {
    src: asset('images/gallery/interno-2.jpg'),
    alt: 'Intervento in sala operatoria',
    caption: 'Sala operatoria',
    description: 'Attrezzature chirurgiche, anestesiologiche e di monitoraggio.',
  },
]

export const companyStats = [
  { label: 'Dal', value: '2013' },
  { label: 'Direzione sanitaria', value: 'Dr. Giometti' },
  { label: 'Aree cliniche', value: '13+' },
]

export const strengths = [
  {
    id: 'spazi',
    title: 'Spazi dedicati',
    description: 'Reception divisa cani/gatti, sale visita sul giardino e locali per ogni funzione.',
  },
  {
    id: 'giardino',
    title: 'Parcheggio e giardino',
    description: 'Parcheggio in piano sulla provinciale e ampio giardino per passeggiare e socializzare.',
  },
  {
    id: 'tecnologia',
    title: 'Tecnologia aggiornata',
    description: 'Macchinari di ultima generazione e due ventilazioni meccaniche controllate.',
  },
  {
    id: 'famiglia',
    title: 'Rapporto di famiglia',
    description: 'Professionalità unita a un’accoglienza calda: trattiamo i vostri animali come se fossero i nostri.',
  },
]

export const clinicSpaces = [
  {
    title: 'Accoglienza',
    description:
      'Reception moderna divisa in zona cani e zona gatti, con parcheggio in piano direttamente sulla strada provinciale.',
  },
  {
    title: 'Sale visita',
    description:
      'Sale visita tutte dotate di porta-finestra sul giardino, lungo un corridoio che dà accesso diretto a ogni stanza.',
  },
  {
    title: 'Diagnostica e chirurgia',
    description:
      'Locali dedicati a ecografia, laboratorio interno, pre-chirurgia, sterilizzazione e sala chirurgica.',
  },
  {
    title: 'Degenza e servizi',
    description:
      'Degenze separate per cani e gatti, spogliatoio, locale ristoro, magazzini e ufficio.',
  },
]

export const services = [
  {
    id: 'medicina-interna',
    title: 'Medicina interna',
    description:
      'Visite di medicina interna per la diagnosi e la gestione delle patologie mediche, con un approccio attento e tempi dedicati al proprietario.',
    highlights: ['Visite su appuntamento', 'Follow-up clinico', 'Consulenza telefonica'],
    featured: true,
  },
  {
    id: 'comportamento',
    title: 'Medicina comportamentale',
    description:
      'Specialisti in comportamento animale per supportare cuccioli, adulti e situazioni di disagio, con attenzione alla relazione e alla socializzazione.',
    highlights: ['Comportamento', 'Cuccioli', 'Supporto al proprietario'],
  },
  {
    id: 'diagnostica',
    title: 'Diagnostica per immagini',
    description:
      'Radiologia, ecografia ed ecocardiografia per approfondimenti diagnostici rapidi e mirati, in collaborazione con specialisti interni.',
    highlights: ['Radiologia', 'Ecografia', 'Ecocardiografia'],
  },
  {
    id: 'laboratorio',
    title: 'Laboratorio',
    description:
      'Laboratorio interno con intelligenza artificiale per analisi ematiche, urine, feci e citologia. Laboratorio esterno con corriere notturno per campioni urgenti fino alle ore 20.',
    highlights: ['Analisi in sede', 'IA diagnostica', 'Corriere fino alle 20'],
  },
  {
    id: 'chirurgia',
    title: 'Chirurgia',
    description:
      'Chirurgia dei tessuti molli e dei tessuti duri, con locali dedicati a pre-chirurgia, sterilizzazione e sala operatoria.',
    highlights: ['Tessuti molli', 'Tessuti duri', 'Preparazione pre-chirurgica'],
  },
  {
    id: 'odontostomatologia',
    title: 'Odontostomatologia',
    description:
      'Cure odontoiatriche e stomatologiche per igiene orale, prevenzione e interventi dedicati alla salute della bocca.',
    highlights: ['Igiene orale', 'Prevenzione', 'Interventi specialistici'],
  },
  {
    id: 'degenza',
    title: 'Degenza',
    description:
      'Due degenze separate per cani e gatti, con day hospital e possibilità di assistenza notturna per chirurgie complesse o urgenti.',
    highlights: ['Cani e gatti', 'Day hospital', 'Accesso al giardino'],
  },
  {
    id: 'rete',
    title: 'Rete di collaborazioni',
    description:
      'Stretta collaborazione con educatori cinofili, pensioni e asili per animali, toelettature e dog/cat sitter selezionati negli anni.',
    highlights: ['Educatori', 'Pensioni e asili', 'Dog/cat sitter'],
  },
]

export const staff = [
  {
    id: 'luca-giometti',
    name: 'Dir. San. Dr. Luca Giometti',
    role: 'Direttore sanitario',
    image: asset('images/staff/luca-giometti.jpg'),
    areas: [
      'Chirurgia tessuti molli',
      'Chirurgia laparoscopica',
      'Odontostomatologia',
      'Endoscopia',
      'Medicina interna',
    ],
  },
  {
    id: 'giulia-cerino',
    name: 'Dr.ssa Giulia Cerino',
    role: 'Medico veterinario',
    image: null,
    areas: ['Comportamento animale', 'Medicina interna'],
  },
  {
    id: 'cecilia-pizzorni',
    name: 'Dr.ssa Cecilia Pizzorni',
    role: 'Medico veterinario',
    image: null,
    areas: ['Medicina interna', 'Ecografia'],
  },
  {
    id: 'bianca-caione',
    name: 'Dr.ssa Bianca Caione',
    role: 'Medico veterinario',
    image: null,
    areas: ['Comportamento animale', 'Medicina interna', 'Ecografia'],
  },
  {
    id: 'francesca-mussinelli',
    name: 'Dr.ssa Francesca Mussinelli',
    role: 'Medico veterinario',
    image: null,
    areas: ['Medicina interna'],
  },
  {
    id: 'elena-cristina',
    name: 'Elena Cristina',
    role: 'Assistente veterinario',
    image: null,
    areas: ['Assistenza in clinica'],
  },
  {
    id: 'giorgia-fortis',
    name: 'Giorgia Fortis',
    role: 'Tecnico veterinario',
    image: null,
    areas: ['Supporto tecnico'],
  },
  {
    id: 'tiziano-monti',
    name: 'Dr. Tiziano Monti',
    role: 'Specialista in oftalmologia',
    image: null,
    areas: ['Oftalmologia'],
  },
  {
    id: 'giulia-pizzamiglio',
    name: 'Dr.ssa Giulia Pizzamiglio',
    role: 'Specialista in cardiologia',
    image: null,
    areas: ['Cardiologia'],
  },
  {
    id: 'massimo-pavanelli',
    name: 'Dr. Massimo Pavanelli',
    role: 'Specialista in ortopedia',
    image: null,
    areas: ['Ortopedia'],
  },
  {
    id: 'stefano-caruso',
    name: 'Dr. Stefano Caruso',
    role: 'Specialista in ortopedia',
    image: asset('images/staff/stefano-caruso.jpg'),
    areas: ['Ortopedia'],
  },
  {
    id: 'emilio-maviglio',
    name: 'Dr. Emilio Maviglio',
    role: 'Specialista in endoscopia',
    image: null,
    areas: ['Endoscopia'],
  },
  {
    id: 'valentina-croci',
    name: 'Dr.ssa Valentina Croci',
    role: 'Nutrizionista animale',
    image: null,
    areas: ['Nutrizione'],
  },
  {
    id: 'kiwi',
    name: 'Kiwi',
    role: 'Assistente a 4 zampe',
    image: null,
    areas: ['Socializzazione', 'Accoglienza cuccioli'],
  },
]

export const preventionPaths = [
  {
    id: 'cucciolo',
    title: 'Cucciolo e gattino',
    description:
      'La prima visita è il momento per costruire insieme il percorso: vaccinazioni secondo le linee guida WSAVA, profilassi antiparassitaria e consigli su educatori, asili, pensioni, toelettature e dog/cat sitter.',
    highlights: ['Prima visita', 'Vaccini WSAVA', 'Rete di collaborazioni'],
  },
  {
    id: 'adulto',
    title: 'Animale adulto',
    description:
      'Controlli periodici e percorsi di prevenzione costruiti sullo stile di vita del vostro animale, con spiegazioni semplici e tutto il tempo necessario.',
    highlights: ['Controlli periodici', 'Su misura', 'Educazione al proprietario'],
  },
  {
    id: 'senior',
    title: 'Animale senior',
    description:
      'In età geriatrica restiamo al vostro fianco con percorsi di prevenzione ed esami mirati, per accompagnarvi nelle fasi più delicate della vita insieme.',
    highlights: ['Check-up senior', 'Esami mirati', 'Accompagnamento'],
  },
  {
    id: 'parassiti',
    title: 'Prevenzione antiparassitaria',
    description:
      'Percorsi contro parassiti esterni (pulci e zecche) e interni (vermi, coccidi e giardia), definiti insieme a voi in base alle abitudini quotidiane.',
    highlights: ['Pulci e zecche', 'Endoparassiti', 'Personalizzato'],
  },
  {
    id: 'orale',
    title: 'Igiene orale',
    description:
      'Attenzione alla salute della bocca con odontostomatologia e consigli di prevenzione dentale lungo tutto l’arco di vita.',
    highlights: ['Salute dentale', 'Prevenzione', 'Odontostomatologia'],
  },
  {
    id: 'alimentazione',
    title: 'Alimentazione e peso',
    description:
      'Supporto nutrizionale con specialista dedicato, per una dieta adeguata e la gestione del peso nelle diverse fasi di vita.',
    highlights: ['Nutrizione', 'Peso forma', 'Consulenza'],
  },
]

export const degenzaPoints = [
  {
    title: 'Due degenze separate',
    description: 'Una per i cani e una per i gatti, per garantire comfort, igiene e un ambiente più sereno.',
  },
  {
    title: 'Vasca in acciaio inox',
    description:
      'In entrambe le degenze è presente una vasca inox per lavaggi medicati prima delle chirurgie o per mantenere i pazienti puliti durante il ricovero.',
  },
  {
    title: 'Day hospital',
    description:
      'Siamo una clinica diurna e ci occupiamo prevalentemente di day hospital, con assistenza dedicata durante l’orario di apertura.',
  },
  {
    title: 'Assistenza notturna quando serve',
    description:
      'Per chirurgie complesse o urgenze da effettuare nel pomeriggio possiamo fermarci la notte e seguire al meglio il paziente che lo necessita.',
  },
  {
    title: 'Accesso diretto al giardino',
    description:
      'Le porte-finestre delle degenze consentono agli animali ricoverati di accedere al giardino: un’esigenza particolarmente importante per i cani.',
  },
]

export const companyValues = [
  {
    name: 'Accoglienza',
    description: 'Spazi pensati per cani e gatti, con giardino e ambienti che richiamano la natura.',
  },
  {
    name: 'Continuità',
    description: 'Dal 2013 al vostro fianco, dalla prima visita all’età senior.',
  },
  {
    name: 'Precisione',
    description: 'Diagnostica aggiornata, laboratorio interno e locali dedicati a ogni funzione.',
  },
  {
    name: 'Trasparenza',
    description: 'Disponibili al telefono per seguire i pazienti e indicare dove recarsi in caso di urgenza.',
  },
]

export const testimonials = [
  {
    id: 'crescita',
    name: 'Dalla passione alla clinica',
    company: 'Clinica Alto Vergante',
    quote:
      'Nel 2013 ho aperto da solo un piccolo ambulatorio a Nebbiuno. Oggi siamo una clinica organizzata per ospitare e curare al meglio i nostri amici a 4 zampe.',
  },
  {
    id: 'fiducia',
    name: 'Un ringraziamento',
    company: 'Dr. Luca Giometti',
    quote:
      'Ringrazio tutti della fiducia data a me e al mio staff per questi 13 anni di lavoro. Abbiamo vissuto insieme le emozioni più belle e anche le più difficili.',
  },
  {
    id: 'cura',
    name: 'Come fossero i nostri',
    company: 'Clinica Alto Vergante',
    quote:
      'Tutti noi dello staff abbiamo amici a 4 zampe: è per questo che tratteremo i vostri animali come se fossero i nostri.',
  },
]

export const copy = {
  hero: {
    kicker: 'Nebbiuno · Clinica veterinaria',
    title: 'Cura veterinaria in uno spazio pensato per i vostri animali',
    lead: 'Dopo 13 anni di ambulatorio, oggi siamo una clinica con locali dedicati, giardino, diagnostica aggiornata e un rapporto di famiglia con chi ci sceglie.',
    ctaProducts: 'Scopri i servizi',
    ctaQuote: 'Prenota una visita',
    imageAlt: 'Sala d’attesa della Clinica Veterinaria Alto Vergante a Nebbiuno',
    imageSrc: asset('images/hero.jpg'),
  },
  about: {
    kicker: 'La Clinica',
    title: 'Dall’ambulatorio alla clinica, con la stessa passione',
    p1: 'La Clinica nasce per accogliere al meglio i nostri amici a 4 zampe. Dopo 13 anni di ambulatorio il numero di persone che ci ha affidato le cure dei loro animali è cresciuto: servivano spazi più ampi e locali dedicati a ogni funzione.',
    p2Before: 'La struttura è stata realizzata dall’esperienza personale unita alla professionalità di un architetto specializzato in cliniche veterinarie. Il concetto chiave è l’',
    p2Strong: 'armonia',
    p2After:
      ': dal giardino che circonda la clinica ai colori verde salvia per i gatti e sabbia per i cani.',
    p3: 'Direzione sanitaria del Dott. Luca Giometti. Professionalità e rapporto di famiglia, con macchinari di ultima generazione e due ventilazioni meccaniche controllate per il ricambio dell’aria.',
    statsNote: '',
    imageAlt: 'Sala visita della Clinica Veterinaria Alto Vergante',
    imageSrc: asset('images/clinic.jpg'),
  },
  homeAbout: {
    kicker: 'Chi siamo',
    title: 'Una clinica per l’Alto Vergante',
  },
  specialties: {
    kicker: 'Aree cliniche',
    title: 'Dalla visita di base alle specializzazioni',
    lead: 'Medicina interna, comportamento, diagnostica, chirurgia, degenza e prevenzione.',
    viewAll: 'Vedi tutti i servizi',
  },
  services: {
    kicker: 'Servizi e specializzazioni',
    title: 'Dalla visita alla degenza',
    lead: 'Medicina interna, comportamento, diagnostica, laboratorio, chirurgia, odontostomatologia e rete di collaborazioni.',
    featuredBadge: 'Prioritario',
    viewAll: 'Tutti i servizi',
  },
  staff: {
    kicker: 'Lo staff',
    title: 'Medici, tecnici e collaboratori',
    lead: 'Direzione sanitaria del Dott. Luca Giometti, con specialisti e un team dedicato all’accoglienza.',
    viewAll: 'Conosci lo staff',
  },
  strengths: {
    kicker: 'Perché qui',
    title: 'Spazi, tecnologia e relazione',
  },
  values: {
    kicker: 'Approccio',
    title: 'Come lavoriamo',
  },
  testimonials: {
    kicker: 'La nostra storia',
    title: 'Tredici anni al vostro fianco',
  },
  prevention: {
    kicker: 'Prevenzione',
    title: 'Percorsi di prevenzione',
    lead: 'Seguiamo le linee guida internazionali WSAVA e costruiamo insieme a voi i percorsi più adatti a ogni fase di vita.',
    viewAll: 'Scopri i percorsi',
  },
  degenza: {
    kicker: 'Degenza',
    title: 'Degenza e terapia intensiva',
    lead: 'Due degenze separate, day hospital e assistenza dedicata quando il paziente lo richiede.',
    viewAll: 'Scopri la degenza',
  },
  hours: {
    kicker: 'Orari',
    title: 'Quando siamo aperti',
    note: 'Prenotazioni telefoniche e via WhatsApp. Non siamo pronto soccorso né struttura H24: in caso di urgenza vi indichiamo la struttura più idonea.',
  },
  cta: {
    title: 'Serve una visita o un parere?',
    lead: 'Chiamate o scrivete su WhatsApp: vi aiutiamo a fissare un appuntamento o a capire come procedere.',
    mail: 'Scrivi una email',
    form: 'Apri il modulo',
    quote: 'Prenota una visita',
  },
  contact: {
    kicker: 'Contatti',
    title: 'Prenotate una visita',
    lead: 'Compilate il modulo, chiamate o scrivete su WhatsApp. Referente: Dott. Luca Giometti.',
    name: 'Nome e cognome',
    namePlaceholder: 'Es. Maria Rossi',
    pet: 'Nome dell’animale',
    petPlaceholder: 'Es. Luna',
    email: 'Email',
    emailPlaceholder: 'nome@email.it',
    phone: 'Telefono',
    phonePlaceholder: '+39 ...',
    species: 'Specie',
    speciesPlaceholder: 'Seleziona',
    product: 'Motivo della richiesta',
    productPlaceholder: 'Seleziona',
    message: 'Messaggio',
    messagePlaceholder: 'Descrivete sintomi, urgenza e disponibilità di orario...',
    submit: 'Invia richiesta',
    sending: 'Invio in corso…',
    sentTitle: 'Richiesta inviata',
    sentBody: (name) =>
      `Grazie ${name}. Abbiamo registrato la vostra richiesta: vi contatteremo a breve all’indirizzo o al numero indicati.`,
    sendAnother: 'Invia un’altra richiesta',
    errorBody:
      'Non siamo riusciti a inviare la richiesta. Riprovate tra qualche minuto o chiamateci direttamente.',
    missingKey:
      'Il modulo non è ancora configurato. Contattateci direttamente via email, telefono o WhatsApp.',
    address: 'Sede',
    phones: 'Cellulare / WhatsApp',
    urgencyTitle: 'Urgenze',
    urgencyText:
      'Siamo disponibili telefonicamente per seguire i pazienti in cura e indicare la struttura più idonea in caso di urgenza. Non siamo una struttura con reperibilità H24 né pronto soccorso.',
    mapTitle: 'Clinica Veterinaria Alto Vergante — Via Provinciale Alto Vergante 16, Nebbiuno',
    mapLoad: 'Carica mappa Google',
    mapPrivacy:
      'La mappa è un servizio di Google: viene caricata solo dopo questo clic, per non installare cookie di terze parti in automatico.',
    privacyConsentBefore: 'Ho letto l’',
    privacyConsentLink: 'informativa privacy',
    privacyConsentAfter: ' e acconsento al trattamento dei dati per ricevere riscontro alla richiesta.',
    privacyRequired: 'Per inviare la richiesta è necessario accettare l’informativa privacy.',
  },
  footer: {
    blurb:
      'Clinica veterinaria a Nebbiuno, sull’Alto Vergante. Visite, diagnostica, chirurgia, degenza e percorsi di prevenzione.',
    legal: 'Informazioni',
    privacy: 'Privacy',
    cookie: 'Cookie policy',
    legalNotice: 'Note legali',
    contacts: 'Contatti',
    rights: 'Tutti i diritti riservati.',
  },
}

export const legalLinks = [
  { href: '/privacy', label: copy.footer.privacy },
  { href: '/cookie', label: copy.footer.cookie },
  { href: '/note-legali', label: copy.footer.legalNotice },
]

export const speciesOptions = ['Cane', 'Gatto', 'Coniglio / esotico', 'Altro']

export const quoteProductOptions = [
  'Visita generale',
  'Vaccinazione / prevenzione',
  'Medicina comportamentale',
  'Chirurgia',
  'Ortopedia',
  'Odontostomatologia',
  'Radiologia / ecografia',
  'Cardiologia',
  'Nutrizione',
  'Altro',
]
