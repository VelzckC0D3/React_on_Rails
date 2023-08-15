// store.js
import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './messages/messagesSlice';

const store = configureStore({
  reducer: {
    messages: messagesReducer,
  },
});

export default store;
