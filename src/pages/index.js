import './index.css'
import Card from '../components/card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js'; 
import PopupWithDeleteImage from '../components/PopupWithDeleteImage.js';
import Api from '../components/Api.js';
import {
  buttonOpenRecording,
  popupFormRecording,
  nameInput,
  jobInput,
  popupFormAdd,
  buttonAdd,
  avatarBox,
  popupFormAvatar,
} from '../utils/constants.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-56',
  headers: {
    authorization: 'bc468cad-c22d-4fac-9dee-cf289e7f43c5',
    'Content-Type': 'application/json'
  }
});

const photoList = new Section({
  renderer: (card) => {
    addImage(card, photoList);
  }
}, '.photo');

const userInfo = new UserInfo({nameProfile: '.profile__name', jobProfile: '.profile__job', avatarProfile: '.profile__img'});

let userId;

Promise.all([api.getInitialCards(), api.getProfileInfo()])
  .then(([cards, profileInfo]) => {
    userId = profileInfo._id;
    photoList.renderItems(cards);
    userInfo.setUserInfo({nameInput: profileInfo.name, jobInput: profileInfo.about});
    userInfo.setUserAvatar(profileInfo.avatar)
  })
  .catch((err) => {
    console.log(err); 
  }); 

const popupRecording = new PopupWithForm('.popup-recording', {
  handleFormSubmit: (data) => {
    popupRecording.renderLoading(true);
    api.editProfile(data)
      .then((userData) => {
        userInfo.setUserInfo({
          nameInput: userData.name,
          jobInput: userData.about});
        popupRecording.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupRecording.renderLoading(false);
      })
  }
});

const popupAvatar = new PopupWithForm('.popup-avatar', {
  handleFormSubmit: (data) => {
    popupAvatar.renderLoading(true);
    api.getNewAvatar(data)
      .then((avatarLink) => {
        userInfo.setUserAvatar(avatarLink.avatar);
        popupAvatar.close();
        validationFormAvatar.disableSubmitButton();
        
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupAvatar.renderLoading(false);
      })
  }
})

const popupAddImage = new PopupWithForm('.popup-add-image', {
  handleFormSubmit: (data) => { 
    popupAddImage.renderLoading(true);
    api.getNewCard({
      name: data.title,
      link: data.url})
      .then((card) => {
          addImage(card, photoList);
          popupAddImage.close();
          validationFormAddImage.disableSubmitButton();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          popupAddImage.renderLoading(false);
        })
}});

function addImage(card, photoList) {
  const photoElement = new Card(card, userId, '#photo-template', handleCardClick, handleCardDelete, handleCardLike, handleCardLikeDelete).generate();
  photoList.addItem(photoElement);
};

const popupImage = new PopupWithImage('.popup-image');

const popupDelete = new PopupWithDeleteImage('.popup-delete', {
  handleSubmit: (cardId, card) => {
    api.deleteCard(cardId)
      .then(() => {
        card.removeImage();
        popupDelete.close();
      })
      .catch((err) => {
        console.log(err);
      }); 
  }
});

avatarBox.addEventListener('click', () => {
  popupAvatar.open();
})

function handleCardLike(cardId, card) {
  api.likeCard(cardId)
    .then((res) => {
      card.likeImage(res);
    }) 
    .catch((err) => {
      console.log(err);
    }); 
}

function handleCardLikeDelete(cardId, card) {
  api.deleteLike(cardId)
    .then((res) => {
      card.likeImage(res);
    }) 
    .catch((err) => {
      console.log(err);
    }); 
}

function handleCardDelete(cardId, card) {
  return popupDelete.open(cardId, card);
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