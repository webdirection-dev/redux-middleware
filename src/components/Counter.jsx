import {useSelector} from "react-redux";

const Counter = () => {
    const currentCount = useSelector(state => state)

    return(
        <h2>{currentCount}</h2>
    )
}

export default Counter