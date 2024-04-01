export default function ExternalStyleA({ selected }: { selected: boolean }) {
    return (
        <div className={`default-external-style ${selected ? 'external-style-active' : 'external-style-inactive'}`}>Hello, React</div>
    );
}