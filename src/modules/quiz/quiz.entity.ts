import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity()
export class Quiz {
  @PrimaryGeneratedColumn('uuid', {
    comment: 'The Quiz unique identifier',
  })
  id: string = uuidV4();

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    comment: 'The timestamp when the quiz was created',
  })
  createdAt: Date;
}
