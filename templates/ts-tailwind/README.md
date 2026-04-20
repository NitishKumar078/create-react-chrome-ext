# Chrome Extension Boilerplate with React
This project provides a boilerplate setup for building a Chrome extension using React. It includes essential configurations and structures, making kickstarting a Chrome extension with React easy. With this boilerplate, you can quickly develop your Chrome extension's popup, options page, and background scripts.

## Features
- React Integration: Utilizes React for a structured and scalable front-end experience.
- Webpack Configuration: Configured to bundle JavaScript, CSS, and other assets efficiently for Chrome extensions.
- Manifest V3 Compatibility: Built with Manifest V3 for modern Chrome extension development.
- Development & Production Modes: Separate configurations for optimized builds.
- Hot Reloading: Enhances development workflow with hot reloading in the extension popup and options page.

# Getting Started
### Prerequisites
**Node.js**: Ensure you have Node.js installed to manage dependencies and run the project.
### Installation
1. Install dependencies:

   ```bash
   npm install
   ```
### Development
2. Build the extension for the development:

   ```bash
   npm run dev
   ```
3. Load the extension in Chrome:
  Open Chrome and go to chrome://extensions.
  Enable "Developer mode".
  Click "Load unpacked" and select the dist folder from this project.

### Building for Production
1. Build the extension:

   ```bash
   npm run build
   ```
The production-ready files and Development will be generated in the ./dist folder.

# Folder Structure
- **src/react/**: Contains React components and core extension files.which will also act like **UI for the extension popup(popup)**.
- **src/content_script/**: scripts can manipulate the DOM and interact with the page’s content.
- **src/Background/**: Background scripts for handling long-running processes.

# Contributing
Feel free to submit issues and pull requests for improvements!
