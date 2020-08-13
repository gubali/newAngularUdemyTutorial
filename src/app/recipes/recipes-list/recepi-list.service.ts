import { IRecipe } from '../recipe.model';

export class RecepiListService {
    public recipes: IRecipe[] = [
        { name: 'Test Recipe1', description: 'Welcome to treat fest1', imagePath: 'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg' },
        { name: 'Test Recipe2', description: 'Welcome to treat fest2', imagePath: 'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg' }
      ];
}