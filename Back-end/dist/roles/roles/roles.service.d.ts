import { Repository } from 'typeorm';
import { Role } from './role.entity';
import { UsersService } from 'src/users/users.service';
import { AssociationsService } from 'src/associations/associations.service';
export declare class RolesService {
    private repository;
    private userservice;
    private associationservice;
    constructor(repository: Repository<Role>, userservice: UsersService, associationservice: AssociationsService);
    create(idAssociation: number, idUser: number, name: string): Promise<Role>;
    get(): Promise<Role[]>;
    getid(idAssociation: number, idUser: number): Promise<Role>;
    put(idAssociation: number, idUser: number, name: string): Promise<Role>;
    delete(idAssociation: number, idUser: number): Promise<Boolean>;
}
