window.supportsCustomElements = 'customElements' in window;
window.supportsShadowDOM = Boolean(HTMLElement.prototype.attachShadow);

console.log('supports custom elements: ', window.supportsCustomElements);
console.log('supports shadowDOM: ', window.supportsShadowDOM);

class SignupForm extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement('template');
        template.innerHTML = `
        <style>
            .signup-form {
                font-family: Source Sans Pro,sans-serif;
                background-color: white;color:green;
                padding: 50px;
            } 
            .signup-header{
                text-transform: uppercase;
                font-size: 1.25em;
                padding: 20px 10px;
                background: #d9dee0;
                color: #00222d;
                font-weight: 700;
            }
            .text{color: #667a81;}
            .coupon-slot{
                margin:20px 0;
                display:block;
            }
        </style>
        <div class="signup-form">
            <div class='signup-header'>
                <slot name='title'>
                    EASY SIGNUP, NO CATCH!
                </slot>
            </div>
            <slot class='text' name="topText">
                <p>Start your free 30-day trial of Walls.io – after the trial, you can continue to use our Free plan.</p>
            </slot>
            <form-field label="Email" type="email"></form-field>
            <form-field label="Password" type="password"></form-field>
            <p class='text'>
                <slot name="bottomText">By submitting this form and providing personal information, I agree that my data is saved and might be used by Walls.io to contact me regarding offers or product news by phone, email or newsletter. I can revoke consent any time in my account settings.</slot>
            </p>
            <slot name='coupon' class='coupon-slot'></slot>
            
            <style>
            button{
                font-family: Source Sans Pro,sans-serif;
                padding: 10px 40px;
                color: #00222d;
                font-weight: 700;
                text-transform: uppercase;
                border: 2px solid #f3b200;
                border-radius: 5em;
                background: #f3b200;
                cursor: pointer;
                font-size: 1em;
            }
            </style>
            <button id='signupButton'>Sign up</button>
        </div>`;
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.shadowRoot.getElementById(
            'signupButton'
        ).style.backgroundColor = 'red';
        const getUserStatus = async () => {
            try {
                const response = await fetch(
                    'https://walls.io/user_status.json',
                    { credentials: 'include' }
                );
                const data = await response.json();
                console.log(data);
                this.shadowRoot.getElementById(
                    'signupButton'
                ).style.backgroundColor = 'green';
            } catch (err) {
                console.log(err);
                this.shadowRoot.getElementById(
                    'signupButton'
                ).style.backgroundColor = 'red';
            }
        };
        getUserStatus();
    }
}

class FormField extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
            input {
                font-family: Source Sans Pro,sans-serif;
                box-sizing:border-box;
                color: #334e57;
                font-weight: 400;
                width: 100%;
                font-size: 1.25em;
                box-shadow: 1px 1px 21px 0 rgba(0,34,45,.15);
                -webkit-appearance: none;
                border: 1px solid rgba(0,34,45,.1);
                border-radius: 7px;
                padding: 20px 10px;
                margin: 10px auto;
            }
            </style>
            <div class="form-field">
                <input type="text" />
            </div>
        `;
        shadowRoot.appendChild(template.content.cloneNode(true));

        this.label = shadowRoot.querySelector('label');
        this.input = shadowRoot.querySelector('input');
    }
    static get observedAttributes() {
        return ['label', 'type'];
    }
    attributeChangedCallback(name, oldVal, newVal) {
        switch (name) {
            case 'label':
                this.input.placeholder = newVal;
                break;
            case 'type':
                this.input.type = newVal;
                break;
            default:
                break;
        }
    }
}

class PrimaryButton extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = `
        `;
        shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('form-field', FormField);
customElements.define('primary-button', PrimaryButton);
customElements.define('signup-form', SignupForm);
