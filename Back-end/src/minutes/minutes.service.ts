import { Injectable } from '@nestjs/common';
import { Minute } from './minute.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, Repository } from 'typeorm';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class MinutesService {

    constructor(
    @InjectRepository(Minute)
    private repository: Repository<Minute>,   
    private userservice: UsersService
    ) {
        //this.create("Hello Word",[2],"08/01/2024",1)
        //this.put(2,undefined,[2],undefined,undefined)
    }

    async create(content : string, idVoters: number[], date: string, idAssociation : number): Promise<Minute> {
        return this.repository.save(this.repository.create({content,idVoters,date,idAssociation}));
    }

    async get() : Promise<Minute[]>{
        console.log(await this.repository.find({ relations: ['idVoters'] }));
        return await this.repository.find({ relations: ['idVoters'] })
    }

    async getid(id:number):Promise<Minute>{
        const minute = await this.repository.findOne({where: {id: Equal(id)} ,  relations: ['idVoters'] });
        if (minute === null){return undefined};
        return minute;
    }

    async getVoters(id: number): Promise<User[]> {
        const minute = await this.getid(id)
        if (minute==undefined){
            return undefined;
        }
        return (await this.userservice.get()).filter(user => minute.idVoters.indexOf(user.id) >= 0)
    }

    async getAssoc(id: number): Promise<Minute[]> {
        const minute : Minute[] = await this.get();
        if (minute==undefined){
            return undefined;
        }
        return minute.filter(minute => minute.idAssociation === id)
    }

    async put(id:number,content : string, idVoters: number[], date: string, idAssociation : number):Promise<Minute>{
        const minute = await this.repository.findOne({where: {id: Equal(id)}})
        if ( minute !== undefined){
            if (content !== undefined){
                minute.content = content
            }
            if (idVoters !== undefined){
                minute.idVoters = idVoters;
            }
            if (date !== undefined){
                minute.date = date
            }
            if (idAssociation !== undefined){
                minute.idAssociation = idAssociation
            }
        }
        console.log(minute);
        return minute
    }

    async delete(id:number):Promise<Boolean>{
        return (await this.repository.delete(id)).affected!==0
    }
}
