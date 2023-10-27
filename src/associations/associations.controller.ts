import { Controller, Body, Post, Get, Param, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { AssociationsService } from './associations.service';
import { Association } from './association.entity';
import { User } from 'src/users/user.entity';


@Controller('associations')
export class AssociationsController {

    constructor(
        private service: AssociationsService
    ) {}

    @Post()
    create(@Body() input: any): Association {
        if (input.idUsers === undefined || input.name === undefined ) {
            throw new HttpException('donnée manquante',HttpStatus.NOT_FOUND)
        }
        return this.service.create(input.idUsers, input.name);
    }

    @Get()
    get(): Association[]{
        return this.service.get();
    }

    @Get(':id')
    getid(@Param() parameter): Association{
        const association = this.service.getid(+parameter.id)
        if (association === undefined) throw new HttpException('association introuvable',HttpStatus.NOT_FOUND)
        return association
    }

    @Get(':id/members')
    getMembers(@Param() parameter): User[] {
        const UserMembers = this.service.getMembers(+parameter.id)
        if(UserMembers===undefined) throw new HttpException('association introuvable',HttpStatus.NOT_FOUND)
        return UserMembers
    }

    @Put(':id')
    put(@Param() parameter,@Body() input: any): Association{
        const association = this.service.put(+parameter.id,input.idUsers,input.name)
        if (association === undefined) throw new HttpException('association introuvable',HttpStatus.NOT_FOUND)
        return association;
    }

    @Delete(':id')
    delete(@Param() parameter):boolean{
        const bool = this.service.delete(+parameter.id)
        if (bool === false) throw new HttpException('association introuvable',HttpStatus.NOT_FOUND)
        return true
    }

}