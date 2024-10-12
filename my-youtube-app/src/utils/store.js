import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import searchSlice from './suggestionSlice';

const store = configureStore({
    reducer: {
        app: appSlice,
        search: searchSlice
    }
});

export default store;
