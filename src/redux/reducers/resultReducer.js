import { GET_JOBS } from "../actions"


const initialState = {

    arrayRicerca: []

}

const resultReducer = function (currentState = initialState, action) {

    switch (action.type) {

        case GET_JOBS:
            return {
                ...currentState,
                arrayRicerca: action.payload
            }

        default: {
            return currentState
        }
    }

}

export default resultReducer