// src/redux/features/featureSlice.js
import { createSlice } from "@reduxjs/toolkit";
import profile from '../../assets/prem.jpeg';
import bishwojit from '../../assets/bishwo.jpeg'


const initialState = {
  features: [
    {
      image:profile,
      title: "Founder",
      name:"Er Prem Rijal",
      description: "Civil Engineer"
    },
    {
      image:bishwojit,
      title: "Founder",
      name: "Er Bishwojit Singh",
      description: "Structural Engineer"
    },
    {
    
      title: "Architect",
      name: "Ar Srijana Duwal",
      description: "Architect Engineer"
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
