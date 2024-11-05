# Message Integration Monorepo

This monorepo hosts a collection of TypeScript packages designed to provide robust message integration capabilities for modern applications. The repository is structured to support multiple messaging providers while maintaining a consistent, domain-driven approach to message handling.

## Packages

### @dmitryrechkin/message-core

The core package provides foundational classes, interfaces, and tools for handling messages within domain-driven and AI applications. It serves as the base layer for all message integrations, offering:

- Unified messaging interfaces
- AI integration readiness with Zod validation
- Extensible base classes for message handling
- Tools for processing messages across different channels

[Learn more about message-core](packages/core/README.md)

### @dmitryrechkin/message-nylas

A platform-independent implementation for Nylas message integration, specifically designed for modern cloud environments including serverless platforms. Key features include:

- Message management through Nylas API
- Attachment handling capabilities
- Webhook integration support
- Serverless-compatible design
- Action-based architecture for clean, modular code

[Learn more about message-nylas](packages/nylas/README.md)

## Architecture

The monorepo follows a modular architecture where:

- `message-core` provides the foundation and common interfaces
- Provider-specific packages (like `message-nylas`) implement these interfaces
- Each package is independently versioned and published
- All packages share common TypeScript configurations and development practices

## Key Features

- **Provider Independence**: Core interfaces allow for consistent message handling across different providers
- **Modern TypeScript**: Built with modern TypeScript features and best practices
- **Serverless Ready**: Designed to work in any environment, including serverless platforms
- **AI Integration**: Built-in support for AI workflows with structured validation
- **Clean Architecture**: Follows domain-driven design principles with clear separation of concerns

## Installation

All packages are available via npm and can be installed using pnpm:

```bash
# Install core package
pnpm add @dmitryrechkin/message-core

# Install Nylas integration
pnpm add @dmitryrechkin/message-nylas
```

## Development

This monorepo uses pnpm for package management. To get started with development:

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Build all packages:
   ```bash
   pnpm build
   ```
4. Run tests:
   ```bash
   pnpm test
   ```

## Contributing

Contributions are welcome! Please feel free to submit pull requests. For major changes:

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

Please ensure your code passes all tests and follows the established coding standards.

