import Card from './card.js';
import FormValidator from './FormValidator.js';

const popupRecording = document.querySelector('.popup-recording');
const buttonCloseRecording = popupRecording.querySelector('.popup__close');
const buttonOpenRecording = document.querySelector('.profile__edit');
const popupAddImage = document.querySelector('.popup-add-image');
const popupImage = document.querySelector('.popup-image');

const popupContainerRecording = popupRecording.querySelector('.popup__container');
const popupFormRecording = popupContainerRecording.querySelector('.popup__form');

const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');
const nameInput = popupContainerRecording.querySelector('.popup__item_value_name');
const jobInput = popupContainerRecording.querySelector('.popup__item_value_job');

const popupContainerAdd = popupAddImage.querySelector('.popup__container');
const popupFormAdd = popupContainerAdd.querySelector('.popup__form_add');
const buttonAdd = document.querySelector('.profile__button');
const buttonAddClose = popupAddImage.querySelector('.popup__close');
const titleInput = popupContainerAdd.querySelector('.popup__item_value_title');
const urlInput = popupContainerAdd.querySelector('.popup__item_value_url');

const bigImageContainer = popupImage.querySelector('.popup-image__container');
const buttonCloseImage = popupImage.querySelector('.popup-image__close');

const photoGrid = document.querySelector('.photo');

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
  const photoElement = createCard(element);
  photoGrid.prepend(photoElement);
};

function createCard(element) {
    const photo = new Card(element, '#photo-template', handleOpenPopup).generate();
    return photo;
  }

function handleOpenPopup(name, link) {
    const bigImage = popupImage.querySelector('.popup-image__content');
    const bigImageName = popupImage.querySelector('.popup-image__name');
    bigImage.src = link;
    bigImageName.textContent = name;
    bigImage.alt = link;
    openPopup(popupImage);
};

initialCards.forEach(addImage);

function openPopup(popup) {
  popup.classList.add('popup_active');
  document.addEventListener('keydown', keyHandler);
};

function closePopup(popup) {
  popup.classList.remove('popup_active'); 
  document.removeEventListener('keydown', keyHandler);
};

function formRecordingHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupRecording);
};

function formAddHandler(evt) {
  evt.preventDefault();

  const newImageTitle = titleInput.value;
  const newImageLink = urlInput.value;

  addImage({
    name: newImageTitle,
    link: newImageLink
  });

  closePopup(popupAddImage);

  popupFormAdd.reset();

  validationFormAddImage.disableSubmitButton();
};

function addNameHandler (popup) {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(popup);
};

function keyHandler(evt) {  
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_active');
    closePopup(popup);     
  }
};

popupRecording.addEventListener('click', (evt) => {
  if (!popupContainerRecording.contains(evt.target) || (buttonCloseRecording === evt.target)) {
    closePopup(popupRecording);
  }
});

popupAddImage.addEventListener('click', (evt) => {
  if (!popupContainerAdd.contains(evt.target) || (buttonAddClose === evt.target)){
    closePopup(popupAddImage);
  }
});

popupImage.addEventListener('click', (evt) => {
  if (!bigImageContainer.contains(evt.target) || (buttonCloseImage === evt.target)){
    closePopup(popupImage);
  }
});

buttonOpenRecording.addEventListener('click', () => {
  addNameHandler(popupRecording);
});

buttonAdd.addEventListener('click', () => {
  openPopup(popupAddImage);
});

popupFormRecording.addEventListener('submit', formRecordingHandler);
popupFormAdd.addEventListener('submit', formAddHandler);

const objectForValidation = {
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__item_type_error',
  errorClass: 'popup__item-error_active'
};

new FormValidator(objectForValidation, popupFormRecording).enableValidation();

const validationFormAddImage = new FormValidator(objectForValidation, popupFormAdd);

validationFormAddImage.enableValidation();