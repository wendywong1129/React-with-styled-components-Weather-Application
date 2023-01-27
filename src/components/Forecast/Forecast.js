import { useEffect, useState } from "react";
import { getDay } from "date-fns";
import styled from "styled-components";
import Section from "../Section";
import DailyWeather from "./components/DailyWeather";
import get3HourForecast from "../../apis/get3HourForecast";

const Layout = styled.div`
  margin-top: 1rem;
  display: flex;
`;

const Forecast = ({ cityId }) => {
  /*
    const [forecast, setForecast] = useState([
      {
        id: "MON",
        day: "MON",
        temperature: "21",
        weather: { icon: "04d", description: "Clouds" },
      },
      {
        id: "TUE",
        day: "TUE",
        temperature: "24",
        weather: { icon: "01n", description: "Rain" },
      },
      {
        id: "WED",
        day: "WED",
        temperature: "30",
        weather: { icon: "01d", description: "Clear" },
      },
      {
        id: "THU",
        day: "THU",
        temperature: "21",
        weather: { icon: "04d", description: "Clouds" },
      },
    ]);
  */

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    get3HourForecast(cityId).then(({ data }) => {
      setData(data);
      setLoading(false);
    });
  }, [cityId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const forecast = data.list.filter(({ dt_txt }) =>
    dt_txt.endsWith("00:00:00")
  );

  const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return (
    <Section title="Forecast">
      <Layout>
        {forecast.map(({ dt, main: { temp }, weather: [weather] }) => {
          // console.log(dt);
          // console.log(new Date(dt));
          // console.log(getDay(new Date(dt * 1000)));
          return (
            <DailyWeather
              key={dt}
              day={DAYS[getDay(new Date(dt * 1000))]}
              temperature={temp}
              weather={weather}
            />
          );
        })}
        {/* 
          <DailyWeather
            day="MON"
            temperature="21"
            weather={{ icon: "04d", description: "Clouds" }}
          />
          <DailyWeather
            day="TUE"
            temperature="24"
            weather={{ icon: "01n", description: "Rain" }}
          />
          <DailyWeather
            day="WED"
            temperature="30"
            weather={{ icon: "01d", description: "Clear" }}
          />
          <DailyWeather
            day="THU"
            temperature="21"
            weather={{ icon: "04d", description: "Clouds" }}
          /> 
        */}
      </Layout>
    </Section>
  );
};

export default Forecast;
