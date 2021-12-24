(()=>{"use strict";var e=document.querySelector(".profile__edit-button"),t=document.querySelector(".profile__add-button"),n=document.querySelector(".profile__edit-avatar"),r=document.forms.profile_edit,o=document.forms.add_pic,i=document.forms.avatar,a=document.querySelector(".popup__input_value_name"),u=document.querySelector(".popup__input_value_job"),c=document.querySelector(".popup__subtitle"),s=document.querySelector(".popup__image"),l={inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__input_invalid",errorClass:"popup__input-error_active"};function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t,this._headers=n}var t,n;return t=e,(n=[{key:"_handleRes",value:function(e){return e.ok?e.json():Promise.reject(console.log("Ошибка: ".concat(err)))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return e._handleRes(t)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(t){return e._handleRes(t)}))}},{key:"patchUserInfo",value:function(e){var t=this,n=e.name,r=e.about;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:n,about:r})}).then((function(e){return t._handleRes(e)}))}},{key:"patchAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._handleRes(e)}))}},{key:"addNewCard",value:function(e){var t=this,n=e.name,r=e.link;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:n,link:r})}).then((function(e){return t._handleRes(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e._id),{method:"DELETE",headers:this._headers}).then((function(e){return t._handleRes(e)}))}},{key:"addCardLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return t._handleRes(e)}))}},{key:"removeCardLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return t._handleRes(e)}))}}])&&f(t.prototype,n),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t){var n=t.name,r=t.job,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._job=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._job.textContent}}},{key:"setUserAvatar",value:function(e){this._avatar.src=e.avatar}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._job.textContent=e.about}}])&&h(t.prototype,n),e}();function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=t,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.reverse().forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&_(t.prototype,n),e}();function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t,n,r){var o=t.data,i=t.handleDeleteCard,a=t.handleLikeClick,u=t.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=o.name,this._link=o.link,this._id=o._id,this._likes=o.likes,this._owner=o.owner,this._userId=r,this._templateSelector=n,this._handleCardClick=u,this._handleLikeClick=a,this._handleDeleteCard=i}var t,n;return t=e,(n=[{key:"getCardId",value:function(){return this._id}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){e._handleLikeClick()})),this._element.querySelector(".card__delete-button").addEventListener("click",(function(){e._handleDeleteCard()})),this._element.querySelector(".card__photo").addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_setTrashButton",value:function(){this._userId!==this._owner._id&&(this._element.querySelector(".card__delete-button").style.display="none")}},{key:"_checkUserLike",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._userId}))}},{key:"updateLikes",value:function(e){this._likeCounter.textContent=e.length}},{key:"_toggleLike",value:function(){this._checkUserLike()?this.addLike():this.removeLike()}},{key:"addLike",value:function(){this._likeButton.classList.add("card__like-button_liked"),this.isLiked=!0}},{key:"removeLike",value:function(){this._likeButton.classList.remove("card__like-button_liked"),this.isLiked=!1}},{key:"generateCard",value:function(){this._element=document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0),this._likeButton=this._element.querySelector(".card__like-button"),this._likeCounter=this._element.querySelector(".card__like-counter");var e=this._element.querySelector(".card__photo");return this._setEventListeners(),this._toggleLike(),this._setTrashButton(),this._likeCounter.textContent=this._likes.length,this._element.querySelector(".card__heading").textContent=this._name,e.alt=this._name,e.src=this._link,this._element}}])&&v(t.prototype,n),e}();function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var k=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._form=n}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.setAttribute("disabled","pleasework"),this._buttonElement.classList.add(this._inactiveButtonClass)):(this._buttonElement.removeAttribute("disabled","pleasework"),this._buttonElement.classList.remove(this._inactiveButtonClass))}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"enableValidation",value:function(){var e=this;this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._buttonElement=this._form.querySelector(this._submitButtonSelector),this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}}])&&m(t.prototype,n),e}();function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){t.target.classList.contains("popup")&&e.close(),t.target.classList.contains("popup__close-button")&&e.close()}))}}])&&g(t.prototype,n),e}();function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=L(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function L(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}function O(e,t){return O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},O(e,t)}function j(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(r);if(o){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submitForm=t,n._submitButton=n._popup.querySelector(".popup__submit-button"),n._form=n._popup.querySelector(".popup__container"),n._inputs=Array.from(n._form.querySelectorAll(".popup__input")),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"loading",value:function(e){this._submitButton.textContent=e?"Сохранение...":"Сохранить"}},{key:"setEventListeners",value:function(){var e=this;S(I(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues())}))}},{key:"close",value:function(){S(I(a.prototype),"close",this).call(this),this._form.reset()}}])&&E(t.prototype,n),a}(C);function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=U(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},T.apply(this,arguments)}function U(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}function x(e,t){return x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},x(e,t)}function A(e,t){if(t&&("object"===R(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(r);if(o){var n=D(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return A(this,e)});function a(){return q(this,a),i.apply(this,arguments)}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;T(D(a.prototype),"setEventListeners",this).call(this),this._popup.querySelector(".popup__container").addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitCallback()}))}},{key:"setSubmitCallback",value:function(e){this._handleSubmitCallback=e}}])&&B(t.prototype,n),a}(C);function N(e){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(){return F="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=H(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},F.apply(this,arguments)}function H(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=$(e)););return e}function M(e,t){return M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},M(e,t)}function z(e,t){if(t&&("object"===N(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function $(e){return $=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},$(e)}var G,K=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=$(r);if(o){var n=$(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return z(this,e)});function a(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,e))._popupText=t,r._popupImage=n,r}return t=a,(n=[{key:"open",value:function(e,t){this._popupText.textContent=e,this._popupImage.alt=e,this._popupImage.src=t,F($(a.prototype),"open",this).call(this)}}])&&J(t.prototype,n),a}(C);function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var W=new k(l,r),X=new k(l,o),Y=new k(l,i),Z=new V(".popup_form_delete"),ee=new p("https://mesto.nomoreparties.co/v1/cohort-31",{authorization:"8ecd362d-8687-40cb-8171-87d5d8b4e71d","Content-Type":"application/json"});Promise.all([ee.getUserInfo(),ee.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return Q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];te.setUserInfo(o),te.setUserAvatar(o),G=o._id,ae.renderItems(i)})).catch((function(e){return console.log("Ошибка при изначальной отрисовке данных: ".concat(e))}));var te=new d({name:".profile__title",job:".profile__subtitle",avatar:".profile__avatar"}),ne=new P(".popup_form_avatar",(function(e){ne.loading(!0),ee.patchAvatar(e).then((function(e){te.setUserAvatar(e),ne.close()})).catch((function(e){return console.log("Ошибка при изменении аватара: ".concat(e))})).finally((function(){ne.loading(!1)}))})),re=new P(".popup_form_edit",(function(e){re.loading(!0),ee.patchUserInfo(e).then((function(e){te.setUserInfo(e),re.close()})).catch((function(e){return console.log("Ошибка при изменении информации о пользователе: ".concat(e))})).finally((function(){re.loading(!1)}))})),oe=new P(".popup_form_add",(function(e){oe.loading(!0),ee.addNewCard(e).then((function(e){ae.addItem(ue(e)),oe.close()})).catch((function(e){return console.log("Ошибка создания карточки: ".concat(e))})).finally((function(){oe.loading(!1)}))})),ie=new K(".popup_form_fullscreen",c,s),ae=new y((function(e){ae.addItem(ue(e))}),".cards__list");function ue(e){var t=new b({data:e,handleDeleteCard:function(){Z.setSubmitCallback((function(){ee.deleteCard(t).then((function(){t.deleteCard(),Z.close()})).catch((function(e){return console.log("Ошибка при удалении карточки: ".concat(e))}))})),Z.open()},handleLikeClick:function(){t.isLiked?ee.removeCardLike(t.getCardId()).then((function(e){t.removeLike(),t.updateLikes(e.likes)})).catch((function(e){return console.log("Ошибка при удалении лайка: ".concat(e))})):ee.addCardLike(t.getCardId()).then((function(e){t.addLike(),t.updateLikes(e.likes)})).catch((function(e){return console.log("Ошибка при добавлении лайка: ".concat(e))}))},handleCardClick:function(){ie.open(e.name,e.link)}},".template",G);return t.generateCard()}e.addEventListener("click",(function(){var e=te.getUserInfo();a.value=e.name,u.value=e.about,W.resetValidation(),re.open()})),t.addEventListener("click",(function(){X.resetValidation(),oe.open()})),n.addEventListener("click",(function(){Y.resetValidation(),ne.open()})),Y.enableValidation(),W.enableValidation(),X.enableValidation(),re.setEventListeners(),ie.setEventListeners(),oe.setEventListeners(),Z.setEventListeners(),ne.setEventListeners()})();