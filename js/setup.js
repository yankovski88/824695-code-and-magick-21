"use strict";

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`,
  `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];

const WIZARD_COAT_COLORS = [`rgb (101, 137, 164)`,
  `rgb(241, 43, 107)`,
  `rgb(146, 100, 161)`,
  `rgb(56, 159, 117)`,
  `rgb(215, 210, 55)`,
  `rgb(0, 0, 0)`];

const WIZARD_EYE_COLORS = [
  `black`,
  `red`,
  `blue`,
  `yellow`,
  `green`
];

const WIZARD_FIREBALL_COLORS = [`#ee4830`,
  `#30a8ee`,
  `#5ce6c0`,
  `#e848d5`,
  `#e6e848`];

const setup = document.querySelector(`.setup`);

const setupSimilarList = document.querySelector(`.setup-similar-list`);

const setupSimilar = document.querySelector(`.setup-similar`);
setupSimilar.classList.remove(`hidden`);

const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const wizards = [
  {
    name: WIZARD_NAMES[getRandomInt(WIZARD_NAMES.length)],
    surname: WIZARD_SURNAMES[getRandomInt(WIZARD_SURNAMES.length)],
    coatColor: COAT_COLORS[getRandomInt(COAT_COLORS.length)],
    eyesColor: EYES_COLORS[getRandomInt(EYES_COLORS.length)],
  },
  {
    name: WIZARD_NAMES[getRandomInt(WIZARD_NAMES.length)],
    surname: WIZARD_SURNAMES[getRandomInt(WIZARD_SURNAMES.length)],
    coatColor: COAT_COLORS[getRandomInt(COAT_COLORS.length)],
    eyesColor: EYES_COLORS[getRandomInt(EYES_COLORS.length)],
  },
  {
    name: WIZARD_NAMES[getRandomInt(WIZARD_NAMES.length)],
    surname: WIZARD_SURNAMES[getRandomInt(WIZARD_SURNAMES.length)],
    coatColor: COAT_COLORS[getRandomInt(COAT_COLORS.length)],
    eyesColor: EYES_COLORS[getRandomInt(EYES_COLORS.length)],
  },
  {
    name: WIZARD_NAMES[getRandomInt(WIZARD_NAMES.length)],
    surname: WIZARD_SURNAMES[getRandomInt(WIZARD_SURNAMES.length)],
    coatColor: COAT_COLORS[getRandomInt(COAT_COLORS.length)],
    eyesColor: EYES_COLORS[getRandomInt(EYES_COLORS.length)],
  }
];

const renderWizard = function (wizard) {
  let wizardTemplate = similarWizardTemplate.cloneNode(true);
  wizardTemplate.querySelector(`.setup-similar-label`).textContent = `${wizard.name} ${wizard.surname}`;
  wizardTemplate.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardTemplate.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;
  return wizardTemplate;
};
const fragment = document.createDocumentFragment();
for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
setupSimilarList.appendChild(fragment);

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
  setup.classList.remove(`hidden`);
  document.addEventListener(`keydown`, onPopupEscPress);
};


const closePopup = function () {
  setup.classList.add(`hidden`);
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

const setupWizard = document.querySelector(`.setup-wizard`);
const wizardCoat = setupWizard.querySelector(`.wizard-coat`);
const coatColor = document.querySelector(`#coat-color`);
const getColorOfCoat = function () {
  const coatColorWizard = WIZARD_COAT_COLORS[getRandomInt(WIZARD_COAT_COLORS.length)];
  wizardCoat.style.fill = coatColorWizard;
  coatColor.value = coatColorWizard;
};
wizardCoat.addEventListener(`click`, function () {
  getColorOfCoat();
});


const eyesColor = document.querySelector(`#eyes-color`);
const wizardEyes = setupWizard.querySelector(`.wizard-eyes`);
const getEyeColor = function () {
  const wizardsEyesColor = WIZARD_EYE_COLORS[getRandomInt(WIZARD_EYE_COLORS.length)];
  wizardEyes.style.fill = wizardsEyesColor;
  eyesColor.value = wizardsEyesColor;
};
wizardEyes.addEventListener(`click`, function () {
  getEyeColor();
});

const setupFireballWrap = document.querySelector(`.setup-fireball-wrap`);
const fireballColor = document.querySelector(`#fireball-color`);
const getFireballColor = function () {
  const colorFireball = WIZARD_FIREBALL_COLORS[getRandomInt(WIZARD_FIREBALL_COLORS.length)];
  setupFireballWrap.style.backgroundColor = colorFireball;
  fireballColor.value = colorFireball;
};
setupFireballWrap.addEventListener(`click`, function () {
  getFireballColor();
});

