import { Entity , PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm";
import { Recipe } from "./recipeEntity";

@Entity()
 
export class User {

    @PrimaryGeneratedColumn()
    ID: String;

    @Column() 
    Name: string;

    @Column()
    Email: string;

    @Column()
    Password: String;
    
    @OneToMany((type: any) => Recipe, recipe => recipe.ID, {
        eager: true,
        cascade:true
    })
    @JoinColumn()
    recipes:[];
}