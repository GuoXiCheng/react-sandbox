import UseRefBasic from "./UseRefBasic";
import UseRefDOM from "./UseRefDOM";
import UseRefForward from "./UseRefForward";
import UseStateBasic from "./UseStateBasic";
import UseStateLazyInit from "./UseStateLazyInit";
import UseStateObjArr from "./UseStateObjArr";
import UseStatePre from "./UseStatePre";
import UseImperativeHandleBasic from "./UseImperativeHandleBasic";
import CustomHookWithTheme from "./CustomHookWithTheme";

export default function HookDemo() {
    return (
        <>
            <UseStateBasic />
            <UseStateLazyInit />
            <UseStateObjArr />
            <UseStatePre />
            <UseRefBasic /> 
            <UseRefDOM />
            <UseRefForward />
            <UseImperativeHandleBasic />
            <CustomHookWithTheme />
        </>
    );
}