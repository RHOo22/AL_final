import { RolesService } from './roles.service';
import { Role } from './role.entity';
import { RoleInput } from './role.input';
import { RoleUpdate } from './role.update';
export declare class RolesController {
    private service;
    constructor(service: RolesService);
    create(input: RoleInput): Promise<Role>;
    get(): Promise<Role[]>;
    getid(parameter: any): Promise<Role>;
    put(parameter: any, input: RoleUpdate): Promise<Role>;
    delete(parameter: any): Promise<boolean>;
}
