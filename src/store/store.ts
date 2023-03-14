import { configureStore } from '@reduxjs/toolkit';
import cardSlice from './slices/cardsSlice';
import modalSlice from './slices/modalSlice';

export const store = configureStore({
  reducer: {
    modalSlice,
    cardSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
