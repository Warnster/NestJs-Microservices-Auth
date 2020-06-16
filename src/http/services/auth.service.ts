import { Injectable } from '@nestjs/common';
import {UserClass, UserCreateDto} from "../classes/user.class";

@Injectable()
export class AuthService {

    public register(user: UserCreateDto) : UserClass {
        let userClass = new UserClass();
        userClass.email = user.email;
        userClass.password = user.password;
        userClass.username = user.username;
        userClass.id = '1';

        return userClass;
    }

}
