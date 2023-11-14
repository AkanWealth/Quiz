import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './question.entity';
import { CreateQuestionDto } from './dto/create-question.dto';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {}

  getAllQuestions(): Promise<Question[]> {
    return this.questionRepository.find();
  }

  createQuestion(createQuestion: CreateQuestionDto): Promise<Question> {
    return this.questionRepository.save(createQuestion);
  }
}
