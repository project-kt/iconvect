# Iconvect

<div align="center">
  <h3>AI-Powered SVG Icon Generator</h3>
  <p>Generate stunning, unique vector icons instantly using the power of AI. Create scalable SVG assets for your projects in seconds.</p>

  <p>
    <a href="https://iconvect.com">Website</a> •
    <a href="#features">Features</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#getting-started">Getting Started</a> •
    <a href="#deployment">Deployment</a>
  </p>
</div>

---

## Overview

Iconvect is an AI-powered platform that generates custom SVG icons for web projects. Built with Next.js, React, Tailwind CSS, and PostgreSQL, it combines powerful server-side rendering, fast and modern UI development, and reliable relational data handling.

**Live at:** [iconvect.com](https://iconvect.com)

## Features

- **AI-Powered Generation**: Generate unique SVG icons using OpenAI and Google Gemini
- **Credit-Based System**: Flexible credit system for managing icon generation
- **User Authentication**: Secure authentication with GitHub and Google OAuth providers
- **Payment Integration**: Stripe integration for credit purchases with invoice management
- **Real-time Analytics**: PostHog integration for user analytics and insights
- **Type-Safe APIs**: End-to-end type safety with tRPC
- **Responsive UI**: Modern, responsive interface built with Tailwind CSS
- **Database Management**: Robust data handling with Prisma ORM and PostgreSQL
- **Server-Side Rendering**: Fast page loads with Next.js 15
- **Credit Transaction History**: Complete audit trail of all credit purchases and usage
- **Icon Library**: Save and manage generated icons

## Tech Stack

### Core Framework
- **[Next.js 15.3](https://nextjs.org)** - React framework with App Router
- **[React 18](https://react.dev)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety

### Backend & Database
- **[tRPC](https://trpc.io)** - End-to-end type-safe APIs
- **[Prisma](https://prisma.io)** - Type-safe ORM
- **[PostgreSQL](https://www.postgresql.org/)** - Relational database
- **[NextAuth.js 5](https://next-auth.js.org)** - Authentication

### AI Integration
- **[OpenAI API](https://openai.com)** - AI icon generation
- **[Google Gemini](https://deepmind.google/technologies/gemini/)** - Alternative AI provider

### UI & Styling
- **[Tailwind CSS 4](https://tailwindcss.com)** - Utility-first CSS
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev)** - Icon library
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Dark mode support

### State Management & Data Fetching
- **[Zustand](https://zustand-demo.pmnd.rs/)** - Lightweight state management
- **[TanStack Query](https://tanstack.com/query)** - Data fetching and caching

### Payment & Analytics
- **[Stripe](https://stripe.com)** - Payment processing
- **[PostHog](https://posthog.com)** - Product analytics

### Developer Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[pnpm](https://pnpm.io/)** - Fast, disk space efficient package manager

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.x or later
- **pnpm** 10.6.5 or later (recommended) or npm/yarn
- **PostgreSQL** database
- **Git**

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/project-kt/iconvect.git
cd iconvect
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Environment Setup

Create a `.env` file in the root directory by copying the example:

```bash
cp .env.example .env
```

Configure the following environment variables:

#### Required Variables

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/iconvect"

# Next Auth (Generate with: npx auth secret)
AUTH_SECRET="your-auth-secret"
AUTH_TRUST_HOST="http://localhost:3000"

# AI Providers (at least one required)
OPENAI_API_KEY="your-openai-api-key"
OPENAI_ORGANIZATION="your-openai-org-id"
OPENAI_PROJECT="your-openai-project-id"

# Or use Google Gemini
GOOGLE_API_KEY="your-google-gemini-api-key"

# Stripe Payment
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
```

#### OAuth Providers (Optional but Recommended)

```env
# GitHub OAuth
AUTH_GITHUB_ID="your-github-client-id"
AUTH_GITHUB_SECRET="your-github-client-secret"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

#### Analytics (Optional)

```env
# PostHog
NEXT_PUBLIC_POSTHOG_KEY="your-posthog-key"
NEXT_PUBLIC_POSTHOG_HOST="https://app.posthog.com"
```

#### API Configuration

```env
NEXT_PUBLIC_API_URL="http://localhost:3000"
```

### 4. Database Setup

#### Option A: Using Docker (Recommended)

Start the PostgreSQL database using the provided script:

```bash
./start-database.sh
```

#### Option B: Manual Setup

1. Create a PostgreSQL database
2. Update the `DATABASE_URL` in your `.env` file
3. Run Prisma migrations:

```bash
pnpm db:generate
pnpm db:migrate
```

#### Database Studio

To explore and manage your database with Prisma Studio:

```bash
pnpm db:studio
```

This will open a visual database browser at `http://localhost:5555`

### 5. Run Development Server

```bash
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server with Turbopack |
| `pnpm build` | Build production bundle |
| `pnpm start` | Start production server |
| `pnpm preview` | Build and start production server |
| `pnpm lint` | Run ESLint |
| `pnpm lint:fix` | Fix ESLint errors automatically |
| `pnpm typecheck` | Run TypeScript compiler check |
| `pnpm format:check` | Check code formatting |
| `pnpm format:write` | Format code with Prettier |
| `pnpm check` | Run lint and typecheck |
| `pnpm check:all` | Run format, typecheck, and lint |
| `pnpm db:generate` | Generate Prisma client and run migrations |
| `pnpm db:migrate` | Deploy database migrations |
| `pnpm db:push` | Push schema changes to database |
| `pnpm db:studio` | Open Prisma Studio |

## Project Structure

```
iconvect/
├── prisma/
│   └── schema.prisma          # Database schema
├── public/                    # Static assets
├── src/
│   ├── app/                   # Next.js App Router pages
│   │   ├── api/              # API routes
│   │   ├── homepage/         # Homepage components
│   │   └── prices/           # Pricing page
│   ├── components/           # React components
│   │   └── ui/              # UI components (Radix/shadcn)
│   ├── hooks/               # Custom React hooks
│   │   └── mutations/       # tRPC mutation hooks
│   ├── lib/                 # Utility libraries
│   │   └── types/           # TypeScript types
│   ├── server/              # Server-side code
│   │   ├── api/            # tRPC API routers
│   │   ├── auth/           # NextAuth configuration
│   │   └── services/       # Business logic services
│   ├── store/              # Zustand state stores
│   ├── styles/             # Global styles
│   └── trpc/               # tRPC client setup
├── .env                     # Environment variables (create from .env.example)
├── .env.example            # Environment variables template
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## Database Schema

The application uses the following main entities:

- **Users**: User accounts with credit balance and status (trial/subscribed/cancelled/banned)
- **Accounts & Sessions**: NextAuth authentication tables
- **Orders**: Credit purchase orders with Stripe integration
- **Invoices**: Payment invoices linked to orders
- **CreditTransactions**: Audit trail for all credit changes (purchases, generations, refunds)
- **AiGenerationRequests**: History of AI icon generation requests with status tracking

See `prisma/schema.prisma` for the complete database schema.

## Key Features Explained

### Credit System

Users start with 15 trial credits and can purchase more through Stripe. Credits are spent when generating icons, with a complete transaction history for transparency.

### AI Generation

Icons are generated using either OpenAI or Google Gemini APIs. Each generation request is tracked with:
- Prompt used
- Credits spent
- Generation status (pending/processing/completed/failed)
- Result SVG path (on success)
- Error messages (on failure)

### Payment Flow

1. User selects a credit package
2. Stripe checkout session is created
3. Payment is processed
4. Webhook confirms payment
5. Credits are added to user account
6. Invoice is generated

### Authentication

Supports multiple OAuth providers:
- GitHub OAuth
- Google OAuth
- Email/Password (via NextAuth)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy

Vercel automatically detects Next.js and configures the build settings.

### Environment Variables in Production

Ensure all required environment variables from `.env.example` are set in your deployment platform.

### Database Migration

Run migrations in production:

```bash
pnpm db:migrate
```

### Docker

For Docker deployment, refer to the [T3 Stack Docker guide](https://create.t3.gg/en/deployment/docker).

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Quality

Before submitting a PR, ensure your code passes all checks:

```bash
pnpm check:all
```

## Learn More

### T3 Stack Resources

This project is built with the [T3 Stack](https://create.t3.gg/):

- [T3 Stack Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available)
- [T3 Stack GitHub](https://github.com/t3-oss/create-t3-app)

### Technology Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [tRPC Documentation](https://trpc.io/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [NextAuth.js Documentation](https://next-auth.js.org)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

UNLICENSED - All rights reserved

## Author

**kt** - [GitHub](https://github.com/project-kt)

---

<div align="center">
  <p>Built with the T3 Stack</p>
  <p>Made with ❤️ for developers who need amazing icons</p>
</div>
