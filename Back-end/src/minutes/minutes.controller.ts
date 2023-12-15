import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Put ,Delete} from '@nestjs/common';
import { Minute } from './minute.entity';
import { MinuteInput } from './minute.input';
import { User } from 'src/users/user.entity';
import { MinuteUpdate } from './minute.update';
import { MinutesService } from './minutes.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('minutes')
@Controller('minutes')
export class MinutesController {

    constructor(
        private service: MinutesService
    ) {}

    @Post()
    async create(@Body() input: MinuteInput): Promise<Minute> {
        if (input.content === undefined  || input.idVoters === undefined || input.date === undefined || input.idAssociation === undefined) {
            throw new HttpException('donnée manquante',HttpStatus.NOT_FOUND)
        }
        return await this.service.create(input.content, input.idVoters.map(Number), input.date, input.idAssociation);
    }

    @Get()
    async get(): Promise<Minute[]>{
        return await this.service.get();
    }

    @Get(':id')
    async getid(@Param() parameter): Promise<Minute>{
        const minute = await this.service.getid(+parameter.id)
        if (minute === undefined) throw new HttpException('minute introuvable',HttpStatus.NOT_FOUND)
        return await minute
    }

    @Get(':id/voters')
    async getVoters(@Param() parameter): Promise<User[]> {
        const UserVoters = this.service.getVoters(+parameter.id)
        if(UserVoters===undefined) throw new HttpException('minute introuvable',HttpStatus.NOT_FOUND)
        return await UserVoters
    }

    @Put(':id')
    async put(@Param() parameter,@Body() input: MinuteUpdate): Promise<Minute>{
        const minute = this.service.put(+parameter.id,input.content,input.idVoters,input.date,input.idAssociation)
        if (minute === undefined) throw new HttpException('minute introuvable',HttpStatus.NOT_FOUND)
        return await minute;
    }

    @Delete(':id')
    async delete(@Param() parameter):Promise<boolean>{
        const bool = this.service.delete(+parameter.id)
        if (await bool === false) throw new HttpException('minute introuvable',HttpStatus.NOT_FOUND)
        return true
    }

}