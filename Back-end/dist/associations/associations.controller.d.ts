import { AssociationsService } from './associations.service';
import { Association } from './association.entity';
import { User } from 'src/users/user.entity';
import { AssociationsInput } from './associations.input';
export declare class AssociationsController {
    private service;
    constructor(service: AssociationsService);
    create(input: AssociationsInput): Promise<Association>;
    get(): Promise<Association[]>;
    getid(parameter: any): Promise<Association>;
    getMembers(parameter: any): Promise<User[]>;
    put(parameter: any, input: any): Promise<Association>;
    delete(parameter: any): Promise<boolean>;
}
