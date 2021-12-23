import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector, popupText, popupImage) {
    super(popupSelector);
    this._popupText = popupText;
    this._popupImage = popupImage;
  }

  open(name, link) {
    this._popupText.textContent = name;
    this._popupImage.alt = name;
    this._popupImage.src = link;
    super.open();
  }
}

