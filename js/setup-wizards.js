'use strict';
(function () {


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


  // const MAX_SIMILAR_WIZARD_COUNT = 4;

  const setup = document.querySelector(`.setup`);

  const setupSimilarList = document.querySelector(`.setup-similar-list`);

  const setupSimilar = document.querySelector(`.setup-similar`);
  setupSimilar.classList.remove(`hidden`);

  // const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

  const renderWizard = function (wizard) {
    let wizardTemplate = similarWizardTemplate.cloneNode(true);
    wizardTemplate.querySelector(`.setup-similar-label`).textContent = `${wizard.name}`; // ${wizard.surname}`;
    wizardTemplate.querySelector(`.wizard-coat`).style.fill = wizard.colorCoat;
    wizardTemplate.querySelector(`.wizard-eyes`).style.fill = wizard.colorEyes;
    return wizardTemplate;
  };

  const onError = function (errorMessage) {
    const node = document.createElement(`div`);
    node.style = `z-index: 100; margin: 0 auto; text-align: center; background-color: red;`;
    node.style.position = `absolute`;
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = `30px`;

    node.textContent = errorMessage;
    document.body.insertAdjacentElement(`afterbegin`, node);
  };

  const onLoad = function (wizards) {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < MAX_SIMILAR_WIZARD_COUNT; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    setupSimilarList.appendChild(fragment);
  };

  // не понимаю откуда взялось wizards
  window.backend.load(onLoad, onError);

  const form = document.querySelector(`.setup-wizard-form`); // нашли форму
  form.addEventListener(`submit`, function (evt) { // установили обработчик и колбек функцию
    window.backend.save(new FormData(form), function () { // передали data это new FormData(form) все что нужно это
      // передать ссулку на элемент с формой (form) // и функцию колбэк при успешной отправке
      setup.classList.add(`hidden`);
    }, onError);
    evt.preventDefault();
  });


  window.setupWizards = {
    setup,
    WIZARD_COAT_COLORS,
    WIZARD_FIREBALL_COLORS,
    WIZARD_EYE_COLORS,
  };
})();
