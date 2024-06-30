import CeuLimpo from '../assets/CEU-LIMPO.jpg';
import TempoFrio from '../assets/tempo-frio.webp';

import './WeatherCard.css';

function WeatherCard({city, loading}) {
    function getCityImage() {
        const cityTemp = city.main.temp;
        let img;

        if (cityTemp <= 20) {
            img = TempoFrio;
            console.log("Frio");
        }
        
        if (cityTemp >= 20) {
            img = CeuLimpo;
            console.log("Limpo");
        }

        

        return <img src={img} alt={cityTemp} />;
    }

    return (
        <div className="weather-container">
            {!loading ? (
                <>
                    {!city?.cod && (
                <div id="none">
                    <figure className="weather-image">
                        <h1>?</h1>
                    </figure>
                    <p>Nenhuma cidade pesquisada!</p>
                </div>
            )}

            {city?.cod === 200 && (
                <>
                    <figure className="weather-image">
                        {getCityImage()}
                    </figure>
                    <h2>{city.name}</h2>
                    <div className="infos">
                        <h3>Temperatura: <span>{Math.round(city.main.temp)}°C</span></h3>
                        <h3>Sensação Térmica: <span>{Math.round(city.main.feels_like)}°C</span></h3>
                        <h3>Humidade: <span>{city.main.humidity}%</span></h3>
                    </div>
                </>
            )}
            
            {city?.cod === '404' && (
                <div id="not-found">
                    <p>Cidade não encontrada!</p>
                </div>
            )}
                </>
            ) : (
                <h2>Carregando...</h2>
            )}
        </div>
    )
}

export default WeatherCard;