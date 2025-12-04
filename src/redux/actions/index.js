export const ADD_FAV_JOB = "ADD_FAV_JOB"
export const REMOVE_FAV_JOB = "REMOVE_FAV_JOB"
export const GET_JOBS = "GET_JOBS"


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

export const getJobsAction = (company) => {

    return (dispatch, getState) => {
        const currentState = getState()
        console.log("currentState", currentState)


        fetch("https://strive-benchmark.herokuapp.com/api/jobs?company=" + company)
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
