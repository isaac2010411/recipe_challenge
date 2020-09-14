

const { Entity , PrimaryGeneratedColumn , Column }  = require('typeorm');

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Name: string;
}
