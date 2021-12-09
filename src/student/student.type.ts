import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType('Student')
export class StudentType {
  @Field((type) => ID)
  id: string;

  @Field()
  fname: string;

  @Field()
  lname: string;
}
