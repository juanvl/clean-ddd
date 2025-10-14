import { describe, expect, it } from "vitest";

import { Answer } from "../entities/answer";
import type { AnswersRepository } from "../repositories/answers-repository";
import { AnswerQuestionUseCase } from "./answer-question";

const fakeAnswersRepository: AnswersRepository = {
  create: async (_answer: Answer) => {
    return;
  },
};

describe("Answer Question Use Case", () => {
  it("should create an answer to a question", async () => {
    const useCase = new AnswerQuestionUseCase(fakeAnswersRepository);

    const answer = await useCase.execute({
      instructorId: "instructor-123",
      questionId: "question-456",
      content: "This is the answer to the question.",
    });

    expect(answer).toBeInstanceOf(Answer);
    expect(answer.content).toBe("This is the answer to the question.");
  });
});
