import './ExternalStyle.css';

export default function ExternalStyleC({ selected }: { selected: boolean }) {
    return (
        <div className={`default-external-style ${selected ? 'external-style-active' : 'external-style-inactive'}`}>External Style C</div>
    );
}