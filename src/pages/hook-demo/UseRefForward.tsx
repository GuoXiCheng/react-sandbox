import { forwardRef, useRef } from "react";

const MyDialog = forwardRef<HTMLDialogElement>((_, ref) => {

    function handleClick() {
        if (ref) {
            (ref as React.MutableRefObject<HTMLDialogElement | null>)
                .current?.close();
        }
    }

    return (
        <>
            <dialog ref={ref}>
                <p>Open Dialog Success</p>
                <button onClick={handleClick}>OK</button>
            </dialog>
        </>
    );
});

export default function UseRefForward() {
    const ref = useRef<HTMLDialogElement>(null);

    function handleClick() {
        if (ref) {
            ref.current?.showModal();
        }
    }

    return (
        <div>
            <MyDialog ref={ref} />
            <button onClick={handleClick}>Open Dialog forwardRef</button>
        </div>
    );
}