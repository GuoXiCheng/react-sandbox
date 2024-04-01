export default function ExternalStyleB({ selected }: { selected: boolean }) {
    return (
        <div className={selected ? "external-style-active" : "external-style-inactive"}>Hello, React</div>
    );
}