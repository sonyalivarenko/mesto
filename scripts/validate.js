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
      checkInputValidity(formElement, inputElement, errorElement, inputErrorClass, errorClass);
      toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    });
  });
};

// функция делает кнопку активной/неактивной
function toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
  }
  else {
    buttonElement.classList.remove(inactiveButtonClass);
  }
}

// валидный элемент или нет?
function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
     return !inputElement.validity.valid;
 })};

// показывает ошибку инпута, если данные введены неккоректно
const checkInputValidity = (formElement, inputElement, errorElement, inputErrorClass, errorClass) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, errorElement, inputErrorClass, errorClass);
  } else {
    hideInputError(formElement, inputElement, errorElement, inputErrorClass, errorClass);
  }
};

// функция, стилизующая ошибку для инпута
const showInputError = (formElement, inputElement, errorMessage, errorElement, inputErrorClass, errorClass) => {
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};

//функция, удаляющая ошибку для инпута
const hideInputError = (formElement, inputElement, errorElement, inputErrorClass, errorClass) => {
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
};