import React, { Component } from 'react';
import SearchBar from '../../containers/weather/SearchBar';
import WeatherList from '../../containers/weather/WeatherList';

export default class WeatherApp extends Component
{
    render()
    {
        return (
            <div>
                <SearchBar />
                <WeatherList />
            </div>
        );
    }
}
