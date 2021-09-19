const editProfileButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeProfileButton = document.querySelector('.popup__close-button_form_edit');
const closeAddFormButton = document.querySelector('.popup__close-button_form_add');
const closeFullscreenButton = document.querySelector('.popup__close-button_form_fullscreen');

const editPopup = document.querySelector('.popup_form_edit');
const addPopup = document.querySelector('.popup_form_add');
const fullscreenPopup = document.querySelector('.popup_form_fullscreen');
const profileForm = document.querySelector('.popup__container_form_edit');
const addPicForm = document.querySelector('.popup__container_form_add');

const nameInput = document.querySelector('.popup__input_value_name');
const jobInput = document.querySelector('.popup__input_value_job');
const titleInput = document.querySelector('.popup__input_value_title');
const linkInput = document.querySelector('.popup__input_value_link');

const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const fullscreenPopupSubtitle = document.querySelector('.popup__subtitle');
const fullscreenPopupImage = document.querySelector('.popup__image');

const cardList = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('.template').content.querySelector('.card');

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

const escPopupClosing =  evt => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
};

const overlayPopupClosing = evt => {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  }
};

const openPopup = popup => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', escPopupClosing);
  popup.addEventListener('click', overlayPopupClosing);

}

const closePopup = popup => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', escPopupClosing);
  popup.removeEventListener('click', overlayPopupClosing);
}

const deleteCard = evt => {
  evt.target.closest('.card').remove();
}

const addLike = evt => {
  evt.target.classList.toggle('card__like-button_liked');
}

const renderCard = card => {
  cardList.prepend(card);
}

const submitProfile = evt => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(editPopup);
}

const submitPicture = evt => {
  evt.preventDefault();
  newCard =
    {
      name: `${titleInput.value}`,
      link: `${linkInput.value}`
    };
  renderCard(generateCard(newCard));
  closePopup(addPopup);
  titleInput.value = '';
  linkInput.value = '';
}

const openFullscreenPopup = evt => {
  const card = evt.target.closest('.card')
  const cardText = card.querySelector('.card__heading').textContent;

  fullscreenPopupSubtitle.textContent = cardText;
  fullscreenPopupImage.alt = cardText;
  fullscreenPopupImage.src = card.querySelector('.card__photo').src;
  openPopup(fullscreenPopup);
}

const generateCard = photoData => {
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.card__photo').src = photoData.link;
  cardElement.querySelector('.card__photo').alt = photoData.name;
  cardElement.querySelector('.card__photo').addEventListener('click', openFullscreenPopup);
  cardElement.querySelector('.card__heading').textContent = photoData.name;
  cardElement.querySelector('.card__delete-button').addEventListener('click', deleteCard);
  cardElement.querySelector('.card__like-button').addEventListener('click', addLike);

  return cardElement
}

initialCards.forEach(defaultPhoto => {
  renderCard(generateCard(defaultPhoto));
});

editProfileButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(editPopup);
});
closeProfileButton.addEventListener('click', () => {
  closePopup(editPopup);
});

addButton.addEventListener('click', () => {
  const buttonElement = addPicForm.querySelector('.popup__submit-button');
  buttonElement.setAttribute('disabled', 'pleasework');
  buttonElement.classList.add('popup__submit-button_disabled');
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
