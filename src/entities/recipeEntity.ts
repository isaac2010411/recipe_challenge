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

    @Column()
    category: string;

    @ManyToOne((type: any) => User, (user: User) => user.id)
    @JoinColumn({name:"userId"})
    user: User;
} 