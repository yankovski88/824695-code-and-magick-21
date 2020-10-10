'use strict';
(function () {
  const setupOpen = document.querySelector(`.setup-open`);
  const setupClose = document.querySelector(`.setup-close`);
  const setupOpenIcon = document.querySelector(`.setup-open-icon`);
  const setupUserName = document.querySelector(`.setup-user-name`);

  const onPopupEscPress = function (evt) {
    if (setupUserName !== document.activeElement) {
      window.util.isEscEvent(evt, closePopup);
      evt.preventDefault();
      // console.log(`evt.preventDef ESC`);
      // При нажитии Enter window.util.isEnterEvent(evt, openPopup) автоматически выоплняется этот код
      // console.log(`evt.preventDef ESC` ), хоть должен выполняться после нажатия ESC почему так?
      // Считаю если есть более одного  действия, то этим методом нельзя пользоваться. Правильно?
      // Крайний случай это заранее расчитвыат сколько будет парметров, что означает хардкор.
    }
  };

  setupOpen.addEventListener(`click`, function () {
    openPopup();
  });

  setupOpenIcon.addEventListener(`keydown`, function (evt) {
    window.util.isEnterEvent(evt, openPopup);
    evt.preventDefault();
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
