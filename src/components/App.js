import React, { Component } from 'react';

import VideoApp from './video/VideoApp';
import BookApp from './books/BookApp';
import WeatherApp from './weather/WeatherApp';

export default class App extends Component
{
    render()
    {
        return (
            <div>

                <WeatherApp />
            </div>
        );
    }
}
