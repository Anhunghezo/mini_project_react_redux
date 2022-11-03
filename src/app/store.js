import { configureStore } from '@reduxjs/toolkit';
import photoReducer from 'features/Photo/photoSlice';
import userReducer from "./userSlice";

const rootReducer = {
    photos: photoReducer,
}

const store = configureStore({
    reducer: rootReducer,
    user: userReducer,
})

export default store;