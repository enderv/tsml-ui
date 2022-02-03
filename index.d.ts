type Translation = import('./src/types/Translation').Translation;
type MeetingType = import('./src/types/MeetingType').MeetingType;

type Lang = 'en' | 'es' | 'fr';

interface TSMLReactConfig {
  cache: boolean;
  columns: Array<
    'time' | 'distance' | 'name' | 'location_group' | 'address' | 'region'
  >;
  timezone: string;
  conference_providers: Record<string, string>;
  defaults: {
    // TODO: Not sure about these types
    distance: unknown[];
    meeting: unknown;
    mode: string;
    region: unknown[];
    search: string;
    time: unknown[];
    type: unknown[];
    view: string; // TODO: Probably a union
    weekday: [];
  };
  distance_unit: 'mi' | 'km';
  /** Email addresses for update meeting info button */
  feedback_emails: [];
  filters: Array<'region' | 'distance' | 'weekday' | 'time' | 'type'>;
  flags: Array<'M' | 'W'> | undefined | null;
  in_person_types: MeetingType[];
  language: Lang;
  map: {
    markers: {
      location: {
        backgroundImage: string;
        cursor: string;
        height: number;
        width: number;
      };
    };
    style: string;
  };
  /** What meetings to show based off a past start time in minutes */
  now_offset: number;
  /** Input other than filters */
  params: Array<'search' | 'mode' | 'view' | 'meeting'>;
  show: {
    /** Whether to show search + dropdowns + list/map */
    controls: boolean;
    /** Show conference buttons in list or show labels */
    listButtons: boolean;
    /** Whether to display the title h1 */
    title: boolean;
  };
  strings: {
    [lang in Lang]: Translation;
  };
  times: Array<'morning' | 'midday' | 'evening' | 'night'>;
  weekdays: Array<
    | 'sunday'
    | 'monday'
    | 'tuesday'
    | 'wednesday'
    | 'thursday'
    | 'friday'
    | 'saturday'
  >;
}

declare var tsml_react_config: Readonly<TSMLReactConfig> | undefined;