// Input Display Web Component
class InputDisplayComponent extends HTMLElement {
  constructor() {
    super();
    
    // Create shadow DOM for encapsulation
    this.attachShadow({ mode: 'open' });
    
    // Embed CSS styles directly for self-contained component
    const style = document.createElement('style');
    style.textContent = `
      :host {
        display: block;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        max-width: 600px;
        margin: 20px auto;
        padding: 20px;
      }
      
      .container {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 12px;
        padding: 30px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      }
      
      .input-wrapper {
        margin-bottom: 20px;
      }
      
      label {
        display: block;
        color: #ffffff;
        font-weight: 600;
        margin-bottom: 8px;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      
      input {
        width: 100%;
        padding: 12px 16px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.95);
        font-size: 16px;
        color: #333;
        box-sizing: border-box;
        transition: all 0.3s ease;
      }
      
      input:focus {
        outline: none;
        border-color: #ffffff;
        background: #ffffff;
        box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
      }
      
      .display-wrapper {
        margin-top: 20px;
      }
      
      .display-label {
        display: block;
        color: #ffffff;
        font-weight: 600;
        margin-bottom: 8px;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      
      .display-area {
        min-height: 60px;
        padding: 16px;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.95);
        color: #333;
        font-size: 16px;
        line-height: 1.6;
        word-wrap: break-word;
        border: 2px solid rgba(255, 255, 255, 0.3);
        transition: all 0.3s ease;
      }
      
      .display-area:empty::before {
        content: 'Your text will appear here...';
        color: #999;
        font-style: italic;
      }
      
      .display-area.has-content {
        background: #ffffff;
        border-color: rgba(255, 255, 255, 0.5);
      }
    `;
    
    // Create component structure
    const container = document.createElement('div');
    container.className = 'container';
    
    const inputWrapper = document.createElement('div');
    inputWrapper.className = 'input-wrapper';
    
    const label = document.createElement('label');
    label.textContent = 'Enter Text';
    label.setAttribute('for', 'text-input');
    
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'text-input';
    input.placeholder = 'Type something here...';
    
    const displayWrapper = document.createElement('div');
    displayWrapper.className = 'display-wrapper';
    
    const displayLabel = document.createElement('label');
    displayLabel.className = 'display-label';
    displayLabel.textContent = 'Output';
    
    const displayArea = document.createElement('div');
    displayArea.className = 'display-area';
    
    // Assemble the component
    inputWrapper.appendChild(label);
    inputWrapper.appendChild(input);
    displayWrapper.appendChild(displayLabel);
    displayWrapper.appendChild(displayArea);
    container.appendChild(inputWrapper);
    container.appendChild(displayWrapper);
    
    // Add event listener for real-time updates
    input.addEventListener('input', (e) => {
      const value = e.target.value;
      displayArea.textContent = value;
      
      // Toggle class for styling
      if (value.trim()) {
        displayArea.classList.add('has-content');
      } else {
        displayArea.classList.remove('has-content');
      }
    });
    
    // Append to shadow DOM
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(container);
  }
  
  // Optional: Handle attribute changes
  static get observedAttributes() {
    return ['placeholder', 'label'];
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;
    
    const shadow = this.shadowRoot;
    if (!shadow) return;
    
    if (name === 'placeholder') {
      const input = shadow.querySelector('input');
      if (input) input.placeholder = newValue || 'Type something here...';
    }
    
    if (name === 'label') {
      const label = shadow.querySelector('.input-wrapper label');
      if (label) label.textContent = newValue || 'Enter Text';
    }
  }
}

// Register the custom element
customElements.define('input-display-component', InputDisplayComponent);

