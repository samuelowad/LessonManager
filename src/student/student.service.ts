import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentInput } from './create-student.input';
import { v4 as uuid } from 'uuid';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepo: Repository<Student>,
  ) {}

  async getAll(): Promise<Student[]> {
    return this.studentRepo.find();
  }

  async getStudentById(id: string): Promise<Student> {
    return this.studentRepo.findOne({ id });
  }

  async createStudent(
    createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    const { fname, lname } = createStudentInput;
    const student = this.studentRepo.create({ id: uuid(), fname, lname });

    return this.studentRepo.save(student);
  }

  async getManyStudent(studentIds: string[]): Promise<Student[]> {
    return this.studentRepo.find({
      where: {
        id: {
          $in: studentIds,
        },
      },
    });
  }
}
