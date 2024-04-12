import { useState } from "react";

function CountButton(props: {
    count: number;
    setCount: (count: number) => void;
}) {
    return (
        <button onClick={() => props.setCount(props.count + 1)}>
            Click Add Count: {props.count}
        </button>
    );
}

export default function PropsFn() {
    const [count, setCount] = useState(0);

    return (
        <>
            <CountButton count={count} setCount={setCount} />
        </>
    );
}
