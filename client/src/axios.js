import axios from 'axios';
// export * as serverData from '../../index';

const instance = axios.create({
  baseURL: '',
});

export default instance;
