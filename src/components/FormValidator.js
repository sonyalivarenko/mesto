export default class FormValidator {
  constructor (config, form) {
    this._form = form;
    this._inputList = Array.from(this._form.querySelectorAll(config.inputSelector));
    this._buttonElement = this._form.querySelector(config.submitButtonSelector);
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;   
  }
   
  _setEventListeners() { 
    this._inputList.forEach((inputElement) => {
      const errorElement = this._form.querySelector(`.${inputElement.id}-error`);  
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement, errorElement);
        this._toggleButtonState();
      });
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this.disableSubmitButton();
    }
    else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _checkInputValidity(inputElement, errorElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage, errorElement);
    } else {
      this._hideInputError(inputElement, errorElement);
    }
  }

  _showInputError(inputElement, errorMessage, errorElement) {
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement, errorElement) {
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }

  disableSubmitButton() {
    this._buttonElement.classList.add(this._inactiveButtonClass); //1
    this._buttonElement.disabled = true;
  }

  enableValidation() {  
    this._setEventListeners();
    this._toggleButtonState();
  }
}