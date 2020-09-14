import { Entity , PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Category } from "./categoryEntity";
import { User } from "./userEntity";


@Entity()
export class Recipe {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    ingredients: string;

    @ManyToOne((type:Category) => Category, (category:Category) => category.name, {
        eager: true,
        cascade: true
    })
    category: Category;

    @ManyToOne((type: any) => User, (user: User) => user.recipes)
    @JoinColumn()
    user: User;
}