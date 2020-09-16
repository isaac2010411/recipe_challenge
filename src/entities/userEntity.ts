import { Entity , PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, CreateDateColumn , UpdateDateColumn } from "typeorm";
import { Recipe } from "./recipeEntity";

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: String;

    @Column({type:"varchar" , length:"20" }) 
    name: String;

    @Column({type:"varchar" , length:"45"})
    email: String;

    @Column({type:"varchar" , length:"250"})
    password: String;
    
    @OneToMany((type: Recipe) => Recipe, recipe => recipe.user, {
        eager: true,
        cascade:true
    })
    @JoinColumn()
    recipes: Recipe[];
    
    @CreateDateColumn()
    createdAt: String;

    @UpdateDateColumn()
    updatedAt: String;
}   