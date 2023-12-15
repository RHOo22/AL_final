import { Association } from "src/associations/association.entity";
import { User } from "src/users/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Role {
    @PrimaryColumn({ name: 'idAssociation' })
    idAssociation: number;

    @PrimaryColumn({ name: 'idUser' })
    idUser: number;

    @Column()
    name: string;

    @ManyToOne(() => User, user => user.id)
    @JoinColumn({ name: 'idUser' , referencedColumnName: 'id'})
    user: User;

    @ManyToOne(() => Association, association => association.id)
    @JoinColumn({ name: 'idAssociation' , referencedColumnName: 'id'})
    association: Association;
}
