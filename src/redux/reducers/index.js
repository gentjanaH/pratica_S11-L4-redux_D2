const initialState = {
    favJob: {
        content: []
    }
}

const mainReducer = function (currentState = initialState, action) {

    switch (action.type) {
        case "ADD_FAV_JOB":


            return {
                ...currentState,
                favJob: {
                    content: [...currentState.favJob.content, action.payload]
                }
            }

        case "REMOVE_FAV_JOB":
            return {
                ...currentState,
                favJob: {
                    content: currentState.favJob.content.filter(job => {
                        if (job._id !== action.payload._id) {
                            return true
                        } else { return false }
                    })
                }
            }
        default: {
            return currentState
        }

    }








}

export default mainReducer