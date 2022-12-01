export default class UserInfo {
  constructor({nameProfile, jobProfile}) {
    this._name = document.querySelector(nameProfile);
    this._job = document.querySelector(jobProfile);
  }

  getUserInfo() {
    this._nameInput = this._name.textContent;
    this._jobInput = this._job.textContent;
    return  {nameInput: this._nameInput, 
             jobInput: this._jobInput}
  }

  setUserInfo({nameInput, jobInput}) {
    this._name.textContent = nameInput;
    this._job.textContent = jobInput;
  }
}