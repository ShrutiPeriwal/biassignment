import { configureStore } from '@reduxjs/toolkit';
import bmiReducer from './slice/bmislice';

export default configureStore({
  reducer: {
    bmi: bmiReducer,
  },
});