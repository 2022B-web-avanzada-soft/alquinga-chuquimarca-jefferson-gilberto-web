import axios from 'axios';

class ApiService {
  constructor() {
    this.APIKEY = '59736b18d8c85c42d5e6972d751046c6';
  }

  async getMoviesByCategory(categoryAPI, page = 1) {

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${categoryAPI}?api_key=${this.APIKEY}&language=es-ES&page=${page}`,
    );
    return data;
  }

  async getMovieById(id) {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${this.APIKEY}&language=es-ES`,
    );
    return data;
  }
}

export default new ApiService();
