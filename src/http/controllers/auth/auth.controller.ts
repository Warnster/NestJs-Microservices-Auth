import {Body, Controller, Logger, Post} from '@nestjs/common';
import {AuthService} from "../../services/auth.service";
import {UserClass, UserCreateDto} from "../../classes/user.class";
import { MessagePattern } from "@nestjs/microservices";

@Controller('auth')
export class AuthController {
    private logger = new Logger("AuthController");

    constructor(private authService: AuthService) {}

    //@Post('register')
    //Desfines the message pattern for this
    @MessagePattern('register')
    async register(user: UserCreateDto) : Promise<UserClass> {
        this.logger.log("Registering a New User" + user.toString());
        return this.authService.register(user);
    }

}
