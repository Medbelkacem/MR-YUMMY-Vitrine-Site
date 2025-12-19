# Setup Instructions for Mr Yummy Website

## Prerequisites
- Node.js (v16 or higher)
- npm

## Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`

3. **Build for Production**
   ```bash
   npm run build
   ```

## Troubleshooting White Screen

If you see a white screen when opening the app:

### Option 1: Check Browser Console
1. Open DevTools (F12 or Right-click → Inspect)
2. Go to Console tab
3. Look for any error messages
4. Common errors might be related to missing assets or module loading

### Option 2: Verify Assets
Ensure these files exist in the `assets/` folder:
- `logo.jpg`
- `1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`, `5.jpg`, `6.jpg`, `7.jpg`
- `7.jpg` (for video - should be a video file)
- `Facebook.webp`, `Insta.webp`, `tiktok.webp`, `whatsapp.webp` (optional - fallbacks provided)

### Option 3: Clear Cache
1. Hard refresh the page: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
2. Clear browser cache and cookies
3. Try again

### Option 4: Check Network
- Open DevTools → Network tab
- Reload page
- Check for any failed requests (red X)
- Common issues: missing CSS, JS files, or images

## Environment Variables
If you need to set environment variables, create a `.env.local` file in the project root.

## Build Output
After running `npm run build`, the optimized files will be in the `dist/` folder.
