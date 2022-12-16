const popupProfile = document.querySelector('.popup-recording');
const popupAddAvatar = document.querySelector('.popup-avatar');
export const buttonOpenRecording = document.querySelector('.profile__edit');
const popupAddCard = document.querySelector('.popup-add-image');
export const popupFormRecording = popupProfile.querySelector('.popup__form');
export const nameInput = document.querySelector('.popup__item_value_name');
export const jobInput = document.querySelector('.popup__item_value_job'); 
export const popupFormAdd = popupAddCard.querySelector('.popup__form_add');
export const buttonAdd = document.querySelector('.profile__button');
export const avatarBox = document.querySelector('.profile__photo');
export const popupFormAvatar = popupAddAvatar.querySelector('.popup__form');
export const configSelector = {
  photoSelector: '.photo',
  photoTemplateSelector: '#photo-template',
  profileNameClass: '.profile__name',
  profileJobClass: '.profile__job',
  profileImageClass: '.profile__img',
  popupRecordingSelector: '.popup-recording',
  popupAvatarSelector: '.popup-avatar',
  popupAddImageSelector: '.popup-add-image',
  popupBigImageSelector: '.popup-image',
  popupDeleteImageSelector: '.popup-delete',
};
export const objectForValidation = {
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__item_type_error',
  errorClass: 'popup__item-error_active'
};