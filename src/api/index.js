import axios from "axios";

const defaultHeaders = {
  Accept: 'application/json, text/plain, */*',
  // Application: Config.application,
  // 'cache-control': 'no-cache',
  // Channel: 'web',
  // 'Client-Version': Config.client_version,
  'Content-Type': 'application/json',
  // Env: Config.environment,
  // Locale: 'it',
  // pragma: 'no-cache',
};

const defaultBody = {};

const axiosInstance = axios.create({
  withCredentials: false,
  baseURL: '',
  headers: {
    common: { ...defaultHeaders },
    Authorization: ''
  }
});

export { defaultHeaders, defaultBody, axiosInstance };
