import React from "react";
import axios from "axios";
import Weather from "./Weather";


// 클래스형으로 만들어보기!
class App extends React.Component {
    state = {
        isLoading: true,
        stateWeather: []
    };

    getWeather = async () => {
        // const weathers : axios 해서 온 data를 잡아야 state에 사용할 수 있음
        const axiosWeather = await axios.get("https://api.weatherapi.com/v1/forecast.json?key=dfe315ea852049d29eb63038221606&q=Seoul&days=6");
        this.setState({ stateWeather : axiosWeather.data, isLoading : false });
        console.log(axiosWeather.data);
    };

    componentDidMount() {
        this.getWeather();
    }

    render() {
        const { isLoading, stateWeather } = this.state;
        return (
            <section class="weather_container">
                {isLoading ? (
                    <div class="loader">
                            <span class={"loader_text"}> Loading... </span>
                    </div>
                ) : (
                    stateWeather.map(weather => (
                    /*{
                        console.log(weather)

                    // map으로부터 return 해야함
                    return*/
                        <Weather
                                key={weather.index}
                                cloud={weather.current.cloud}
                                condition_text={weather.current.condition.text}
                                condition_icon={weather.current.condition.icon}
                                condition_code={weather.current.condition.code}
                                temp_c={weather.current.temp_c}
                                wind_kph={weather.current.wind_kph}
                                humidity={weather.current.humidity}
                                pressure_mb={weather.current.pressure_mb}
                                location_name={weather.location.name} />
                        )
                    ))}
            </section>
          );
    }
}

export default App;
