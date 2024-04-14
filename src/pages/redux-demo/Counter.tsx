import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./slice";

export default function Counter() {
    const count = useSelector(
        (state: { counter: { value: number } }) => state.counter.value
    );
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Counter: {count}</h2>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <button
                    aria-label="Increment by 10"
                    onClick={() => dispatch(incrementByAmount(10))}
                >
                    Increment by 10
                </button>
            </div>
        </div>
    );
}
