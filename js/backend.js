'use strict';
(function () {
  const URL_DATA = `https://21.javascript.pages.academy/code-and-magick/data`;
  let statusCode = {
    OK: 200
  };
  const TIMEOUT_IN_MS = 10000;

  const load = function (onLoad, onError) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = `json`;

    xhr.addEventListener(`load`, function () {
      if (xhr.status === statusCode.OK) {
        onLoad(xhr.response); // в функцию поместили данные
      } else {
        onError(`Статус ответа:  ${xhr.status} ${xhr.statusText}`);
      }
    });
    xhr.addEventListener(`error`, function () {
      onError(`Произошла ошибка соединения`);
    });
    xhr.addEventListener(`timeout`, function () {
      onError(`Запрос не успел выполниться за ` + xhr.timeout + `мс`);
    });

    xhr.timeout = TIMEOUT_IN_MS;

    xhr.open(`GET`, URL_DATA);
    xhr.send();
  };


  const URL = `https://21.javascript.pages.academy/code-and-magick`;
  // data данные
  // onSuccess колбек функция если успех. Успех может быт разный закрыть форму, вывести сообщение и т.д.
  const save = function (data, onLoad, onError) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = `json`;
    xhr.addEventListener(`load`, function () {
      if (xhr.status === statusCode.OK) {
        onLoad(xhr.response); // если загрузка прошла успешно, то в этот колбек передали ответ от сервера
      } else {
        onError(`Статус ответа:  ${xhr.status} ${xhr.statusText}`);
      }
    });
    xhr.addEventListener(`timeout`, function () {
      onError(`Отправка не успела выполниться за ` + xhr.timeout + `мс`);
    });
    xhr.timeout = 1000;
    xhr.open(`POST`, URL);
    xhr.send(data); // передаем данные которые хотим отослать серверу
  };
  window.backend = {
    load,
    save
  };
})();
