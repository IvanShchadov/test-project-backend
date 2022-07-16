import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({example: 'string', description: 'Email'})
  readonly email: string;
  @ApiProperty({example: 'string', description: 'Password'})
  readonly password: string;
}