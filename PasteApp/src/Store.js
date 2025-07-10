import { configureStore } from '@reduxjs/toolkit';
import pasteReducer from './features/pasteSlice.js';

const Store = configureStore({
  reducer: {
    paste: pasteReducer,
  },
});
console.log("Initial store state:", Store.getState());
export default Store