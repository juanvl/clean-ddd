# Domain-Driven Design (DDD)

**Domain-Driven Design (DDD)** is an approach to software design that focuses on understanding and modeling the **core business domain** through close collaboration between developers and domain experts.  
Its goal is to align software structures and language with real-world business concepts.

---

## Domain

The **domain** represents the core knowledge and activities that define a business or problem space.  
In DDD, everything revolves around understanding and modeling this domain accurately.

### Domain Experts
- Specialists who deeply understand the business or problem area.  
- Developers collaborate with them to translate knowledge into software models.

### Ubiquitous Language
- A shared vocabulary between developers and domain experts.  
- Used consistently in code, discussions, and documentation to avoid misunderstandings.

---

## Example Domain Actors

Different user types or roles can exist within a domain, such as:
- Client  
- Supplier  
- Attendant  
- Bartender

---

## Core Building Blocks

### Entities
- Have a unique identity that persists over time.  
- Example: `Customer`, `Order`.

### Value Objects
- Represent attributes or measurements without identity.  
- Example: `Money`, `Address`.

### Aggregates
- A cluster of entities and value objects treated as a single unit.  
- Defined by a root entity that controls access to the rest of the aggregate.

### Domain Events
- Represent something significant that happened within the domain.  
- Example: `OrderPlaced`, `PaymentReceived`.

---

## Subdomains and Bounded Contexts

### Subdomains
- Distinct parts of the overall domain, each with its own logic and rules.  
- Example: `Billing`, `Inventory`, `Customer Management`.

### Bounded Contexts
- Define clear boundaries where a particular model applies.  
- Prevents ambiguity when the same term means different things across contexts.

---

## Use Cases
- Define how the system’s domain logic solves real-world business problems.  
- Serve as the bridge between domain models and application behavior.