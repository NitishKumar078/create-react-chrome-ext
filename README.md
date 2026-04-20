# create-react-chrome-ext

[![npm version](https://badge.fury.io/js/create-react-chrome-ext.svg)](https://www.npmjs.com/package/create-react-chrome-ext)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Downloads](https://img.shields.io/npm/dm/create-react-chrome-ext.svg)](https://www.npmjs.com/package/create-react-chrome-ext)

> The fastest way to create a Chrome Extension project with React 19, TypeScript/JavaScript, Tailwind CSS, and Webpack

A CLI tool that scaffolds a modern Chrome Extension project using React 19 and Webpack, similar to how `create-react-app` works. Get up and running with a fully configured Chrome Extension development environment in seconds. Choose from **four templates** — JavaScript, TypeScript, JavaScript + Tailwind CSS, or TypeScript + Tailwind CSS.

## ✨ Features

- 🚀 **Lightning Fast**: Powered by Webpack for optimized development builds
- ⚛️ **React 19 Ready**: Pre-configured with the latest React 19 and modern JSX transform
- 📝 **TypeScript Support**: Choose between JavaScript or TypeScript templates
- 🎨 **Tailwind CSS Support**: Optional Tailwind CSS v3 integration — available for **both JS and TS** templates
- 🔧 **Manifest V3**: Built with the latest Chrome Extension Manifest V3 specification
- 🔄 **Auto Reload**: Development server with automatic extension reloading
- 📦 **Production Ready**: Optimized Webpack build process for publishing
- 🎯 **Complete Structure**: Includes background script, content script, and popup components
- 🖱️ **Interactive Setup**: Guided CLI prompts for project configuration

## 🚀 Quick Start

```bash
npx create-react-chrome-ext
# Follow the interactive prompts
cd your-project-name
npm install
npm run dev
```

## 📦 Installation & Usage

### Using npx (recommended)
```bash
npx create-react-chrome-ext
```

### Using npm
```bash
npm install -g create-react-chrome-ext
create-react-chrome-ext
```

### Using yarn
```bash
yarn create react-chrome-ext
```

## 🎬 Interactive Setup Process

When you run the command, you'll be guided through an interactive setup:

```bash
npx create-react-chrome-ext

🚀 Create Chrome Extension with React
√ Project name: ... my-awesome-extension
√ Choose a template: » JavaScript
                       TypeScript
                       JavaScript + Tailwind CSS
                       TypeScript + Tailwind CSS
✅ Project created successfully!
👉 Next steps:
  cd my-awesome-extension
  npm install
  npm run dev
```

### 📐 Available Templates

| Template | Language | Tailwind CSS |
|---|---|---|
| `js` | JavaScript | ❌ |
| `ts` | TypeScript | ❌ |
| `js-tailwind` | JavaScript | ✅ |
| `ts-tailwind` | TypeScript | ✅ |

## 📋 Available Scripts

Once your project is created, you can run the following commands:

### `npm run dev`
Starts the Webpack development server with watch mode and automatic extension reloading. Perfect for active development.

### `npm run build`
Creates an optimized production build using Webpack in the `dist` folder, ready for packaging and publishing to the Chrome Web Store.


## 📁 Project Structure

After creating your extension, you'll get a project structure like this:

```
my-extension/
├── public/
│   ├── icons/
│   │   ├── icon16.png
│   │   ├── icon48.png
│   │   └── icon128.png
│   └── manifest.json
├── src/
│   ├── background/
│   │   └── background.js
│   ├── content/
│   │   └── content.js
│   └── popup(react app)/
│       ├── App.jsx
│       ├── App.css
│       └── index.jsx
│   
├── package.json
├── webpack.config.js
├── webpack.dev.js
├── webpack.prod.js
└── README.md
```

### Key Components

- **`src/popup/`**: React 19-based popup interface that appears when users click the extension icon
- **`src/background/`**: Service worker script that handles extension lifecycle and background tasks
- **`src/content/`**: Content script that runs in the context of web pages
- **`public/manifest.json`**: Chrome Extension manifest file (Manifest V3)
- **`public/icons/`**: Extension icons in required sizes

## 🔧 Development Workflow

### 1. Start Development Server
```bash
npm run dev
```

### 2. Load Extension in Chrome

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" (toggle in top right)
3. Click "Load unpacked"
4. Select your project's `dist` folder
5. Your extension is now loaded and ready for testing!

### 3. Development Tips

- **Auto-reload**: The extension automatically reloads when you make changes
- **Console debugging**: Use Chrome DevTools to debug different parts:
  - **Popup/react app**: Right-click extension icon → "Inspect popup"
  - **Background**: Go to `chrome://extensions/` → Click "background page"
  - **Content Script**: Use regular DevTools on any webpage

### 4. Building for Production

```bash
npm run build
```

The `dist` folder will contain your packaged extension ready for the Chrome Web Store.

## 🛠️ Customization

### Modify Manifest
Edit `public/manifest.json` to customize permissions, content scripts, and other extension settings.

### Add Dependencies
```bash
npm install <package-name>
```

### Styling
- Use CSS modules, styled-components, or any CSS framework
- **Tailwind CSS** is available as a built-in template option for both **JavaScript** and **TypeScript** — no manual setup required!
- To use Tailwind from the start, select the **"JavaScript + Tailwind CSS"** or **"TypeScript + Tailwind CSS"** template during setup
- CSS files are automatically processed by Webpack

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines:

## Development Setup
```bash
git clone https://github.com/yourusername/create-chrome-ext.git
cd create-chrome-ext
npm install
npm link
```

### Testing Changes
```bash
# Test the CLI locally
create-react-chrome-ext
```

### Pull Request Process

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Reporting Issues

Please use the [GitHub issue tracker](https://github.com/yourusername/create-react-chrome-ext/issues) to report bugs or request features.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by [create-react-app](https://github.com/facebook/create-react-app)
- Built with [Webpack](https://webpack.js.org/)
- React team for the amazing React 19 library

---

**Happy Extension Building! 🎉**

If you find this tool helpful, please consider giving it a ⭐ on [GitHub](https://github.com/yourusername/create-react-chrome-ext)!
