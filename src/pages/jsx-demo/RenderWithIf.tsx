export default function RenderWithIf({isShow}: {isShow: boolean}) {
    let content = 'Hello Vue!';

    if (isShow) {
        content = 'Hello React!';
    }

    return (
        <>
            <h1>{content}</h1>
        </>
    );
}