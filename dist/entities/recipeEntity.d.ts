import { Category } from "./categoryEntity";
import { User } from "./userEntity";
export declare class Recipe {
    id: number;
    name: string;
    description: string;
    ingredients: string;
    category: Category;
    user: User;
}
