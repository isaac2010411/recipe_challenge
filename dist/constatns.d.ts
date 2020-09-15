export declare const users: {
    id: string;
    name: string;
    email: string;
}[];
export declare const recipesConstatns: {
    id: string;
    name: string;
    description: string;
    ingredients: string;
    category: {
        id: number;
        name: string;
    };
    user: {
        id: string;
        name: string;
    };
}[];
export declare const categories: {
    id: string;
    name: string;
    recipes: never[];
}[];
