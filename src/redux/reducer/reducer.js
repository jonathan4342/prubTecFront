const inicialState = {
    palabras:[],
    reverPala:[]
}

function rootReducer(state = inicialState, action) {
    switch (action.type) {
        case 'POST_TEXT':
            return{
                ...state,
                palabras:[...state.palabras,action.payload]
            }
        default:
            return state;
    }
}

export default rootReducer;