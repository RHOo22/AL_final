import { Controller, Body, Post, Get, Param, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { AssociationsService } from './associations.service';
import { Association } from './association.entity';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { AssociationsInput } from './associations.input';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('associations')
@Controller('associations')
export class AssociationsController {


    constructor(
        private service: AssociationsService
    ) {}

    @Post()
    async create(@Body() input: AssociationsInput): Promise<Association> {
        if (input.idUsers === undefined || input.name === undefined ) {
            throw new HttpException('donnée manquante',HttpStatus.NOT_FOUND)
        }
        return await this.service.create(input.idUsers, input.name);
    }

    @Get()
    async get(): Promise<Repository<Association>>{
        return await this.service.get();
    }

    @Get(':id')
    async getid(@Param() parameter): Promise<Association>{
        const association = this.service.getid(+parameter.id)
        if (association === undefined) throw new HttpException('association introuvable',HttpStatus.NOT_FOUND)
        return await association
    }

    @Get(':id/members')
    async getMembers(@Param() parameter): Promise<User[]> {
        const UserMembers = this.service.getMembers(+parameter.id)
        if(UserMembers===undefined) throw new HttpException('association introuvable',HttpStatus.NOT_FOUND)
        return await UserMembers
    }

    @Put(':id')
    async put(@Param() parameter,@Body() input: any): Promise<Association>{
        const association = this.service.put(+parameter.id,input.idUsers,input.name)
        if (association === undefined) throw new HttpException('association introuvable',HttpStatus.NOT_FOUND)
        return await association;
    }

    @Delete(':id')
    async delete(@Param() parameter):Promise<boolean>{
        const bool = this.service.delete(+parameter.id)
        if (await bool === false) throw new HttpException('association introuvable',HttpStatus.NOT_FOUND)
        return true
    }

}