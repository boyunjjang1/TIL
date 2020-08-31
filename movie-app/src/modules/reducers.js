const SET_MOVIES = 'SET_MOVIES';

export const setMovies = (data) => {
    return ({
        type: SET_MOVIES,
        data: data
    })
}

const initialState = {
    movies: [],
    isLoading: true
};

function reducers(state = initialState, action){
    switch (action.type){
        case SET_MOVIES:
            return{
                ...state,
                movies: action.data,
                isLoading: false
            }
        default:
            return state;
    }
}

export default reducers;