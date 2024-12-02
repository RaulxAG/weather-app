export const fetchWeatherData = async (location) => {
  const apiKey = import.meta.env.OPENWEATHER
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric&lang=es`;
  
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error("No se pudo obtener los datos del clima.");
  }
  
  return await response.json(); // Retorna los datos en formato JSON
};