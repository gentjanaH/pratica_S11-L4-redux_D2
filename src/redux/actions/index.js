export const ADD_FAV_JOB = "ADD_FAV_JOB"
export const REMOVE_FAV_JOB = "REMOVE_FAV_JOB"

export const addFavJobAction = (data) => {
    return {
        type: ADD_FAV_JOB,
        payload: data,
    }
}

export const removeFavJobAction = (data) => {
    return {
        type: REMOVE_FAV_JOB,
        payload: data,
    }
}

