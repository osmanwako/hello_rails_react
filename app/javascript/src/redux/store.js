import { configureStore } from '@reduxjs/toolkit';
import Message from './greetingSlice';

export const store = configureStore({
  reducer: {
    greeting: Message,
  },
});
