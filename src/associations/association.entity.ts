import { User } from "src/users/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Association{
    @PrimaryGeneratedColumn()
    id!: number;
    @OneToMany(() => User, User => User.id)
    Users: User[];
    @Column()
    name: string;
    constructor(id:number, idUsers:User[], name:string){
        this.id = id;
        this.Users = idUsers;
        this.name = name;
    }
}
