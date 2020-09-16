import { Entity , PrimaryGeneratedColumn, Column, JoinColumn } from "typeorm";
import { Recipe } from "./recipeEntity";

@Entity()
export class Category {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column({ type: "varchar", length: "50" })
    name: string;


}
