import './ExternalStyle.css';

export default function ExternalStyleB({ selected }: { selected: boolean }) {
    return (
        <div className={selected ? "external-style-active" : "external-style-inactive"}>External Style B</div>
    );
}