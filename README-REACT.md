# xDrog402 React Application

This is the React version of the xDrog402 website, built with modern React, Vite, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Button.jsx       # Button component with variants
│   ├── Header.jsx       # Navigation header
│   ├── Hero.jsx         # Hero section with animations
│   ├── Logo.jsx         # Logo component
│   ├── ContractAddress.jsx  # Contract address display
│   └── Section.jsx      # Section wrapper component
├── pages/               # Page components
│   ├── Home.jsx         # Homepage
│   ├── Docs.jsx         # Documentation page
│   ├── Join.jsx         # Join coalition page
│   └── Live.jsx         # Live example page
├── App.jsx              # Main app component with routing
├── App.css              # App-specific styles
├── main.jsx             # Entry point
└── index.css            # Global styles and Tailwind imports
```

## 🛠️ Technologies

- **React 18** - UI library
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Animation library
- **ESLint** - Code linting

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Components

### Button
A flexible button component supporting internal routing, external links, and click handlers.

```jsx
<Button to="/docs" variant="primary">View Docs</Button>
<Button href="https://xdrog402.xyz" variant="secondary">External Link</Button>
```

### Header
Navigation header with logo and menu buttons.

### Hero
Hero section with GSAP animations for title and subtitle.

### ContractAddress
Displays contract address with copy functionality.

## 🔧 Configuration

- **Vite**: `vite.config.js`
- **Tailwind**: `tailwind.config.js`
- **PostCSS**: `postcss.config.js`
- **ESLint**: `.eslintrc.cjs`

## 📝 Building for Production

```bash
npm run build
```

The build output will be in the `dist/` directory, ready for deployment.

## 🚀 Deployment

The built files can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## 🤝 Contributing

See the main [CONTRIBUTING.md](../CONTRIBUTING.md) file for contribution guidelines.

## 📄 License

MIT License - see [LICENSE](../LICENSE) file for details.

