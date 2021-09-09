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

const initialCards = [
  {
    name: 'ржака))',
    link: 'https://www.anekdot.ru/i/caricatures/normal/19/6/30/1561912837.jpg'
  },
  {
    name: 'вот это хохма))',
    link: 'https://www.anekdot.ru/i/caricatures/normal/21/9/9/1631139130.jpg'
  },
  {
    name: 'маты',
    link: 'https://bestmemes.ucoz.net/_nw/3/82360999.jpg'
  },
  {
    name: 'Дыо',
    link: 'https://r1.mt.ru/r29/photoDA1A/20511755605-0/jpg/bp.jpeg'
  },
  {
    name: 'жожа',
    link: 'https://avatars.mds.yandex.net/get-vthumb/3337002/b1c2b05a19388e84dda4b34e8ab82588/564x318_1'
  },
  {
    name: 'мем',
    link: 'https://screenlifer.com/wp-content/uploads/2019/04/38842051_1551724358302-1-1024x644.jpg'
  }
]; // извините, если вам картинки несмешными покажутся
   //просто сейчас 2:01 а мне в школу просыпаться в 7:40
   //и идти на 7 уроков. Не скучайте крч ;)

const openPopup = (popup) => {
  popup.classList.add('popup_opened');

}

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
}

const deleteCard = (evt) => {
  evt.target.closest('.card').remove();
}

const addLike = (evt) => {
  evt.target.classList.toggle('card__like-button_liked');
}

const renderCard = (card, list) => {
  list.prepend(card);
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
      name: `${titleInput.value}`,
      link: `${linkInput.value}`
    }
  ];
  generateCard(newCard[0]);
  closePopup(addPopup);
  titleInput.value = '';
  linkInput.value = '';
}

const openFullscreenPopup = (evt) => {
  const card = evt.target.closest('.card')
  const cardText = card.querySelector('.card__heading').textContent;

  fullscreenPopupSubtitle.textContent = cardText;
  fullscreenPopupImage.alt = cardText;
  fullscreenPopupImage.src = card.querySelector('.card__photo').src;
  openPopup(fullscreenPopup);
}

const generateCard = (photoData) => {
  const cardElement = document.querySelector('.template').content.querySelector('.card').cloneNode(true);
  const cardList = document.querySelector('.cards__list');

  cardElement.querySelector('.card__photo').src = photoData.link;
  cardElement.querySelector('.card__photo').alt = photoData.name;
  cardElement.querySelector('.card__photo').addEventListener('click', openFullscreenPopup);
  cardElement.querySelector('.card__heading').textContent = photoData.name;
  cardElement.querySelector('.card__delete-button').addEventListener('click', deleteCard);
  cardElement.querySelector('.card__like-button').addEventListener('click', addLike);

  renderCard(cardElement, cardList);
}

initialCards.forEach((defaultPhoto) => {
  generateCard(defaultPhoto);
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
  openPopup(addPopup);
})
closeAddFormButton.addEventListener('click', () => {
  closePopup(addPopup);
})
closeFullscreenButton.addEventListener('click', () => {
  closePopup(fullscreenPopup);
})
profileForm.addEventListener('submit', submitProfile);
addPicForm.addEventListener('submit', submitPicture);
