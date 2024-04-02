import UseStateBasic from "./UseStateBasic";
import UseStateLazyInit from "./UseStateLazyInit";
import UseStateObjArr from "./UseStateObjArr";
import UseStatePre from "./UseStatePre";

export default function HookDemo() {
    return (
        <>
            <UseStateBasic />
            <UseStateLazyInit />
            <UseStateObjArr />
            <UseStatePre />
        </>
    );
}