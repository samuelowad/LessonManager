import { InputType, Field, ID } from '@nestjs/graphql';
import { MinLength, IsDateString } from 'class-validator';

@InputType()
export class CreateLessonInput {
  @MinLength(1)
  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;

  @Field(() => [ID], { defaultValue: [] })
  students: string[];
}
