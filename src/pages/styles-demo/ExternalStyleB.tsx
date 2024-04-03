import './ExternalStyle.css';

export default function ExternalStyleB({ selected }: { selected: boolean }) {
    return (
        <div className={
            selected ? "external-active" : "external-inactive"
        }>External Style B</div>
    );
}