import { Entity , PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, CreateDateColumn , UpdateDateColumn } from "typeorm";
import { Recipe } from "./recipeEntity";

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: String;

    @Column({type:"varchar" , length:"20" }) 
    name: string;

    @Column({type:"varchar" , length:"45"})
    email: string;

    @Column({type:"varchar" , length:"250"})
    password: String;
    
    @OneToMany((type: Recipe) => Recipe, recipe => recipe.id, {
        eager: true,
        cascade:true
    })
        
    @JoinColumn()
    recipes: Recipe[];
    
    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: String;
}