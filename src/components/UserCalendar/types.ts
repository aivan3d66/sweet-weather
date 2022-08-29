export interface IResult {
  accessRole: string;
  defaultReminders: Array<any>;
  etag: string;
  items: Array<ITodosList>;
  kind: string;
  summary: string;
  timeZone: string;
  updated: string;
}

export interface ITodosList {
  created: string;
  creator: {
    email: string;
    self: boolean;
  };
  end: {
    date: string;
  };
  etag: string;
  eventType: string;
  htmlLink: string;
  iCalUID: string;
  id: string;
  kind: string;
  organizer: {
    email: string;
    self: boolean;
  };
  reminders: {
    useDefault: boolean;
    overrides: Array<any>;
  };
  sequence: number;
  start: {
    dateTime: string;
  };
  status: string;
  summary: string;
  transparency: string;
  updated: string;
}
