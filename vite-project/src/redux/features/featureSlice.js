// src/redux/features/featureSlice.js
import { createSlice } from "@reduxjs/toolkit";
import profile from '../../assets/prem.jpeg';
import bishwojit from '../../assets/bishwo.jpeg'
import sudin from '../../assets/sudin.jpeg'


const initialState = {
  features: [
    {
      image: profile,
      title: "Founder",
      name: "Er Prem Rijal",
      description: "Civil Engineer"
    },
    {
      image: bishwojit,
      title: "Founder",
      name: "Er Bishwojit Singh",
      description: "Structural Engineer"
    },
    {
      image: sudin,
      title: "Founder",
      name: "Sudin Shrestha",
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
