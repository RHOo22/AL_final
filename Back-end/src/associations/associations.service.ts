import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Association } from './association.entity';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Equal, Repository } from 'typeorm';


@Injectable()
export class AssociationsService {

    constructor(
        @InjectRepository(Association)
    private repository: Repository<Association>,   
    private userservice: UsersService
    ) {
        //this.create([1,2],"assoc2")
    }

    async create(idUsers: number[], name: string): Promise<Association> {
        let assoc : Association = this.repository.create({name});
        assoc.Users = (await this.userservice.get()).filter(user => idUsers.indexOf(user.id) >= 0);
        // let Users: User[] ;
        // idUsers.forEach(async element => {Users.push(await this.userservice.getid(element))});
        // return this.repository.save(this.repository.create({Users,name}))
        return this.repository.save(assoc);
    }

    async get() : Promise<Association[]>{
         return await this.repository.find({ relations: ['Users'] })
    }

    async getid(id:number):Promise<Association>{
        const association = await this.repository.findOne({where: {id: Equal(id)} ,relations: ['Users'] });
        if (association === null){return undefined};
        return association;
    }

    async getMembers(id: number): Promise<User[]> {
        const asso = await this.getid(id)
        if (asso==undefined){
            return undefined;
        }
        return asso.Users
        }

    async put(id:number,Users:User[],name:string):Promise<Association>{
        const association = await this.repository.findOne({where: {id: Equal(id)}})
        if ( association !== undefined){
            if (Users !== undefined){
                association.Users = Users
            }
            if (name !== undefined){
                association.name = name
            }
        }
        return association
    }

    async delete(id:number):Promise<Boolean>{
        return (await this.repository.delete(id)).affected!==0
    }
}
