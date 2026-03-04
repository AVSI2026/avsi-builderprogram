# Copilot Instructions - AV Solutions & Integration

## Project Overview

This is a React + Vite project for AV Solutions & Integration's builder partnership program website. The application features a premium dark-themed marketing site with service tiers, technical specifications, and project workflow information.

## Project Setup Status

- ✅ Project scaffolded with Vite + React
- ✅ Tailwind CSS configured with PostCSS
- ✅ lucide-react icons installed
- ✅ App component implemented with full branding
- ✅ Development server running on http://localhost:5173/
- ✅ Documentation (README.md) created and updated

## Technology Stack

- React 19.2.0
- Vite 7.3.1
- Tailwind CSS 4.x
- lucide-react (icons)
- PostCSS + Autoprefixer
- ESLint

## Key Files

- `src/App.jsx` - Main application component with all sections
- `src/index.css` - Tailwind CSS directives
- `src/main.jsx` - React entry point
- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS configuration
- `index.html` - HTML template
- `vite.config.js` - Vite configuration

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Development Notes

- The app uses custom Tailwind classes with hex colors (#0a0a0a, #c5a059, etc.)
- Logo image is pulled from Google Drive with local fallback
- All sections use responsive grid layouts
- Icons from lucide-react are used throughout

## Next Steps / Future Enhancements

1. Add TypeScript support if needed
2. Implement form functionality for contact CTA
3. Add page animations with Framer Motion (optional)
4. Setup deployment (Vercel, Netlify, etc.)
5. Add analytics tracking
6. Implement dynamic content management if needed

## Common Issues & Solutions

- **Dev server not starting**: Ensure Node.js is installed and run `npm install`
- **Styles not applying**: Check that PostCSS is configured and rebuild
- **Icons not showing**: Verify lucide-react is installed via `npm install lucide-react`
- **Tailwind classes not working**: Clear node_modules and reinstall

## Project Structure

```
.
├── .github/
│   └── copilot-instructions.md
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── assets/
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── eslint.config.js
└── README.md
```

## Contact & Support

For questions about this project, contact the development team or refer to the README.md for more information.
