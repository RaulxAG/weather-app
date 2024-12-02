import './SearchResults.css';

export default function SearchResults({ weatherData }) {
    return (
        <>
            <h2>{weatherData.name}</h2>
            <div className='results__grid'>
              <div>
                <p>Clima</p>
                <p>{weatherData.weather[0].description}</p>
              </div>

              <div>
                <p>Temperatura</p>
                <p>{weatherData.main.temp} °C</p>
              </div>

              <div>
                <p>Temp máx</p>
                <p>{weatherData.main.temp_max} °C</p>
              </div>

              <div>
                <p>Temp min</p>
                <p>{weatherData.main.temp_min} °C</p>
              </div>

              <div>
                <p>Sensación Térmica</p>
                <p>{weatherData.main.feels_like} °C</p>
              </div>

              <div>
                <p>Altura</p>
                <p>{weatherData.main.sea_level}m sobre nivel del mar</p>
              </div>


              <div>
                <p>Humedad</p>
                <p>{weatherData.main.humidity} %</p>
              </div>

              <div>
                <p>Nubes</p>
                <p>{weatherData.clouds.all}</p>
              </div>

              <div>
                <p>Viento</p>
                <p>{weatherData.wind.speed} km/h</p>
              </div>
            </div>
        </>
    )
}