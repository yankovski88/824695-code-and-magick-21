'use strict';
(function () {
  const setupWizard = document.querySelector(`.setup-wizard`);
  const wizardCoat = setupWizard.querySelector(`.wizard-coat`);
  const coatColor = document.querySelector(`#coat-color`);

  const onWizardCoatClick = function () {
    window.util.renderColorForElement(wizardCoat, coatColor, window.util.getRandomColor(window.setupWizards.WIZARD_COAT_COLORS));

  };
  wizardCoat.addEventListener(`click`, onWizardCoatClick);

  const eyesColor = document.querySelector(`#eyes-color`);
  const wizardEyes = setupWizard.querySelector(`.wizard-eyes`);

  const onWizardEyes = function () {
    window.util.renderColorForElement(wizardEyes, eyesColor, window.util.getRandomColor(window.setupWizards.WIZARD_EYE_COLORS));
  };
  wizardEyes.addEventListener(`click`, onWizardEyes);

  const setupFireballWrap = document.querySelector(`.setup-fireball-wrap`);
  const fireballColor = document.querySelector(`#fireball-color`);

  const onSetupFireballWrap = function () {
    window.util.renderColorForElement(setupFireballWrap, fireballColor, window.util.getRandomColor(window.setupWizards.WIZARD_FIREBALL_COLORS));

  };
  setupFireballWrap.addEventListener(`click`, onSetupFireballWrap);


})();
