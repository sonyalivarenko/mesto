const content = document.querySelector('.content');
const popup = document.querySelector('.popup');
const buttonClose = popup.querySelector('.popup__close');
const buttonOpen = content.querySelector('.profile__edit');
// Находим форму в DOM
const popupContainer = popup.querySelector('.popup__container');
const buttonSave = popupContainer.querySelector('.popup__button');
const nameProfile = content.querySelector('.profile__name');
const jobProfile = content.querySelector('.profile__job');
const nameInput = popupContainer.querySelector('.popup__item_value_name');
const jobInput = popupContainer.querySelector('.popup__item_value_job');

function popupClose() {
  popup.classList.remove('popup_active');
}

function popupOpen() {
  popup.classList.add('popup_active');
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  popupClose();
}

buttonClose.addEventListener('click', popupClose);
buttonOpen.addEventListener('click', popupOpen);
popupContainer.addEventListener('submit', formSubmitHandler);