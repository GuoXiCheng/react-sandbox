import './ExternalStyle.css';

export default function ExternalStyleC({ selected }: { selected: boolean }) {
    return (
        <div className={
            `default-external ${selected ? 'external-active' : 'external-inactive'}`
        }>External Style C</div>
    );
}