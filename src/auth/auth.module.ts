import {forwardRef, Module} from '@nestjs/common';
import {AuthController} from "./auth.controller";
import {AuthService} from "./auth.service";
import {UsersModule} from "../users/users.module";
import {JwtModule} from "@nestjs/jwt";

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    forwardRef(() => UsersModule),
    JwtModule.register({
      secret: process.env.JWT_KEY || 'secret',
      signOptions: {
        expiresIn: '24h'
      }
    })
  ],
  exports: [
    JwtModule, AuthService
  ]
})
export class AuthModule {}
