export const ADD_FAV_JOB = "ADD_FAV_JOB"
export const REMOVE_FAV_JOB = "REMOVE_FAV_JOB"
export const GET_JOBS = "GET_JOBS"
export const GET_JOBS_LOADING = "GET_JOBS_LOADING"
export const GET_JOBS_ERROR = "GET_JOBS_ERROR"

const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

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

export const getJobsAction = (query) => {

    return (dispatch, getState) => {
        const currentState = getState()
        console.log("currentState", currentState)


        fetch(baseEndpoint + query + "&limit=20")
            .then((res) => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error("Errore")
                }
            })
            .then((results) => {

                dispatch({
                    type: GET_JOBS,
                    payload: results.data,
                })
                console.log("RISULTATI", results.data)
            })
            .catch((err) => {
                console.log("ERRORE:", err)
            })
    }

}
