import { company } from './data'

export const legalUpdatedAt = '12 settembre 2026'

const site = `${company.legalName} — ${company.tagline}`
const fullAddress = `${company.address}, ${company.city}`

export const legalPages = {
  privacy: {
    kicker: 'Privacy',
    title: 'Informativa privacy',
    lead: 'Come trattiamo i dati personali di chi visita il sito o ci scrive dal modulo contatti.',
    sections: [
      {
        heading: 'Premessa',
        blocks: [
          {
            type: 'p',
            text: `Questa informativa descrive il trattamento dei dati personali effettuato da ${company.legalName} attraverso il sito ${site}, ai sensi del Regolamento (UE) 2016/679 (GDPR) e del D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018.`,
          },
        ],
      },
      {
        heading: 'Titolare del trattamento',
        blocks: [
          {
            type: 'p',
            text: `Titolare del trattamento è ${company.legalName}, con sede in ${fullAddress}.`,
          },
          {
            type: 'ul',
            items: [
              `Email: ${company.email}`,
              `Telefono: ${company.phone}`,
              `Direzione sanitaria: ${company.director}`,
            ],
          },
          {
            type: 'p',
            text: 'Per questioni relative ai dati personali potete scrivere all’indirizzo email indicato. Al momento non è stato nominato un Responsabile della protezione dei dati (DPO).',
          },
        ],
      },
      {
        heading: 'Dati trattati',
        blocks: [
          {
            type: 'p',
            text: 'Trattiamo solo i dati necessari a far funzionare il sito e a rispondere alle richieste di contatto o prenotazione.',
          },
          {
            type: 'ul',
            items: [
              'Dati identificativi e di contatto inseriti nel modulo: nome e cognome, email, telefono, nome e specie dell’animale, motivo della richiesta e messaggio.',
              'Dati di navigazione di tipo tecnico (indirizzo IP, data e ora della richiesta, tipo di browser) eventualmente registrati nei log del fornitore di hosting.',
              'Dati tecnici scambiati con Google Fonts per il caricamento dei caratteri tipografici.',
              'Se scegliete di caricare la mappa nella pagina Contatti, dati di connessione verso Google Maps.',
            ],
          },
          {
            type: 'p',
            text: 'Non utilizziamo i dati per profilazione o marketing automatizzato.',
          },
        ],
      },
      {
        heading: 'Finalità e basi giuridiche',
        blocks: [
          {
            type: 'ul',
            items: [
              'Rispondere a richieste di informazioni e prenotazione: esecuzione di misure precontrattuali su vostra richiesta (art. 6, par. 1, lett. b GDPR) e consenso espresso tramite checkbox del modulo (art. 6, par. 1, lett. a GDPR).',
              'Funzionamento, sicurezza e manutenzione del sito: legittimo interesse (art. 6, par. 1, lett. f GDPR).',
            ],
          },
        ],
      },
      {
        heading: 'Conferimento',
        blocks: [
          {
            type: 'p',
            text: 'I campi obbligatori del modulo sono necessari per evadere la richiesta. Senza quelli, e senza il consenso privacy, il messaggio non viene inviato. Il telefono è facoltativo.',
          },
        ],
      },
      {
        heading: 'Modalità e durata',
        blocks: [
          {
            type: 'p',
            text: 'I dati sono trattati con strumenti elettronici. Le richieste inviate dal modulo sono conservate per il tempo necessario a dare riscontro, e comunque non oltre 24 mesi dall’ultimo contatto utile, salvo obblighi di legge più lunghi.',
          },
        ],
      },
      {
        heading: 'Destinatari',
        blocks: [
          {
            type: 'p',
            text: `I dati possono essere conosciuti dal personale autorizzato di ${company.legalName} e, nei limiti di quanto necessario, da:`,
          },
          {
            type: 'ul',
            items: [
              'Web3Forms, che riceve il contenuto del modulo per recapitarlo via email al titolare.',
              'Il fornitore di hosting del sito, per la pubblicazione delle pagine e i log tecnici.',
              'Google (font e, solo su vostra azione, mappe).',
            ],
          },
        ],
      },
      {
        heading: 'Diritti degli interessati',
        blocks: [
          {
            type: 'p',
            text: 'Potete chiedere al titolare accesso, rettifica, cancellazione, limitazione, opposizione e, ove applicabile, portabilità dei dati, oltre alla revoca del consenso. Avete inoltre il diritto di proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it).',
          },
        ],
      },
      {
        heading: 'Cookie e tracciamento',
        blocks: [
          {
            type: 'p',
            parts: [
              { text: 'Il sito non usa Google Analytics né cookie di profilazione. Dettagli nella ' },
              { text: 'Cookie policy', to: '/cookie' },
              { text: '.' },
            ],
          },
        ],
      },
      {
        heading: 'Modifiche',
        blocks: [
          {
            type: 'p',
            text: `Questa informativa può essere aggiornata. Data dell’ultimo aggiornamento: ${legalUpdatedAt}.`,
          },
        ],
      },
    ],
  },

  cookie: {
    kicker: 'Cookie',
    title: 'Cookie policy',
    lead: 'Quali cookie e servizi di terze parti usa questo sito, e come gestirli.',
    sections: [
      {
        heading: 'Premessa',
        blocks: [
          {
            type: 'notice',
            text: 'Niente banner: sul sito non è attivo alcun cookie di profilazione o Analytics.',
          },
          {
            type: 'p',
            parts: [
              { text: `Questa policy integra l’` },
              { text: 'informativa privacy', to: '/privacy' },
              { text: ` di ${company.legalName}.` },
            ],
          },
        ],
      },
      {
        heading: 'Cosa fa questo sito oggi',
        blocks: [
          {
            type: 'ul',
            items: [
              'Cookie tecnici: eventuali cookie strettamente necessari al funzionamento o alla sicurezza. Non richiedono consenso.',
              'Nessun cookie di prima parte per statistiche o marketing.',
              'Google Fonts: connessione tecnica per i caratteri.',
              'Google Maps: nella pagina Contatti la mappa parte solo se scegliete “Carica mappa Google”.',
              'Web3Forms: riceve i dati del modulo per recapitarli via email.',
            ],
          },
        ],
      },
      {
        heading: 'Come gestirli dal browser',
        blocks: [
          {
            type: 'p',
            text: 'Potete bloccare o cancellare i cookie dalle impostazioni del browser. Il blocco totale può limitare qualche funzione, in particolare la mappa se l’avete caricata.',
          },
        ],
      },
      {
        heading: 'Aggiornamenti',
        blocks: [
          {
            type: 'p',
            text: `Data dell’ultimo aggiornamento: ${legalUpdatedAt}.`,
          },
        ],
      },
    ],
  },

  legalNotice: {
    kicker: 'Note legali',
    title: 'Note legali',
    lead: 'Dati della struttura, condizioni d’uso del sito e limiti di responsabilità.',
    sections: [
      {
        heading: 'Titolare del sito',
        blocks: [
          {
            type: 'ul',
            items: [
              `Denominazione: ${company.legalName}`,
              `Sede: ${fullAddress}`,
              `Email: ${company.email}`,
              `Telefono: ${company.phone}`,
              `Direzione sanitaria: ${company.director}`,
            ],
          },
        ],
      },
      {
        heading: 'Oggetto del sito',
        blocks: [
          {
            type: 'p',
            text: 'Il sito presenta l’attività dell’ambulatorio veterinario. I contenuti hanno scopo informativo. Le richieste inviate dal modulo non costituiscono prenotazione confermata finché non ricevete riscontro dallo studio.',
          },
        ],
      },
      {
        heading: 'Proprietà intellettuale',
        blocks: [
          {
            type: 'p',
            text: `Testi, marchi, layout, loghi e materiali grafici sono di ${company.legalName} o dei rispettivi titolari. È vietata la riproduzione, anche parziale, senza autorizzazione scritta, salvo quanto consentito dalla legge sul diritto d’autore.`,
          },
        ],
      },
      {
        heading: 'Limitazione di responsabilità',
        blocks: [
          {
            type: 'p',
            text: `${company.legalName} si impegna a tenere il sito aggiornato, ma non garantisce che le informazioni siano sempre complete. I contenuti informativi non sostituiscono una visita veterinaria. Non si risponde di interruzioni del servizio né di contenuti di siti terzi collegati, nei limiti ammessi dalla legge.`,
          },
        ],
      },
      {
        heading: 'Privacy',
        blocks: [
          {
            type: 'p',
            parts: [
              { text: 'Il trattamento dei dati è descritto nell’' },
              { text: 'informativa privacy', to: '/privacy' },
              { text: ' e nella ' },
              { text: 'Cookie policy', to: '/cookie' },
              { text: '.' },
            ],
          },
        ],
      },
      {
        heading: 'Legge applicabile',
        blocks: [
          {
            type: 'p',
            text: `Per l’uso del sito si applica la legge italiana. Data dell’ultimo aggiornamento: ${legalUpdatedAt}.`,
          },
        ],
      },
    ],
  },
}

export function getLegalPage(slug) {
  return legalPages[slug]
}
