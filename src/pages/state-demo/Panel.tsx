export default function Panel({
    children,
    title,
    isActive,
    clickBtn,
}: {
    children: React.ReactNode;
    title: string;
    isActive: boolean;
    clickBtn: () => void;
}) {
    return (
        <>
            <h2>{title}</h2>
            {isActive && <p>{children}</p>}
            {!isActive && <button onClick={clickBtn}>显示</button>}
        </>
    );
}
