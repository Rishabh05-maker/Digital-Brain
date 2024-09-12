import { configureStore } from "@reduxjs/toolkit";
import DigitalBrainApiSlice from "./Service";


const Store = configureStore({
  reducer:{


    [DigitalBrainApiSlice.reducerPath] : DigitalBrainApiSlice.reducer
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware()
    .concat(DigitalBrainApiSlice.middleware)
})

export default Store
