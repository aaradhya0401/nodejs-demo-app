# Node.js Demo App — DevOps CI/CD Task

A small Node.js web app used to demonstrate a GitHub Actions CI/CD pipeline.

## What the pipeline does

1. Runs when code is pushed to `main` or a pull request targets `main`.
2. Installs Node.js dependencies and runs the automated test.
3. If tests pass and the event is a push to `main`, builds a Docker image.
4. Logs in to Docker Hub using GitHub Actions secrets and pushes the image.

## Files

- `app.js` — tiny HTTP web server.
- `app.test.js` — automated test.
- `Dockerfile` — instructions to package the app into a Docker image.
- `.github/workflows/main.yml` — GitHub Actions workflow.

## Run locally

Requires Node.js 22 or newer.

```bash
npm install
npm test
npm start
```

Open http://localhost:3000.

## Configure Docker Hub publishing

1. Create a Docker Hub account and create a personal access token.
2. In the GitHub repository, open **Settings → Secrets and variables → Actions**.
3. Add these repository secrets:
   - `DOCKERHUB_USERNAME` — your Docker Hub username.
   - `DOCKERHUB_TOKEN` — your Docker Hub access token (not your account password).
4. Push a commit to the `main` branch. Open the **Actions** tab to inspect the workflow run.

The Docker image will be published as `YOUR_DOCKERHUB_USERNAME/nodejs-demo-app:latest`.

## Important

Never put your Docker Hub token directly in code or commit it to GitHub. The pipeline above publishes a Docker image to Docker Hub; it does not deploy the app to a live hosting server.
