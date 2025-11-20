# Frontend

React + Vite UI for DevChat.

## Environment variables

1. Copy `env.example` to `.env`.
2. Set `VITE_API_URL` to your backend's public `/api` URL (leave the default when running locally with `npm run dev`).

## Development

```bash
# from repository root
npm run dev:frontend
```

The dev server proxies `/api` calls to `http://localhost:3000`, so make sure the backend is running first.

## Production build

```bash
npm run build:frontend
```

Deploy the contents of `frontend/dist` to Vercel. Remember to configure the same `VITE_API_URL` env var in the Vercel dashboard so the SPA knows where your backend is hosted.
