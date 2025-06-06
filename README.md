# AI Solutions Website

A modern, interactive website for an AI/LLM consulting firm built with React, Vite, Tailwind CSS, GSAP, and Three.js.

## Features

- 🎨 Modern, minimalist design inspired by Apple and Tesla
- 🚀 High-performance animations with GSAP
- 🎯 Interactive 3D elements with Three.js
- 📱 Fully responsive design (mobile-first)
- ⚡ Fast loading with Vite
- 🎭 Smooth scroll animations and transitions
- 🔒 Enterprise-focused content and messaging

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Professional animation library
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for Three.js

## Getting Started

### Prerequisites

- Node.js 16 or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd ai-webui
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header with scroll effects
│   ├── Hero.jsx            # Hero section with 3D animations
│   ├── Services.jsx        # Services showcase with scroll triggers
│   ├── About.jsx           # Company story and team
│   ├── Contact.jsx         # Contact form and information
│   ├── Footer.jsx          # Site footer
│   └── AI3DScene.jsx       # 3D animated scene component
├── App.jsx                 # Main app component
├── index.css               # Global styles and Tailwind imports
└── main.jsx                # App entry point
```

## Customization

### Colors
Update the color palette in `tailwind.config.js`:
```javascript
colors: {
  primary: { /* your primary colors */ },
  accent: { /* your accent colors */ },
  // ...
}
```

### Content
- Update company information in all components
- Replace placeholder content with actual services and team details
- Add real contact information in the Contact component

### 3D Scene
Modify the `AI3DScene.jsx` component to:
- Change sphere material and distortion effects
- Adjust particle count and behavior
- Add custom 3D models or geometries

## Performance Optimization

- Images are optimized and use modern formats
- Code splitting for heavy libraries (Three.js, GSAP)
- Lazy loading for 3D components
- Reduced motion support for accessibility
- Mobile-first responsive design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

The site can be deployed to any static hosting service:

- **Vercel**: `npm i -g vercel && vercel`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions with the build output

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.