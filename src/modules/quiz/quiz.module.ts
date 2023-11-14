import { Quiz } from './quiz.entity';
import { Module } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizController } from './quiz.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz])],
  controllers: [QuizController],
  providers: [QuizService],
})
export class QuizModule {}
