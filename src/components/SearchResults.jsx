import './SearchResults.css';

export default function SearchResults({ weatherData }) {
    return (
        <section className='results'>
            <h2>{weatherData.name}</h2>
            <div className='results__grid'>
              <div>
                <p>Temperatura: {weatherData.main.temp} °C</p>
              </div>

              <div>
                <p>Clima: {weatherData.weather[0].description}</p>
              </div>

              <div>
                <p>Humedad: {weatherData.main.humidity}</p>
              </div>
            </div>
        </section>
    )
}