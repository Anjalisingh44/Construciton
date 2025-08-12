// src/redux/features/featureSlice.js
import { createSlice } from "@reduxjs/toolkit";
import profile from '../../assets/prem.jpeg';
import bishwojit from '../../assets/bbis.jpeg'


const initialState = {
  features: [
    {
      image:profile,
      title: "Founder",
      description: "Civil Engineer"
    },
    {
      image:bishwojit,
      title: "You choose invoices to get paid",
      description: "Self-serve online portal available 24/7 or connect from your CRM or invoicing platform."
    },
    {
      image:profile,
      title: "Simple pricing",
      description: "Only pay for what you use, if you don't need us, there are no costs."
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
