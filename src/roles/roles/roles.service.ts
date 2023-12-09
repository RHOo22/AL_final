import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Equal, FindOneOptions, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Role } from './role.entity';
import { Association } from 'src/associations/association.entity';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
import { AssociationsService } from 'src/associations/associations.service';

@Injectable()
export class RolesService {

    constructor(
    @InjectRepository(Role)
    private repository: Repository<Role>,
    private userservice: UsersService,
    private associationservice: AssociationsService
    ) {}

    async create(idAssociation: number, idUser: number, name: string): Promise<Role> {
        const association = await this.associationservice.getid(idAssociation);
        const user = await this.userservice.getid(idUser);
        if (!association || !user) {
            throw new HttpException('association ou user inexistant',HttpStatus.NOT_FOUND)
        } 
        const roleData: DeepPartial<Role> = {
            idAssociation,
            idUser,
            name,
            user,
            association,
        };
        return this.repository.save(this.repository.create(roleData))
    }

    async get() : Promise<Role[]>{
        return await this.repository.find();
    }

    async getid(idAssociation:number,idUser:number): Promise<Role> {
        const role = await this.repository.findOne({
            where: {
                idAssociation: idAssociation,
                idUser: idUser
            }
        })
        if (role === null){return undefined};
        return role
    }

    async put(idAssociation:number,idUser:number,name:string):Promise<Role>{
        const role = await this.getid(idAssociation,idUser)
        if ( role !== undefined){
            if (name !== undefined){
                role.name = name
            }
        }
        return role
    }

    async delete(idAssociation:number,idUser:number):Promise<Boolean>{
        return await (await this.repository.delete(await this.repository.findOne({
            where: { idAssociation, idUser },
        } as FindOneOptions<Role>))).affected !== 0
    }
}
