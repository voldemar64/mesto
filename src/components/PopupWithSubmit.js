import Popup from './Popup.js'

export default class PopupWithSubmit extends Popup {
  setEventListeners() {
    super.setEventListeners();
    const form = this._popup.querySelector('.popup__container');
    form.addEventListener('submit', evt => {
      evt.preventDefault();
      this._handleSubmitCallback();
    });
  }

  setSubmitCallback(callback) {
    this._handleSubmitCallback = callback;
  }
}
