import { Injectable } from '@nestjs/common';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

    constructor(
    private userservice: UsersService
    ) {}

    public async validateUser(id: number, password: string) : Promise<User> {
        let user: User;
        user= await this.userservice.getid(id);
        if(user===undefined || user.password!=password){return undefined}
        else{return user}
    }

}


