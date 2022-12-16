(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i,a,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=e,this._selector=r,this._handleCardClick=o,this._handleCardDelete=i,this._handleCardLike=a,this._handleCardLikeDelete=u,this._name=e.name,this._link=e.link,this._id=e._id,this._userId=n,this._ownerId=e.owner._id}var n,r;return n=t,(r=[{key:"_getElement",value:function(){return document.querySelector(this._selector).content.querySelector(".photo__item").cloneNode(!0)}},{key:"_makeInvisibleTresh",value:function(){this._ownerId!==this._userId&&this._buttonDelete.remove()}},{key:"_findId",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._userId}))}},{key:"likeImage",value:function(e){this._likes=e.likes;var t=this._element.querySelector(".photo__heart"),n=this._element.querySelector(".photo__number-like");this._findId()?t.classList.add("photo__heart_active"):t.classList.remove("photo__heart_active"),n.textContent=this._likes.length}},{key:"removeImage",value:function(){this._element.remove()}},{key:"_setEventListeners",value:function(){var e=this;this._buttonDelete.addEventListener("click",(function(){e._handleCardDelete(e._id,e)})),this._buttonLike.addEventListener("click",(function(){e._findId()?e._handleCardLikeDelete(e._id,e):e._handleCardLike(e._id,e)})),this._photoImage.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"_fillImage",value:function(){this._photoTitle.textContent=this._name,this._photoImage.src=this._link,this._photoImage.alt=this._name}},{key:"generate",value:function(){return this._element=this._getElement(),this._photoTitle=this._element.querySelector(".photo__name"),this._photoImage=this._element.querySelector(".photo__img"),this._buttonDelete=this._element.querySelector(".photo__button-delete"),this._buttonLike=this._element.querySelector(".photo__heart"),this._makeInvisibleTresh(),this.likeImage(this._data),this._fillImage(),this._setEventListeners(),this._element}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._inputList=Array.from(this._form.querySelectorAll(t.inputSelector)),this._buttonElement=this._form.querySelector(t.submitButtonSelector),this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass}var t,r;return t=e,(r=[{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){var n=e._form.querySelector(".".concat(t.id,"-error"));t.addEventListener("input",(function(){e._checkInputValidity(t,n),e._toggleButtonState()}))}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableSubmitButton():(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_checkInputValidity",value:function(e,t){e.validity.valid?this._hideInputError(e,t):this._showInputError(e,e.validationMessage,t)}},{key:"_showInputError",value:function(e,t,n){e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e,t){e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"disableSubmitButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"enableValidation",value:function(){this._setEventListeners(),this._toggleButtonState()}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){e.forEach(this._renderer)}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_active"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_active"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this,t=this._popup.querySelector(".popup__close");this._popup.addEventListener("click",(function(n){(n.target.classList.contains("popup_active")||t===n.target)&&e.close()}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},l.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function h(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._bigImage=t._popup.querySelector(".popup-image__content"),t._bigImageName=t._popup.querySelector(".popup-image__name"),t}return t=a,(n=[{key:"handleOpenPopup",value:function(e){this._bigImage.src=e.link,this._bigImageName.textContent=e.name,this._bigImage.alt=e.link,l(d(a.prototype),"open",this).call(this)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t){var n=t.nameProfile,r=t.jobProfile,o=t.avatarProfile;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._job=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){return{nameInput:this._name.textContent,jobInput:this._job.textContent}}},{key:"setUserInfo",value:function(e){var t=e.nameInput,n=e.jobInput;this._name.textContent=t,this._job.textContent=n}},{key:"setUserAvatar",value:function(e){this._avatar.src=e,this._avatar.alt="Аватар профиля"}}],n&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function S(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function a(e,t){var n,r=t.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleFormSubmit=r,n._popupForm=n._popup.querySelector(".popup__form"),n._inputList=Array.from(n._popupForm.querySelectorAll(".popup__item")),n._formbutton=n._popup.querySelector(".popup__button"),n._buttonText=n._formbutton.textContent,n}return t=a,(n=[{key:"renderLoading",value:function(e){this._formbutton.textContent=e?this._formbutton.textContent+"...":this._buttonText}},{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;g(O(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){g(O(a.prototype),"close",this).call(this),this._popupForm.reset()}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=P(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},C.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}function L(e,t){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},L(e,t)}function R(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return R(this,e)});function a(e,t){var n,r=t.handleSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSubmit=r,n._popupForm=n._popup.querySelector(".popup__form"),n}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;C(q(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e._cardId,e._card)}))}},{key:"open",value:function(e,t){C(q(a.prototype),"open",this).call(this),this._cardId=e,this._card=t}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var U=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getProfileInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"editProfile",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.job})}).then((function(e){return t._getResponseData(e)}))}},{key:"getNewCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"likeCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"getNewAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._getResponseData(e)}))}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),x=document.querySelector(".popup-recording"),B=document.querySelector(".popup-avatar"),A=document.querySelector(".profile__edit"),F=document.querySelector(".popup-add-image"),V=x.querySelector(".popup__form"),N=document.querySelector(".popup__item_value_name"),J=document.querySelector(".popup__item_value_job"),H=F.querySelector(".popup__form_add"),M=document.querySelector(".profile__button"),z=document.querySelector(".profile__photo"),$=B.querySelector(".popup__form"),G={inputSelector:".popup__item",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_inactive",inputErrorClass:"popup__item_type_error",errorClass:"popup__item-error_active"};function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Q,W=new U({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-56",headers:{authorization:"bc468cad-c22d-4fac-9dee-cf289e7f43c5","Content-Type":"application/json"}}),X=new i({renderer:function(e){ne(e,X)}},".photo"),Y=new b({nameProfile:".profile__name",jobProfile:".profile__job",avatarProfile:".profile__img"});Promise.all([W.getInitialCards(),W.getProfileInfo()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return K(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Q=i._id,X.renderItems(o),Y.setUserInfo({nameInput:i.name,jobInput:i.about}),Y.setUserAvatar(i.avatar)})).catch((function(e){console.log(e)}));var Z=new E(".popup-recording",{handleFormSubmit:function(e){Z.renderLoading(!0),W.editProfile(e).then((function(e){Y.setUserInfo({nameInput:e.name,jobInput:e.about}),Z.close()})).catch((function(e){console.log(e)})).finally((function(){Z.renderLoading(!1)}))}}),ee=new E(".popup-avatar",{handleFormSubmit:function(e){ee.renderLoading(!0),W.getNewAvatar(e).then((function(e){Y.setUserAvatar(e.avatar),ee.close(),le.disableSubmitButton()})).catch((function(e){console.log(e)})).finally((function(){ee.renderLoading(!1)}))}}),te=new E(".popup-add-image",{handleFormSubmit:function(e){te.renderLoading(!0),W.getNewCard({name:e.title,link:e.url}).then((function(e){ne(e,X),te.close(),se.disableSubmitButton()})).catch((function(e){console.log(e)})).finally((function(){te.renderLoading(!1)}))}});function ne(e,n){var r=new t(e,Q,"#photo-template",ce,ue,ie,ae).generate();n.addItem(r)}var re=new _(".popup-image"),oe=new T(".popup-delete",{handleSubmit:function(e,t){W.deleteCard(e).then((function(){t.removeImage(),oe.close()})).catch((function(e){console.log(e)}))}});function ie(e,t){W.likeCard(e).then((function(e){t.likeImage(e)})).catch((function(e){console.log(e)}))}function ae(e,t){W.deleteLike(e).then((function(e){t.likeImage(e)})).catch((function(e){console.log(e)}))}function ue(e,t){return oe.open(e,t)}function ce(e,t){return re.handleOpenPopup({name:e,link:t})}z.addEventListener("click",(function(){ee.open()})),ee.setEventListeners(),oe.setEventListeners(),Z.setEventListeners(),te.setEventListeners(),re.setEventListeners(),A.addEventListener("click",(function(){var e;e=Z,N.value=Y.getUserInfo().nameInput,J.value=Y.getUserInfo().jobInput,e.open()})),M.addEventListener("click",(function(){te.open()})),new r(G,V).enableValidation();var se=new r(G,H);se.enableValidation();var le=new r(G,$);le.enableValidation()})();