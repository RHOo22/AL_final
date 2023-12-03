import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    lastname: string;
    @Column()
    firstname: string;
    @Column()
    age: number
    @Column()
    password: string;
    constructor(id:number, ln:string, fn:string, age:number, pw:string){
        this.id = id;
        this.lastname = ln;
        this.firstname = fn;
        this.age = age;
        this.password = pw; 
    }
}

