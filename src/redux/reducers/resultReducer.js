import { GET_JOBS, GET_JOBS_ERROR, GET_JOBS_LOADING } from "../actions"


const initialState = {

    arrayRicerca: [],
    loading: false,
    error: false,
}

const resultReducer = function (currentState = initialState, action) {

    switch (action.type) {

        case GET_JOBS:
            return {
                ...currentState,
                arrayRicerca: action.payload
            }

        case GET_JOBS_LOADING:
            return {
                ...currentState,
                loading: !currentState.loading
            }
        case GET_JOBS_ERROR:
            return {
                ...currentState,
                error: !currentState.error
            }

        default: {
            return currentState
        }
    }

}

export default resultReducer