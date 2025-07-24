// src/redux/features/featureSlice.js
import { createSlice } from "@reduxjs/toolkit";
import profile from '../../assets/p.jpeg';


const initialState = {
  features: [
    {
      image:profile,
      title: "Access up to $100,000",
      description: "We fund each invoice once approved and collect payment to optimise your cash flow.*"
    },
    {
      image:profile,
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
