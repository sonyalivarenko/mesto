import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popup_selector, {handleFormSubmit}) {
    super(popup_selector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popup.querySelector('.popup__form')
  };

  _getInputValues() {
    this._inputList = this._popupForm.querySelectorAll('.popup__item');
    this._formValues = {};
    this._inputList.forEach(input => 
      this._formValues[input.name] = input.value);
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  close() {
    super.close() 
    this._popupForm.reset();
  }
}