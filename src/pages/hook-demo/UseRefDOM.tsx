import { useRef } from "react";

export default function UseRefDOM() {
    const ref = useRef<HTMLDialogElement>(null);

    function handleOpen() {
        if (ref.current) {
            ref.current.showModal();
        }
    }

    function handleClose() {
        if (ref.current) {
            ref.current.close();
        }
    }

    return (
        <>
            <dialog ref={ref}>
                <p>Open Dialog Success</p>
                <button onClick={handleClose}>OK</button>
            </dialog>
            <button onClick={handleOpen}>open dialog</button>
        </>
    );
}