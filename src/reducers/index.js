import { combineReducers } from 'redux';
import BooksReducer from "./ReducerBooks"
import ActiveBookReducer from "./ReducerActiveBook"
import WeatherReducer from "./ReducerWeather"

const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBookReducer,
    weather: WeatherReducer
});

export default rootReducer;
