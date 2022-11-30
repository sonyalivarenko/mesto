import './pages/index.css'
import Card from './components/card.js';
import FormValidator from './components/FormValidator.js';
import Section from './components/Section.js';
import Popup from './components/Popup.js'; 
import PopupWithImage from './components/PopupWithImage.js';
import UserInfo from './components/UserInfo.js';
import PopupWithForm from './components/PopupWithForm.js'; 
import {
  buttonOpenRecording,
  popupFormRecording,
  nameInput,
  jobInput,
  popupFormAdd,
  buttonAdd,
  initialCards
} from './utils/constants.js'

const photoList = new Section({
  items: initialCards,
  renderer: (element) => {
    addImage(element, photoList)
  }
}, '.photo');

photoList.renderItems();

const userInfo = new UserInfo({nameProfile: '.profile__name', jobProfile: '.profile__job'});

const popupRecording = new PopupWithForm('.popup-recording', {
  handleFormSubmit: (data) => {
    nameInput.value = data.name;
    jobInput.value = data.job;
    userInfo.setUserInfo([nameInput, jobInput]);
    popupRecording.close()
  }
});

const popupAddImage = new PopupWithForm('.popup-add-image', {
  handleFormSubmit: (data) => {
    const newImageTitle = data.title;
    const newImageLink = data.url;
  
    addImage({
      name: newImageTitle,
      link: newImageLink
    }, photoList);
    
    popupAddImage.close();
    validationFormAddImage.disableSubmitButton();
  }
});

function addImage(element, photoList) {
  const photoElement = new Card(element, '#photo-template', handleCardClick).generate();
  photoList.addItem(photoElement);
};

const popupImage = new Popup('.popup-image');

function handleCardClick(name, link, photoImage) {
  photoImage.addEventListener('click', () => {
  return new PopupWithImage({name,link}, '.popup-image').handleOpenPopup();
  })
}

function addNameHandler (popup) {
  [nameInput.value, jobInput.value] = userInfo.getUserInfo();
  popup.open();
};

popupRecording.setEventListeners();
popupAddImage.setEventListeners();
popupImage.setEventListeners();

buttonOpenRecording.addEventListener('click', () => {
  addNameHandler(popupRecording);
});

buttonAdd.addEventListener('click', () => {
  popupAddImage.open();
});

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