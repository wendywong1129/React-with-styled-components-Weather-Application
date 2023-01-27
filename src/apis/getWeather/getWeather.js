import OpenWeatherMap from "../../libs/OpenWeatherMap";

const getWeather = (id) =>
  OpenWeatherMap.get({ path: "/weather", params: { id } });

export default getWeather;
