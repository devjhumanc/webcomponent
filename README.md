# Input Display Web Component

A simple, elegant web component built with vanilla JavaScript that takes user input and displays it in real-time. Perfect for forms, dashboards, or any application that needs instant input feedback.

## Features

- 🎨 Modern, gradient-based design
- ⚡ Real-time input-to-display binding
- 🔒 Shadow DOM encapsulation
- 📱 Responsive and mobile-friendly
- 🎯 Zero dependencies (vanilla JavaScript)
- 🎨 Customizable via attributes

## Installation

### From jsDelivr CDN (GitHub)

Add the following to your HTML file:

```html
<!-- Load the component -->
<script type="module" src="https://cdn.jsdelivr.net/gh/yourusername/yourrepo@main/input-display-component.js"></script>

<!-- Use the component -->
<input-display-component></input-display-component>
```

**Note:** Replace `yourusername/yourrepo` with your actual GitHub username and repository name.

### From jsDelivr CDN (npm)

If published to npm:

```html
<!-- Load the component -->
<script type="module" src="https://cdn.jsdelivr.net/npm/input-display-component@latest/input-display-component.js"></script>

<!-- Use the component -->
<input-display-component></input-display-component>
```

### Local Installation

1. Download `input-display-component.js` (the component is self-contained with embedded styles)
2. Include it in your HTML:

```html
<script type="module" src="./input-display-component.js"></script>
```

**Note:** The component includes all styles embedded within the JavaScript file, so no separate CSS file is required. The `input-display-component.css` file is provided for reference or if you want to customize styles separately.

## Usage

### Basic Usage

```html
<input-display-component></input-display-component>
```

### With Custom Attributes

```html
<input-display-component 
  placeholder="Enter your text here..."
  label="Custom Label">
</input-display-component>
```

### Attributes

- `placeholder` - Custom placeholder text for the input field (default: "Type something here...")
- `label` - Custom label text for the input field (default: "Enter Text")

## How to Host on jsDelivr

### Method 1: GitHub (Recommended)

1. Create a GitHub repository
2. Upload your files to the repository
3. Create a release or use the main branch
4. Use the CDN URL format:
   ```
   https://cdn.jsdelivr.net/gh/username/repo@branch/file.js
   ```
   
   Example:
   ```
   https://cdn.jsdelivr.net/gh/johndoe/input-display-component@main/input-display-component.js
   ```

5. For specific versions, use tags:
   ```
   https://cdn.jsdelivr.net/gh/username/repo@v1.0.0/file.js
   ```

### Method 2: npm

1. Create an npm account (if you don't have one)
2. Initialize your package:
   ```bash
   npm init
   ```

3. Configure `package.json`:
   ```json
   {
     "name": "input-display-component",
     "version": "1.0.0",
     "main": "input-display-component.js",
     "files": [
       "input-display-component.js",
       "input-display-component.css"
     ]
   }
   ```

4. Publish to npm:
   ```bash
   npm publish
   ```

5. Use the CDN URL:
   ```
   https://cdn.jsdelivr.net/npm/input-display-component@latest/input-display-component.js
   ```

## Browser Support

- Chrome/Edge: ✅ (latest)
- Firefox: ✅ (latest)
- Safari: ✅ (latest)
- Opera: ✅ (latest)

Requires browsers that support:
- Custom Elements API
- Shadow DOM
- ES6 Classes

## Development

To test locally:

1. Clone or download this repository
2. Open `index.html` in a web browser
3. Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```

## File Structure

```
.
├── input-display-component.js    # Main component file (self-contained with embedded styles)
├── input-display-component.css   # Component styles (for reference/customization)
├── index.html                    # Demo page
├── package.json                  # npm package configuration
└── README.md                     # This file
```

**Note:** Only `input-display-component.js` is required for use. The CSS file is provided for reference or separate customization.

## License

MIT License - feel free to use this component in your projects!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues, questions, or suggestions, please open an issue on GitHub.

