import { useState } from "react";

export default function UseStateObjArr() {
    const [obj, setObj] = useState({ name: "jack", age: 18 });
    const [arr, setArr] = useState([1, 2, 3]);

    function handleObjClick() {
        setObj({ ...obj, age: obj.age + 1 });
    }

    function handleArrClick() {
        setArr([...arr, arr.length + 1]);
    }

    return (
        <>
            <p>name: {obj.name} age: {obj.age}</p>
            <button onClick={handleObjClick}>click</button>
            
            <p>{arr.toString()}</p>
            <button onClick={handleArrClick}>click</button>
        </>
    );
}