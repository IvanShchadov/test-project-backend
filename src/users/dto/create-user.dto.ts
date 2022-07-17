import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {
  @ApiProperty({example: 'string', description: 'Email'})
  @IsString({message: 'Email must be a string'})
  @IsEmail({}, {message: 'Incorrect email'})
  readonly email: string;

  @ApiProperty({example: 'string', description: 'Password'})
  @IsString({message: 'Password must be a string'})
  @Length(4, 16, {
    message: 'Password must be at least 4 characters and no more than 16 characters'
  })
  readonly password: string;
}