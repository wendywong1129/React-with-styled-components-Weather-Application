import OpenWeatherMap from "../../libs/OpenWeatherMap";

const get3HourForecast = (id) =>
  OpenWeatherMap.get({ path: "/forecast", params: { id } });

export default get3HourForecast;
