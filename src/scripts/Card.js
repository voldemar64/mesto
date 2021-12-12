import { openFullscreenPopup } from './utils.js';

export default class Card {
  constructor(data, templateSelector) {
    this._text = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
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

  generateCard() {
    this._element = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);
    
    this._setEventListeners();

    this._element.querySelector('.card__heading').textContent = this._text;
    this._element.querySelector('.card__photo').src = this._link;
    this._element.querySelector('.card__photo').alt = this._text;

    return this._element;
  }
}