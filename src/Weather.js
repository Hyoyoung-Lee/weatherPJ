import React from "react";
import PropTypes from "prop-types";

class Weather extends React.Component {
    render() {
        const { cloud, condition_text, condition_icon, condition_code, temp_c, wind_kph, humidity, pressure_mb, location_namename } = this.props;
        return (
            <h1> {  } </h1>
        )

    }
}

Weather.propTypes = {
    cloud: PropTypes.number.isRequired,
    condition_text: PropTypes.string.isRequired,
    condition_icon: PropTypes.string.isRequired,
    condition_code: PropTypes.number.isRequired,
    temp_c: PropTypes.number.isRequired,
    wind_kph: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    pressure_mb: PropTypes.number.isRequired,
    location_name: PropTypes.string.isRequired
/*forecast는 잠시 보류*/
}

export default Weather;