import {
  Entity,
  Column,
  PrimaryColumn,
  ObjectIdColumn,
  Generated,
} from 'typeorm';

@Entity()
export class Lesson {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  //   @Generated('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;

  @Column({ default: [] })
  students: string[];
}
