(function () {


//прорисовка мага
const setupWizard = document.querySelector(`.setup-wizard`);
const wizardCoat = setupWizard.querySelector(`.wizard-coat`);
const coatColor = document.querySelector(`#coat-color`);
const getColorOfCoat = function () {
  const coatColorWizard = window.setupWizards.WIZARD_COAT_COLORS[window.setupWizards.getRandomInt(window.setupWizards.WIZARD_COAT_COLORS.length)];
  wizardCoat.style.fill = coatColorWizard;
  coatColor.value = coatColorWizard;
};
wizardCoat.addEventListener(`click`, function () {
  getColorOfCoat();
});


const eyesColor = document.querySelector(`#eyes-color`);
const wizardEyes = setupWizard.querySelector(`.wizard-eyes`);
const getEyeColor = function () {
  const wizardsEyesColor = window.setupWizards.WIZARD_EYE_COLORS[window.setupWizards.getRandomInt(window.setupWizards.WIZARD_EYE_COLORS.length)];
  wizardEyes.style.fill = wizardsEyesColor;
  eyesColor.value = wizardsEyesColor;
};
wizardEyes.addEventListener(`click`, function () {
  getEyeColor();
});

const setupFireballWrap = document.querySelector(`.setup-fireball-wrap`);
const fireballColor = document.querySelector(`#fireball-color`);
const getFireballColor = function () {
  const colorFireball = window.setupWizards.WIZARD_FIREBALL_COLORS[window.setupWizards.getRandomInt(window.setupWizards.WIZARD_FIREBALL_COLORS.length)];
  setupFireballWrap.style.backgroundColor = colorFireball;
  fireballColor.value = colorFireball;
};
setupFireballWrap.addEventListener(`click`, function () {
  getFireballColor();
});
})();
