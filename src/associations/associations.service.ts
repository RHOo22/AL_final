import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Association } from './association.entity';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/user.entity';

const associations: Association[] = [
    {
        id: 0,
        idUsers: [],
        name: 'alela'
    }
]

@Injectable()
export class AssociationsService {

    constructor(
        private Userservice: UsersService
    ) {}

    create(idUsers: number[], name: string): Association {
        const association = new Association(associations.length, idUsers, name);
        associations.push(association)
        return association
    }

    get() : Association[]{
        return associations
    }

    getid(id:number):Association{
        const association = associations.filter((associations) => id === associations.id)[0];
        return association
    }

    getMembers(id: number): User[] {
        const idUsers= this.getid(id).idUsers
        if (idUsers !== undefined){
            const users : User[] = []
            idUsers.forEach(idUser => users.push(this.Userservice.getid(idUser)));
            return users
        }
        return undefined
    }

    put(id:number,idUsers:number[],name:string):Association{
        const association = associations.filter((associations) => id === associations.id)[0];
        if ( association !== undefined){
            if (idUsers !== undefined){
                association.idUsers = idUsers
            }
            if (name !== undefined){
                association.name = name
            }
        }
        return association
    }

    delete(id:number):Boolean{
        const association = associations.filter((associations) => id === associations.id)[0];
        if (association !== undefined){
            associations.splice(associations.indexOf(association),1);
            return true
        }
        else {
            return false
        }
    }
}
