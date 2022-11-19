export default class Card {
  constructor (data, selector, handleOpenPopup) {
    this._selector = selector;
    this._handleOpenPopup = handleOpenPopup;
    this._name = data.name;
    this._link = data.link;

  }

  _getElement() {
    const photoTemplate = document.querySelector(this._selector).content;
    const photoElement = photoTemplate.querySelector('.photo__item').cloneNode(true);
  
    return photoElement;
  }

  _likeImage() {
    const like = this._element.querySelector('.photo__heart');
    like.classList.toggle('photo__heart_active');
  }

  _removeImage() {
    this._element.remove();
  };

  _setEventListeners() {
    this._buttonDelete.addEventListener('click', () => this._removeImage());
    this._buttonLike.addEventListener('click', () => this._likeImage());
    this._photoImage.addEventListener('click', () => {
      this._handleOpenPopup(this._name, this._link)
    });
  }

  _createImage() {
    this._photoTitle.textContent = this._name;
    this._photoImage.src = this._link;
    this._photoImage.alt = this._name;
    
  }

    generate() {
      this._element =  this._getElement();
      this._photoTitle = this._element.querySelector('.photo__name');
      this._photoImage = this._element.querySelector('.photo__img');
      this._buttonDelete = this._element.querySelector('.photo__button-delete');
      this._buttonLike = this._element.querySelector('.photo__heart');
  
      this._createImage();
      this._setEventListeners();
      return this._element;
    }
}