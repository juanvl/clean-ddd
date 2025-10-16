import { UniqueEntityID } from "@/core/entities/value-objects/unique-entity-id";
import {
  Question,
  type QuestionProps,
} from "@/domain/forum/enterprise/entities/question";

export function makeQuestion(override: Partial<QuestionProps> = {}) {
  const question = Question.create({
    authorId: new UniqueEntityID(),
    title: "Example",
    content: "Example content",
    ...override,
  });

  return question;
}
