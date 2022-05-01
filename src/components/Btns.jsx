import {useDispatch} from "react-redux";
import {decreaseCounter, increaseCounter, resetCounter} from "../store/counter-actions";

const Btns = () => {
    const dispatch = useDispatch()

    return(
        <div className="btns">
            <button onClick={() => dispatch(decreaseCounter())}>-</button>
            <button onClick={() => dispatch(increaseCounter())}>+</button>
            <button onClick={() => dispatch(resetCounter())}>reset</button>
        </div>
    )
}

export default Btns