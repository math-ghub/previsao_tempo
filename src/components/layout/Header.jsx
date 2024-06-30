import {useState} from 'react';

function Header({handleSubmit}) {
    const [city, setCity] = useState("");

    function handleChange(e) {
        e.preventDefault();
        handleSubmit(city);
    }

    return (
        <header>
            <h1>Sejá bem-vindo a previsão do tempo!</h1>
            <form onSubmit={handleChange}>
                <input type="text" onChange={(e) => {setCity(e.target.value)}}/>
            </form>
        </header>
    )
}

export default Header;