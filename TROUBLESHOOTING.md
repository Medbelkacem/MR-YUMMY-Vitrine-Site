# MR Yummy - Troubleshooting Guide

## White Screen Issue - Solutions

The white screen you're seeing is typically caused by one of the following issues:

### **SOLUTION 1: Install Dependencies (Most Common)**

1. Open terminal in the project folder
2. Run: `npm install`
3. Then run: `npm run dev`
4. Open: `http://localhost:3000`

### **SOLUTION 2: Check Browser Console for Errors**

1. **Open DevTools:**
   - Windows/Linux: Press `F12`
   - Mac: Press `Cmd+Option+I`
   - Or right-click → "Inspect"

2. **Go to Console tab**
3. **Look for any red error messages**

4. **Common errors and fixes:**
   - **"Cannot find module"** → Run `npm install`
   - **"React is not defined"** → Check import statements
   - **"CORS error"** → Check if the dev server is running
   - **"Module not found"** → Verify file paths and extensions

### **SOLUTION 3: Hard Refresh Page**

Sometimes the browser caches old versions:
- **Windows/Linux:** `Ctrl+Shift+R`
- **Mac:** `Cmd+Shift+R`
- Or: `Ctrl+F5` (Windows)

### **SOLUTION 4: Check Network Tab**

1. Open DevTools → Network tab
2. Reload the page
3. Look for any red/failed requests
4. Check for 404 errors (missing files)
5. Verify CSS and JS files are loading

### **SOLUTION 5: Clear Cache**

1. **Option A - Browser:**
   - Open DevTools → Application tab
   - Click "Clear site data"
   - Reload page

2. **Option B - Hard Reset:**
   - Close browser completely
   - Delete browser cache folder (location varies by browser)
   - Reopen browser and try again

### **SOLUTION 6: Check File Structure**

Ensure your project has:
```
mr-yummy---fast-food/
├── index.html
├── index.tsx
├── index.css
├── App.tsx
├── package.json
├── tsconfig.json
├── vite.config.ts
├── constants.ts
├── types.ts
├── assets/
│   ├── logo.jpg
│   ├── 1.jpg through 7.jpg
│   └── (other image files)
├── components/
│   ├── Navbar.tsx
│   └── Footer.tsx
└── pages/
    ├── Home.tsx
    ├── Menu.tsx
    └── About.tsx
```

### **SOLUTION 7: Check Asset Files**

Make sure these files exist in the `assets/` folder:
- `logo.jpg` - For navbar logo
- `1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`, `5.jpg`, `6.jpg`, `7.jpg` - Gallery images
- `7.jpg` - Should be a video file for hero section (currently uses .jpg extension but should be video)

If files are missing:
1. Add them to the `assets/` folder
2. Hard refresh the page
3. Try again

### **SOLUTION 8: Port Already in Use**

If port 3000 is already in use:
1. Change port in `vite.config.ts` (server.port)
2. Or kill the process using port 3000:
   - **Windows:** `netstat -ano | findstr :3000` then `taskkill /PID <PID> /F`
   - **Mac/Linux:** `lsof -ti:3000 | xargs kill -9`

## Quick Checklist

- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] Check browser console (F12) for errors
- [ ] Verify all asset files are in `assets/` folder
- [ ] Hard refresh page (Ctrl+Shift+R)
- [ ] Check Network tab for failed requests
- [ ] Try a different browser

## If All Else Fails

1. **Delete node_modules and reinstall:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   npm run dev
   ```

2. **Check your Node.js version:**
   ```bash
   node --version
   ```
   (Should be v16 or higher)

3. **Update npm:**
   ```bash
   npm install -g npm@latest
   ```

4. **Check for TypeScript errors:**
   ```bash
   npx tsc --noEmit
   ```

## Environment Setup

The project uses CDN-based React via `esm.sh` for quick loading. If you want to use local modules instead, you can switch to traditional npm setup by updating `index.html` importmap section.

---

**Still having issues?** Check your browser console for specific error messages and share them for more targeted help!
