import { Entity , PrimaryGeneratedColumn, Column, JoinColumn, OneToMany } from "typeorm";
import { Recipe } from "./recipeEntity";

@Entity()
export class Category {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar", length: "50" })
    name: string;

    @OneToMany(type => Recipe, recipe => recipe.category, {
        cascade: true,
        eager: true
    })
    @JoinColumn({ name: "recipes_id" })
    recipes: Recipe[];
;
}
