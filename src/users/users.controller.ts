import { Controller, Body, Post, Get, Param, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(
        private service: UsersService
    ) {}


    @Post()
    create(@Body() input: any): User {
        if (input.lastname === undefined || input.firstname === undefined || input.age === undefined) {
            throw new HttpException('donnée manquante',HttpStatus.NOT_FOUND)
        }
        return this.service.create(input.lastname, input.firstname, input.age);
    }

    @Get()
    get(): User[]{
        return this.service.get();
    }

    @Get(':id')
    getid(@Param() parameter): User{
        const user = this.service.getid(+parameter.id)
        if (user === undefined) throw new HttpException('utilisateur introuvable',HttpStatus.NOT_FOUND)
        return user
    }

    @Put(':id')
    put(@Param() parameter,@Body() input: any): User{
        const user = this.service.put(+parameter.id,input.firstname,input.lastname,input.age)
        if (user === undefined) throw new HttpException('utilisateur introuvable',HttpStatus.NOT_FOUND)
        return user;
    }

    @Delete(':id')
    delete(@Param() parameter):boolean{
        const bool = this.service.delete(+parameter.id)
        if (bool === false) throw new HttpException('utilisateur introuvable',HttpStatus.NOT_FOUND)
        return true
    }
}