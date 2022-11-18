import Card from './card.js';
import FormValidator from './FormValidator.js';

const popupRecording = document.querySelector('.popup-recording');
const buttonCloseRecording = popupRecording.querySelector('.popup__close');
const buttonOpenRecording = document.querySelector('.profile__edit');
const popupAddImage = document.querySelector('.popup-add-image');
const popupImage = document.querySelector('.popup-image');

const popupContainer = popupRecording.querySelector('.popup__container');
const popupFormRecording = popupContainer.querySelector('.popup__form');

const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');
const nameInput = popupContainer.querySelector('.popup__item_value_name');
const jobInput = popupContainer.querySelector('.popup__item_value_job');

const popupContainerAdd = popupAddImage.querySelector('.popup__container');
const popupFormAdd = popupContainerAdd.querySelector('.popup__form_add');
const buttonAdd = document.querySelector('.profile__button');
const buttonAddClose = popupAddImage.querySelector('.popup__close');
const titleInput = popupContainerAdd.querySelector('.popup__item_value_title');
const urlInput = popupContainerAdd.querySelector('.popup__item_value_url');

const bigImageContainer = popupImage.querySelector('.popup-image__container');
const buttonCloseImage = popupImage.querySelector('.popup-image__close');

export const initialCards = [
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  }
];

function addImage(element) {
  const photoGrid = document.querySelector('.photo');
  const photo = new Card(element, '#photo-template', popupOpen);
  const photoElement = photo.generate();
  photoGrid.prepend(photoElement);
};

initialCards.forEach((element) => {
  addImage(element);
}
)

function popupOpen(popup) {
  popup.classList.add('popup_active');
  document.addEventListener('keydown', keyHandler);
} 

function popupClose(popup) {
  popup.classList.remove('popup_active'); 
  document.removeEventListener('keydown', keyHandler);
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  popupClose(popupRecording);
}

function formAddHandler(evt) {
  evt.preventDefault();

  const newImageTitle = titleInput.value;
  const newImageLink = urlInput.value;

  addImage({
    name: newImageTitle,
    link: newImageLink
  });

  popupClose(popupAddImage);

  titleInput.value = '';
  urlInput.value = '';

  FalidationFormAddImage.disableSubmitButton();
};

function addNameHandler (popup) {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  popupOpen(popup);
}

function keyHandler(evt) {  
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_active');
    popupClose(popup);     
  }
}

popupRecording.addEventListener('click', (evt) => {
  if (!popupContainer.contains(evt.target) || (buttonCloseRecording === evt.target)) {
    popupClose(popupRecording);
  }
});

popupAddImage.addEventListener('click', (evt) => {
  if (!popupContainerAdd.contains(evt.target) || (buttonAddClose === evt.target)){
    popupClose(popupAddImage);
  }
});

popupImage.addEventListener('click', (evt) => {
  if (!bigImageContainer.contains(evt.target) || (buttonCloseImage === evt.target)){
    popupClose(popupImage);
  }
});

buttonOpenRecording.addEventListener('click', () => {
  addNameHandler(popupRecording);
});

buttonAdd.addEventListener('click', () => {
  popupOpen(popupAddImage);
})

popupFormRecording.addEventListener('submit', formSubmitHandler);
popupFormAdd.addEventListener('submit', formAddHandler);

new FormValidator({
  formSelector: '.popup__form',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__item_type_error',
  errorClass: 'popup__item-error_active'
}, popupRecording).enableValidation();

const FalidationFormAddImage = new FormValidator({
  formSelector: '.popup__form',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__item_type_error',
  errorClass: 'popup__item-error_active'
}, popupAddImage);

FalidationFormAddImage.enableValidation();