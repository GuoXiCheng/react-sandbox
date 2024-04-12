import { useState } from "react";

export default function UseStatePartial() {
    const [person, setPerson] = useState({
        name: "John",
        age: 25,
    });

    return (
        <>
            <h1>Person</h1>
            <div>Name: {person.name}</div>
            <div>Age: {person.age}</div>
            <button
                onClick={() => setPerson({ ...person, age: person.age + 1 })}
            >
                Increment Age
            </button>
        </>
    );
}
