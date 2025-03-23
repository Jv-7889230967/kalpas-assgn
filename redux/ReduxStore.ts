import { configureStore } from '@reduxjs/toolkit';
import ListReducer from './ListReducer';
import formReducer from "./formReducer"

export const store = configureStore({
    reducer: {
        listType: ListReducer,
        openForm: formReducer
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;