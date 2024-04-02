import { useState } from "react";

function fibonacci(n: number): number {
    if (n <= 1) return n;
    else return fibonacci(n - 1) + fibonacci(n - 2);
}


export default function UseStateLazyInit() {
    const [count, setCount] = useState(() => fibonacci(35));
    return (
        <>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>click</button>
        </>
    );
}