import { Entity , PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, CreateDateColumn , UpdateDateColumn } from "typeorm";
import { Recipe } from "./recipeEntity";

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({type:"varchar" , length:"20" }) 
    name: string;

    @Column({type:"varchar" , length:"45"})
    email: string;

    @Column({type:"varchar" , length:"250"})
    password: string;
    
    @OneToMany((type: Recipe) => Recipe, recipe => recipe.user, {
        eager: true,
        cascade:true
    })
    @JoinColumn()
    recipes: Recipe[];
    
    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;
}   