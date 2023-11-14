import { Body, Controller, Get, Post } from '@nestjs/common';
import { QuestionService } from './question.service';
import { Question } from './question.entity';
import { CreateQuestionDto } from './dto/create-question.dto';

@Controller('question')
export class QuestionController {
  constructor(private questionService: QuestionService) {}

  @Get()
  async getAllQuestions(): Promise<Question[]> {
    return this.questionService.getAllQuestions();
  }

  @Post()
  async createQuestion(@Body() question: CreateQuestionDto): Promise<Question> {
    return await this.questionService.createQuestion(question);
  }
}
