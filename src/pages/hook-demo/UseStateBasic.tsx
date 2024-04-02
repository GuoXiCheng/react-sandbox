import { useState } from "react";

export default function UseStateBasic() {
    const [count, setCount] = useState(0);
    return (
        <>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>click</button>
        </>
    );
}