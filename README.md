This is a case study of Micro Frontend architecture, where multiple children application is integrated into one container.

In this project, the `micro-frontend-main` acts as the container, or shell, using Nextjs as its core. The others are child applications, namely:

- `micro-frontend-service-1`: Also using Nextjs as its core, and is implemented with Redux and a connection to GraphQL `server` which proves it usability.
- `micro-frontend-react-child` is another child with React as its core, proving that cross-technology stack can be applied.
- `server`: This application is not directly a child application, but acts as the backend server for `micro-frontend-service-1`. This server uses MongoDB Compass to be locally availble but still maintain its viability for cloud import, together with a GraphQL API instead of traditional RESTful API.

The shell receives exposed components from its children, and it can be a React component, an object or even a function.

## Getting Started

First, run the development server by starting all children and the shell. Currently all procedures has to be done manually:

In `micro-frontend-main`:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

In `micro-frontend-service-1`:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

In `micro-frontend-react-child`:

```bash
npm start
# or
yarn start
# or
pnpm start
```

In `server`:

```bash
node index.js
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
