# magicazanzibar.com

## Getting Started

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

## Deploy on GitHub

The deployment on GitHub is done automatically when pushed on the main branch (see `.github` directory).
The deploy will be successfull only if these conditions are met **before pushing** to main:

- You must uncomment the `basePath` value in `./next.config.mjs`

```ts
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // basePath: "/web.magicazanzibar",  // uncomment before pushing
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
```

- You must change `baseUrl` value from `./src/app/_components/baseUrl.ts` from

```ts
export const baseUrl = "";
// export const baseUrl = "/web.magicazanzibar";
```

to

```ts
// export const baseUrl = "";
export const baseUrl = "/web.magicazanzibar";
```

- Finally, run `npm run build` and push to `out` directory.
