import { useRef } from "react";

export default function UseRefBasic() {
    const ref = useRef(0);
    
    function handleClick() {
        ref.current ++;
        alert(`You clicked ${ref.current} times!`);
    }

    return (
        <div>
            <button onClick={handleClick}>click</button>
        </div>
    );
}