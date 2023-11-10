import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(
    @InjectRepository(User)
    private repository: Repository<User>
    ) {}

    create(lastname: string, firstname: string, age: number): User {
        const user = new User(User.length, lastname, firstname, age);
        this.repository.save(user)
        return user
    }

    get() : Repository<User>{
        return this.repository
    }

    getid(id:number):User{
        const user = users.filter((users) => id === users.id)[0];
        return user
    }

    put(id:number,firstname:string,lastname:string,age:number):User{
        const user = users.filter((users) => id === users.id)[0];
        if ( user !== undefined){
            if (firstname !== undefined){
                user.firstname = firstname
            }
            if (lastname !== undefined){
                user.lastname = lastname
            }
            if (age !== undefined){
                user.age = age
            }
        }
        return user
    }

    delete(id:number):Boolean{
        const user = users.filter((users) => id === users.id)[0];
        if (user !== undefined){
            users.splice(users.indexOf(user),1);
            return true
        }
        else {
            return false
        }
    }
}
