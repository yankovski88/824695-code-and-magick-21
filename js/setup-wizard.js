'use strict';
(function () {
  const setupWizard = document.querySelector(`.setup-wizard`);
  const wizardCoat = setupWizard.querySelector(`.wizard-coat`);
  const coatColor = document.querySelector(`#coat-color`);

  wizardCoat.addEventListener(`click`, function () {
    window.util.renderColorFillForElement(wizardCoat, coatColor, window.util.getRandomColor(window.setupWizards.WIZARD_COAT_COLORS));
  });

  const eyesColor = document.querySelector(`#eyes-color`);
  const wizardEyes = setupWizard.querySelector(`.wizard-eyes`);

  wizardEyes.addEventListener(`click`, function () {
    window.util.renderColorFillForElement(wizardEyes, eyesColor, window.util.getRandomColor(window.setupWizards.WIZARD_EYE_COLORS));
  });

  const setupFireballWrap = document.querySelector(`.setup-fireball-wrap`);
  const fireballColor = document.querySelector(`#fireball-color`);

  setupFireballWrap.addEventListener(`click`, function () {
    window.util.renderColorBackgroundForElement(setupFireballWrap, fireballColor, window.util.getRandomColor(window.setupWizards.WIZARD_FIREBALL_COLORS));
  });
})();
