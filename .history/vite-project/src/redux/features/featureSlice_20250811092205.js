// src/redux/features/featureSlice.js
import { createSlice } from "@reduxjs/toolkit";
import profile from '../../assets/prem.jpeg';
import bishwojit from '../../assets/bbis.jpeg'


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
      title: "Co-Founder",
      name: "Er Bish"
      description: "Structural Engineer"
    },
    {
      image:profile,
      title: "Project Manager",
      description: "Construction Specialist"
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
