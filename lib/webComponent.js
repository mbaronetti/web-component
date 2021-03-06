"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
    template.innerHTML = "\n        <style>\n            .signup-container {\n                font-family: Source Sans Pro,sans-serif;\n                background-color: white;\n                padding: 50px;\n            } \n            .signup-header{\n                text-transform: uppercase;\n                font-size: 1.25em;\n                padding: 20px 10px;\n                background: #d9dee0;\n                color: #00222d;\n                font-weight: 700;\n            }\n            .text{color: #667a81;}\n            .coupon-slot{\n                margin:20px 0;\n                display:block;\n            }\n        </style>\n        <div class=\"signup-container\">\n            <div class='signup-header'>\n                <slot name='title'>\n                    EASY SIGNUP, NO CATCH!\n                </slot>\n            </div>\n            <slot class='text' name=\"topText\">\n                <p>Start your free 30-day trial of Walls.io \u2013 after the trial, you can continue to use our Free plan.</p>\n            </slot>\n            <style>\n            input {\n                font-family: Source Sans Pro,sans-serif;\n                box-sizing:border-box;\n                color: #334e57;\n                font-weight: 400;\n                width: 100%;\n                font-size: 1.25em;\n                box-shadow: 1px 1px 21px 0 rgba(0,34,45,.15);\n                -webkit-appearance: none;\n                border: 1px solid rgba(0,34,45,.1);\n                border-radius: 7px;\n                padding: 20px 10px;\n                margin: 10px auto;\n            }\n            </style>\n            <div class=\"form-field\">\n                <input type=\"email\" placeholder=\"email\" />\n            </div>\n            <div class=\"form-field\">\n                <input type=\"password\" placeholder=\"password\" />\n            </div>\n            <p class='text'>\n                <slot name=\"bottomText\">By submitting this form and providing personal information, I agree that my data is saved and might be used by Walls.io to contact me regarding offers or product news by phone, email or newsletter. I can revoke consent any time in my account settings.</slot>\n            </p>\n            <slot name='coupon' class='coupon-slot'></slot>\n            \n            <style>\n            button{\n                font-family: Source Sans Pro,sans-serif;\n                padding: 10px 40px;\n                color: #00222d;\n                font-weight: 700;\n                text-transform: uppercase;\n                border: 2px solid #f3b200;\n                border-radius: 5em;\n                background: #f3b200;\n                cursor: pointer;\n                font-size: 1em;\n            }\n            </style>\n            <button id='signupButton'>Sign up</button>\n        </div>";

    var shadowRoot = _this.attachShadow({
      mode: 'open'
    });

    shadowRoot.appendChild(template.content.cloneNode(true));
    return _this;
  }

  _createClass(SignupForm, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;

      var getUserStatus = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var response, data;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return fetch('https://walls.io/user_status.json', {
                    credentials: 'include'
                  });

                case 3:
                  response = _context.sent;
                  _context.next = 6;
                  return response.json();

                case 6:
                  data = _context.sent;
                  console.log(data);
                  _this2.shadowRoot.getElementById('signupButton').style.backgroundColor = 'green';
                  _context.next = 15;
                  break;

                case 11:
                  _context.prev = 11;
                  _context.t0 = _context["catch"](0);
                  console.log(_context.t0);
                  _this2.shadowRoot.getElementById('signupButton').style.backgroundColor = 'red';

                case 15:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[0, 11]]);
        }));

        return function getUserStatus() {
          return _ref.apply(this, arguments);
        };
      }();

      getUserStatus();
      var inputFields = this.shadowRoot.querySelectorAll('input');

      var validate = function validate() {
        inputFields.forEach(function (item) {
          if (!item.value.length) {
            item.style.borderColor = 'red';
          } else {
            item.style.borderColor = 'green';
          }
        });
      };

      var validateOnKeyUp = function validateOnKeyUp() {
        inputFields.forEach(function (item) {
          if (!item.value.length) {
            item.style.borderColor = 'red';
          } else {
            item.style.borderColor = 'green';
          }
        });
      };

      this.shadowRoot.getElementById('signupButton').addEventListener('click', function () {
        return validate();
      });
      inputFields.forEach(function (item) {
        item.addEventListener('keyup', function (e) {
          console.log(e.target.value);
        });
      });
    }
  }]);

  return SignupForm;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('signup-form', SignupForm);