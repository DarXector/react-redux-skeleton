import axios from 'axios';

export const BOOK_SELECTED = "BOOK_SELECTED";
export function selectBook(book)
{
    return{
        type: 'BOOK_SELECTED',
        payload: book
    };
}

const API_KEY = '585c3fb995739292da2355c4885c0361';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";
export function fetchWeather(city)
{
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}


