import styled from "styled-components";
import Temperature from "../../../Temperature";
import WeatherIcon from "../../../WeatherIcon";

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  outline: 0;
  background-color: transparent;
  border: none;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  font-size: 1.2rem;
  text-align: center;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  }
`;

const CityName = styled.div`
  width: 100px;
  margin-right: 1rem;
`;

const StyledTemperature = styled(Temperature)`
  width: 4rem;
`;

const StyledWeatherIcon = styled(WeatherIcon)`
  width: 50px;
  height: 50px;
`;

const CityWeather = ({ onClick, name, temperature, weather }) => {
  return (
    <Button onClick={onClick}>
      <CityName>{name}</CityName>
      <StyledTemperature value={temperature} />
      <StyledWeatherIcon
        value={weather.icon}
        description={weather.description}
      />
    </Button>
  );
};

export default CityWeather;
