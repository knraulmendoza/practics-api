import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length, MaxLength } from 'class-validator';

export class UserDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El usuario es requerido' })
  user_name: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'La contraseña es requerida' })
  @MaxLength(20, { message: 'La contraseña debe tener máximo 20 caracteres' })
  password: string;
}
