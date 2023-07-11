import { configureStore } from "@reduxjs/toolkit";
import greetingsReducer from "./Slice/greetingSlice";

const store = configureStore ({
    reducer: {
        greeting: greetingsReducer,
    }
})

export default store