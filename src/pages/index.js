import './index.css';

import {
  editProfileButton,
  addButton,
  editPopup,
  addPopup,
  fullscreenPopup,
  profileForm,
  addPicForm,
  nameInput,
  jobInput,
  fullscreenPopupSubtitle,
  fullscreenPopupImage,
  profileName,
  profileJob,
  cardList,
  templateSelector,
  initialCards,
  formData
} from '../utils/constants.js';

import UserInfo from '../components/UserInfo';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';

const editFormValidation = new FormValidator(formData, profileForm);
const addFormValidation = new FormValidator(formData, addPicForm);

editFormValidation.enableValidation();
addFormValidation.enableValidation();

const userInfo = new UserInfo({
  name: profileName,
  job: profileJob
});

const popupWithInfo = new PopupWithForm(
  editPopup,
  data => {
    userInfo.setUserInfo(data);
    popupWithInfo.close();
  }
);

const popupWithImage = new PopupWithImage(
  fullscreenPopup,
  fullscreenPopupSubtitle,
  fullscreenPopupImage
);

const popupWithForm = new PopupWithForm(
  addPopup,
  data => {
    renderCard.addItem(createCard(data));
    popupWithForm.close();
  }
);

const renderCard = new Section({
  data: initialCards,
  renderer: item => {
    renderCard.addItem(createCard(item));
  }},
  cardList
);

renderCard.renderItems();

function createCard(newCard) {
  const card = new Card(
    newCard,
    templateSelector,
    (link, name) => {
      popupWithImage.open(link, name);
    });
  return card.generateCard();
};

editProfileButton.addEventListener('click', () => {
  const user = userInfo.getUserInfo();
  nameInput.value = user.name;
  jobInput.value = user.job;
  editFormValidation.resetValidation();
  popupWithInfo.open();
});

addButton.addEventListener('click', () => {
  addFormValidation.resetValidation();
  popupWithForm.open();
});

popupWithInfo.setEventListeners();
popupWithImage.setEventListeners();
popupWithForm.setEventListeners();
