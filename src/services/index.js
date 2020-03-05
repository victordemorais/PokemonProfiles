import Axios from 'axios';

const urlApi = 'https://pokeapi.co/api/v2/pokemon';

const api = Axios.create({
  baseURL: urlApi,
});

export default api;
