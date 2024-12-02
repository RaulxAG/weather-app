import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import './Search.css';
import { fetchWeatherData } from '../utils/api';
import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';
import SearchResults from './SearchResults';

export default function Search() {
  const arrayLocations = ["Granada", "Jaén", "Almería"];
  const [exampleLocation, setExampleLocation] = useState('');
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [debouncedValue] = useDebounce(searchValue, 2000);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % arrayLocations.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setExampleLocation(arrayLocations[index]);
  }, [index]);

  useEffect(() => {
    if (!debouncedValue) return;

    const fetchWeather = async () => {
      setError(null);
      setLoading(true);

      try {
        const data = await fetchWeatherData(debouncedValue);
        setWeatherData(data);
        console.log(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [debouncedValue]);

  const resetState = () => {
    setSearchValue('');
    setWeatherData(null);
    setError(null);
    setLoading(false);
  };

  return (
    <section>
        {!weatherData && !loading && (
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder={exampleLocation}
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
              />
            </form>
        )}

        {loading && (
            <Spinner />
        )}

        {!loading && weatherData && (
          <section className='results'>
            <button onClick={resetState}><i className="fa-solid fa-magnifying-glass"></i></button>
            <SearchResults weatherData={weatherData} />
          </section>
        )}

        {!loading && error && <ErrorMessage message={error} />}
    </section>
  );
}
