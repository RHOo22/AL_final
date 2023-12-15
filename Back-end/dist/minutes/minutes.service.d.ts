import { Minute } from './minute.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/user.entity';
export declare class MinutesService {
    private repository;
    userservice: any;
    constructor(repository: Repository<Minute>);
    create(content: string, idVoters: number[], date: string, idAssociation: number): Promise<Minute>;
    get(): Promise<Minute[]>;
    getid(id: number): Promise<Minute>;
    getVoters(id: number): Promise<User[]>;
    put(id: number, content: string, idVoters: number[], date: string, idAssociation: number): Promise<Minute>;
    delete(id: number): Promise<Boolean>;
}
