import { Role } from "src/roles/roles/role.entity";
import { User } from "src/users/user.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Association{
    @PrimaryGeneratedColumn()
    id :number;
    @ManyToMany(() => User, User => User.id)
    @JoinTable()
    Users: User[];
    @Column()
    name: string;
}


