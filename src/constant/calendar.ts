const API_KEY = 'AIzaSyCKhnSW80Es0e2YkIa3QQJHXHzNjz_Qmaw';
const CLIENT_ID =
  '937990846295-3ef705ivdaocht64itnsl84pnla4ao4l.apps.googleusercontent.com';

export const config = {
  clientId: CLIENT_ID,
  apiKey: API_KEY,
  scope: 'https://www.googleapis.com/auth/calendar',
  discoveryDocs: [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
  ],
};
