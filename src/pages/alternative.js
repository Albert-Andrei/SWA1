import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useEffect, useState } from "react";
import { WeatherService } from "services/WeatherService";
import Header from "components/Header";
import { fetchWithXMLHttpRequest } from "lib/fetchWithXML";

const weatherService = WeatherService(fetchWithXMLHttpRequest);

const LOCATIONS = ["Horsens", "Aarhus", "Copenhagen"];

const Home = () => {
  const [location, setLocation] = useState(LOCATIONS[0]);
  const [historicalData, setHistoricalData] = useState([]);
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    handleLoadData();
  }, [location]);

  function handleChangeLocation(location) {
    setLocation(location);
  }

  async function handleLoadData() {
    const [historicalData, forecastData] = await Promise.all([
      weatherService.getDataByCity(location),
      weatherService.getForecast(location),
    ]);

    setHistoricalData(historicalData);
    setForecastData(forecastData);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />

      <main >
      <div>
        <label htmlFor="select-location">City</label>
        <select
          id="select-location"
          value={location}
          onChange={(e) => handleChangeLocation(e.target.value)}
        >
          {LOCATIONS.map((location) => (
            <option key={location}>{location}</option>
          ))}
        </select>
      </div>

        <hr />

      <h2>The hourly forecast for the next 24 hours</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Type</th>
            <th>Forecast</th>
          </tr>
        </thead>

        <tbody>
          {forecastData?.map((forecast, index) => (
            <tr key={index}>
              <td>{forecast.getFormattedTime()}</td>
              <td>{forecast.type}</td>
              <td>{forecast.getForecast()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr />

      <h2>All data for the latest measurement of each kind</h2>
      <table>
        <thead>
          <tr>
            <th>Measurement</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>About last day</h2>
      <table>
        <thead>
          <tr>
            <th>Minimum temperature</th>
            <th>Maximum temperature</th>
            <th>Total precipitation</th>
            <th>Average wind speed</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
      </main>
    </div>
  );
};

export default Home;