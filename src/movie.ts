export default class Movie {
    adult: boolean;
    backdrop_path: string;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  
    constructor(data: {
      adult: boolean;
      backdrop_path: string;
      id: number;
      original_language: string;
      original_title: string;
      overview: string;
      popularity: number;
      poster_path: string;
      release_date: string;
      title: string;
      video: boolean;
      vote_average: number;
      vote_count: number;
    }) {
      this.adult = data.adult;
      this.backdrop_path = data.backdrop_path;
      this.id = data.id;
      this.original_language = data.original_language;
      this.original_title = data.original_title;
      this.overview = data.overview;
      this.popularity = data.popularity;
      this.poster_path = data.poster_path;
      this.release_date = data.release_date;
      this.title = data.title;
      this.video = data.video;
      this.vote_average = data.vote_average;
      this.vote_count = data.vote_count;
    }
  
    printInfo(): void {
      console.log("ID:", this.id);
      console.log("Title:", this.title);
      console.log("Original Title:", this.original_title);
      console.log("Overview:", this.overview);
      console.log("Release Date:", this.release_date);
      console.log("Popularity:", this.popularity);
      console.log("Vote Average:", this.vote_average);
      console.log("Vote Count:", this.vote_count);
    }
  }
  
  // Exemplo de uso

  