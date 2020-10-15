
window.supportsCustomElements = 'customElements' in window;
window.supportsShadowDOM = 'attachShadow' in window;

const template = document.createElement('template');
template.innerHTML = `
<div class="form-field">
    <label>Email:</label>
    <input type="email" />
</div>
<div class="form-field">
    <label>Password:</label>
    <input type="password" />
</div>
<slot name="informationText">
    <p>This is a default piece of information text</p>
</slot>`;

class SignupForm extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('signup-form', SignupForm);
