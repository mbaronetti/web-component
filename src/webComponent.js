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
            .signup-container {
                font-family: Source Sans Pro,sans-serif;
                background-color: white;
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
            a{
                color: #00222d;
                text-decoration: none;
                font-weight: 600;
            }
            a:hover{
                color: #006360;
            }
        </style>
        <form class="signup-container" onsubmit="event.preventDefault()">
            <div class='signup-header'>
                <slot name='title'>
                    EASY SIGNUP, NO CATCH!
                </slot>
            </div>
            <slot class='text' name="topText">
                <p>Start your free 30-day trial of Walls.io – after the trial, you can continue to use our Free plan.</p>
            </slot>
            <div id="errorMsg"></div>
            <div class="form-field">
                <input type="email" placeholder="email" id="emailInput"/>
            </div>
            <div class="form-field">
                <input type="password" placeholder="password" id="passwordInput"/>
            </div>
            <p class='text'>
                <slot name="bottomText">By submitting this form and providing personal information, I agree that my data is saved and might be used by Walls.io to contact me regarding offers or product news by phone, email or newsletter. I can revoke consent any time in my account settings.</slot>
            </p>
            <slot name='coupon' class='coupon-slot'></slot>
            <button id='signupButton'>Sign up</button>
            <p class='text'>
                We care for the safety of the information you provide. Read more about our <a href="#">privacy policy.</a>
            </p>
        </form>`;
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const getUserStatus = async () => {
            try {
                const response = await fetch(
                    'https://walls.io/user_status.json',
                    { credentials: 'include' }
                );
                const data = await response.json();
                if (data.isLoggedIn) window.location.href = 'http://walls.io';
            } catch (err) {
                console.log(err);
                this.shadowRoot.getElementById(
                    'signupButton'
                ).style.backgroundColor = 'red';
            }
        };
        getUserStatus();
        const inputFields = this.shadowRoot.querySelectorAll('input');
        const emailInput = this.shadowRoot.getElementById('emailInput');
        const passwordInput = this.shadowRoot.getElementById('passwordInput');

        const validateEmail = (value) => {
            const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (!value.length || !emailRegex.test(value)) {
                return false;
            }
            return true;
        };

        const errorMsg = () => {
            if (!emailInput.value.length && !passwordInput.value.length) {
                return 'Please provide email and password';
            }
            if (!validateEmail(emailInput.value)) {
                return 'Please provide a valid email address';
            }
            if (!passwordInput.value.length) {
                return 'Please fill out your password';
            }
        };

        const validate = () => {
            this.shadowRoot.getElementById('errorMsg').textContent = errorMsg();
        };

        const validateOnKeyUp = () => {};
        this.shadowRoot
            .getElementById('signupButton')
            .addEventListener('click', () => validate());
        inputFields.forEach((item) => {
            item.addEventListener('keyup', (e) => {
                console.log(e.target.value);
            });
        });
    }
}

customElements.define('signup-form', SignupForm);
