function Person({ name, ...props }: { name: string; [key: string]: any }) {
    return (
        <div>
            <h2>Name: {name}</h2>
            {props.age && <h2>Age: {props.age}</h2>}
            {props.gender && <h2>Gender: {props.gender}</h2>}
            {props.email && <h2>Email: {props.email}</h2>}
        </div>
    );
}

export default function PropsRest() {
    return <Person name="John" age={18} gender="male" />;
}
