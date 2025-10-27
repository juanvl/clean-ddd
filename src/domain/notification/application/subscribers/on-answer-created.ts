import type { DomainEvent } from "@/core/events/domain-event";
import { DomainEvents } from "@/core/events/domain-events";
import type { EventHandler } from "@/core/events/event-handler";
import { AnswerCreatedEvent } from "@/domain/forum/enterprise/events/answer-created-event";

export class OnAnswerCreated implements EventHandler {
  constructor() {
    this.setupSubscriptions();
  }

  setupSubscriptions(): void {
    DomainEvents.register(
      this.sendNewAnswerNotification.bind(this),
      AnswerCreatedEvent.name,
    );
  }

  private async sendNewAnswerNotification(event: DomainEvent) {
    const { answer } = event as AnswerCreatedEvent;

    console.log(answer);
  }
}
