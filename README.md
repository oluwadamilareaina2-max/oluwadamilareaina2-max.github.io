# Oluwadamilare Aina — Personal Brand Website

A zero-cost, static personal-brand website designed for GitHub Pages (or Netlify / Cloudflare Pages / Vercel).

## Files

| File | Purpose |
|---|---|
| `index.html` | All site content — edit this to update copy |
| `style.css` | All visual design and layout |
| `script.js` | Mobile navigation toggle |
| `cv.pdf` | **Add this file** — your CV PDF for download |
| `og-image.png` | **Add this file** — social share image (1200×630px) |

---

## Before publishing

### 1. Replace placeholders in `index.html`

| Placeholder | Replace with |
|---|---|
| `YOUR-GITHUB-USERNAME` | Your actual GitHub username (appears in 3 places in `<head>`) |
| `YOUR-GITHUB-USERNAME.github.io` | Your actual GitHub Pages URL |

The email address (`Paulaina030@gmail.com`) and LinkedIn URL are already populated.

### 2. Add your CV

Place your CV PDF in the same folder as `index.html` and name it exactly `cv.pdf`.

### 3. Add a social share image

Create a 1200×630px image and name it `og-image.png`. This appears when the site is shared on LinkedIn or social media. A plain dark card with your name and title works well.

### 4. Update Insights when ready

Replace the three placeholder notes in the `<!-- INSIGHTS -->` section with links to real articles or LinkedIn posts as they are published.

### 5. Customise case studies

The Selected Work section uses appropriately abstracted descriptions. Update these if you want to add more specific (non-confidential) detail over time.

---

## Deploying to GitHub Pages

1. Create a new **public** GitHub repository named `YOUR-GITHUB-USERNAME.github.io`
2. Upload all files to the repository root
3. Go to **Settings → Pages**
4. Under *Source*, select **Deploy from a branch**
5. Choose `main` (or `master`) and `/ (root)`
6. Click **Save**
7. Your site will be live at `https://YOUR-GITHUB-USERNAME.github.io` within a few minutes

---

## Alternative hosting (all free)

| Platform | Steps |
|---|---|
| **Netlify** | Drag and drop the folder to netlify.com/drop |
| **Cloudflare Pages** | Connect GitHub repo via Cloudflare dashboard |
| **Vercel** | Import GitHub repo from vercel.com |

All three support custom domains and automatic HTTPS.

---

## Adding a custom domain

1. Purchase a domain (e.g. `oluwadamilareaina.com`) from any registrar
2. In GitHub Pages settings, enter the domain under *Custom domain*
3. Add a CNAME record pointing to `YOUR-GITHUB-USERNAME.github.io` via your domain registrar's DNS settings
4. Update the canonical URL and OG URL in `index.html` to match your domain

---

## Updating content

All content is in `index.html`. Look for the section comments (e.g. `<!-- HERO -->`, `<!-- ABOUT -->`) to find what you want to change.

No build step. No framework. Just edit and push.

---

## Analytics (optional, free)

If you want visitor analytics, add the Cloudflare Web Analytics script before `</body>` in `index.html`. It is privacy-respecting and free. Instructions at `dash.cloudflare.com` → Web Analytics.

Google Analytics is also free and straightforward — add the GA4 script in `<head>` if preferred.
