export default class UserInfo {
  constructor({nameProfile, jobProfile, avatarProfile}) {
    this._name = document.querySelector(nameProfile);
    this._job = document.querySelector(jobProfile);
    this._avatar = document.querySelector(avatarProfile);
  }

  getUserInfo() {
    return  {nameInput: this._name.textContent, 
             jobInput: this._job.textContent}
  }

  setUserInfo({nameInput, jobInput}) {
    this._name.textContent = nameInput;
    this._job.textContent = jobInput;
  }

  setUserAvatar(avatar) {
    this._avatar.src = avatar;
    this._avatar.alt = 'Аватар профиля';
  }
}