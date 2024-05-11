import { getTypesForLanguage } from '@code4recovery/spec';
import { Translation } from '../types';

export const sk: Translation = {
  add_to_calendar: 'Pridať do kalendára',
  address: 'Adresa / Platforma',
  appointment: 'Stretnutie',
  back_to_meetings: 'Späť na Stretnutia',
  contact_call: 'Zavolať %contact%',
  contact_email: 'Emailovať %contact%',
  contribute_with: 'Prispejte spolu s %service%',
  days: {
    friday: 'Piatok',
    monday: 'Pondelok',
    saturday: 'Sobota',
    sunday: 'Nedeľa',
    thursday: 'Štvrtok',
    tuesday: 'Utorok',
    wednesday: 'Streda',
  },
  distance: 'Vzdialenosť',
  distance_any: 'Akákoľvek vzdialenosť',
  distance_km: '%distance% km',
  distance_mi: '%distance% mi',
  email_edit_url: 'Upraviť URL: %url%',
  email_public_url: 'Verejná URL: %url%',
  email_subject: 'Spätná väzba na stretnutie: %name%',
  evening: 'Večer',
  feedback: 'Aktualizovať informácie o stretnutí',
  get_directions: 'Zobraziť trasu',
  in_progress_single: '1 stretnutie práve prebieha',
  in_progress_multiple: '%count% práve prebiehajúce stretnutia',
  km: 'km',
  location: 'Poloha',
  location_group: 'Poloha / Skupina',
  match_single: '1 výsledok',
  match_multiple: 'Výsledky: %count%',
  meeting_information: 'Informácie o stretnutí',
  meetings: 'Stretnutia',
  mi: 'mi',
  midday: 'Poludnie',
  modes: {
    location: 'Blízko lokality',
    me: 'V mojej blízkosti',
    search: 'Vyhľadať',
  },
  morning: 'Ráno',
  name: 'Meno',
  no_results: 'Neboli nájdené žiadne stretnutia zodpovedajúce vybraným kritériám.',
  not_found: 'Stretnutia sa nenašli.',
  night: 'Noc',
  phone: 'Telefón',
  region: 'Kraj',
  region_any: 'Kdekoľvek',
  remove: 'Zmazať %filter%',
  seventh_tradition: 'Siedma tradícia',
  share: 'Zdieľať',
  time: 'Čas',
  time_any: 'Kedykoľvek',
  title: {
    weekday: '%weekday%',
    time: '%time%',
    type: '%type%',
    meetings: '%meetings%',
    region: 'v %region%',
    search_with: 's %search%',
    search_near: 'popri %search%',
    distance: 'do %distance%',
  },
  type_any: 'Akýkoľvek typ',
  type_descriptions: {
    C: 'Uzavreté stretnutia sú pre členov A.A. alebo pre tých, ktorí majú problém s pitím a „chcú prestať piť“.',
    O: 'Otvorené stretnutia sú k dispozícii každému, kto sa zaujíma o program zotavovania sa z alkoholizmu Anonymných alkoholikov. Nealkoholici sa môžu zúčastniť otvorených stretnutí ako pozorovatelia.',
  },
  types: {
    ...getTypesForLanguage('sk'),
    active: 'Aktívne',
    inactive: 'Neaktívne',
    'in-person': 'Osobne',
    online: 'Online',
    SPD: 'Spíker/Diskusia',
  },
  unnamed_meeting: 'Nepomenované stretnutie',
  updated: 'Aktualizované %updated%',
  views: {
    table: 'Zoznam',
    map: 'Mapa',
  },
  weekday_any: 'Ktorýkoľvek deň',
};