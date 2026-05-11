# Admin Image Uploads Added

Added direct GitHub image upload support inside the admin panel.

## What changed
- Product form now allows selecting an image from the device.
- Product images are uploaded to `assets/images/products/` through the GitHub API.
- Product image path is filled automatically after upload.
- Blog post form now allows selecting and uploading featured images.
- Blog images are uploaded to `assets/images/blog/`.
- Added preview boxes and upload status messages.

## Files changed
- `admin/index.html`
- `GITHUB_ADMIN_SETUP.md`
- Added `assets/images/blog/.gitkeep`
