import { configureStore } from "@reduxjs/toolkit";

import favReducer from "../reducers/favReducer";
import resultReducer from "../reducers/resultReducer";


const store = configureStore({
    reducer: {
        favJob: favReducer,
        risultati: resultReducer,
    }
})

export default store