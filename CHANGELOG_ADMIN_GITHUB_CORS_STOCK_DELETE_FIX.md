# Admin GitHub Publish + Stock/Delete Fix

## Fixed
- Removed the GitHub API request headers that were causing browser CORS errors from `tenacitylockslimited.com`.
- Admin saves now fetch the latest `assets/js/cms-data.js` from GitHub, merge the edit, and publish via a fresh Git commit.
- Added full product delete/hide support for all products, including built-in products.
- Added an in-stock/out-of-stock toggle in the admin products table.
- Added an in-stock checkbox inside the product add/edit form.
- Out-of-stock products now show customer-facing warnings on the website.
- Out-of-stock products cannot be added to cart.
- Deleted products are removed from shop/category/product listings through `deletedProductIds` in `cms-data.js`.

## Files mainly affected
- `admin/index.html`
- `assets/js/data.js`
- `assets/js/ui.js`
- `product.html`
- `assets/css/main.css`
