import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './reducers/UserReducer';
import HomeReducer from './reducers/HomeReducer';

export const store = configureStore({
  reducer: {
    UserReducer:UserReducer,
    HomeReducer:HomeReducer
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch