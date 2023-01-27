import styled from "styled-components";
import Temperature from "../../../Temperature";
import WeatherItem from "./components/WeatherItem/WeatherItem";

const Wrapper = styled.div`
  text-align: center;
`;

const StyledTemperature = styled(Temperature)`
  color: white;
  font-size: 5rem;
`;

const MainWeather = styled.div`
  margin-top: 0.25rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.5rem;
  letter-spacing: 5px;
`;

const VerticalDivider = styled.div`
  margin: 0 2rem;
  width: 2px;
  background-color: rgba(255, 255, 255, 0.7);
`;

const HumidityAndWind = styled.div`
  margin-top: 3rem;
  display: flex;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.2rem;
`;

const Weather = ({ temperature, mainWeather, humidity, windSpeed }) => {
  /*
    const [temperature, setTemperature] = useState();
    const [mainWeather, setMainWeather] = useState();
    const [humidity, setHumidity] = useState();
    const [wind, setWind] = useState();
    const [loading, setLoading] = useState(true);
  */

  /*
    useEffect(() => {
      getWeather("2158177").then(({ data }) => {
        setCityName(data.name);
        setTemperature(data.main.temp);
        setMainWeather(data.weather[0].main);
        setHumidity(data.main.humidity);
        setWind(data.wind.speed);

        setLoading(false);
      });
    }, []);

    if (loading) {
      return <div>Loading</div>;
    }
  */

  return (
    <Wrapper>
      <StyledTemperature value={temperature} />
      <MainWeather>{mainWeather}</MainWeather>
      <HumidityAndWind>
        <WeatherItem title="Humidity">{`${humidity}%`}</WeatherItem>
        <VerticalDivider />
        <WeatherItem title="Wind">{`${windSpeed} K/M`}</WeatherItem>
      </HumidityAndWind>
    </Wrapper>
  );
};

export default Weather;
