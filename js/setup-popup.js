// setupPopup
(function(){
const setupOpen = document.querySelector(`.setup-open`);
const setupClose = document.querySelector(`.setup-close`);
const setupOpenIcon = document.querySelector(`.setup-open-icon`);
const setupUserName = document.querySelector(`.setup-user-name`);

const onPopupEscPress = function (evt) {
  if (setupUserName !== document.activeElement) {
    if (evt.code === `Escape`) {
      evt.preventDefault();
      closePopup();
    }
  }
};

setupOpen.addEventListener(`click`, function () {
  openPopup();
});

setupOpenIcon.addEventListener(`keydown`, function () {
  openPopup();
});

const openPopup = function () {
  window.setupWizards.setup.classList.remove(`hidden`);
  document.addEventListener(`keydown`, onPopupEscPress);
};


const closePopup = function () {
  window.setupWizards.setup.classList.add(`hidden`);
  document.removeEventListener(`keydown`, onPopupEscPress);
};

setupClose.addEventListener(`keydown`, function (evt) {
  if (evt.code === `Enter`) {
    closePopup();
  }
});

setupClose.addEventListener(`click`, function () {
  closePopup();
});

})();
