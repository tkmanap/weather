import {RootState} from "./store.ts";

export const selectCurrentWeatherData = (state: RootState) =>
    state.currentWeatherSliceReducer