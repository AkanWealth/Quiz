import { v4 as uuidV4 } from 'uuid';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Question {
  @PrimaryGeneratedColumn('uuid', {
    comment: 'The Question unique identifier',
  })
  id: string = uuidV4();

  @Column({ type: 'varchar' })
  question: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    comment: 'The timestamp when the quiz was created',
  })
  createdAt: Date;
}
