import { useEffect, useState } from "react";
import getWeathers from "../../apis/getWeathers/getWeathers";
import Section from "../Section";
import CityWeather from "./components/CityWeather";

const OtherCities = ({ currentCityId, setCurrentCityId }) => {
  /*
    const [weathers, setWeathers] = useState([
      {
        id: "MELBOURNE",
        name: "Melbourne",
        temperature: "21",
        weather: { icon: "04d", description: "Clouds" },
      },
      {
        id: "SYDNEY",
        name: "Sydney",
        temperature: "24",
        weather: { icon: "01n", description: "Rain" },
      },
      {
        id: "PERTH",
        name: "Perth",
        temperature: "30",
        weather: { icon: "01d", description: "Clear" },
      },
    ]);
  */
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const otherCitiesId = [2158177, 2147714, 2174003, 2063523].filter(
      (id) => id !== currentCityId
    );

    getWeathers(otherCitiesId).then(({ data }) => {
      setData(data);
      setLoading(false);
    });
  }, [currentCityId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Section title="Other cities">
      {/* 
        <CityWeather
          name="Melbourne"
          temperature="21"
          weather={{ icon: "04d", description: "Clouds" }}
        />
        <CityWeather
          name="Sydney"
          temperature="24"
          weather={{ icon: "01n", description: "Rain" }}
        />
        <CityWeather
          name="Perth"
          temperature="30"
          weather={{ icon: "01d", description: "Clear" }}
        /> 
      */}
      {data.list.map(({ id, name, main: { temp }, weather: [weather] }) => (
        <CityWeather
          key={id}
          onClick={() => setCurrentCityId(id)}
          name={name}
          temperature={temp}
          weather={weather}
        />
      ))}
    </Section>
  );
};

export default OtherCities;
