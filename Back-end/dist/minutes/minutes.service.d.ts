import { Minute } from './minute.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
export declare class MinutesService {
    private repository;
    private userservice;
    constructor(repository: Repository<Minute>, userservice: UsersService);
    create(content: string, idVoters: number[], date: string, idAssociation: number): Promise<Minute>;
    get(): Promise<Minute[]>;
    getid(id: number): Promise<Minute>;
    getVoters(id: number): Promise<User[]>;
    getAssoc(id: number): Promise<Minute[]>;
    put(id: number, content: string, idVoters: number[], date: string, idAssociation: number): Promise<Minute>;
    delete(id: number): Promise<Boolean>;
}
