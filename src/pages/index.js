import './index.css'
import Card from '../components/card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js'; 
import PopupWithDeleteImage from '../components/PopupWithDeleteImage';
import Api from '../components/Api';
import {
  buttonOpenRecording,
  popupFormRecording,
  nameInput,
  jobInput,
  popupFormAdd,
  buttonAdd,
  avatarBox,
  avatar,
  popupFormAvatar,
  //authorization,
  //cohortId,
  initialCards
} from '../utils/constants.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-56',
  headers: {
    authorization: 'bc468cad-c22d-4fac-9dee-cf289e7f43c5',
    'Content-Type': 'application/json'
  }
});

api.getInitialCards()
  .then((result) => {
    //res = JSON.parse(result);
    photoList.renderItems(result);
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });

const photoList = new Section({
  renderer: (element) => {
    addImage(element, photoList)
  }
}, '.photo');



const userInfo = new UserInfo({nameProfile: '.profile__name', jobProfile: '.profile__job'});

const popupRecording = new PopupWithForm('.popup-recording', {
  handleFormSubmit: (data) => {
    userInfo.setUserInfo({nameInput: data.name,
                          jobInput: data.job}); //5
    popupRecording.close()
  }
});

const popupAvatar = new PopupWithForm('.popup-avatar', {
  handleFormSubmit: (data) => {
    addAvatar({link: data.avatar});
    popupAvatar.close();
    validationFormAvatar.disableSubmitButton();
  }
})

const popupAddImage = new PopupWithForm('.popup-add-image', {
  handleFormSubmit: (data) => { 
    addImage({
      name: data.title,
      link: data.url
    }, photoList); 
    popupAddImage.close();
    validationFormAddImage.disableSubmitButton();
  }
});

function addAvatar({link}) {
  avatar.src = link; 
}

function addImage(element, photoList) {
  const photoElement = new Card(element, '#photo-template', handleCardClick, handleCardDelete).generate();
  photoList.addItem(photoElement);
};

const popupImage = new PopupWithImage('.popup-image');

const popupDelete = new PopupWithDeleteImage('.popup-delete', {
  handleSubmit: () => {
    //card
    popupDelete.close();
  }
});

avatarBox.addEventListener('click', () => {
  popupAvatar.open();
})

function handleCardDelete() {
  return popupDelete.open();
}

function handleCardClick(name, link) {
  return popupImage.handleOpenPopup({name,link}); //3
}

function addNameHandler (popup) {
  nameInput.value = userInfo.getUserInfo().nameInput;
  jobInput.value = userInfo.getUserInfo().jobInput;//4
  popup.open();
};


popupAvatar.setEventListeners();
popupDelete.setEventListeners();
popupRecording.setEventListeners();
popupAddImage.setEventListeners();
popupImage.setEventListeners();

/* buttonTrash.addEventListener('click', () => {
  popupDelete.open();
}); */

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

const validationFormAvatar = new FormValidator(objectForValidation, popupFormAvatar);
validationFormAvatar.enableValidation();