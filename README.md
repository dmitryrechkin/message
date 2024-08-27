# Message Core

**Message Core is a TypeScript library that provides foundational classes, interfaces, and tools for handling and processing messages within domain-driven and AI applications.** This package offers a set of abstractions that make it easier to manage messaging workflows, including sending and receiving messages across different channels.

## Installation

Install the package using pnpm:

```bash
pnpm add @dmitryrechkin/message-core
```

## Features

- **Unified Messaging Interfaces**: Define consistent interfaces for handling message-related actions, such as downloading attachments, sending messages, and handling webhooks.
- **AI Integration Ready**: Tools are designed to wrap actions and services, allowing them to be easily integrated into AI workflows, especially with structured validation using Zod.
- **Extensible and Reusable**: Easily extend the provided base classes and interfaces to fit your specific messaging needs.


## Rationale

The `@dmitryrechkin/message-core` package is designed to provide a consistent and extensible foundation for managing messaging workflows in TypeScript applications. By using well-defined interfaces and tools, developers can easily integrate messaging capabilities into their domain-driven designs and AI-driven processes. The library also leverages Zod for schema validation, ensuring that the data being processed meets the expected structure.

## Installation & Setup

Install the package using pnpm:

```bash
pnpm add @dmitryrechkin/message-core
```

Ensure that your project is set up to handle TypeScript and supports ES modules, as this library is built with modern JavaScript standards.

## Contributing

Contributions are welcome! Feel free to fork this project and submit pull requests. Before submitting, please ensure your code passes all linting and unit tests.

You can run unit tests using:

```bash
pnpm test
```