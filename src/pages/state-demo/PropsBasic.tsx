function Person(props: { name: string; age: number; gender: string }) {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <h2>Age: {props.age}</h2>
            <h2>Gender: {props.gender}</h2>
        </div>
    );
}

export default function PropsBasic() {
    return (
        <>
            <Person name="John" age={25} gender="male" />
        </>
    );
}
