const fullscreenPopup = document.querySelector('.popup_form_fullscreen');
const fullscreenPopupSubtitle = document.querySelector('.popup__subtitle');
const fullscreenPopupImage = document.querySelector('.popup__image');

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
};

function overlayPopupClosing(evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  }
};

const openPopup = popup => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
  popup.addEventListener('click', overlayPopupClosing)};

const openFullscreenPopup = (link, name) => {
  fullscreenPopupSubtitle.textContent = name;
  fullscreenPopupImage.alt = name;
  fullscreenPopupImage.src = link;
  openPopup(fullscreenPopup);
};

const closePopup = popup => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
  popup.removeEventListener('click', overlayPopupClosing);
};

export { fullscreenPopup, openPopup, closePopup, openFullscreenPopup };
