export default function RenderList() {
    const list = ['React', 'Vue', 'Angular'];
    return (
        <>
            {
                list.map((item, index) => <div key={index}>{item}</div>)
            }
        </>
    );
}