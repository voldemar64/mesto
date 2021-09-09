const editProfileButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeProfileButton = document.querySelector('.popup__close-button_form_edit');
const closeAddFormButton = document.querySelector('.popup__close-button_form_add');
const closeFullscreenButton = document.querySelector('.popup__close-button_form_fullscreen');
const trashButton = document.querySelectorAll('.card__delete-button');
const likeButton = document.querySelectorAll('.card__like-button');

const editPopup = document.querySelector('.popup_form_edit');
const addPopup = document.querySelector('.popup_form_add');
const fullscreenPopup = document.querySelector('.popup_form_fullscreen');
const profilePopupContainer = document.querySelector('.popup__container_form_edit');
const addPicPopupContainer = document.querySelector('.popup__container_form_add');

const nameInput = document.querySelector('.popup__input_value_name');
const jobInput = document.querySelector('.popup__input_value_job');
const placeInput = document.querySelector('.popup__input_value_place');
const linkInput = document.querySelector('.popup__input_value_link');

const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const cardPhoto = document.querySelectorAll('.card__photo');
const fullscreenPopupSubtitle = document.querySelector('.popup__subtitle');
const fullscreenPopupImage = document.querySelector('.popup__image');

const initialCards = [
  {
    name: 'ачё)',
    link: '../../../images/mat.jpg'
  },
  {
    name: 'ачё)',
    link: '../../images/turnic.jpg'
  },
  {
    name: 'ачё)',
    link: '../../../images/putin4.jpg'
  },
  {
    name: 'ачё)',
    link: '../../../images/putin3.jpg'
  },
  {
    name: 'ачё)',
    link: '../../../images/putin2.jpg'
  },
  {
    name: 'ачё)',
    link: '../../../images/putin1.jpg'
  }
]; // извините, если вам картинки несмешными покажутся
   //просто сейчас 2:01 а мне в школу просыпаться в 7:40
   //и идти на 7 уроков. Не скучайте крч ;)

const openPopup = (element) => {
  element.classList.add('popup_opened');

}

const closePopup = (element) => {
  element.classList.remove('popup_opened');
}

const editProfilePopup = () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

const submitProfile = (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(editPopup);
}

const submitPicture = (evt) => {
  evt.preventDefault();
  newCard = [
    {
      name: `${placeInput.value}`,
      link: `${linkInput.value}`
    }
  ];
  addCard(newCard);
  closePopup(addPopup);
}

const openFullscreenPopup = (evt) => {
  const card = evt.target.closest('.card')

  openPopup(fullscreenPopup);
  fullscreenPopupSubtitle.textContent = card.querySelector('.card__heading').textContent;
  fullscreenPopupImage.alt = card.querySelector('.card__heading').textContent;
  fullscreenPopupImage.src = card.querySelector('.card__photo').src;
}

const deleteCard = (evt) => {
  evt.target.parentElement.closest('.card').remove();
}

const addLike = (evt) => {
  evt.target.classList.toggle('card__like-button_liked');
}

const makeCard = (element) => {
  const cardElement = document.querySelector('.template').content.querySelector('.card').cloneNode(true);
  const cardList = document.querySelector('.cards__list');

  cardElement.querySelector('.card__photo').src = element.link;
  cardElement.querySelector('.card__photo').alt = element.name;
  cardElement.querySelector('.card__photo').addEventListener('click', openFullscreenPopup);
  cardElement.querySelector('.card__heading').textContent = element.name;
  cardElement.querySelector('.card__delete-button').addEventListener('click', deleteCard);
  cardElement.querySelector('.card__like-button').addEventListener('click', addLike);

  cardList.prepend(cardElement);
}

const addCard = (list) => {
  list.forEach((item) => {
    makeCard(item);
  });
}

addCard(initialCards);

editProfileButton.addEventListener('click', () => {
  openPopup(editPopup);
  editProfilePopup;
});
closeProfileButton.addEventListener('click', () => {
  closePopup(editPopup);
});
addButton.addEventListener('click', () => {
  openPopup(addPopup);
})
closeAddFormButton.addEventListener('click', () => {
  closePopup(addPopup);
})
closeFullscreenButton.addEventListener('click', () => {
  closePopup(fullscreenPopup);
})
profilePopupContainer.addEventListener('submit', submitProfile);
addPicPopupContainer.addEventListener('submit', submitPicture);
