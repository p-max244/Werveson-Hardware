# Werveson Hardware 

This scaffold is a lightweight static website for a family-owned electrical supplies business. It includes HTML, CSS, JS, and a minimal logo SVG so you can preview locally and customize.

Quick preview (requires Node.js installed):

```powershell
npx http-server . -o
```

What to customize:
- `assets/logo.svg` — replace with your brand logo.
- Color variables in `styles/main.css` under `:root`.
- Add product images to `assets/images/` and update `products.html` or create product pages.
- Wire `contact.html` to Formspree, Netlify Forms, or your backend for real submissions.

Next steps:
- Add real product data (JSON + client rendering or server pages).
- Add analytics and search engine verification when ready.
- Serve over HTTPS for production and secure form endpoints.
