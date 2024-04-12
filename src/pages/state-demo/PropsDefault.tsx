function Person({ name, age = 18 }: { name: string; age?: number }) {
    return (
        <div>
            <h2>Name: {name}</h2>
            <h2>Age: {age}</h2>
        </div>
    );
}

export default function PropsDefault() {
    return <Person name="John" />;
}
