import axios from 'axios';
import { API_ENDPOINT } from '../constants/axios';

const callAPI = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    common: {
      'X-Requested-With': 'XMLHttpRequest',
      Accept: 'application/json',
    },
  },
});

export default callAPI;
