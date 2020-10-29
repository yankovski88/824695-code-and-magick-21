'use strict';
(function () {
  const ESC_KEYCODE = 27;
  const ENTER_KEYCODE = 13;

  const isEscEvent = function (evt, action) {
    if (evt.keyCode === ESC_KEYCODE) {
      action();
    }
  };

  const isEnterEvent = function (evt, action) {
    if (evt.keyCode === ENTER_KEYCODE) {
      action();
    }
  };

  const getRandomColor = function (colors) {
    const colorRandom = colors[getRandomInt(colors.length)];
    return colorRandom;
  };

  const renderColorForElement = function (elementHTML, elementValueHTML, colorWizard) {
    if (elementHTML.tagName.toLowerCase() === `div`) {
      elementHTML.style.backgroundColor = colorWizard;
      elementValueHTML.value = colorWizard;
    } else {
      elementHTML.style.fill = colorWizard;
      elementValueHTML.value = colorWizard;
    }
  };

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


  window.util = {
    isEscEvent,
    isEnterEvent,
    getRandomColor,
    renderColorForElement,
    getRandomInt
  };
})();
