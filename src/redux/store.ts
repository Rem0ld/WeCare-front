import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  },
  preloadedState: LoadFromLocalStorage()
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

store.subscribe(() => saveToLocalStorage(store.getState()))

function saveToLocalStorage(state: any) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem("state", serializedState)
  } catch (error) {
    console.error(error)
  }
}

function LoadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state')
    if (!serializedState) return undefined;
    return JSON.parse(serializedState)
  } catch (e) {
    console.error(e)
  }
}