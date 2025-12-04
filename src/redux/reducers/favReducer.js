import { ADD_FAV_JOB, REMOVE_FAV_JOB } from "../actions"

const initialState = {

    content: []

}

const favReducer = function (currentState = initialState, action) {

    switch (action.type) {
        case ADD_FAV_JOB:


            return {
                ...currentState,

                content: [...currentState.content, action.payload]

            }

        case REMOVE_FAV_JOB:
            return {
                ...currentState,

                content: currentState.content.filter(job => {
                    if (job._id !== action.payload._id) {
                        return true
                    } else { return false }
                })

            }
        default: {
            return currentState
        }

    }








}

export default favReducer