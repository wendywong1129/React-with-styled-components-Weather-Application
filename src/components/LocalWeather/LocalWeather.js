import { useEffect, useState } from "react";
import styled from "styled-components";
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import CityName from "./components/CityName/CityName";
import Weather from "./components/Weather/Weather";
import getWeather from "../../apis/getWeather/getWeather";
import cardBg from "../../assets/images/cardBg.png";

const Layout = styled.div`
  padding: 64px 96px;
  display: flex;
  justify-content: space-between;
`;

const LocalWeather = ({ cityId }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getWeather(cityId).then(({ data }) => {
      /*
      setCityName(data.name);
      setTemperature(data.main.temp);
      setMainWeather(data.weather[0].main);
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      */
      setData(data);
      setLoading(false);
    });
  }, [cityId]);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <BackgroundImage src={cardBg}>
      <Layout>
        {/* 
          <Weather
            temperature={temperature}
            mainWeather={mainWeather}
            humidity={humidity}
            wind={wind}
          /> 
        */}
        <Weather
          temperature={data.main.temp}
          mainWeather={data.weather[0].main}
          humidity={data.main.humidity}
          windSpeed={data.wind.speed}
        />
        {/* <CityName name={cityName} /> */}
        <CityName name={data.name} />
      </Layout>
    </BackgroundImage>
  );
};

export default LocalWeather;
