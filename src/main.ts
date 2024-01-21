import Pokemon from "./modules/pokemon";
import Movie from "./modules/movie";
import Country from "./modules/country"

const pokemonData = {
  "id": 132,
  "name": "Ditto",
  "base_experience": 101,
  "height": 3,
  "weight": 40,
  "legendary": false,
  "firstAppearance": "1996-06-01",
  "abilities": ["limber", "imposter"],
  "stats": [
    {
      "base_stat": 48,
      "stat": "hp"
    },
    {
      "base_stat": 48,
      "stat": "attack"
    },
    {
      "base_stat": 48,
      "stat": "defense"
    }
  ]
};

const ditto = new Pokemon(pokemonData);

ditto.printInfo();
console.log("ditto");

const movieData = {
  "adult": false,
  "backdrop_path": "/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
  "id": 447365,
  "original_language": "en",
  "original_title": "Guardians of the Galaxy Vol. 3",
  "overview": "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
  "popularity": 4145.055,
  "poster_path": "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
  "release_date": "2023-05-03",
  "title": "Guardians of the Galaxy Vol. 3",
  "video": false,
  "vote_average": 8.1,
  "vote_count": 3154
};

const guardiansOfTheGalaxy = new Movie(movieData);
guardiansOfTheGalaxy.printInfo();

const countryData = {
  "name": {
    "common": "Brazil",
    "official": "Federative Republic of Brazil",
  },
  "independent": true,
  "unMember": true,
  "capital": "Brasília",
  "region": "Americas",
  "subregion": "South America",
  "languages": ["Portuguese"],
  "latlng": [-10, -55],
  "borders": [
    "ARG",
    "BOL",
    "COL",
    "GUF",
    "GUY",
    "PRY",
    "PER",
    "SUR",
    "URY",
    "VEN"
  ],
  "area": 8515767,
  "population": 212559409,
  "timezones": ["UTC-05:00", "UTC-04:00", "UTC-03:00", "UTC-02:00"],
  "flags": {
    "png": "https://flagcdn.com/w320/br.png",
    "svg": "https://flagcdn.com/br.svg",
  }
};

const brazil = new Country(countryData);
brazil.printInfo();
