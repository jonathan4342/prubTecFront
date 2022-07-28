const inicialState = {
    palabras:[],
}

function rootReducer(state = inicialState, action) {
    switch (action.type) {
        case 'POST_TEXT':
            return{
                ...state,
                palabras:[action.payload,...state.palabras]
            }
        default:
            return state;
    }
}

export default rootReducer;