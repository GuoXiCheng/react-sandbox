import { forwardRef, useImperativeHandle, useRef } from "react";

const MyDialog = forwardRef((_, ref) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => ({
        showModal: () => {
            dialogRef.current?.showModal();
        },
        close: () => {
            dialogRef.current?.close();
        },
    }));

    return (
        <dialog ref={dialogRef}>
            <p>Open Dialog Success</p>
            <button onClick={() => dialogRef.current?.close()}>OK</button>
        </dialog>
    );
});

export default function UseRefImperative() {
    const ref = useRef<HTMLDialogElement>(null);

    function handleOpen() {
        if (ref.current) {
            ref.current.showModal();
        }
    }

    return (
        <>
            <MyDialog ref={ref} />
            <button onClick={handleOpen}>
                Open Dialog useImperativeHandle
            </button>
        </>
    );
}