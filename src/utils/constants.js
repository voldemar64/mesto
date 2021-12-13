export const editProfileButton = document.querySelector('.profile__edit-button');
export const addButton = document.querySelector('.profile__add-button');

export const editPopup = '.popup_form_edit';
export const addPopup = '.popup_form_add';
export const fullscreenPopup = '.popup_form_fullscreen';

export const profileForm = document.forms.profile_edit;
export const addPicForm = document.forms.add_pic;

export const nameInput = document.querySelector('.popup__input_value_name');
export const jobInput = document.querySelector('.popup__input_value_job');
export const fullscreenPopupSubtitle = document.querySelector('.popup__subtitle');
export const fullscreenPopupImage = document.querySelector('.popup__image');

export const profileName = '.profile__title';
export const profileJob = '.profile__subtitle';

export const cardList = '.cards__list';

export const templateSelector = '.template';

export const initialCards = [
  {
    title: 'Вальгалла',
    link: 'https://images7.alphacoders.com/107/thumb-1920-1077804.jpg'
  },
  {
    title: 'Синдикат',
    link: 'https://wallup.net/wp-content/uploads/2017/03/27/272365-Assassins_Creed_Syndicate-Assassins_Creed-Ubisoft.jpg'
  },
  {
    title: 'Пираты',
    link: 'https://on-desktop.com/wps/Games_Assassins_creed_4_black_flag_game_2_075157_.jpg'
  },
  {
    title: 'Война за независимость',
    link: 'https://i.ytimg.com/vi/e7qeIFC_un4/maxresdefault_live.jpg'
  },
  {
    title: 'Эцио Аудиторе',
    link: 'https://gamer-info.com/upload-files/user-reviews/2011/assassins-creed-brotherhood-vatar/assassins-creed-brotherhood-1-big.jpg'
  },
  {
    title: 'символ ассасинов',
    link: 'https://www.desktophut.ru/wp-content/uploads/2018/11/vmMDQTcGtsOX0kbegrzJ.jpg'
  }
];

export const formData = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_invalid',
  errorClass: 'popup__input-error_active'
};
