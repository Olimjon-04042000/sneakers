import { createStore } from "redux";


const reducer = (state = { count: 0 }, action) => {
    if (action.type === "INC") {
        return {
            count: state.count + 1,
        };
    } else if (action.type === "DEC") {
        if (state.count > 0) {
            return {
                count: state.count - 1,
            };
        }

    }
    return state;
}
const store = createStore(reducer);

export default store;

store.js