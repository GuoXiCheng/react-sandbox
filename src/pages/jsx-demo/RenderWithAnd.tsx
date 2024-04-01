export default function RenderWithAnd({isShow}: {isShow: boolean}) {
    return (
        <>
            <div>{isShow && <h1>Hello React!</h1>}</div>
        </>
    );
}