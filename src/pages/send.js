import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { useState } from 'react';
import { WeatherService } from 'services/WeatherService';
import Header from 'components/Header/Header';
import { xmlFetcher } from 'lib/fetchers';

const weatherService = WeatherService(xmlFetcher);

const LOCATIONS = ['Horsens', 'Aarhus', 'Copenhagen'];

const SendData = () => {
  const [location, setLocation] = useState(LOCATIONS[0]);
  const [isLoading, setLoading] = useState(false);

  function handleChangeLocation(location) {
    setLocation(location);
  }

  function getInputValue(e, name) {
    return e.target[name].value;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const type = getInputValue(e, 'type');
      const place = getInputValue(e, 'place');
      const value = getInputValue(e, 'value');
      const unit = getInputValue(e, 'unit');

      await weatherService.sendData({
        type,
        place,
        value,
        unit,
      });

      alert('Success!');
      e.target.reset();
    } catch (error) {
      alert('Something went wrong ' + error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="type">Type</label>
            <input id="type" name="type" required />
          </div>

          <div>
            <label htmlFor="select-location">City</label>
            <select
              id="select-location"
              name="place"
              value={location}
              onChange={(e) => handleChangeLocation(e.target.value)}
            >
              {LOCATIONS.map((location) => (
                <option key={location}>{location}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="value">Value</label>
            <input id="value" name="value" required />
          </div>

          <div>
            <label htmlFor="unit">Unit</label>
            <input id="unit" name="unit" required />
          </div>

          <input type="submit" value="Submit" disabled={isLoading} />
        </form>
      </main>
    </div>
  );
};

export default SendData;
