// src/redux/features/featureSlice.js
import { createSlice } from "@reduxjs/toolkit";
import profile from '../../assets/prem.jpeg';
import bishwojit from '../../assets/bishwo.jpeg';
import sudin from '../../assets/sudin.jpeg';
import sakar from '../../assets/sakar.jpeg';


const initialState = {
  features: [
    {
      image: profile,
      title: "Chief Executive Officer",
      name: "Er. Prem Rijal",
      description: "Civil Engineer"
    },
    {
      image: bishwojit,
      title: "HR Manager",
      name: "Er. Bishwojit Singh",
      description: "Structural Engineer"
    },
    {
      image: sudin,
      title: "Managing Director",
      name: "Sudin Goja Shrestha",
      description: "Civil Engineer"
    },
    {
      image: sakar,
      title: "Civil Engineer",
      name: "Er. Sakar Ghimire",
      description: "Civil Engineer"
    },
  ]
};

const featureSlice = createSlice({
  name: "features",
  initialState,
  reducers: {

  }
});

export const selectFeatures = (state) => state.features.features;

export default featureSlice.reducer;
