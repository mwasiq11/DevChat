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

Deploy the contents of `frontend/dist` to Vercel. 

**Important:** Configure the `VITE_API_URL` environment variable in your Vercel project settings:
- Go to your Vercel project → Settings → Environment Variables
- Add/Update: `VITE_API_URL` = `https://dev-chat-murex.vercel.app/api`
- Make sure to select **All Environments** (Production, Preview, Development)
- **Redeploy** your frontend after setting the environment variable
