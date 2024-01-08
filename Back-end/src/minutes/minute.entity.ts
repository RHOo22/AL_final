import { Association } from "src/associations/association.entity";
import { Role } from "src/roles/roles/role.entity";
import { User } from "src/users/user.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Minute{
    @PrimaryGeneratedColumn()
    id : Minute;
    @Column()
    content: string;
    @ManyToMany(() => User, User => User.id)
    @JoinTable()
    idVoters: number[];
    @Column()
    date: string;
    @Column()
    idAssociation: number;
}


