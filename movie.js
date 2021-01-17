class Movie {
  constructor(title, year, movieid) {
    this.apiKey = 'd6dbcc91';
    this.title = title;
    this.year = year;
    this.movieid = movieid;
  }

  // Fetch movie from API
  async getMovie(userText) {
    const response = await fetch(`http://www.omdbapi.com/?s=${userText}&apikey=${this.apiKey}`);

    const profile = await response.json();  

    return {
      profile
    }
  }
}
