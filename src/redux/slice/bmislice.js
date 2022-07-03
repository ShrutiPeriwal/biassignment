import { createSlice } from '@reduxjs/toolkit';

export const Bmislice = createSlice({
  name: 'bmi',
  initialState: {
    bmiInput: {
      height: 0,
      weight: 0,
      resultDiv: false,
    },
  },
  reducers: {
    setHeight: (state, action) => {
      return { ...state.bmiInput, height: action.payload };
    },
    setWeight: (state, action) => {
      return { ...state.bmiInput, weight: action.payload };
    },
  },
});

// Action Creators are generated for each case reducer function
export const { setHeight, setWeight } = Bmislice.actions;
export const selectBmiInput = state => {
  return { ...state.bmi.bmiInput };
};
export default Bmislice.reducer;