function Person({ name, age }: { name: string; age: number }) {
    return (
        <div>
            <h2>Name: {name}</h2>
            <h2>Age: {age}</h2>
        </div>
    );
}

export default function PropsDeconstruct() {
    return <Person name="Tom" age={30} />;
}
