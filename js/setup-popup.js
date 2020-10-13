'use strict';
(function () {

  const setupOpen = document.querySelector(`.setup-open`);
  const setupClose = document.querySelector(`.setup-close`);
  const setupOpenIcon = document.querySelector(`.setup-open-icon`);
  const setupUserName = document.querySelector(`.setup-user-name`);


  const closePopup = function () {
    window.setupWizards.setup.classList.add(`hidden`);
    document.removeEventListener(`keydown`, onPopupEscPress);
  };

  const openPopup = function () {
    window.setupWizards.setup.classList.remove(`hidden`);
    document.addEventListener(`keydown`, onPopupEscPress);
  };

  const onPopupEscPress = function (evt) {
    if (setupUserName !== document.activeElement) {
      window.util.isEscEvent(evt, closePopup);
    }
  };


  setupOpen.addEventListener(`click`, openPopup);

  const onSetupOpenIconKeydownEnter = function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  };
  setupOpenIcon.addEventListener(`keydown`, onSetupOpenIconKeydownEnter);

  setupClose.addEventListener(`keydown`, function (evt) {
    if (evt.code === `Enter`) {
      closePopup();
    }
  });

  setupClose.addEventListener(`click`, closePopup);
  const setup = document.querySelector(`.setup`);

  const dialogHandle = setup.querySelector(`.upload`);

  const onDialogHandleMousedown = function (evt) {
    evt.preventDefault();

    let startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    let draged = false;
    const onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      draged = true;

      const shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + `px`;
      setup.style.left = (setup.offsetLeft - shift.x) + `px`;
    };

    const onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener(`mousemove`, onMouseMove);
      document.removeEventListener(`mouseup`, onMouseUp);

      if (draged) {
        const onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandle.removeEventListener(`click`, onClickPreventDefault);
        };

        dialogHandle.addEventListener(`click`, onClickPreventDefault);
      }
    };

    document.addEventListener(`mousemove`, onMouseMove);
    document.addEventListener(`mouseup`, onMouseUp);
  };
  dialogHandle.addEventListener(`mousedown`, onDialogHandleMousedown);


})();
