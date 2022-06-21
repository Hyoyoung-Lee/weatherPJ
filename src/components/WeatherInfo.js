import React, { Component } from 'react';
import axios from 'axios';


class WeatherInfo extends Component {
    // 상태 변수 정의
    constructor(props) {
        super(props);
        this.state = { cityName: '', maxTemp: 0, minTemp: 0, icon: '', desc: '',
            temp: 0, wind: 0, humidity: 0, pressure: 0, cloud: 0,
            hourIcon: '',
            loading: true}
    }


    componentDidMount() {
        const cityName = 'Seoul';
        const apiKey = 'dfe315ea852049d29eb63038221606';
        const currentURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=6`;


        axios.get(currentURL)
            .then(responseData => {
                console.log(responseData);
                const data = responseData.data;

                this.setState({
                    cityName: data.location.name,
                    maxTemp: data.forecast.forecastday[0].day.maxtemp_c,
                    minTemp: data.forecast.forecastday[0].day.mintemp_c,
                    icon: data.current.condition.icon,
                    desc: data.current.condition.text,
                    temp: data.current.temp_c,
                    wind: data.current.wind_kph,
                    humidity: data.current.humidity,
                    pressure: data.current.pressure_mb,
                    cloud: data.current.cloud,
                    hourIcon: data.forecast.forecastday[0].hour[0].condition.icon,

                    loading: false
                });
            })
            .catch(error => console.log(error));

    }

    // 날씨 정보 출력
    render() {
        if (this.state.loading) {
            return <p> Loading ...</p>
        } else {
            return (
                <div className={"App"}>
                    <p> {this.state.cityName}</p>
                    <p> 최고 {this.state.maxTemp}  °C / 최저 {this.state.minTemp}  °C </p>
                    <img src={this.state.icon}/>
                    <p> {this.state.desc} </p>
                    <p> {this.state.temp} °C </p>
                    <p> 풍속 {this.state.wind} kph </p>
                    <p> 습도 {this.state.humidity} % </p>
                    <p> 기압 {this.state.pressure} MB </p>
                    <p> 구름 {this.state.cloud} % </p>
                    <p> 00:00 <img src={this.state.hourIcon}/> </p>
                </div>
            );

        }
    }
}


export default WeatherInfo;