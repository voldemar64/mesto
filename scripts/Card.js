import { openFullscreenPopup, cardTemplate } from './utils.js';

export default class Card {
  constructor(data) {
    this._text = data.name;
    this._link = data.link;
  }

  _setEventListeners() {
    this._element.querySelector('.card__like-button').addEventListener('click', evt => {
      this._handleLikeClick(evt);
    });

    this._element.querySelector('.card__delete-button').addEventListener('click', () => {
      this._element.remove();
    });

    this._element.querySelector('.card__photo').addEventListener('click', () => {
      openFullscreenPopup(this._link, this._text);
    });
  }

  _handleLikeClick(evt) {
    evt.target.classList.toggle('card__like-button_liked');
  }

  _getTemplate() {
    const cardElement = cardTemplate.cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.card__heading').textContent = this._text;
    this._element.querySelector('.card__photo').src = this._link;
    return this._element;
  }
}
