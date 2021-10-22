const fullscreenPopup = document.querySelector('.popup_form_fullscreen');
const fullscreenPopupSubtitle = document.querySelector('.popup__subtitle');
const fullscreenPopupImage = document.querySelector('.popup__image');

const escPopupClosing =  (evt, popupForm) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
    resetAddPopup(popupForm);
  }
};

const overlayPopupClosing = (evt, popupForm) => {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
    resetAddPopup(popupForm);
  }
};

const resetAddPopup = popupForm => {
  if (popupForm.classList.contains('popup__container_form_add')) {
    popupForm.reset();
  }
}

const openPopup = popup => {
  const popupForm =  popup.querySelector('.popup__container');

  popup.classList.add('popup_opened');
  document.addEventListener('keydown', (evt) => {
    escPopupClosing(evt, popupForm);
  });
  popup.addEventListener('click', (evt) => {
    overlayPopupClosing(evt, popupForm);
  });
};

const openFullscreenPopup = (link, name) => {
  fullscreenPopupSubtitle.textContent = name;
  fullscreenPopupImage.alt = name;
  fullscreenPopupImage.src = link;
  openPopup(fullscreenPopup);
}

const closePopup = popup => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', escPopupClosing);
  popup.removeEventListener('click', overlayPopupClosing);
}

export { fullscreenPopup, openPopup, closePopup, openFullscreenPopup };
