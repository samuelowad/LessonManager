import { InputType, Field } from '@nestjs/graphql';
import { MinLength, IsDateString } from 'class-validator';

@InputType()
export class CreateStudentInput {
  @MinLength(1)
  @Field()
  fname: string;

  @Field()
  lname: string;
}
