const environmentList = [
  'http://192.168.0.203:4040/' //local      = 0
];

const env = 0; // Place your environment number here

export const hostConfig = {
  WEB_URL: process.env.url,
  API_URL: environmentList[env] + 'v1/',
};

const api = environmentList[env];


