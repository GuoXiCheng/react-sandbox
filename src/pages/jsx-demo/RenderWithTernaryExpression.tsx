export default function RenderWithTernaryExpression({isShow}: {isShow: boolean}) {
    return (
        <>
            {isShow ? <h1>Hello, React</h1> : <h1>Hello, Angular</h1>}
        </>
    );
}