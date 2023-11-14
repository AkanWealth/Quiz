import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { QuizModule } from './modules/quiz/quiz.module';
import { typeOrmConfig } from './config/typeorm.config';
import { QuestionModule } from './modules/question/question.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), QuizModule, QuestionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
