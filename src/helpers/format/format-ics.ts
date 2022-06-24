import { Meeting } from '../../types';

//format ICS file for add to calendar
export function formatIcs(meeting: Meeting) {
  const fmt = 'YYYYMMDDTHHmmss';

  //need an end time. guess one hour if none specified
  if (!meeting.end) {
    meeting.end = meeting.start.clone().add(1, 'hour');
  }

  //start building event
  const event = [
    `SUMMARY:${meeting.name}`,
    `DTSTART:${meeting.start.clone().tz('UTC').format(fmt)}Z`,
    `DTSTART;TZID=/${meeting.timezone}:${meeting.start.format(fmt)}`,
    `DTEND:${meeting.end.clone().tz('UTC').format(fmt)}Z`,
    `DTEND;TZID=/${meeting.timezone}:${meeting.end.format(fmt)}`,
  ];

  //start building description
  const description = [];

  //add notes
  if (meeting.notes) {
    description.push(meeting.notes);
  }

  //add in-person info
  if (meeting.isInPerson) {
    event.push(`LOCATION:${meeting.location}\n${meeting.formatted_address}`);
    if (meeting.location_notes) {
      description.push(meeting.location_notes);
    }
  }

  //add online info
  if (meeting.isOnline) {
    if (meeting.conference_provider) {
      if (meeting.conference_url_notes) {
        description.push(meeting.conference_url_notes);
      }
      description.push(
        '----( Video Call )----',
        meeting.conference_url,
        '---===---'
      );
    }
    if (meeting.conference_phone) {
      description.push(meeting.conference_phone);
      if (meeting.conference_phone_notes) {
        description.push(meeting.conference_phone_notes);
      }
    }
  }

  if (description.length) {
    event.push(`DESCRIPTION:${description.join('\n')}`);
  }

  //add group website
  if (meeting.website) {
    event.push(`URL:${meeting.website}`);
  }

  //format event string
  const blob = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'BEGIN:VEVENT',
    ...event.map(line => line.replaceAll('\n', '\\n').replaceAll(',', '\\,')),
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\n');

  //create temporary link to download
  const url = window.URL.createObjectURL(new Blob([blob]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${meeting.name}.ics`);
  document.body.appendChild(link);
  link.click();
  link.parentNode?.removeChild(link);
}
