import { Entity , PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Category } from "./categoryEntity";
import { User } from "./userEntity";


@Entity()
    
export class Recipe {

    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    ingredients: string;

    @ManyToOne(type => Category, category => category.recipes)
    @JoinColumn({name:"categoryId"})
    category: Category;

    @ManyToOne((type: any) => User, (user: User) => user.id)
    @JoinColumn({name:"userId"})
    user: User;
} 