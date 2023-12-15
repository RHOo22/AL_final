import { Controller, Body, Post, Get, Param, Put, Delete, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RolesService } from './roles.service';
import { Role } from './role.entity';
import { RoleInput } from './role.input';
import { RoleUpdate } from './role.update';

@ApiTags('roles')
@Controller('roles')
export class RolesController {

    constructor(
        private service: RolesService
    ) {}


    @Post()
    async create(@Body() input: RoleInput): Promise<Role> {
        if (input.idAssociation === undefined || input.idUser === undefined || input.name === undefined) {
            throw new HttpException('donnée manquante',HttpStatus.NOT_FOUND)
        }
        return this.service.create(input.idAssociation, input.idUser, input.name);
    }

    @Get()
    async get(): Promise<Role[]>{
        return this.service.get();
    }

    @Get(':idUser/:idAssociation')
    async getid(@Param() parameter): Promise<Role>{
        const role = await this.service.getid(+parameter.idAssociation,+parameter.idUser)
        if (role === undefined) throw new HttpException('utilisateur introuvable',HttpStatus.NOT_FOUND)
        return role
    }

    @Put(':idUser/:idAssociation')
    async put(@Param() parameter,@Body() input: RoleUpdate): Promise<Role>{
        const role = await this.service.put(+parameter.idAssociation,+parameter.idUser,input.name)
        if (role === undefined) throw new HttpException('utilisateur introuvable',HttpStatus.NOT_FOUND)
        return role;
    }

    @Delete(':idUser/:idAssociation')
    async delete(@Param() parameter):Promise<boolean>{
        const bool = this.service.delete(+parameter.idAssociation,+parameter.idUser)
        if (await bool === false) throw new HttpException('utilisateur introuvable',HttpStatus.NOT_FOUND)
        return true
    }
}
