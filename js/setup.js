"use strict";

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`,
  `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];

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


