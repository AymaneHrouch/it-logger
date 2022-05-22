import { GET_TECHS, LOGS_ERROR } from "./types";

// Get technicians
export const getTechs = () => async dispatch => {
    try {
        const res = await fetch('/techs')
        const data = await res.json();
        dispatch({
            type: GET_TECHS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data,
        })
    }
}