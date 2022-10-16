const content = document.querySelector('.content');
const popup = document.querySelector('.popup');
const photoGrid = content.querySelector('.photo');
const buttonClose = document.querySelector('.popup__close');
const buttonOpen = content.querySelector('.profile__edit');
const popupAddImage = document.querySelector('.popup_add-image');
const popupImage = document.querySelector('.popup-image');

const popupContainer = popup.querySelector('.popup__container');
const popupForm = popupContainer.querySelector('.popup__form');
const buttonSave = popupContainer.querySelector('.popup__button');

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

const photoTemplate = document.querySelector('#photo-template').content.querySelector('.photo__item');

//вставка картинок из массива
const createImage = (item) => {
  const element = photoTemplate.cloneNode(true);
  const elementTitle = element.querySelector('.photo__name');
  const elementImage = element.querySelector('.photo__img');
  const buttonDelete = element.querySelector('.photo__button-delete');
  const buttonLike = element.querySelector('.photo__heart');

  elementTitle.textContent = item.name;
  elementImage.src = item.link;
  elementImage.alt = item.name;
 
  buttonDelete.addEventListener('click', () => removeImage(element));
  buttonLike.addEventListener('click', () => likeImage(element));
  elementImage.addEventListener('click', () => showImage(elementImage, elementTitle));

  photoGrid.prepend(element);
};

initialCards.forEach(createImage);

// закрытие попапов
function popupClose() {
  popup.classList.remove('popup_active');
  popupAddImage.classList.remove('popup_active');
  popupImage.classList.remove('popup_active');
} 

//открытие попапа для задания имени
function popupOpen() {
  popup.classList.add('popup_active');
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
} 

// сохранить имя и профессию профиля
 function formSubmitHandler(evt) {
   evt.preventDefault();
   nameProfile.textContent = nameInput.value;
   jobProfile.textContent = jobInput.value;
   popupClose();
 }
 
// создание новой картинки
 function formAddHandler(evt) {
  evt.preventDefault();

  const newImageTitle = titleInput.value;
  const newImageLink = urlInput.value;

   createImage({
      name: newImageTitle,
      link: newImageLink
    });

  popupClose();
};

 // открыть попап добавления картинки
function popupAdd() { 
  popupAddImage.classList.add('popup_active');
};

// поставить лайк
function likeImage(element) {
    const like = element.querySelector('.photo__heart');
    like.classList.toggle('photo__heart_active');
};

// показать картинку увеличенную
function showImage(elementImage, elementTitle) {
  popupImage.classList.add('popup_active');
  bigImage.src = elementImage.src;
  bigImageName.textContent = elementTitle.textContent;
};

// удалить картинку
function removeImage(element) {
  element.remove();
};


buttonClose.addEventListener('click', popupClose);
buttonAddClose.addEventListener('click', popupClose);
buttonCloseImage.addEventListener('click',popupClose);

buttonOpen.addEventListener('click', popupOpen);
buttonAdd.addEventListener('click', popupAdd);

popupForm.addEventListener('submit', formSubmitHandler);
popupFormAdd.addEventListener('submit', formAddHandler);

