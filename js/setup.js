"use strict";

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`,
  `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];

const setup = document.querySelector(`.setup`);
// setup.classList.remove(`hidden`);

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

const renderWizard = function (wizardsArr) {
  let wizardTemplate = similarWizardTemplate.cloneNode(true);
  wizardTemplate.querySelector(`.setup-similar-label`).textContent = `${wizardsArr.name} ${wizardsArr.surname}`;
  wizardTemplate.querySelector(`.wizard-coat`).style.fill = wizardsArr.coatColor;
  wizardTemplate.querySelector(`.wizard-eyes`).style.fill = wizardsArr.eyesColor;
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


let onPopupEscPress = function (evt) {
  if (evt.code === `Escape`) {
    evt.preventDefault();
    closePopup();
  }
};

const openPopup = function () {
  setup.classList.remove(`hidden`);
  document.addEventListener(`keydown`, onPopupEscPress);
};
setupOpen.addEventListener(`click`, function () {
  openPopup();
});


const closePopup = function () {
  setup.classList.add(`hidden`);
  document.removeEventListener(`keydown`, onPopupEscPress);
};

setupClose.addEventListener(`click`, function () {
  closePopup();
});

const onPopupPressEnterOnClose = function (evt) {
  if (evt.code === `Enter`) {
    closePopup();
  }
};

setupClose.addEventListener(`keydown`, function (evt) {
  onPopupPressEnterOnClose(evt);
});


setupOpenIcon.addEventListener(`keydown`, function () {
  openPopup();
});

// Не сделал: Задание 1.2.  Если фокус находится на форме ввода имени, то окно закрываться не должно.
// Не сделал: Задание 1.4, 1.5

let coatColors = [`rgb (101, 137, 164)`,
  `rgb(241, 43, 107)`,
  `rgb(146, 100, 161)`,
  `rgb(56, 159, 117)`,
  `rgb(215, 210, 55)`,
  `rgb(0, 0, 0)`];

const setupWizard = document.querySelector(`.setup-wizard`);
const wizardCoat = setupWizard.querySelector(`.wizard-coat`);
const coatColor = document.querySelector(`#coat-color`);
const getColorOfCoat = function () {
  const coatColorWizard = coatColors[getRandomInt(coatColors.length)];
  wizardCoat.style.fill = coatColorWizard;
  coatColor.value = coatColorWizard;
};
wizardCoat.addEventListener(`click`, function () {
  getColorOfCoat();
});

const eyeColors = [
  `black`,
  `red`,
  `blue`,
  `yellow`,
  `green`
];
const eyesColor = document.querySelector(`#eyes-color`);
const wizardEyes = setupWizard.querySelector(`.wizard-eyes`);
const getEyeColor = function () {
  const wizardsEyesColor = eyeColors[getRandomInt(eyeColors.length)];
  wizardEyes.style.fill = wizardsEyesColor;
  eyesColor.value = wizardsEyesColor;
};
wizardEyes.addEventListener(`click`, function () {
  getEyeColor();
});

const fireballColors = [`#ee4830`,
  `#30a8ee`,
  `#5ce6c0`,
  `#e848d5`,
  `#e6e848`];
const setupFireballWrap = document.querySelector(`.setup-fireball-wrap`);
const fireballColor = document.querySelector(`#fireball-color`);
const getFireballColor = function () {
  const colorFireball = fireballColors[getRandomInt(fireballColors.length)];
  setupFireballWrap.style.backgroundColor = colorFireball;
  fireballColor.value = colorFireball;
};
setupFireballWrap.addEventListener(`click`, function () {
  getFireballColor();
});

