import { Entity , PrimaryGeneratedColumn, Column, JoinColumn } from "typeorm";

@Entity()
export class Category {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column({ type: "varchar", length: "50" })
    @JoinColumn()
    name: string;
}
