# xDrog402 - The Open Standard for Blockchain Payments

HTTP 402 is the web-native standard for payments. Our mission is to design a frictionless machine-to-machine protocol that allows agents to pay for APIs, compute resources, and data using simple HTTP requests and native blockchain transactions scaling to billions of sub-cent microtransactions.

## 🌐 Live Website

Visit the live website: [https://xdrog402.xyz](https://xdrog402.xyz)

## 📋 Features

- **Open Standard**: HTTP 402 protocol for blockchain payments
- **Machine-to-Machine Payments**: Seamless API payment integration
- **Scalable**: Designed to handle billions of sub-cent microtransactions
- **Web-Native**: Simple HTTP requests for payment processing
- **Blockchain Integration**: Native blockchain transaction support

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- A modern web browser

### Installation

1. Clone the repository:
```bash
git clone https://github.com/xDrog402/xDrog402.git
cd xdrog402
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The build output will be in the `dist/` directory.

### Available Scripts

- `npm run dev` - Start development server (runs on http://localhost:3000)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
/
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── .eslintrc.cjs           # ESLint configuration
├── public/                 # Static assets
│   └── logo.PNG
└── src/                    # Source code
    ├── main.jsx            # Application entry point
    ├── App.jsx             # Main app component with routing
    ├── App.css             # App-specific styles
    ├── index.css           # Global styles and Tailwind imports
    ├── components/         # Reusable React components
    │   ├── Button.jsx      # Button component with variants
    │   ├── Header.jsx      # Navigation header
    │   ├── Hero.jsx        # Hero section with GSAP animations
    │   ├── Logo.jsx        # Logo component
    │   ├── ContractAddress.jsx  # Contract address display
    │   └── Section.jsx     # Section wrapper component
    ├── pages/              # Page components
    │   ├── Home.jsx        # Homepage
    │   ├── Docs.jsx        # Documentation page
    │   ├── Join.jsx        # Join coalition page
    │   └── Live.jsx        # Live example page
    ├── hooks/              # Custom React hooks
    │   └── useGSAP.js      # GSAP animation hook
    ├── utils/              # Utility functions
    │   └── copyToClipboard.js  # Clipboard utility
    └── constants/          # App constants
        └── index.js        # Constants and configuration
```

## 🛠️ Technologies Used

- **React 18**: UI library with hooks
- **React Router**: Client-side routing
- **Vite**: Build tool and development server
- **GSAP**: Animation library (ScrollTrigger, ScrollToPlugin, SplitText, ScrambleTextPlugin)
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript (ES6+)**: Modern JavaScript features
- **ESLint**: Code linting and quality

## 📝 Pages

- **Homepage** (`src/pages/Home.jsx`): Main landing page with protocol overview
- **Documentation** (`src/pages/Docs.jsx`): Technical documentation
- **Join** (`src/pages/Join.jsx`): Join the coalition page
- **Live Example** (`src/pages/Live.jsx`): Interactive live demonstration

## 🧩 Components

- **Header** (`src/components/Header.jsx`): Navigation header with logo and menu
- **Hero** (`src/components/Hero.jsx`): Hero section with GSAP animations
- **Button** (`src/components/Button.jsx`): Reusable button component with variants
- **ContractAddress** (`src/components/ContractAddress.jsx`): Contract address display with copy functionality
- **Logo** (`src/components/Logo.jsx`): Logo component
- **Section** (`src/components/Section.jsx`): Section wrapper component

## 🔗 Important Links

- **Contract Address**: `FeaD1yAXo3j9fjiJQ35ofE9Pjy1JcRJ62bjYSfxVpump`
- **Buy on pump.fun**: [Purchase Link](https://pump.fun/coin/FeaD1yAXo3j9fjiJQ35ofE9Pjy1JcRJ62bjYSfxVpump)

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

For more details, see [CONTRIBUTING.md](CONTRIBUTING.md)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact & Support

For questions or support, please open an issue on GitHub.

## 🌟 Star History

If you find this project useful, please consider giving it a star ⭐

---

**Note**: This project is part of the HTTP 402 protocol initiative for blockchain payments.

