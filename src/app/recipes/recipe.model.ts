// export class Recipe {
//     public name: string;
//     public description: string;
//     public imagePath: string

//     constructor(name: string, descripton: string, imagePath: string) {
//         this.name = name;
//         this.description = descripton;
//         this.imagePath = imagePath
//     }
// }

export interface IRecipe {
    name: string;
    description: string;
    amount?: number;
    imagePath?: string;
}
