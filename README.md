# BioCirc Planner Demo

A React + Vite front-end prototype for an LLM-assisted waste-to-energy planning platform for remote communities.

## Purpose

This website demonstrates how remote community data can be entered into a planning interface, processed through a mock LLM assistant, and presented as personalised waste-to-energy solution options.

The current version is a visual demo only. Real LLM, optimisation, database, and backend functions are not implemented.

## Features

- Community data input panel
- Mock LLM assistant chat
- Generated waste-to-energy option cards
- Advantages and trade-offs for each option
- Comparison table
- AI recommendation box
- Site overview, quick insights, and environmental impact widgets
- Static unavailable response for inactive functions

## Requirements

- Node.js 18 or newer
- npm 9 or newer

## Run Locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:5173
```

If you want other devices on the same local network to access the dev server, run:

```bash
npm run dev -- --host
```

Then open the LAN URL shown by Vite.

## Build For Deployment

```bash
npm run build
npm run preview
```

The production-ready static files will be created in:

```text
dist/
```

You can deploy the `dist` folder to any static hosting service such as Vercel, Netlify, GitHub Pages, or an Nginx/Apache server.

## Deploy To Vercel

Recommended workflow:

1. Push this project to a GitHub repository.
2. Sign in to Vercel and click **Add New... > Project**.
3. Import the GitHub repository.
4. Keep the detected framework as **Vite**.
5. Leave the default build settings unless you changed them:
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click **Deploy**.

After the first deployment:

- Every push to your production branch will create a new production deployment.
- Other branches can receive preview deployments automatically.

This project also includes a `vercel.json` rewrite so the React SPA can load correctly when visitors open nested routes directly.

## Notes

- All inactive actions show: `Sorry, this function is currently unavailable.`
- The chat panel appends the user's message and a static unavailable response.
- No backend, database, authentication, or API key is required.
