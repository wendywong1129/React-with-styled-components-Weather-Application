import styled from "styled-components";
import Temperature from "../../../Temperature";
import WeatherIcon from "../../../WeatherIcon";

const Wrapper = styled.div`
  text-align: center;

  & ~ & {
    margin-left: 1rem;
  }
`;

const Day = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const StyledWeatherIcon = styled(WeatherIcon)`
  width: 70px;
  height: 70px;
`;

const StyledTemperature = styled(Temperature)`
  font-size: 1.25rem;
`;

const DailyWeather = ({ day, weather, temperature }) => {
  return (
    <Wrapper>
      <Day>{day}</Day>
      <StyledWeatherIcon
        value={weather.icon}
        description={weather.description}
      />
      <div>
        <StyledTemperature value={temperature} />
      </div>
    </Wrapper>
  );
};

export default DailyWeather;
