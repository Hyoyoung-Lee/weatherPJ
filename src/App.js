import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import Weather from './components/Weather.js';
import WeatherInfo from "./components/WeatherInfo";
import styled from 'styled-components';
import axios from 'axios';


function App() {

    const apiKey = "dfe315ea852049d29eb63038221606";
    const [location, setLocation] = useState('');
    const [result, setResult] = useState({});

    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=6`;


    const searchWeather = async (e) => {
        if(e.key === 'Enter') {
            try {
             const data = await axios({
                 method: 'get',
                 url: url
             })
                console.log(data);
                setResult(data);
            }
            catch (err) {
                alert(err);
            }
            }
        }



    return(
        <AppWrap>

            <div className='appContentWrap'>
                <input
                    placeholder='Search for city weather' value={location}
                    onChange={(e)=>setLocation(e.target.value)}  type='text'
                    onKeyDown={searchWeather}
                />
                {
                    Object.keys(result).length !== 0 && (
                        <ListWrap>
                            <div className='city'> {result.data.location.name} </div>
                            <div className='temp'> {result.data.current.temp_c} </div>
                            <div className='sky'> {result.data.current.condition.text} </div>
                        </ListWrap>
                )}


            </div>



        <div className="App">

                <Routes>
                    <Route path="/" element={<Weather />} />
                    <Route path="/WeatherInfo" element={<WeatherInfo />} />
                </Routes>

        </div>
        </AppWrap>
    )
}

/*
const App = () => {
    return <Weather /> ;
};
*/

export default App;

const AppWrap = styled.div `
    width: 100vw;
    height: 100vh;
    border: 1px red solid;
    
    .appContentWrap {
       left: 50%;
       top: 50%;
       transform: translate(-50%, -50%);
       position: absolute;
       padding: 20px;
       }
`;

const ListWrap = styled.div `
    margin-top: 60px;
    padding: 10px;
    border: 1px black solid;
    border-radius: 8px;
`;