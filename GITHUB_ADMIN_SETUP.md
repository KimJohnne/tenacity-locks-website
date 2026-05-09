# Tenacity Locks GitHub-only Admin Setup

This project has been updated so the admin panel can publish global website changes using GitHub only.

## What was added

- `assets/js/cms-data.js` — the shared CMS data file used by the live website.
- The public website now loads `cms-data.js` on every page.
- The admin panel now saves Products, Categories, Blog Posts, and Homepage Settings into `assets/js/cms-data.js` using the GitHub API.
- No Firebase, Supabase, cPanel database, or external backend is required.

## How it works

1. You log in to `/admin/`.
2. You enter your GitHub repo details and token under **Homepage → GitHub CMS Connection**.
3. You edit a product/blog/category/homepage setting.
4. The admin commits the updated data into `assets/js/cms-data.js` in your GitHub repo.
5. GitHub Pages rebuilds/refreshes the site.
6. The changes appear for everyone worldwide.

## Required GitHub token

Create a **fine-grained personal access token** in GitHub with:

- Repository access: only this website repo
- Permissions: **Contents → Read and write**

Then copy the token into the admin panel.

## Important security note

Because this is a fully static GitHub-only admin panel, the GitHub token has to be used from the browser. The updated admin stores it only in your browser's `localStorage`, not inside the project files. Still, only trusted admins should use the admin panel, and the token should have access to only this one repository.

For stronger security, the proper long-term solution would be a backend/serverless function, but that would no longer be “GitHub only.”

## Admin login

Current login remains the same as the original project:

- Username: `admin`
- Password: `Tenacity@2026`

## GitHub Pages note

After saving changes, GitHub Pages can take a short time to show the update globally. If you do not see the change immediately, refresh after a few minutes or hard refresh the page.
