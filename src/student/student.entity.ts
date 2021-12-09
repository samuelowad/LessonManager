import { Entity, Column, PrimaryColumn, ObjectIdColumn } from 'typeorm';

@Entity()
export class Student {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  fname: string;

  @Column()
  lname: string;
}
