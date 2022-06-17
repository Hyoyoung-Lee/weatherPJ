import React from "react";
import axios from "axios";


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
        const { isLoading } = this.state;
        return (
            <div>
                {isLoading ? "Loading..." : "We are ready"}

            </div>
          );
    }
}

export default App;
