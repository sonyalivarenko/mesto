const content = document.querySelector(".content");
const popup = content.querySelector(".popup");
const buttonClose = content.querySelector(".popup__close");
const buttonOpen = document.querySelector(".profile__edit");
// Находим форму в DOM
let popupContainer = popup.querySelector(".popup__container");
let buttonSave = popupContainer.querySelector(".popup__button");
let nameProfile = document.querySelector(".profile__name");
let jobProfile = document.querySelector(".profile__job");
let nameInput = popupContainer.querySelector(".popup__item");
let jobInput = popupContainer.querySelector(".popup__item_job");


function popupClose() {
  popup.classList.remove("popup_active");
}

function popupOpen() {
  popup.classList.add("popup_active");
}

buttonClose.addEventListener('click', popupClose);
buttonOpen.addEventListener('click', popupOpen);
popupContainer.addEventListener('submit', (evt) => {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  popup.classList.remove("popup_active");
});