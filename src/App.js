import "./App.css";
import styled from "styled-components";
import { useState, useEffect } from "react";
import DataBox from "./components/data-box";
import Map from './components/map'
import useFetch from "./hooks/useFetch";
import Form from "./components/Form";


const AppStyled = styled.div`
  .App {
    text-align: center;
    color: white;
    height: 350px;
    width: 100%;
    h1 {
      font-size: 26px;
      margin: 0;
      padding: 50px 0;
      font-weight: 500;
    }
  }
  @media screen and (min-width: 1024px) {
    .App {
      height: 300px;
    }
  }
`;

function App() {
  const [ipAddress, setIpAddress] = useState('');
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [ip, setIp] = useState('');
  const [isp, setIsp] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [timezone, setTimezone] = useState('');
  const [country, setCountry] = useState('');

  const apiKey = process.env.REACT_APP_KEY
  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`;


  const {
    data
  } = useFetch(url);

  useEffect(() => {
    if (data) {
      setLatitude(data.location.lat);
      setLongitude(data.location.lng);
      setIp(data.ip);
      setIsp(data.isp);
      setCity(data.location.city);
      setRegion(data.location.region);
      setTimezone(data.location.timezone);
      setCountry(data.location.country)
    }
  }, [data]);

  return (
    <AppStyled>
      <div className="App">
        <h1>IP Address Tracker</h1>
        <Form
          ipAddress={ipAddress}
          setIpAddress={setIpAddress}
        />
        <DataBox ip={ip} isp={isp} city={city} region={region} timezone={timezone} country={country} />
        <Map position={[latitude, longitude]} />
        {console.log(data)}
      </div>
    </AppStyled>
  );
}

export default App;
