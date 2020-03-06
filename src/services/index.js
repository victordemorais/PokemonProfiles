import Axios from 'axios';

export const urlApi = 'https://pokeapi.co/api/v2/pokemon';

const api = Axios.create();

export default api;
