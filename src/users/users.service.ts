import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

const users : User[] = [
    {
        id: 0,
        lastname: 'Doe',
        firstname: 'John',
        age: 23
    }
]

@Injectable()
export class UsersService {

    create(lastname: string, firstname: string, age: number): User {
        const user = new User(users.length, lastname, firstname, age);
        users.push(user)
        return user
    }

    get() : User[]{
        return users
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
