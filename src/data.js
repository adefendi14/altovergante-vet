import { asset } from './lib/assets'

export const company = {
  name: 'Alto Vergante Vet',
  legalName: 'Ambulatorio Veterinario Alto Vergante',
  tagline: 'Ambulatorio veterinario',
  director: 'Dott. Luca Giometti',
  address: 'Via Provinciale Alto Vergante 16',
  city: '28010 Nebbiuno (NO)',
  phone: '+39 342 170 5983',
  email: 'altovergante.vet@gmail.com',
  website: 'www.altovergantevet.it',
  mapEmbed:
    'https://maps.google.com/maps?q=Via%20Provinciale%20Alto%20Vergante%2016%2C%20Nebbiuno%20NO&z=16&output=embed',
}

export const openingHours = [
  { days: 'Lunedì — Venerdì', hours: '10:00 – 13:00 / 15:00 – 19:00' },
  { days: 'Sabato', hours: '10:00 – 12:30 / 17:00 – 19:00' },
]

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/ambulatorio', label: 'Ambulatorio' },
  { href: '/servizi', label: 'Servizi' },
  { href: '/staff', label: 'Staff' },
  { href: '/adozioni', label: 'Adozioni' },
  { href: '/articoli', label: 'Articoli' },
  { href: '/contatti', label: 'Contatti' },
]

export const specialties = [
  { id: 'gastroenterologia', name: 'Gastroenterologia' },
  { id: 'dermatologia', name: 'Dermatologia' },
  { id: 'odontoiatria', name: 'Odontoiatria' },
  { id: 'ortopedia', name: 'Ortopedia' },
  { id: 'neurologia', name: 'Neurologia' },
  { id: 'oculistica', name: 'Oculistica' },
  { id: 'cardiologia', name: 'Cardiologia' },
  { id: 'comportamentalismo', name: 'Comportamentalismo' },
  { id: 'esotici', name: 'Animali esotici' },
  { id: 'laboratorio', name: 'Esami di laboratorio' },
  { id: 'radiologia', name: 'Radiologia' },
  { id: 'ecografia', name: 'Ecografia' },
  { id: 'chirurgia-molli', name: 'Chirurgia tessuti molli' },
  { id: 'chirurgia-duri', name: 'Chirurgia tessuti duri' },
]

export const aboutGallery = [
  {
    src: asset('images/gallery/sala-visita.jpg'),
    alt: 'Sala chirurgica con strumentario sterile',
    caption: 'Chirurgia',
    description: 'Check-up preanestesiologico, monitoraggio continuo e attenzione al dolore.',
  },
  {
    src: asset('images/gallery/laboratorio.jpg'),
    alt: 'Gabbie di degenza in acciaio inox',
    caption: 'Degenza',
    description: 'Gabbie in acciaio inox, controllo della temperatura e fluidoterapia.',
  },
  {
    src: asset('images/gallery/interno-2.jpg'),
    alt: 'Intervento in sala operatoria',
    caption: 'Sala operatoria',
    description: 'Attrezzature chirurgiche, anestesiologiche e di rianimazione.',
  },
]

export const companyStats = [
  { label: 'Reperibilità', value: '24h/24' },
  { label: 'Direzione sanitaria', value: 'Dr. Giometti' },
  { label: 'Aree cliniche', value: '14' },
]

export const strengths = [
  {
    id: 'macchinari',
    title: 'Diagnostica aggiornata',
    description: 'Radiologia digitale, laboratorio interno e strumentazione di ultima generazione.',
  },
  {
    id: 'dolore',
    title: 'Trattamento del dolore',
    description: 'Analgesia multimodale anche in chirurgia: l’animale addormentato può comunque percepire dolore.',
  },
  {
    id: 'degenza',
    title: 'Degenza e terapia intensiva',
    description: 'Gabbie in acciaio inox, controllo della temperatura e pompe di infusione.',
  },
  {
    id: 'domicilio',
    title: 'Visite a domicilio',
    description: 'Fuori orario si effettuano visite a domicilio e in struttura su appuntamento.',
  },
]

export const services = [
  {
    id: 'visite-domicilio',
    title: 'Visite a domicilio e su appuntamento',
    description:
      'Al di fuori degli orari di apertura si effettuano visite a domicilio e in struttura su appuntamento, anche al mattino e al pomeriggio oltre gli orari indicati.',
    highlights: ['Fuori orario', 'A domicilio', 'In struttura'],
    featured: true,
  },
  {
    id: 'medicina-interna',
    title: 'Medicina interna',
    description:
      'Tutti i medici dello staff eseguono visite di medicina interna e vaccinazioni, preferibilmente su appuntamento. L’ambulatorio è dotato di attrezzature da laboratorio che in pochi minuti forniscono i risultati di esami del sangue (emocromocitometrico, ematochimico), delle urine e delle feci. Eseguiamo inoltre esami micologici, batteriologici, virologici ed endocrinologici, in sede o con laboratori esterni selezionati. Ci occupiamo della profilassi e della terapia della filariosi cardiovascolare e della leishmaniosi. Siamo autorizzati dalla ASL all’applicazione del microchip nel cane e nel gatto.',
    highlights: ['Vaccinazioni', 'Laboratorio interno', 'Microchip ASL'],
  },
  {
    id: 'chirurgia',
    title: 'Chirurgia generale e d’urgenza',
    description:
      'L’ambulatorio è dotato di attrezzature chirurgiche, anestesiologiche e di rianimazione. Prima di un’anestesia sottoponiamo l’animale a un check-up preanestesiologico: esami del sangue, visita cardiologica e, nei pazienti anziani o a rischio, radiografia al torace, ecografia e quanto necessario. Durante l’anestesia il paziente viene monitorato costantemente.',
    highlights: ['Check-up preanestesiologico', 'Monitoraggio continuo', 'Urgenze'],
  },
  {
    id: 'ortopedia',
    title: 'Ortopedia',
    description:
      'Diagnostica e terapia medica e chirurgica delle malattie ossee genetiche del cane e del gatto (displasia dell’anca, del gomito e del ginocchio). Le visite ortopediche si svolgono su appuntamento. Nella rottura del legamento crociato craniale applichiamo le tecniche TPLO ed extracapsulare. Per le fratture usiamo fissatori esterni, placche e metodica di Ilizarov, a seconda del caso.',
    highlights: ['Displasie', 'TPLO', 'Fratture'],
  },
  {
    id: 'radiologia',
    title: 'Radiologia',
    description:
      'Utilizziamo apparecchi di radiologia digitale: radiografie in tempi brevissimi e qualità d’immagine dettagliata. Aumenta la precisione diagnostica e permette di gestire rapidamente i pazienti critici, come nel caso di animali investiti.',
    highlights: ['Digitale', 'Tempi rapidi', 'Pazienti critici'],
  },
  {
    id: 'odontoiatria',
    title: 'Odontoiatria',
    description:
      'Apparecchi odontoiatrici al pari della medicina umana. Per la detartrasi usiamo un ablatore piezoelettrico a ultrasuoni con serbatoio integrato per disinfettanti. Quando serve un’estrazione, un micromotore con fresa a punta diamantata rende l’intervento più preciso e meno invasivo.',
    highlights: ['Detartrasi', 'Estrazioni', 'Igiene'],
  },
  {
    id: 'degenza',
    title: 'Degenza e terapia intensiva',
    description:
      'Nel locale di degenza sono presenti gabbie interamente in acciaio inox, con griglie e sistemi di scarico per mantenere i pazienti in condizioni igieniche ottimali. Sistemi per il controllo della temperatura e pompe di infusione garantiscono precisione nella fluidoterapia, essenziale in terapia intensiva.',
    highlights: ['Acciaio inox', 'Controllo temperatura', 'Fluidoterapia'],
  },
]

export const staff = [
  {
    id: 'luca-giometti',
    name: 'Dir. San. Dr. Luca Giometti',
    role: 'Direttore sanitario',
    image: asset('images/staff/luca-giometti.jpg'),
    areas: [
      'Medicina interna',
      'Chirurgia dei tessuti molli',
      'Odontoiatria',
      'Medicina d’urgenza e terapia intensiva',
      'Diagnostica per immagini',
    ],
  },
  {
    id: 'guido-sessa',
    name: 'Dr. Guido Sessa',
    role: 'Medico veterinario',
    image: asset('images/staff/guido-sessa.jpg'),
    areas: ['Endoscopia', 'Laparoscopia'],
  },
  {
    id: 'stefano-caruso',
    name: 'Dr. Stefano Caruso',
    role: 'Specialista in ortopedia',
    image: asset('images/staff/stefano-caruso.jpg'),
    areas: ['Visite ortopediche', 'Chirurgia dei tessuti duri'],
  },
  {
    id: 'chiara-costa-devoti',
    name: 'Dr.ssa Chiara Costa Devoti',
    role: 'Collaboratore esterno',
    image: null,
    areas: [
      'Medicina interna',
      'Anestesia',
      'Gastroenterologia',
      'Medicina d’urgenza e terapia intensiva',
    ],
  },
  {
    id: 'francesca-varvello',
    name: 'Francesca Varvello',
    role: 'Assistente veterinaria — collaboratore esterno',
    image: asset('images/staff/francesca-varvello.jpg'),
    areas: ['Assistenza in ambulatorio'],
  },
]

export const adoptions = [
  {
    id: 'mamma-micini',
    title: 'Mamma e micini cercano casa',
    image: asset('images/adozioni/mamma-micini.jpg'),
    excerpt: 'Una gatta con i suoi cuccioli in cerca di una famiglia.',
  },
  {
    id: 'gattino-grigio',
    title: 'Gattino grigio cerca casa',
    image: asset('images/adozioni/gattino-grigio.jpg'),
    excerpt: 'Un gattino grigio in attesa di adozione.',
  },
]

export const articles = [
  {
    id: 'anestesia',
    slug: 'domande-frequenti-anestesia',
    title: 'Domande più frequenti sull’anestesia in veterinaria',
    excerpt:
      'Sicurezza, digiuno, animali anziani o cardiopatici e controllo del dolore: le risposte dello staff.',
    image: asset('images/articoli.jpg'),
    sections: [
      {
        heading: 'Che cos’è un anestetico?',
        paragraphs: [
          'Gli anestetici sono farmaci, somministrati per via iniettabile o inalatoria, che causano perdita di coscienza. Li usiamo quotidianamente per studi radiografici, indagini diagnostiche o interventi chirurgici.',
        ],
      },
      {
        heading: 'Gli anestetici sono sicuri?',
        paragraphs: [
          'Tutti gli anestetici comportano un minimo rischio. Lo riduciamo con visita pre-anestetica, esami del sangue, scelta di farmaci a breve emivita, monitoraggio continuo e assistenza al risveglio fino al recupero della deambulazione.',
        ],
        list: [
          'Visita pre-anestetica e raccolta anamnestica',
          'Esami del sangue per valutare rene, fegato, quadro ematologico ed endocrino',
          'Sedazione intramuscolare, induzione endovenosa e mantenimento inalatorio dopo intubazione',
          'Monitoraggio: ECG, pulsossimetro, capnometro, pressione e temperatura',
          'Risveglio seguito fino all’estubazione e in sala di degenza',
        ],
      },
      {
        heading: 'Il mio animale è troppo vecchio per un’anestesia?',
        paragraphs: [
          'L’età non è un fattore limitante: aumenta il rischio la presenza di disfunzioni d’organo. Proprio gli animali anziani vanno spesso incontro a patologie che richiedono un intervento (denti, tumori, infezioni uterine).',
        ],
      },
      {
        heading: 'Un animale cardiopatico può affrontare un’anestesia?',
        paragraphs: [
          'Oltre ai controlli di routine servono radiografia al torace, ecocardiografia ed elettrocardiogramma. Un cardiopatico in condizioni emodinamiche stabili può affrontare un’anestesia con rischi sovrapponibili a quelli di un paziente sano. Le vere controindicazioni sono bradiaritmie, tachiaritmie ventricolari sostenute e sindromi a bassa portata.',
        ],
      },
      {
        heading: 'Cosa fare prima di portare l’animale in clinica?',
        paragraphs: [
          'Digiuno di 8 ore (4 ore sotto i 3 mesi). Le razze brachicefale (Bulldog, Carlino, Pechinese, Shih-tzu) possono necessitare di almeno 18 ore. Se non siete sicuri che sia a digiuno, comunicatecelo.',
        ],
      },
      {
        heading: 'Il mio animale soffre?',
        paragraphs: [
          'Il controllo multimodale del dolore, con analgesici sistemici e anestesia loco-regionale, gestisce l’analgesia. Le dimissioni avvengono quando l’animale non sente più male o quando il dolore è gestibile a casa con compresse.',
        ],
      },
      {
        heading: 'Dopo l’anestesia può mangiare?',
        paragraphs: [
          'Tranne pochi casi legati al tipo di intervento, la sera stessa può mangiare metà della razione quotidiana. Se rifiuta il cibo può trattarsi di nausea da farmaci: mangerà il giorno successivo.',
        ],
      },
    ],
  },
  {
    id: 'sterilizzazione-gatto',
    slug: 'sterilizzazione-castrazione-gatto',
    title: 'La sterilizzazione e la castrazione del gatto',
    excerpt: 'Preparazione all’intervento, risveglio a casa e vantaggi per salute e convivenza.',
    image: asset('images/adozioni/gatto.jpg'),
    sections: [
      {
        heading: 'Prima dell’intervento',
        paragraphs: [
          'È indispensabile una visita di controllo. Nelle femmine è consigliabile operare lontano dal calore, salvo urgenza. Digiuno da cibo dalle 19:00 del giorno prima e da acqua dalle 21:00.',
          'In struttura gli interventi si effettuano al mattino: il gatto va consegnato tra le 8:30 e le 9:30. Lo tratteniamo fino al pomeriggio per seguire il risveglio.',
        ],
      },
      {
        heading: 'Raccomandazioni post operatorie',
        paragraphs: [
          'La sera, a casa, lasciate il gatto nel trasportino con lo sportello aperto, in una stanza chiusa e al buio, senza salti su letti e mobili. Evitate rumori e stimolazioni: anche se sveglio, non ha ancora il pieno controllo motorio. Di norma non serve terapia antibiotica né asportare i punti.',
        ],
      },
      {
        heading: 'Vantaggi',
        paragraphs: [
          'Si riducono marcatura, aggressività e, nelle femmine, i miagolii del calore. Un gatto sterilizzato vive in media più a lungo (14–18 anni contro 5–10), fugge e litiga di meno, si espone meno a ferite e malattie infettive. Nelle gatte scendono infezioni uterine e tumori mammari. La gravidanza non è medica­mente necessaria.',
        ],
      },
    ],
  },
  {
    id: 'svezzare-gattino',
    slug: 'svezzare-gattino-neonato',
    title: 'Come svezzare un gattino neonato',
    excerpt: 'Ambientamento, lettiera, alimentazione, parassiti, vaccini e microchip.',
    image: asset('images/adozioni/mamma-micini.jpg'),
    sections: [
      {
        heading: 'Quando e come accoglierlo',
        paragraphs: [
          'In genere un gattino è svezzato a due mesi: è il momento ideale per il distacco dalla madre. Lasciatelo nel trasportino aperto in una stanza tranquilla e rispettate i suoi tempi. Non è un giocattolo: i bambini vanno guidati, soprattutto durante il sonno.',
        ],
      },
      {
        heading: 'Casa, lettiera e cibo',
        paragraphs: [
          'Mettete subito a disposizione una lettiera accessibile, lontana da cibo e gioco. Serve una stanza ampia per correre e arrampicarsi, e molte ore di sonno in un posto caldo e tranquillo. Ciotole di acqua e cibo lontano dalla lettiera e dal tavolo dei proprietari: niente assaggi dalla vostra dieta.',
          'Cambiate alimento in modo graduale nell’arco di una settimana, con cibi specifici per gattini.',
        ],
      },
      {
        heading: 'Salute nei primi mesi',
        paragraphs: [
          'Una visita veterinaria valuta lo stato generale e il piano di crescita. Sverminazione dopo esame delle feci, profilassi per pulci e zecche, vaccini tra il secondo e il terzo mese (rinnovati ogni anno) e, se esce o sta con altri gatti, anche FeLV. Il microchip serve per riconoscimento, passaporto e viaggi.',
          'Dai sei mesi si può valutare la sterilizzazione: raddoppia la speranza di vita, riduce fughe e litigi, ma va considerata anche la tendenza al sovrappeso.',
        ],
      },
    ],
  },
  {
    id: 'educare-cucciolo',
    slug: 'educare-cucciolo',
    title: 'Come educare e costruire una buona relazione con un cucciolo',
    excerpt: 'Adozione, socializzazione, eliminazione all’esterno e comunicazione senza punizioni.',
    image: asset('images/hero.jpg'),
    sections: [
      {
        heading: 'Il cucciolo in casa',
        paragraphs: [
          'Il cane è un animale sociale: giardino e giochi non compensano una vita in comune. Per l’inserimento usate feromoni di sintesi, un luogo di riposo adeguato e, di notte, una cuccetta in camera: fino all’adozione dormiva con madre e fratelli.',
          'L’adozione ideale è intorno ai due mesi. Dalla terza settimana la madre insegna a controllare il morso e a calmarsi dopo il gioco.',
        ],
      },
      {
        heading: 'Eliminare nel luogo corretto',
        paragraphs: [
          'Fino a circa quattro mesi il cucciolo trattiene le deiezioni solo per pochi minuti. Giornali e traversine possono insegnare a sporcare in casa. Accompagnatelo fuori ogni ora, soprattutto dopo sonno, pasto o gioco, e ricompensate con un bocconcino. Le punizioni, soprattutto a posteriori, sono inefficaci e possono far evacuare di nascosto.',
        ],
      },
      {
        heading: 'Conoscere il mondo',
        paragraphs: [
          'Passeggiate quotidiane fin dal primo giorno: persone, cani, rumori e oggetti vanno conosciuti come non pericolosi. Preferite la pettorina al collare. Un giardino, anche grande, non sostituisce il contatto con l’esterno.',
        ],
      },
      {
        heading: 'Comunicare',
        paragraphs: [
          'Postura bassa e voce dolce invitano ad avvicinarsi; postura alta e tono fermo indicano di allontanarsi. Ricompensate subito i comportamenti desiderati e ignorate quelli indesiderati. La punizione fisica costruisce una relazione basata sulla paura.',
        ],
      },
    ],
  },
]

export function getArticle(slug) {
  return articles.find((article) => article.slug === slug)
}

export const companyValues = [
  {
    name: 'Cura del dolore',
    description: 'Attenzione all’analgesia in visita, in chirurgia e al risveglio.',
  },
  {
    name: 'Continuità',
    description: 'Reperibilità 24h/24 e visite anche fuori orario, in sede o a domicilio.',
  },
  {
    name: 'Precisione',
    description: 'Check-up preanestesiologico e diagnostica digitale prima di ogni intervento.',
  },
  {
    name: 'Accoglienza',
    description: 'Degenza igienica, terapia intensiva e supporto alle adozioni.',
  },
]

export const testimonials = [
  {
    id: 'dolore',
    name: 'Trattamento del dolore',
    company: 'Alto Vergante Vet',
    quote:
      'Anche in anestesia generale l’animale può percepire dolore. Per questo associamo analgesici sistemici e anestesia loco-regionale.',
  },
  {
    id: 'urgenza',
    name: 'Urgenze',
    company: 'Alto Vergante Vet',
    quote:
      'Radiologia digitale e monitoraggio continuo ci permettono di gestire in tempi rapidi i pazienti critici, come gli animali investiti.',
  },
  {
    id: 'casa',
    name: 'A casa vostra',
    company: 'Alto Vergante Vet',
    quote:
      'Fuori orario si effettuano visite a domicilio e in struttura su appuntamento, anche al mattino e al pomeriggio.',
  },
]

export const copy = {
  hero: {
    kicker: 'Nebbiuno · Reperibilità 24h/24',
    title: 'Cura veterinaria per cani, gatti e animali esotici',
    lead: 'L’ambulatorio Alto Vergante è dotato di macchinari di ultima generazione. Prestazioni specialistiche, degenza, terapia intensiva e particolare attenzione al trattamento del dolore.',
    ctaProducts: 'Scopri i servizi',
    ctaQuote: 'Prenota una visita',
    imageAlt: 'Sala d’attesa dell’Ambulatorio Veterinario Alto Vergante a Nebbiuno',
    imageSrc: asset('images/hero.jpg'),
  },
  about: {
    kicker: 'L’ambulatorio',
    title: 'Struttura attrezzata, dalla visita alla degenza',
    p1: 'L’ambulatorio Alto Vergante è dotato di macchinari all’avanguardia. Si effettuano prestazioni anche specialistiche in gastroenterologia, dermatologia, odontoiatria, ortopedia, neurologia, oculistica, cardiologia, comportamentalismo, medicina degli animali esotici, laboratorio, radiologia, ecografia e chirurgia dei tessuti molli e duri.',
    p2Before: 'La struttura è attrezzata per ospitare animali in ',
    p2Strong: 'degenza e terapia intensiva',
    p2After:
      '. Particolare attenzione è dedicata al trattamento del dolore, anche durante le chirurgie in anestesia generale.',
    p3: 'Direzione sanitaria del Dott. Luca Giometti. Reperibilità 24h/24, visite su appuntamento anche fuori orario e, quando serve, a domicilio.',
    statsNote: '',
    imageAlt: 'Sala visita dell’ambulatorio veterinario Alto Vergante',
    imageSrc: asset('images/clinic.jpg'),
  },
  homeAbout: {
    kicker: 'Chi siamo',
    title: 'Un ambulatorio per l’Alto Vergante',
  },
  specialties: {
    kicker: 'Aree cliniche',
    title: 'Dalla visita di base alla chirurgia specialistica',
    lead: 'Quattordici ambiti, un’unica struttura a Nebbiuno.',
    viewAll: 'Vedi tutti i servizi',
  },
  services: {
    kicker: 'Servizi',
    title: 'Dalla visita alla terapia intensiva',
    lead: 'Medicina interna, chirurgia, ortopedia, radiologia digitale, odontoiatria e degenza.',
    featuredBadge: 'Anche fuori orario',
    viewAll: 'Tutti i servizi',
  },
  staff: {
    kicker: 'Lo staff',
    title: 'Medici e assistenti',
    lead: 'Direzione sanitaria del Dott. Luca Giometti, con specialisti interni e collaboratori esterni.',
    viewAll: 'Conosci lo staff',
  },
  strengths: {
    kicker: 'Perché qui',
    title: 'Cura continua, non solo in ambulatorio',
  },
  values: {
    kicker: 'Approccio',
    title: 'Come lavoriamo',
  },
  testimonials: {
    kicker: 'Principi',
    title: 'Quello che ci guida in sala e in visita',
  },
  articles: {
    kicker: 'Articoli',
    title: 'Consigli dallo staff',
    lead: 'Anestesia, sterilizzazione, svezzamento e primi mesi con un cucciolo.',
    viewAll: 'Leggi gli articoli',
    read: 'Leggi',
  },
  adoptions: {
    kicker: 'Adozioni',
    title: 'Cercano casa',
    lead: 'Annunci segnalati in ambulatorio. Per informazioni o per proporne uno, scriveteci.',
    viewAll: 'Vedi le adozioni',
    propose: 'Proponi un annuncio',
  },
  hours: {
    kicker: 'Orari',
    title: 'Quando siamo aperti',
    note: 'Su appuntamento anche al mattino e al pomeriggio oltre gli orari indicati. Visite a domicilio. Reperibilità 24h/24.',
  },
  cta: {
    title: 'Serve una visita o un parere?',
    lead: 'Chiamate o compilate il modulo: vi ricontattiamo per un appuntamento in sede o a domicilio.',
    mail: 'Scrivi una email',
    form: 'Apri il modulo',
    quote: 'Prenota una visita',
  },
  contact: {
    kicker: 'Contatti',
    title: 'Prenotate una visita',
    lead: 'Compilate il modulo o chiamate il cellulare dello studio. Referente: Dott. Luca Giometti.',
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
      'Il modulo non è ancora configurato. Contattateci direttamente via email o telefono.',
    address: 'Sede',
    phones: 'Cellulare',
    mapTitle: 'Ambulatorio Veterinario Alto Vergante — Via Provinciale Alto Vergante 16, Nebbiuno',
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
      'Ambulatorio veterinario a Nebbiuno, sull’Alto Vergante. Visite, diagnostica, chirurgia e degenza, con reperibilità 24h/24.',
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
  'Vaccinazione / microchip',
  'Visita a domicilio',
  'Chirurgia',
  'Ortopedia',
  'Odontoiatria',
  'Radiologia / ecografia',
  'Adozione',
  'Altro',
]
