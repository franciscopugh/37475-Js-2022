const divDolar = document.getElementById("divDolar")
const divClima = document.getElementById("divClima")
const formClima = document.getElementById("formClima")

const API_KEY = "bfd1b980aa5416c251b43fb2f1ba6c22";

function consultarDolar() {
    fetch("https://criptoya.com/api/dolar")
    .then(response => response.json())
    .then(({oficial, solidario, blue, mep, ccb, ccl}) => {
        divDolar.innerHTML = `
            <div class="dolarCss"> 
                <h2>Cotizaciones del dolar </h2>
                <p>Oficial:$ ${oficial} </p>
                <p>Solidario:$ ${solidario} </p>
                <p>MEP:$ ${mep} </p>
                <p>CCL:$ ${ccl} </p>
                <p>Blue:$ ${blue} </p>
                <p>CCB:$ ${ccb} </p>
            </div>
        
        `
    })
}

consultarDolar()

setInterval(() => {
    consultarDolar()
}, 30000)


formClima.addEventListener('submit', (e) => {
    e.preventDefault()

    const datForm = new FormData(e.target)

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${datForm.get("ciudad")},${datForm.get("provincia")},${datForm.get("pais")}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        let {lat, lon, name, state, country } = data[0]
    
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=sp&units=metric&appid=${API_KEY}`)
        .then(response => response.json())
        .then(({main, weather}) => {
            let {feels_like: sensTermica, humidity: humedad, pressure: presion, temp } = main
            let desClima = weather[0].description
            divClima.innerHTML = `
                <div>
                    <h2>Clima en ${name} </h2>
                    <p>Provincia: ${state} </p>
                    <p>Pais: ${country} </p>
                    <p>Temperatura: ${temp} °C</p>
                    <p>Sensacion Termica: ${sensTermica} °C</p>
                    <p>Humedad: ${humedad}% </p>
                    <p>Presion: ${presion} hPa </p>
                    <p>Descripcion: ${desClima} </p>
                </div>
            
            `
        })
    })
    
})


