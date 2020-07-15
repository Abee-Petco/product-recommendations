/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/Components/individualProductRecommendation.jsx":
/*!*******************************************************************!*\
  !*** ./client/src/Components/individualProductRecommendation.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reviewStars_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reviewStars.jsx */ \"./client/src/Components/reviewStars.jsx\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar IndividualProductRecommendation = /*#__PURE__*/function (_React$Component) {\n  _inherits(IndividualProductRecommendation, _React$Component);\n\n  var _super = _createSuper(IndividualProductRecommendation);\n\n  function IndividualProductRecommendation() {\n    _classCallCheck(this, IndividualProductRecommendation);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(IndividualProductRecommendation, [{\n    key: \"render\",\n    value: function render() {\n      var product = this.props.product;\n\n      if (product === undefined) {\n        return null;\n      }\n\n      var itemId = product.itemId,\n          image = product.image,\n          title = product.title,\n          brand = product.brand,\n          reviewAverage = product.reviewAverage,\n          numberOfReviews = product.numberOfReviews,\n          price = product.price,\n          currency = product.currency;\n      var description;\n      var indexOfBrand = title.indexOf(brand);\n\n      if (indexOfBrand > -1) {\n        description = title;\n      } else {\n        description = \"\".concat(brand, \" \").concat(title);\n      }\n\n      if (description.length >= 50) {\n        description = description.substring(0, 46);\n        description = \"\".concat(description, \"...\");\n      }\n\n      var brandDisplay = description.substring(0, brand.length);\n      var titleDisplay = description.substring(brand.length);\n      var descriptionDisplay = [/*#__PURE__*/React.createElement(\"div\", {\n        id: \"PR-description-\".concat(itemId),\n        style: {\n          fontSize: '13px',\n          color: 'rgb(51, 51, 51)',\n          fontFamily: '\"Arial\", \"sans-serif\"',\n          lineHeight: '18px',\n          overflow: 'hidden',\n          overflowWrap: 'break-word',\n          maxHeight: '36px',\n          minHeight: '36px',\n          margin: '10px 0 8px 0',\n          cursor: 'pointer'\n        }\n      }, /*#__PURE__*/React.createElement(\"strong\", {\n        id: \"PR-brand-\".concat(itemId)\n      }, brandDisplay), titleDisplay)];\n      var numberOfReviewsDisplay = [/*#__PURE__*/React.createElement(\"strong\", {\n        id: \"PR-number-reviews-\".concat(itemId)\n      }, \"(\".concat(numberOfReviews, \")\"))];\n      var priceDisplay = [/*#__PURE__*/React.createElement(\"strong\", {\n        id: \"PR-price-\".concat(itemId)\n      }, \"\".concat(currency).concat(price))];\n      return /*#__PURE__*/React.createElement(\"div\", {\n        className: \"PR-individual-product-recommendation\",\n        style: {\n          display: 'flex',\n          flexDirection: 'column',\n          margin: '10px',\n          padding: '8px',\n          maxWidth: '172px',\n          minWidth: '172px',\n          maxHeight: '240px',\n          minHeight: '240px',\n          borderRadius: '5px',\n          boxShadow: '0px 2px 5px 0px rgba(0, 0, 0, 0.1)'\n        }\n      }, /*#__PURE__*/React.createElement(\"a\", {\n        id: \"PR-link-\".concat(itemId),\n        href: \"http://127.0.0.1:3000/product?itemId=\".concat(itemId),\n        style: {\n          display: 'flex',\n          flexDirection: 'column',\n          textDecoration: 'none'\n        }\n      }, /*#__PURE__*/React.createElement(\"img\", {\n        id: \"PR-image-\".concat(itemId),\n        style: {\n          width: '100px',\n          height: '100px',\n          margin: '0 auto',\n          cursor: 'pointer'\n        },\n        src: image\n      }), descriptionDisplay), /*#__PURE__*/React.createElement(\"div\", {\n        style: {\n          display: 'flex'\n        }\n      }, /*#__PURE__*/React.createElement(_reviewStars_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        reviewAverage: reviewAverage\n      }), /*#__PURE__*/React.createElement(\"div\", {\n        style: {\n          fontSize: '13.125px',\n          color: 'rgb(51, 51, 51)',\n          fontFamily: '\"Arial\", \"sans-serif\"',\n          margin: '0 0 0 5px'\n        }\n      }, numberOfReviewsDisplay)), /*#__PURE__*/React.createElement(\"div\", {\n        style: {\n          fontSize: '15px',\n          color: 'rgb(51, 51, 51)',\n          fontFamily: '\"Arial\", \"sans-serif\"',\n          margin: '28px 0 0 0'\n        }\n      }, priceDisplay));\n    }\n  }]);\n\n  return IndividualProductRecommendation;\n}(React.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndividualProductRecommendation);\n\n//# sourceURL=webpack:///./client/src/Components/individualProductRecommendation.jsx?");

/***/ }),

/***/ "./client/src/Components/reviewStars.jsx":
/*!***********************************************!*\
  !*** ./client/src/Components/reviewStars.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar ReviewStars = function ReviewStars(props) {\n  var reviewAverage = props.reviewAverage;\n  var numberOfBlackStars = Number.parseFloat(reviewAverage);\n  numberOfBlackStars = Math.round(numberOfBlackStars);\n  var count = 5;\n  var stars = [];\n  var starStyle = {\n    margin: '0 1px',\n    width: '12px',\n    height: '12px'\n  };\n\n  while (numberOfBlackStars > 0) {\n    stars.push( /*#__PURE__*/React.createElement(\"img\", {\n      className: \"PR-black-stars\",\n      style: starStyle,\n      src: \"http://127.0.0.1:3004/blackStar.png\"\n    }));\n    count--;\n    numberOfBlackStars--;\n  }\n\n  while (count > 0) {\n    stars.push( /*#__PURE__*/React.createElement(\"img\", {\n      className: \"PR-gray-stars\",\n      style: starStyle,\n      src: \"http://127.0.0.1:3004/grayStar.png\"\n    }));\n    count--;\n  }\n\n  return /*#__PURE__*/React.createElement(\"div\", {\n    style: {\n      display: 'flex'\n    }\n  }, stars);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReviewStars);\n\n//# sourceURL=webpack:///./client/src/Components/reviewStars.jsx?");

/***/ }),

/***/ "./client/src/ReduxComponents/actions/updateCustomer.js":
/*!**************************************************************!*\
  !*** ./client/src/ReduxComponents/actions/updateCustomer.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar updateCustomer = function updateCustomer(list) {\n  return {\n    type: 'UPDATE_CUSTOMER_LIST',\n    payload: list\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (updateCustomer);\n\n//# sourceURL=webpack:///./client/src/ReduxComponents/actions/updateCustomer.js?");

/***/ }),

/***/ "./client/src/ReduxComponents/actions/updatePet.js":
/*!*********************************************************!*\
  !*** ./client/src/ReduxComponents/actions/updatePet.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar updatePet = function updatePet(list) {\n  return {\n    type: 'UPDATE_PET_LIST',\n    payload: list\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (updatePet);\n\n//# sourceURL=webpack:///./client/src/ReduxComponents/actions/updatePet.js?");

/***/ }),

/***/ "./client/src/ReduxComponents/actions/updateTreat.js":
/*!***********************************************************!*\
  !*** ./client/src/ReduxComponents/actions/updateTreat.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar updateTreat = function updateTreat(list) {\n  return {\n    type: 'UPDATE_TREAT_LIST',\n    payload: list\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (updateTreat);\n\n//# sourceURL=webpack:///./client/src/ReduxComponents/actions/updateTreat.js?");

/***/ }),

/***/ "./client/src/ReduxComponents/reducers/customerReducer.js":
/*!****************************************************************!*\
  !*** ./client/src/ReduxComponents/reducers/customerReducer.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar customerReducer = function customerReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  if (action.type === 'UPDATE_CUSTOMER_LIST') {\n    return action.payload;\n  } else {\n    return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (customerReducer);\n\n//# sourceURL=webpack:///./client/src/ReduxComponents/reducers/customerReducer.js?");

/***/ }),

/***/ "./client/src/ReduxComponents/reducers/petReducer.js":
/*!***********************************************************!*\
  !*** ./client/src/ReduxComponents/reducers/petReducer.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar petReducer = function petReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  if (action.type === 'UPDATE_PET_LIST') {\n    return action.payload;\n  } else {\n    return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (petReducer);\n\n//# sourceURL=webpack:///./client/src/ReduxComponents/reducers/petReducer.js?");

/***/ }),

/***/ "./client/src/ReduxComponents/reducers/treatReducer.js":
/*!*************************************************************!*\
  !*** ./client/src/ReduxComponents/reducers/treatReducer.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar treatReducer = function treatReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  if (action.type === 'UPDATE_TREAT_LIST') {\n    return action.payload;\n  } else {\n    return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (treatReducer);\n\n//# sourceURL=webpack:///./client/src/ReduxComponents/reducers/treatReducer.js?");

/***/ }),

/***/ "./client/src/ReduxComponents/rootReducer.js":
/*!***************************************************!*\
  !*** ./client/src/ReduxComponents/rootReducer.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reducers_customerReducer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/customerReducer.js */ \"./client/src/ReduxComponents/reducers/customerReducer.js\");\n/* harmony import */ var _reducers_treatReducer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/treatReducer.js */ \"./client/src/ReduxComponents/reducers/treatReducer.js\");\n/* harmony import */ var _reducers_petReducer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/petReducer.js */ \"./client/src/ReduxComponents/reducers/petReducer.js\");\n\n\n\nvar _Redux = Redux,\n    combineReducers = _Redux.combineReducers;\nvar rootReducer = combineReducers({\n  customer: _reducers_customerReducer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  treat: _reducers_treatReducer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  pet: _reducers_petReducer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);\n\n//# sourceURL=webpack:///./client/src/ReduxComponents/rootReducer.js?");

/***/ }),

/***/ "./client/src/ReduxComponents/store.js":
/*!*********************************************!*\
  !*** ./client/src/ReduxComponents/store.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rootReducer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rootReducer.js */ \"./client/src/ReduxComponents/rootReducer.js\");\n\nvar _Redux = Redux,\n    createStore = _Redux.createStore;\nvar initialState = {\n  customer: [],\n  treat: [],\n  pet: []\n};\nvar store = createStore(_rootReducer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], initialState);\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\n\n//# sourceURL=webpack:///./client/src/ReduxComponents/store.js?");

/***/ }),

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _service_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service.jsx */ \"./client/src/service.jsx\");\n/* harmony import */ var _ReduxComponents_store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReduxComponents/store.js */ \"./client/src/ReduxComponents/store.js\");\n\n\nvar _ReactRedux = ReactRedux,\n    Provider = _ReactRedux.Provider;\nReactDOM.render( /*#__PURE__*/React.createElement(Provider, {\n  store: _ReduxComponents_store_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}, /*#__PURE__*/React.createElement(_service_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n  submodule: \"customer\"\n})), document.getElementById('RECOMMENDATIONS_CUSTOMER_ATTACH_POINT'));\nReactDOM.render( /*#__PURE__*/React.createElement(Provider, {\n  store: _ReduxComponents_store_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}, /*#__PURE__*/React.createElement(_service_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n  submodule: \"treat\"\n})), document.getElementById('RECOMMENDATIONS_TREAT_ATTACH_POINT'));\nReactDOM.render( /*#__PURE__*/React.createElement(Provider, {\n  store: _ReduxComponents_store_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}, /*#__PURE__*/React.createElement(_service_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n  submodule: \"pet\"\n})), document.getElementById('RECOMMENDATIONS_PET_ATTACH_POINT'));\n\n//# sourceURL=webpack:///./client/src/index.jsx?");

/***/ }),

/***/ "./client/src/service.jsx":
/*!********************************!*\
  !*** ./client/src/service.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ReduxComponents_actions_updateCustomer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReduxComponents/actions/updateCustomer.js */ \"./client/src/ReduxComponents/actions/updateCustomer.js\");\n/* harmony import */ var _ReduxComponents_actions_updateTreat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReduxComponents/actions/updateTreat.js */ \"./client/src/ReduxComponents/actions/updateTreat.js\");\n/* harmony import */ var _ReduxComponents_actions_updatePet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReduxComponents/actions/updatePet.js */ \"./client/src/ReduxComponents/actions/updatePet.js\");\n/* harmony import */ var _Components_individualProductRecommendation_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/individualProductRecommendation.jsx */ \"./client/src/Components/individualProductRecommendation.jsx\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\nvar _ReactRedux = ReactRedux,\n    connect = _ReactRedux.connect;\n\nvar ProductRecommendationsModule = /*#__PURE__*/function (_React$Component) {\n  _inherits(ProductRecommendationsModule, _React$Component);\n\n  var _super = _createSuper(ProductRecommendationsModule);\n\n  function ProductRecommendationsModule() {\n    _classCallCheck(this, ProductRecommendationsModule);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(ProductRecommendationsModule, [{\n    key: \"componentDidMount\",\n    // constructor() {\n    //   super();\n    // }\n    value: function componentDidMount() {\n      var _this$props = this.props,\n          submodule = _this$props.submodule,\n          pet = _this$props.pet,\n          dispatchUpdateCustomer = _this$props.dispatchUpdateCustomer,\n          dispatchUpdateTreat = _this$props.dispatchUpdateTreat,\n          dispatchUpdatePet = _this$props.dispatchUpdatePet;\n\n      if (submodule === 'pet' && pet.length === 0) {\n        //When working on service, uncomment this axios call and comment-out the axios\n        // call just below. Make sure to switch back just before pushing up to repo.\n        // Just make sure to run webpack again so bundle is correct (In repo's cd, run >npm run build)\n        // start of service as standalone\n        // axios.get('http://127.0.0.1:3004/productRecommendations/100')\n        //   .then((response) => {\n        //     const { customer, treat, pet } = response.data;\n        //     dispatchUpdateCustomer(customer);\n        //     dispatchUpdateTreat(treat);\n        //     dispatchUpdatePet(pet);\n        //   })\n        //   .catch((err) => {\n        //     console.log(err);\n        //   });\n        //end of service as standalone\n        //start of service as proxy service\n        var search = window.location.search;\n        var searchSplit = search.split('&');\n        var splitItemID;\n\n        for (var i = 0; i < searchSplit.length; i++) {\n          if (searchSplit[i].includes('itemID')) {\n            splitItemID = searchSplit[i].split('=');\n            break;\n          }\n        }\n\n        axios.get(\"http://127.0.0.1:3004/productRecommendations/\".concat(splitItemID[1])).then(function (response) {\n          var _response$data = response.data,\n              customer = _response$data.customer,\n              treat = _response$data.treat,\n              pet = _response$data.pet;\n          dispatchUpdateCustomer(customer);\n          dispatchUpdateTreat(treat);\n          dispatchUpdatePet(pet);\n        })[\"catch\"](function (err) {\n          console.log(err);\n        }); //end of service as proxy service\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$props2 = this.props,\n          submodule = _this$props2.submodule,\n          customer = _this$props2.customer,\n          treat = _this$props2.treat,\n          pet = _this$props2.pet;\n      var listOfProductRecommendations;\n      var submoduleTitle;\n\n      if (submodule === 'customer') {\n        listOfProductRecommendations = customer;\n        submoduleTitle = 'Customers Also Viewed';\n      }\n\n      if (submodule === 'treat') {\n        listOfProductRecommendations = treat;\n        submoduleTitle = 'More Ways To Treat Your Pet';\n      }\n\n      if (submodule === 'pet') {\n        listOfProductRecommendations = pet;\n        submoduleTitle = 'Your Pet Might Also Like';\n      }\n\n      return /*#__PURE__*/React.createElement(\"div\", {\n        style: {\n          display: 'flex',\n          flexDirection: 'column',\n          alignItems: 'center'\n        }\n      }, /*#__PURE__*/React.createElement(\"div\", {\n        className: \"PR-submodule\",\n        style: {\n          fontSize: '24px',\n          fontFamily: '\"Arial\", \"sans-serif\"',\n          fontWeight: 700,\n          lineHeight: '48px',\n          color: 'black'\n        }\n      }, submoduleTitle), /*#__PURE__*/React.createElement(\"div\", {\n        id: \"recommendation-submodule-\".concat(submodule),\n        style: {\n          display: 'flex'\n        }\n      }, /*#__PURE__*/React.createElement(_Components_individualProductRecommendation_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        product: listOfProductRecommendations[0]\n      }), /*#__PURE__*/React.createElement(_Components_individualProductRecommendation_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        product: listOfProductRecommendations[1]\n      }), /*#__PURE__*/React.createElement(_Components_individualProductRecommendation_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        product: listOfProductRecommendations[2]\n      }), /*#__PURE__*/React.createElement(_Components_individualProductRecommendation_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        product: listOfProductRecommendations[3]\n      }), /*#__PURE__*/React.createElement(_Components_individualProductRecommendation_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        product: listOfProductRecommendations[4]\n      })));\n    }\n  }]);\n\n  return ProductRecommendationsModule;\n}(React.Component);\n\nvar mapState = function mapState(state) {\n  var customer = state.customer,\n      treat = state.treat,\n      pet = state.pet;\n  return {\n    customer: customer,\n    treat: treat,\n    pet: pet\n  };\n};\n\nvar mapDispatch = function mapDispatch(dispatch) {\n  return {\n    dispatchUpdateCustomer: function dispatchUpdateCustomer(list) {\n      dispatch(Object(_ReduxComponents_actions_updateCustomer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(list));\n    },\n    dispatchUpdateTreat: function dispatchUpdateTreat(list) {\n      dispatch(Object(_ReduxComponents_actions_updateTreat_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(list));\n    },\n    dispatchUpdatePet: function dispatchUpdatePet(list) {\n      dispatch(Object(_ReduxComponents_actions_updatePet_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(list));\n    }\n  };\n};\n\nvar wrappedProductRecommendationsModule = connect(mapState, mapDispatch)(ProductRecommendationsModule);\n/* harmony default export */ __webpack_exports__[\"default\"] = (wrappedProductRecommendationsModule);\n\n//# sourceURL=webpack:///./client/src/service.jsx?");

/***/ })

/******/ });