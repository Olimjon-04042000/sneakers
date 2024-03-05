// actions.js
import { useDispatch } from "react-redux";
import { DEC, INC } from "./action-types";

export const useCounterActions = () => {
    const dispatch = useDispatch();

    const increment = () => {
        dispatch({ type: INC });
    };

    const decrement = () => {
        dispatch({ type: DEC });
    };

    return { increment, decrement };
};