import { createSlice } from "@reduxjs/toolkit"

export const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

const initialState = {
  cars: ["Model S", "Model 3", "Model X", "Model Y"],
};




export const selectCars = state => state.car.cars

export default carSlice.reducer
