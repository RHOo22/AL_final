import { Minute } from './minute.entity';
import { MinuteInput } from './minute.input';
import { User } from 'src/users/user.entity';
import { MinuteUpdate } from './minute.update';
import { MinutesService } from './minutes.service';
export declare class MinutesController {
    private service;
    constructor(service: MinutesService);
    create(input: MinuteInput): Promise<Minute>;
    get(): Promise<Minute[]>;
    getid(parameter: any): Promise<Minute>;
    getVoters(parameter: any): Promise<User[]>;
    getAssoc(parameter: any): Promise<Minute[]>;
    put(parameter: any, input: MinuteUpdate): Promise<Minute>;
    delete(parameter: any): Promise<boolean>;
}
