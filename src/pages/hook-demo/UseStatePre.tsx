import { useState } from "react";

export default function UseStatePre() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount((pre) => pre >= 10 ? 0 : pre + 1);
    }

    return (
        <>
            <p>{count}</p>
            <button onClick={handleClick}>click</button>
        </>
    );
}