import React, { Component } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";







class Weather extends Component {
    // 상태 변수 정의
    constructor(props) {
        super(props);
        this.state = { cityName: '', temp: 0, desc: '', icon: '', loading: true}
    }




    componentDidMount() {
        const cities = [ 'Seoul', 'Incheon', 'Daejeon', 'Mokpo', 'Gwangju', 'Gangreung', 'Daegu', 'Busan', '33.4996,126.5312' ];
        const apiKey = 'dfe315ea852049d29eb63038221606';
        const cityName = cities.map( city => `${city}`)

        const currentURL =`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=6`;


        // 초기 도시 리스트 보여주는 부분
       axios.get(currentURL)
            .then(responseData => {
                console.log(responseData);
                const data = responseData.data;
                this.setState({
                    cityName: data.location.name,
                    temp: data.current.temp_c,
                    desc: data.current.condition.text,
                    icon: data.current.condition.icon,
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
                <Link to="/WeatherInfo">
                <div className={"App"} >

                        <p> {this.state.cityName}</p>
                        <img src={this.state.icon}/>
                        <p> {this.state.temp}°C </p>
                        <p> {this.state.desc} </p>

                </div>
                </Link>

            );

        }
    }
    }


/*Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};*/


export default Weather;