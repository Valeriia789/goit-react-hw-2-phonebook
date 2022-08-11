// Для загрузки данных напишем для себя отдельный модуль, 
// который назовём load.js и положим в папку utils. 
// Загрузка данных будет происходить асинхронно после инициализации самого приложения, 
// поэтому удобно воспользоваться промисами:

// load.js с промисами
export default url => {
  return new Promise((success, fail) => {
    const request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.addEventListener('load', () => {
      request.status >= 200 && request.status < 400
        ? success(request.responseText)
        : fail(new Error(`Request Failed: ${request.statusText}`));
    });

    request.addEventListener('error', () => {
      fail(new Error('Network Error'));
    });

    request.send();
  });
};


// Теперь мы можем асинхронно загрузить любой файл с сервера подобным образом

// // импортируем функцию для загрузки
// import load from './utils/load';

// load('data.json')
//   .then(data => {
//     /* эта функция сработает для загруженных данных */
//   });
// Напомню, что данные, которые мы хотим загрузить с сервера
//  представляют собой массив объектов вида

// {
//   "id": 0,
//   "name": "Chad Snyder",
//   "age": 28,
//   "phone": "(629) 653-9041",
//   "image": "owl",
//   "phrase": "Owmeco jen be tezpoksim vojuz..."
// }

// http://jsraccoon.ru/react-sort-and-search