# AI Chat Free


AI Chat Free.


Live demo: [AI Chat Free](https://www.aichatfree.com)

fork: geminiprochat

[x] add robots.txt
[x] add google analyze to layout
[ ] support gemini pro vision

## Deploy

### Deploy With Vercel(Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ievjai/aichatfree&env=GEMINI_API_KEY&envDescription=Google%20API%20Key%20for%20GeminiProChat&envLink=https://makersuite.google.com/app/apikey&project-name=gemini-pro-chat&repository-name=gemini-pro-chat&demo-title=Gemini%20Pro%20Chat&demo-description=Minimal%20web%20UI%20for%20Gemini%20Pro.&demo-url=https%3A%2F%2Faichatfree.com&demo-image=https%3A%2F%2Faichatfree.com%2Ficon.svg)

Just click the button above and follow the instructions to deploy your own copy of the app.

> [!NOTE]
> #### Solution for "User location is not supported for the API use"
> If you encounter the issue **"User location is not supported for the API use"**, follow these steps to resolve it:
>
> 1. Go to this [**palm-netlify-proxy**](https://github.com/antergone/palm-netlify-proxy) repo and click **"Deploy With Netlify"**.
> 2. Once the deployment is complete, you will receive a domain name assigned by Netlify (e.g., `https://xxx.netlify.app`).
> 3. In your **AI Chat Free** project, set an environment variable named `API_BASE_URL` with the value being the domain you got from deploying the palm proxy (`https://xxx.netlify.app`).
> 4. Redeploy your **AI Chat Free** project to finalize the configuration. This should resolve the issue.
>
> Thanks to [**antergone**](https://github.com/antergone/palm-netlify-proxy) for providing this solution.

### Deploy on Railway

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/v9QL5u?referralCode=tSzmIe)

Just click the button above and follow the instructions to deploy on Railway.

### Deploy on Zeabur

[![Deploy on Zeabur](https://zeabur.com/button.svg)](https://zeabur.com/templates/1103PJ)

Just click the button above and follow the instructions to deploy on Zeabur.

### Deploy With Docker

To deploy with Docker, you can use the following command:

```bash
docker run --name aichatfree \
--restart always \
-p 3000:3000 \
-itd \
-e GEMINI_API_KEY=your_api_key_here \
ievjai/aichatfree:latest
```
Please make sure to replace `your_api_key_here` with your own GEMINI API key.

This will start the **aichatfree** service, accessible at `http://localhost:3000`. 

## Environment Variables

You can control the website through environment variables.

| Name | Description | Required |
| --- | --- | --- |
| `GEMINI_API_KEY` | Your API Key for GEMINI. You can get it from [here](https://makersuite.google.com/app/apikey).| **✔** |
| `API_BASE_URL` | Custom base url for GEMINI API. Click [here](https://github.com/babaohuang/aichatfree?tab=readme-ov-file#solution-for-user-location-is-not-supported-for-the-api-use) to see when to use this. | ❌ |
| `HEAD_SCRIPTS` | Inject analytics or other scripts before `</head>` of the page | ❌ |
| `PUBLIC_SECRET_KEY` | Secret string for the project. Use for generating signatures for API calls | ❌ |
| `SITE_PASSWORD` | Set password for site, support multiple password separated by comma. If not set, site will be public | ❌ |

## Running Locally

### Pre environment
1. **Node**: Check that both your development environment and deployment environment are using `Node v18` or later. You can use [nvm](https://github.com/nvm-sh/nvm) to manage multiple `node` versions locally.

   ```bash
    node -v
   ```

2. **PNPM**: We recommend using [pnpm](https://pnpm.io/) to manage dependencies. If you have never installed pnpm, you can install it with the following command:

   ```bash
    npm i -g pnpm
   ```

3. **GEMINI_API_KEY**: Before running this application, you need to obtain the API key from Google. You can register the API key at [https://makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey).

### Getting Started

1. Install dependencies

   ```bash
    pnpm install
   ```

2. Copy the `.env.example` file, then rename it to `.env`, and add your [`GEMINI_API_KEY`](https://makersuite.google.com/app/apikey) to the `.env` file.

   ```bash
    GEMINI_API_KEY=AIzaSy...
   ```

3. Run the application, the local project runs on `http://localhost:3000/`.

   ```bash
    pnpm run dev
   ```

4. build product

   ```bash
    pnpm build
   ```
5. run dist file

   ```bash
    node dist/server/entry.mjs
   ```

## output : server

server : `http://localhost:3000/`
static: all files are staticly served from the `./dist` directory