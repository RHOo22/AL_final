import { Association } from './association.entity';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
export declare class AssociationsService {
    private repository;
    private userservice;
    constructor(repository: Repository<Association>, userservice: UsersService);
    create(idUsers: number[], name: string): Promise<Association>;
    get(): Promise<Association[]>;
    getid(id: number): Promise<Association>;
    getMembers(id: number): Promise<User[]>;
    put(id: number, Users: User[], name: string): Promise<Association>;
    delete(id: number): Promise<Boolean>;
}
