"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Country {
    constructor(data) {
        this.name = data.name;
        this.independent = data.independent;
        this.unMember = data.unMember;
        this.capital = data.capital;
        this.region = data.region;
        this.subregion = data.subregion;
        this.languages = data.languages;
        this.latlng = data.latlng;
        this.borders = data.borders;
        this.area = data.area;
        this.population = data.population;
        this.timezones = data.timezones;
        this.flags = data.flags;
    }
    printInfo() {
        console.log("Common Name:", this.name.common);
        console.log("Official Name:", this.name.official);
        console.log("Independent:", this.independent ? "Yes" : "No");
        console.log("UN Member:", this.unMember ? "Yes" : "No");
        console.log("Capital:", this.capital);
        console.log("Region:", this.region);
        console.log("Subregion:", this.subregion);
        console.log("Languages:", this.languages.join(", "));
        console.log("Latitude and Longitude:", this.latlng.join(", "));
        console.log("Borders:", this.borders.join(", "));
        console.log("Area:", this.area);
        console.log("Population:", this.population);
        console.log("Timezones:", this.timezones.join(", "));
        console.log("Flag PNG:", this.flags.png);
        console.log("Flag SVG:", this.flags.svg);
    }
}
exports.default = Country;
// Exemplo de uso
