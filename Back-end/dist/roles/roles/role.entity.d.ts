import { Association } from "src/associations/association.entity";
import { User } from "src/users/user.entity";
export declare class Role {
    idAssociation: number;
    idUser: number;
    name: string;
    user: User;
    association: Association;
}
