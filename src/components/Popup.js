export default class Popup {
  constructor (popup_selector) {
    this._popup = document.querySelector(popup_selector);
    this._handleEscClose = this._handleEscClose.bind(this)
  };


  open() {
    this._popup.classList.add('popup_active');
    document.addEventListener('keydown', this._handleEscClose);
  };

  close() {
    this._popup.classList.remove('popup_active'); 
    document.removeEventListener('keydown', this._handleEscClose);
  };

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  };

  setEventListeners() {
    const buttonClose = this._popup.querySelector('.popup__close');
    this._popup.addEventListener('click', (evt) => {
       if ((evt.target.classList.contains('popup_active')) || (buttonClose === evt.target)) {
        this.close();
      }
    })
  }
}