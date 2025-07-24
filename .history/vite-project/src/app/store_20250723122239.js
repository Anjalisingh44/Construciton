// store.js
import { configureStore } from '@reduxjs/toolkit';
import featureReducer from '../redux/features/featureSlice';

export const store = configureStore({
  reducer: {
    features: featureReducer,
    // Add other reducers if needed
  },
});

export default store;

