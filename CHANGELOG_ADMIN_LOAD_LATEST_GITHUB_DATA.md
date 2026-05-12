# Admin Latest GitHub Data Sync Fix

Updated the admin panel so it loads the current `assets/js/cms-data.js` directly from GitHub into the CRM before editing/publishing.

## Added
- `Load Latest Website Data` button in GitHub CMS Connection.
- Automatic GitHub CMS data sync after admin login when a saved token exists.
- Automatic GitHub CMS data sync after testing GitHub connection.
- Admin table/category/product/blog/homepage views refresh after sync.

This prevents the CRM from relying on stale browser-cached data after manual GitHub edits or changes made from another device.
