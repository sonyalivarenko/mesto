// функция проходится по массиву форм и начинает "валидировать" их
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
    const inactiveButtonClass = config.inactiveButtonClass;
    const inputErrorClass = config.inputErrorClass;
    const errorClass = config.errorClass;
    setEventListeners(formElement, inputList, buttonElement, inactiveButtonClass, inputErrorClass, errorClass);
  });
};

// принимает параметром элемент формы и добавляет её полям нужные обработчики (выключение/включение кнопки, валидация inputов)
const setEventListeners = (formElement, inputList, buttonElement, inactiveButtonClass, inputErrorClass, errorClass) => { 
  toggleButtonState(inputList, buttonElement, inactiveButtonClass);
  inputList.forEach((inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.addEventListener('input', function () {
      checkInputValidity(inputElement, errorElement, inputErrorClass, errorClass);
      toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    });
  });
};

// функция делает кнопку активной/неактивной
function toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
  if (hasInvalidInput(inputList)) {
    disableSubmitButton(buttonElement);
  }
  else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.disabled = false;
  }
}

// валидный элемент или нет?
function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
     return !inputElement.validity.valid;
 })};

// показывает ошибку инпута, если данные введены неккоректно
const checkInputValidity = (inputElement, errorElement, inputErrorClass, errorClass) => {
  if (!inputElement.validity.valid) {
    showInputError(inputElement, inputElement.validationMessage, errorElement, inputErrorClass, errorClass);
  } else {
    hideInputError(inputElement, errorElement, inputErrorClass, errorClass);
  }
};

// функция, стилизующая ошибку для инпута
const showInputError = (inputElement, errorMessage, errorElement, inputErrorClass, errorClass) => {
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};

//функция, удаляющая ошибку для инпута
const hideInputError = (inputElement, errorElement, inputErrorClass, errorClass) => {
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
};

const disableSubmitButton = (buttonElement) => {
    buttonElement.classList.add('popup__button_inactive');
    buttonElement.disabled = true;
}
