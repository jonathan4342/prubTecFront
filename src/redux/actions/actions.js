import axios from "axios";

export function postText(text) {
    return async function (dispatch) {
        const {data} = await axios.post(`http://localhost:3001/iecho?text=${text}`)
        return dispatch({
            type: 'POST_TEXT',
            payload: data
        })
    }
}