import { IsNotEmpty } from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty({ message: 'This quiz should have a question' })
  question: string;
}
