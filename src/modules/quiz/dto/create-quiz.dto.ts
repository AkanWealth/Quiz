import { IsNotEmpty, IsString } from 'class-validator';

export class CreateQuizDto {
  @IsNotEmpty({ message: 'This quiz should have a title' })
  @IsString()
  title: string;

  @IsNotEmpty({ message: 'This quiz should have a description' })
  description: string;
}
