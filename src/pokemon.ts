export default class Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  legendary: boolean;
  firstAppearance: string;
  abilities: string[];
  stats: { base_stat: number; stat: string }[];

  constructor(data: {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    weight: number;
    legendary: boolean;
    firstAppearance: string;
    abilities: string[];
    stats: { base_stat: number; stat: string }[];
  }) {
    this.id = data.id;
    this.name = data.name;
    this.base_experience = data.base_experience;
    this.height = data.height;
    this.weight = data.weight;
    this.legendary = data.legendary;
    this.firstAppearance = data.firstAppearance;
    this.abilities = data.abilities;
    this.stats = data.stats;
  }

  public printStats(): void {
    console.log("Stats:");
    this.stats.forEach((stat) => {
      console.log(`   ${stat.stat}: ${stat.base_stat}`);
    });
  }

  printInfo(): void {
    console.log("ID:", this.id);
    console.log("Nome:", this.name);
    console.log("Base Experience:", this.base_experience);
    console.log("Altura:", this.height);
    console.log("Peso:", this.weight);
    console.log("Legendary:", this.legendary ? 'Sim' : 'Não');
    console.log("Primeira Aparição:", this.firstAppearance);
    console.log("Habilidades:", this.abilities.join(", "));

    this.printStats();
  }
}