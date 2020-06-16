import { Module } from '@nestjs/common';
import {AuthService} from "./http/services/auth.service";
import {AuthController} from "./http/controllers/auth/auth.controller";

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}
