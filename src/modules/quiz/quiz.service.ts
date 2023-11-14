import { Quiz } from './quiz.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuizDto } from './dto/create-quiz.dto';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private readonly quizRepository: Repository<Quiz>,
  ) {}

  getAllQuiz(): Promise<Quiz[]> {
    return this.quizRepository.find();
  }

  createQuiz(createQuiz: CreateQuizDto): Promise<Quiz> {
    return this.quizRepository.save(createQuiz);
  }

  async create() {}
}
