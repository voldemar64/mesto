import './index.css';

import {
  editProfileButton,
  addButton,
  editAvatarButton,
  editPopup,
  deletePopup,
  addPopup,
  avatarPopup,
  fullscreenPopup,
  profileForm,
  addPicForm,
  avatarForm,
  nameInput,
  jobInput,
  fullscreenPopupSubtitle,
  fullscreenPopupImage,
  profileName,
  profileJob,
  profileAvatar,
  cardList,
  templateSelector,
  formData
} from '../utils/constants.js';

import Api from '../components/Api.js';
import UserInfo from '../components/UserInfo';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithSubmit from '../components/PopupWithSubmit.js';
import PopupWithImage from '../components/PopupWithImage.js';

let userId;

const editFormValidation = new FormValidator(formData, profileForm);
const addFormValidation = new FormValidator(formData, addPicForm);
const avatarFormValidation = new FormValidator(formData, avatarForm);


const popupWithSubmit = new PopupWithSubmit(deletePopup);

const api = new Api(
  'https://mesto.nomoreparties.co/v1/cohort-31',
  {
    authorization: '8ecd362d-8687-40cb-8171-87d5d8b4e71d',
    'Content-Type': 'application/json'
  }
);

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userInfo.setUserInfo(userData);
    userInfo.setUserAvatar(userData);
    userId = userData._id;
    renderCard.renderItems(cards);
  })
  .catch(err => console.log(`Ошибка при изначальной отрисовке данных: ${err}`))

const userInfo = new UserInfo({
  name: profileName,
  job: profileJob,
  avatar: profileAvatar
});

const popupWithAvatar = new PopupWithForm(
  avatarPopup,
  data => {
    popupWithAvatar.loading(true);
    api.patchAvatar(data)
      .then(res => {
      userInfo.setUserAvatar(res);
      popupWithAvatar.close();
      })
      .catch(err => console.log(`Ошибка при изменении аватара: ${err}`))
      .finally(() => {
        popupWithAvatar.loading(false)
      });
  }
);

const popupWithInfo = new PopupWithForm(
  editPopup,
  data => {
    popupWithInfo.loading(true);
    api.patchUserInfo(data)
      .then(res => {
        userInfo.setUserInfo(res);
        popupWithInfo.close();
      })
      .catch(err => console.log(`Ошибка при изменении информации о пользователе: ${err}`))
      .finally(() => {
        popupWithInfo.loading(false);
      });
  }
);

const popupWithForm = new PopupWithForm(
  addPopup,
  data => {
    popupWithForm.loading(true);
    api.addNewCard(data)
      .then(res => {
        renderCard.addItem(createCard(res));
        popupWithForm.close();
      })
      .catch(err => console.log(`Ошибка создания карточки: ${err}`))
      .finally(() => {
        popupWithForm.loading(false);
      });
  }
);

const popupWithImage = new PopupWithImage(
  fullscreenPopup,
  fullscreenPopupSubtitle,
  fullscreenPopupImage
);

const renderCard = new Section(
  item => {
    renderCard.addItem(createCard(item));
  },
  cardList
);

function createCard(newCard) {
  const card = new Card({
    data: newCard,
    handleDeleteCard: () => {
      popupWithSubmit.setSubmitCallback(() => {
        api.deleteCard(card)
          .then(() => {
            card.deleteCard();
            popupWithSubmit.close();
          })
          .catch(err => console.log(`Ошибка при удалении карточки: ${err}`))
      })
      popupWithSubmit.open();
    },
    handleLikeClick: () => {
      if (card.isLiked) {
        api.removeCardLike(card.getCardId())
          .then(res => {
            card.removeLike();
            card.updateLikes(res.likes);
          })
          .catch(err => console.log(`Ошибка при удалении лайка: ${err}`));
      } else {
        api.addCardLike(card.getCardId())
          .then(res => {
            card.addLike();
            card.updateLikes(res.likes);
          })
          .catch(err => console.log(`Ошибка при добавлении лайка: ${err}`));
      }
    },
    handleCardClick: () => {
      popupWithImage.open(newCard.name, newCard.link)
    }
  },
    templateSelector,
    userId
  );
  return card.generateCard();
};

editProfileButton.addEventListener('click', () => {
  const user = userInfo.getUserInfo();
  nameInput.value = user.name;
  jobInput.value = user.about;
  editFormValidation.resetValidation();
  popupWithInfo.open();
});
addButton.addEventListener('click', () => {
  addFormValidation.resetValidation();
  popupWithForm.open();
});
editAvatarButton.addEventListener('click', () => {
  avatarFormValidation.resetValidation();
  popupWithAvatar.open();
});


avatarFormValidation.enableValidation();
editFormValidation.enableValidation();
addFormValidation.enableValidation();

popupWithInfo.setEventListeners();
popupWithImage.setEventListeners();
popupWithForm.setEventListeners();
popupWithSubmit.setEventListeners();
popupWithAvatar.setEventListeners();
