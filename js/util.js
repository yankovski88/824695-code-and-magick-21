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

  const renderColorFillForElement = function (elementHTML, elementValueHTML, colorWizard) {
    elementHTML.style.fill = colorWizard;
    elementValueHTML.value = colorWizard;
  };
  const renderColorBackgroundForElement = function (elementHTML, elementValueHTML, colorWizard) {
    elementHTML.style.backgroundColor = colorWizard;
    elementValueHTML.value = colorWizard;
  };

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  window.util = {
    isEscEvent,
    isEnterEvent,
    getRandomColor,
    renderColorFillForElement,
    renderColorBackgroundForElement,
    getRandomInt
  };
})();
