"use strict";

const WISARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const SUR_NAME = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COAT_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`,
  `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];

const setup = document.querySelector(`.setup`);
setup.classList.remove(`hidden`);

const setupSimilarList = document.querySelector(`.setup-similar-list`);

const setupSimilar = document.querySelector(`.setup-similar`);
setupSimilar.classList.remove(`hidden`);

const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const wizards = [
  {
    name: WISARD_NAMES[getRandomInt(WISARD_NAMES.length)],
    surname: SUR_NAME[getRandomInt(SUR_NAME.length)],
    coatColor: COAT_COLOR[getRandomInt(COAT_COLOR.length)],
    eyesColor: EYES_COLOR[getRandomInt(EYES_COLOR.length)],
  },
  {
    name: WISARD_NAMES[getRandomInt(WISARD_NAMES.length)],
    surname: SUR_NAME[getRandomInt(SUR_NAME.length)],
    coatColor: COAT_COLOR[getRandomInt(COAT_COLOR.length)],
    eyesColor: EYES_COLOR[getRandomInt(EYES_COLOR.length)],
  },
  {
    name: WISARD_NAMES[getRandomInt(WISARD_NAMES.length)],
    surname: SUR_NAME[getRandomInt(SUR_NAME.length)],
    coatColor: COAT_COLOR[getRandomInt(COAT_COLOR.length)],
    eyesColor: EYES_COLOR[getRandomInt(EYES_COLOR.length)],
  },
  {
    name: WISARD_NAMES[getRandomInt(WISARD_NAMES.length)],
    surname: SUR_NAME[getRandomInt(SUR_NAME.length)],
    coatColor: COAT_COLOR[getRandomInt(COAT_COLOR.length)],
    eyesColor: EYES_COLOR[getRandomInt(EYES_COLOR.length)],
  }
];

const renderWizards = function (wizardsArr) {
  for (let i = 0; i < wizards.length; i++) {
    let wizardTemplate = similarWizardTemplate.cloneNode(true);
    setupSimilarList.appendChild(wizardTemplate);
    similarWizardTemplate.querySelector(`.setup-similar-label`).textContent = `${wizardsArr[i].name} ${wizardsArr[i].surname}`;
    similarWizardTemplate.querySelector(`.wizard-coat`).style.fill = wizardsArr[i].coatColor;
    similarWizardTemplate.querySelector(`.wizard-eyes`).style.fill = wizardsArr[i].eyesColor;
  }
};

renderWizards(wizards);


