This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It also uses [TailwindCSS](https://tailwindcss.com/).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Second, open [http://localhost:3000](http://localhost:3000) with your browser to see the page and input calculation data. The page is designed to be viewed on an Iphone 12 Pro. Right click inspect on browser and click on the Toggle Device Toolbar icon in Developer Tools, set the Dimensions to Iphone 12 Pro.

To see the warning alert "Not tablet friendly - please use mobile or desktop device" change the Dimensions to a tablet of your choosing i.e. Ipad Air, Ipad Mini or Surface Pro 7.

You can edit the page and calculation functionaility by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Notes

The Keyzey favicon is contained in "/public/favicon.jpg".

The custom colours and font are contained in "tailwind.config.js". An additional plugin "@tailwindcss/forms" was used.

A partially completed URL data scraper is contained in "/lib/scraper.js".

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
