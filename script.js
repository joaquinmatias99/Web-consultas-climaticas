const apiKEY = 'e9fe0bc678cb4cfa2c2cc4602f66910d';

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('textClima').value;
    if (ciudad) {
        fetchDatosClima(ciudad);
    }
});

function fetchDatosClima(ciudad) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKEY}&units=metric`;
    fetch(url)
        .then(data => data.json())
        .then(data => mostrarDatosClima(data))
        .catch(error => console.error('Error fetching data:', error));
}

function mostrarDatosClima(data) {
    const divDatosClima = document.getElementById('datosClima');
    divDatosClima.innerHTML = ''; //Pone en blanco cada vez que busca

    console.log(data)

    const ciudadNombre = data.name;
    const temperatura = data.main.temp;
    const humedad = data.main.humidity;
    const pais = data.sys.country;
    const descripcion = data.weather[0].description;
    const icono = data.weather[0].icon

    const campoCiudad = document.createElement('h2');
    campoCiudad.textContent = `${ciudadNombre}, ${pais}`;

    const campoTemperatura = document.createElement('p');
    campoTemperatura.textContent = `Temperatura: ${Math.floor(temperatura)} °C`;

    const campoHumedad = document.createElement('p');
    campoHumedad.textContent = `Humedad: ${humedad} %`;

    const campoDescripcion = document.createElement('p');
    campoDescripcion.textContent = `La descripción meteorologica es: ${descripcion}`;

    const iconoInfo = document.createElement('img');
    iconoInfo.src=`https://openweathermap.org/img/wn/${icono}@2x.png`;

    divDatosClima.appendChild(campoCiudad);
    divDatosClima.appendChild(campoTemperatura);
    divDatosClima.appendChild(campoHumedad);
    divDatosClima.appendChild(iconoInfo);
    divDatosClima.appendChild(campoDescripcion);
}
