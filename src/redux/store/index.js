import { configureStore } from "@reduxjs/toolkit";

import favReducer from "../reducers/favReducer";


const store = configureStore({
    reducer: {
        favJob: favReducer,
    }
})

export default store