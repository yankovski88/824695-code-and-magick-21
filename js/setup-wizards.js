'use strict';
(function () {
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


  const wizards = [
    {
      name: WIZARD_NAMES[window.util.getRandomInt(WIZARD_NAMES.length)],
      surname: WIZARD_SURNAMES[window.util.getRandomInt(WIZARD_SURNAMES.length)],
      coatColor: COAT_COLORS[window.util.getRandomInt(COAT_COLORS.length)],
      eyesColor: EYES_COLORS[window.util.getRandomInt(EYES_COLORS.length)],
    },
    {
      name: WIZARD_NAMES[window.util.getRandomInt(WIZARD_NAMES.length)],
      surname: WIZARD_SURNAMES[window.util.getRandomInt(WIZARD_SURNAMES.length)],
      coatColor: COAT_COLORS[window.util.getRandomInt(COAT_COLORS.length)],
      eyesColor: EYES_COLORS[window.util.getRandomInt(EYES_COLORS.length)],
    },
    {
      name: WIZARD_NAMES[window.util.getRandomInt(WIZARD_NAMES.length)],
      surname: WIZARD_SURNAMES[window.util.getRandomInt(WIZARD_SURNAMES.length)],
      coatColor: COAT_COLORS[window.util.getRandomInt(COAT_COLORS.length)],
      eyesColor: EYES_COLORS[window.util.getRandomInt(EYES_COLORS.length)],
    },
    {
      name: WIZARD_NAMES[window.util.getRandomInt(WIZARD_NAMES.length)],
      surname: WIZARD_SURNAMES[window.util.getRandomInt(WIZARD_SURNAMES.length)],
      coatColor: COAT_COLORS[window.util.getRandomInt(COAT_COLORS.length)],
      eyesColor: EYES_COLORS[window.util.getRandomInt(EYES_COLORS.length)],
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

  window.setupWizards = {
    setup,
    WIZARD_COAT_COLORS,
    WIZARD_FIREBALL_COLORS,
    WIZARD_EYE_COLORS,
  };
})();
