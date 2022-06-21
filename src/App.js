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
    position: absolute;
    width: 1920px;
    height: 1080px;
    left: 0px;
    top: 0px;
    

    
    .appContentWrap {
        width: 312px;
        height: 38px;
        
        font-family: 'Apple SD Gothic Neo';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 38px;
        
        color: #F5F5F5;
        
        
        /* Inside auto layout */
        
        flex: none;
        order: 0;
        flex-grow: 0;
        :focus { outline:none;}
       }
`;

const ListWrap = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 30px;
    gap: 30px;
    
    width: 343px;
    height: 256px;
    
    background: rgba(31, 62, 79, 0.5);
    border-radius: 20px;
    
    /* Inside auto layout */
    
    flex: none;
    order: 0;
    flex-grow: 0;
`;