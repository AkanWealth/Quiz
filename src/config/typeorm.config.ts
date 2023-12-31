import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// import { Quiz } from 'src/modules/quiz/quiz.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '235112208',
  // entities: [Quiz],
  database: 'quiz',
  entities: [__dirname + '../../**/*.entity{.ts,.js}'],
  synchronize: true,
};
