document.getElementById('get-weather').addEventListener('click', function(){
    let city = document.getElementById('city').value;
    let api_key = '5d066958a60d315387d9492393935c19';//API ключ
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${api_key}`;


    //очистка сообщений об ошибках и скрытие блока с погодой
    document.getElementById('error-message').textContent ='';
    document.getElementById('weather-info').style.display = 'none'


    fetch(url)//отпрравка запроса на сервер
    .then(response => {//обработка ответа от сервера
        if (!response.ok) {
            throw new Error('City not found!');
        }
        return response.json();//преобразование тела ответа в формат JSON
    })

        //обработка данный о погоде
    .then(data => {
        document.getElementById('temp').textContent = data.main.temp;
        document.getElementById('pressure').textContent = data.main.pressure;
        document.getElementById('description').textContent = data.main.description;
        document.getElementById('humidity').textContent = data.main.humidity;
        document.getElementById('speed').textContent = data.wind.speed;
        document.getElementById('deg').textContent = data.wind.deg;
        document.getElementById('weather-icon').src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;


        document.getElementById('weather-info').style.display = 'block';
    })
        //обработка ошибок
    .catch(error => {
        document.getElementById('error-message').textContent = error.message;
    });
});