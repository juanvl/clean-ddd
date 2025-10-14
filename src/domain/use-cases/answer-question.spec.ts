import { describe, expect, it } from "vitest";

import { Answer } from "../entities/answer";
import { AnswerQuestionUseCase } from "./answer-question";

describe("Answer Question Use Case", () => {
  it("should create an answer to a question", () => {
    const useCase = new AnswerQuestionUseCase();
    const answer = useCase.execute({
      instructorId: "instructor-123",
      questionId: "question-456",
      content: "This is the answer to the question.",
    });

    expect(answer).toBeInstanceOf(Answer);
    expect(answer.content).toBe("This is the answer to the question.");
  });
});
