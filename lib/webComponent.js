"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

window.supportsCustomElements = 'customElements' in window;
window.supportsShadowDOM = Boolean(HTMLElement.prototype.attachShadow);
console.log('supports custom elements: ', window.supportsCustomElements);
console.log('supports shadowDOM: ', window.supportsShadowDOM);

var SignupForm = /*#__PURE__*/function (_HTMLElement) {
  _inherits(SignupForm, _HTMLElement);

  var _super = _createSuper(SignupForm);

  function SignupForm() {
    var _this;

    _classCallCheck(this, SignupForm);

    _this = _super.call(this);
    var template = document.createElement('template');
    template.innerHTML = "\n        <style>\n            :host {\n                font-family: Source Sans Pro,sans-serif;\n                display: block;\n                width: 40%;\n                margin: 50px auto;\n                background-color: white;\n                padding: 50px;\n            }\n            .signup-header{\n                text-transform: uppercase;\n                font-size: 1.25em;\n                padding: 20px 10px;\n                background: #d9dee0;\n                color: #00222d;\n                font-weight: 700;\n            }\n            .text{color: #667a81;}\n            .coupon-slot{\n                margin:20px 0;\n                display:block;\n            }\n        </style>\n        <div class='signup-header'>\n            <slot name='title'>\n                EASY SIGNUP, NO CATCH!\n            </slot>\n        </div>\n        <slot class='text' name=\"topText\">\n            <p>Start your free 30-day trial of Walls.io \u2013 after the trial, you can continue to use our Free plan.</p>\n        </slot>\n        <form-field label=\"Email\" type=\"email\"></form-field>\n        <form-field label=\"Password\" type=\"password\"></form-field>\n        <p class='text'>\n            <slot name=\"bottomText\">By submitting this form and providing personal information, I agree that my data is saved and might be used by Walls.io to contact me regarding offers or product news by phone, email or newsletter. I can revoke consent any time in my account settings.</slot>\n        </p>\n        <slot name='coupon' class='coupon-slot'></slot>\n        <primary-button></primary-button>";

    var shadowRoot = _this.attachShadow({
      mode: 'open'
    });

    shadowRoot.appendChild(template.content.cloneNode(true));
    return _this;
  }

  return SignupForm;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

var FormField = /*#__PURE__*/function (_HTMLElement2) {
  _inherits(FormField, _HTMLElement2);

  var _super2 = _createSuper(FormField);

  function FormField() {
    var _this2;

    _classCallCheck(this, FormField);

    _this2 = _super2.call(this);

    var shadowRoot = _this2.attachShadow({
      mode: 'open'
    });

    var template = document.createElement('template');
    template.innerHTML = "\n            <style>\n            input {\n                font-family: Source Sans Pro,sans-serif;\n                box-sizing:border-box;\n                color: #334e57;\n                font-weight: 400;\n                width: 100%;\n                font-size: 1.25em;\n                box-shadow: 1px 1px 21px 0 rgba(0,34,45,.15);\n                -webkit-appearance: none;\n                border: 1px solid rgba(0,34,45,.1);\n                border-radius: 7px;\n                padding: 20px 10px;\n                margin: 10px auto;\n            }\n            </style>\n            <div class=\"form-field\">\n                <input type=\"text\" />\n            </div>\n        ";
    shadowRoot.appendChild(template.content.cloneNode(true));
    _this2.label = shadowRoot.querySelector('label');
    _this2.input = shadowRoot.querySelector('input');
    return _this2;
  }

  _createClass(FormField, [{
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldVal, newVal) {
      switch (name) {
        case "label":
          this.input.placeholder = newVal;
          break;

        case "type":
          this.input.type = newVal;
          break;

        default:
          break;
      }
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ["label", "type"];
    }
  }]);

  return FormField;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

var PrimaryButton = /*#__PURE__*/function (_HTMLElement3) {
  _inherits(PrimaryButton, _HTMLElement3);

  var _super3 = _createSuper(PrimaryButton);

  function PrimaryButton() {
    var _this3;

    _classCallCheck(this, PrimaryButton);

    _this3 = _super3.call(this);

    var shadowRoot = _this3.attachShadow({
      mode: 'open'
    });

    var template = document.createElement('template');
    template.innerHTML = "\n            <style>\n            button{\n                font-family: Source Sans Pro,sans-serif;\n                padding: 10px 40px;\n                color: #00222d;\n                font-weight: 700;\n                text-transform: uppercase;\n                border: 2px solid #f3b200;\n                border-radius: 5em;\n                background: #f3b200;\n                cursor: pointer;\n                font-size: 1em;\n            }\n            </style>\n            <button>Sign up</button>\n        ";
    shadowRoot.appendChild(template.content.cloneNode(true));
    return _this3;
  }

  return PrimaryButton;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('form-field', FormField);
customElements.define('primary-button', PrimaryButton);
customElements.define('signup-form', SignupForm);