import {useState} from 'react';

import Header from './components/layout/Header';
import WeatherCard from './components/WeatherCard';

const DataUrl = import.meta.env.VITE_URL;
const ApiKey = import.meta.env.VITE_API_KEY;

import './App.css'

function App() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  
  function changeCard(e) {
    if (e === "") return setCity("");

    setLoading(true);
    console.log(e);

    fetch(`${DataUrl}?q=${e}&appid=${ApiKey}&units=metric`)
     .then(resp => resp.json())
     .then((data) => {
      console.log(data);
      setCity(data);
      setLoading(false);
     })
     .catch(err => {
      console.log(err);
      setLoading(false);
     });
  }

  return (
    <>
      <Header handleSubmit={changeCard}/>
      <WeatherCard city={city} loading={loading} />
    </>
  )
}

export default App
