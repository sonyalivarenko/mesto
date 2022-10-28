const content = document.querySelector('.content');
const popupRecording = document.querySelector('.popup-recording');
const photoGrid = content.querySelector('.photo');
const buttonCloseRecording = popupRecording.querySelector('.popup__close');
const buttonOpenRecording = content.querySelector('.profile__edit');
const popupAddImage = document.querySelector('.popup-add-image');
const popupImage = document.querySelector('.popup-image');

const popupContainer = popupRecording.querySelector('.popup__container');
const popupFormRecording = popupContainer.querySelector('.popup__form');

const nameProfile = content.querySelector('.profile__name');
const jobProfile = content.querySelector('.profile__job');
const nameInput = popupContainer.querySelector('.popup__item_value_name');
const jobInput = popupContainer.querySelector('.popup__item_value_job');

const popupContainerAdd = popupAddImage.querySelector('.popup__container');
const popupFormAdd = popupContainerAdd.querySelector('.popup__form_add');
const buttonAdd = content.querySelector('.profile__button');
const buttonAddClose = popupAddImage.querySelector('.popup__close');
const titleInput = popupContainerAdd.querySelector('.popup__item_value_title');
const urlInput = popupContainerAdd.querySelector('.popup__item_value_url');

const bigImageContainer = popupImage.querySelector('.popup-image__container');
const bigImage = popupImage.querySelector('.popup-image__content');
const bigImageName = popupImage.querySelector('.popup-image__name');
const buttonCloseImage = popupImage.querySelector('.popup-image__close');

const initialCards = [
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



//вставка картинок из массива
const createImage = (item) => {
  const photoTemplate = document.querySelector('#photo-template').content;
  const element = photoTemplate.querySelector('.photo__item').cloneNode(true);
  const elementTitle = element.querySelector('.photo__name');
  const elementImage = element.querySelector('.photo__img');
  const buttonDelete = element.querySelector('.photo__button-delete');
  const buttonLike = element.querySelector('.photo__heart');

  elementTitle.textContent = item.name;
  elementImage.src = item.link;
  elementImage.alt = item.name;
 
  buttonDelete.addEventListener('click', () => removeImage(element));
  buttonLike.addEventListener('click', () => likeImage(element));
  elementImage.addEventListener('click', () => {
    showImage(elementImage, elementTitle);
  });
  return element;
};

// добавление картинки на сайт
function addImage(item) {
  photoGrid.prepend(createImage(item));
};

initialCards.forEach(addImage);


// закрытие попапов
function popupClose(popup) {
  popup.classList.remove('popup_active'); 
  document.removeEventListener('keydown', keyHandler);
} 

//открытие попапа для задания имени
function popupOpen(popup) {
  popup.classList.add('popup_active');
  document.addEventListener('keydown', keyHandler);
} 

// сохранить имя и профессию профиля
 function formSubmitHandler(evt) {
   evt.preventDefault();
   nameProfile.textContent = nameInput.value;
   jobProfile.textContent = jobInput.value;
   popupClose(popupRecording);
 }
 
// создание новой картинки
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
};

// поставить лайк
function likeImage(element) {
    const like = element.querySelector('.photo__heart');
    like.classList.toggle('photo__heart_active');
};

// показать картинку увеличенную
function showImage(elementImage, elementTitle) {
  bigImage.src = elementImage.src;
  bigImageName.textContent = elementTitle.textContent;
  bigImage.alt = elementImage.alt;
  popupOpen(popupImage);
};

// удалить картинку
function removeImage(element) {
  element.remove();
};

// открыть форму редактирования имени, автоматически подставляя значение из основного окна
function addNameHandler (popup) {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  popupOpen(popup);
}

// "слушатель" нажатия на клавишу Esc
function keyHandler(evt) {  
  if (evt.key === 'Escape') {
    popup = document.querySelector('.popup_active');
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
});

popupFormRecording.addEventListener('submit', formSubmitHandler);
popupFormAdd.addEventListener('submit', formAddHandler);

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__item_type_error',
  errorClass: 'popup__item-error_active'
});

