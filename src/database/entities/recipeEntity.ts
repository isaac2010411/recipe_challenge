
const { Entity , PrimaryGeneratedColumn , Column , ManyToOne  }  = require('typeorm');
import { JoinColumn, OneToOne } from "typeorm";
import { Category } from "./categoryEntity";
import { User } from "./userEntity";


@Entity()
export class Recipe {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Name: string;

    @Column()
    Description: string;

    @Column()
    Ingredients: string;

    @ManyToOne((type:Category) => Category, (category:Category) => category.Name, {
        eager: true,
        cascade: true
    })
    Category: Category;


    
    @ManyToOne((type:any) => User, (user:User) => user.recipes)
    @JoinColumn()
    recipes:Recipe
}