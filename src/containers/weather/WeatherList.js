import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../../components/weather/Chart';
import Map from '../../components/weather/Map';

class WeatherList extends Component
{
    renderWeather(cityData)
    {
        console.log("renderWeather cityData", cityData);

        const name = cityData.city.name;
        const { lon, lat } = cityData.city.coord;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);

        return(
            <tr key={name}>
                <td><Map lon={lon} lat={lat}/></td>
                <td><Chart color="red" data={temps} units="K" /></td>
                <td><Chart color="orange" data={pressure} units="hPa" /></td>
                <td><Chart color="blue" data={humidity} units="%"/></td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (K)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map((cityData) => this.renderWeather(cityData))}
                </tbody>
            </table>
        )
    }
}


function mapStateToProps({ weather })
{
    return { weather }
}

export default connect(mapStateToProps)(WeatherList);