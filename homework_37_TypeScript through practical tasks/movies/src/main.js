"use strict";
// получаем элементы
let searchInput = document.getElementById('searchInput');
let resultsContainer = document.getElementById('results');
let debounceTimeout;
//обработчик событий input
searchInput === null || searchInput === void 0 ? void 0 : searchInput.addEventListener('input', function (e) {
    if (!searchInput || !resultsContainer)
        return; // добавляем проверку на null
    let query = searchInput.value.trim(); // получаем текст из поля ввода
    let encodedQuery = encodeURIComponent(query); // кодируем строку запроса для безопасного использования в URL
    //если поле пустое, запрос не отправляем
    if (query === '') {
        if (resultsContainer) {
            resultsContainer.innerHTML = ''; //очищаем результаты
        }
        return;
    }
    //очистка предыдущего таймера
    clearTimeout(debounceTimeout);
    //новый таймер, отправляет запрос через 300мс после ввода
    debounceTimeout = setTimeout(() => {
        let apiKey = '44acfe38';
        let url = `http://www.omdbapi.com/?s=${encodedQuery}&apikey=${apiKey}`; // используем параметр для поиска по названию фильма
        //отправляем запрос
        fetch(url)
            .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            return response.json(); // преобразуем ответ в формат JSON
        })
            .then((data) => {
            if (data.Response === 'True') {
                let resultsHTML = '';
                data.Search.forEach((movie) => {
                    resultsHTML += `<div>
  <h3>${movie.Title} (${movie.Year})</h3>
  <p>Type: ${movie.Type}</p>
  <img src="${movie.Poster}" alt="${movie.Title}" width="100">
  </div>`;
                });
                if (resultsContainer) {
                    resultsContainer.innerHTML = resultsHTML; //отображает результаты
                }
            }
            else {
                if (resultsContainer) {
                    resultsContainer.innerHTML = '<p>Movie not found</p>';
                }
            }
        })
            .catch((error) => {
            console.log(error); // выведет ошибку
            if (resultsContainer) {
                resultsContainer.innerHTML = '<p>Error, movie not found</p>';
            }
        });
    }, 300);
});
