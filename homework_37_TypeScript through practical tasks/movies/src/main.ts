// получаем элементы
// @ts-ignore
let searchInput: HTMLInputElement | null = document.getElementById('searchInput')
let resultsContainer: HTMLElement | null = document.getElementById('results')


let debounceTimeout: number


//обработчик событий input
searchInput?.addEventListener('input', function(e: Event): void {
  if (!searchInput || !resultsContainer) return// добавляем проверку на null

  let query: string = searchInput.value.trim() // получаем текст из поля ввода

  let encodedQuery: string = encodeURIComponent(query)// кодируем строку запроса для безопасного использования в URL


  //если поле пустое, запрос не отправляем
  if (query === '') {
    if (resultsContainer) {
      resultsContainer.innerHTML = ''//очищаем результаты
    }
    return
  }

  //очистка предыдущего таймера
  clearTimeout(debounceTimeout)


  //новый таймер, отправляет запрос через 300мс после ввода
  debounceTimeout = setTimeout((): void => {
    let apiKey: string = '44acfe38'
    let url: string = `http://www.omdbapi.com/?s=${encodedQuery}&apikey=${apiKey}`// используем параметр для поиска по названию фильма


    //отправляем запрос
    fetch(url)
      .then((response: Response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok.')
        }
        return response.json() // преобразуем ответ в формат JSON
      })
      .then((data: {
        Response: string,
        Search: Array<{ Title: string, Year: string, Type: string, Poster: string }>
      }): void => {
        if (data.Response === 'True') {
          let resultsHTML: string = ''
          data.Search.forEach((movie: { Title: string, Year: string, Type: string, Poster: string }): void => {
            resultsHTML += `<div>
  <h3>${movie.Title} (${movie.Year})</h3>
  <p>Type: ${movie.Type}</p>
  <img src="${movie.Poster}" alt="${movie.Title}" width="100">
  </div>`
          })
          if (resultsContainer) {
            resultsContainer.innerHTML = resultsHTML//отображает результаты
          }
        } else {
          if (resultsContainer) {
            resultsContainer.innerHTML = '<p>Movie not found</p>'
          }
        }
      })
      .catch((error: Error): void => {
        console.log(error)// выведет ошибку
        if (resultsContainer) {
          resultsContainer.innerHTML = '<p>Error, movie not found</p>'
        }
      })
  }, 300)
})
