const editProfileButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeProfileButton = document.querySelector('.popup__close-button_form_edit');
const closeAddFormButton = document.querySelector('.popup__close-button_form_add');
const closeFullscreenButton = document.querySelector('.popup__close-button_form_fullscreen');

const editPopup = document.querySelector('.popup_form_edit');
const addPopup = document.querySelector('.popup_form_add');

const profileForm = document.forms.profile_edit;
const addPicForm = document.forms.add_pic;

const nameInput = document.querySelector('.popup__input_value_name');
const jobInput = document.querySelector('.popup__input_value_job');
const titleInput = document.querySelector('.popup__input_value_title');
const linkInput = document.querySelector('.popup__input_value_link');

const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');

const cardList = document.querySelector('.cards__list');

const templateSelector = '.template';


import { fullscreenPopup, openPopup, closePopup } from './utils.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

const formData = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_invalid',
  errorClass: 'popup__input-error_active'
}

const editFormValidation = new FormValidator(formData, profileForm);

const addFormValidation = new FormValidator(formData, addPicForm);

editFormValidation.enableValidation();
addFormValidation.enableValidation();

const initialCards = [
  {
    name: 'Вальгалла',
    link: 'https://images7.alphacoders.com/107/thumb-1920-1077804.jpg'
  },
  {
    name: 'Синдикат',
    link: 'https://wallup.net/wp-content/uploads/2017/03/27/272365-Assassins_Creed_Syndicate-Assassins_Creed-Ubisoft.jpg'
  },
  {
    name: 'Пираты',
    link: 'https://on-desktop.com/wps/Games_Assassins_creed_4_black_flag_game_2_075157_.jpg'
  },
  {
    name: 'Война за независимость',
    link: 'https://i.ytimg.com/vi/e7qeIFC_un4/maxresdefault_live.jpg'
  },
  {
    name: 'Эцио Аудиторе',
    link: 'https://gamer-info.com/upload-files/user-reviews/2011/assassins-creed-brotherhood-vatar/assassins-creed-brotherhood-1-big.jpg'
  },
  {
    name: 'символ ассасинов',
    link: 'https://www.desktophut.ru/wp-content/uploads/2018/11/vmMDQTcGtsOX0kbegrzJ.jpg'
  }
];

const submitProfile = evt => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(editPopup);
}

const renderCard = card => {
  cardList.prepend(card);
}

const createCard = (newCard) => {
  const card = new Card(newCard, templateSelector);
  return card;
}

const submitPicture = evt => {
  evt.preventDefault();
  const newCard =
    {
      name: `${titleInput.value}`,
      link: `${linkInput.value}`
    };
  const card = createCard(newCard);
  renderCard(card.generateCard());
  closePopup(addPopup);
  addPicForm.reset();
}

initialCards.forEach(defaultPhoto => {
  const card = createCard(defaultPhoto);
  renderCard(card.generateCard());
});

editProfileButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  editFormValidation.resetValidation();
  openPopup(editPopup);
});
closeProfileButton.addEventListener('click', () => {
  closePopup(editPopup);
});

addButton.addEventListener('click', () => {
  addPicForm.reset();
  addFormValidation.resetValidation();
  openPopup(addPopup);
});
closeAddFormButton.addEventListener('click', () => {
  closePopup(addPopup);
});

closeFullscreenButton.addEventListener('click', () => {
  closePopup(fullscreenPopup);
});

profileForm.addEventListener('submit', submitProfile);
addPicForm.addEventListener('submit', submitPicture);
