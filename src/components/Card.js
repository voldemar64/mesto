export default class Card {
  constructor({ data, handleDeleteCard, handleLikeClick, handleCardClick }, templateSelector, userId) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._likes = data.likes;
    this._owner = data.owner;
    this._userId = userId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteCard = handleDeleteCard;
  }

  getCardId() {
    return this._id;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._handleLikeClick()
    });
    this._element.querySelector('.card__delete-button').addEventListener('click', () => {
      this._handleDeleteCard()
    });
    this._element.querySelector('.card__photo').addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    });
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setTrashButton() {
    if (this._userId!==this._owner._id) {
      this._element.querySelector('.card__delete-button').style.display = 'none'
    }
  }

  _checkUserLike() {
    return (this._likes.some(card => card._id===this._userId))
  }

  updateLikes(data) {
    this._likeCounter.textContent = data.length;
  }

  _toggleLike() {
    if (this._checkUserLike()) {
      this.addLike()
    } else {
      this.removeLike();
    }
  }

  addLike() {
    this._likeButton.classList.add('card__like-button_liked');
    this.isLiked = true;
  }

  removeLike() {
    this._likeButton.classList.remove('card__like-button_liked');
    this.isLiked = false;
  }

  generateCard() {
    this._element = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);
    this._likeButton = this._element.querySelector('.card__like-button');
    this._likeCounter = this._element.querySelector('.card__like-counter');
    const cardPhoto = this._element.querySelector('.card__photo');

    this._setEventListeners();
    this._toggleLike();
    this._setTrashButton();

    this._likeCounter.textContent = this._likes.length;
    this._element.querySelector('.card__heading').textContent = this._name;
    cardPhoto.alt = this._name;
    cardPhoto.src = this._link;

    return this._element;
  }
}
