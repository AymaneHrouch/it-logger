import { GET_TECHS } from "../actions/types";

const initialState = {
    techs: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TECHS:
            return {
                ...state,
                techs: action.payload
            }
        default:
            return state;
    }
};
