const popupProfile = document.querySelector('.popup-recording');
export const buttonOpenRecording = document.querySelector('.profile__edit');
const popupAddCard = document.querySelector('.popup-add-image');
export const popupFormRecording = popupProfile.querySelector('.popup__form');
export const nameInput = document.querySelector('.popup__item_value_name');
export const jobInput = document.querySelector('.popup__item_value_job'); 
export const popupFormAdd = popupAddCard.querySelector('.popup__form_add');
export const buttonAdd = document.querySelector('.profile__button');

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