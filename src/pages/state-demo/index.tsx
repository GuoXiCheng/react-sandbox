import LiftingState from "./LiftingState";
import PropsBasic from "./PropsBasic";
import PropsDeconstruct from "./PropsDeconstruct";
import PropsDefault from "./PropsDefault";
import PropsFn from "./PropsFn";
import PropsRest from "./PropsRest";
import UseStateBasic from "./UseStateBasic";
import UseStatePartial from "./UseStatePartial";
import UseStatePre from "./UseStatePre";

export default function StateDemo() {
    return (
        <>
            <UseStateBasic />
            <UseStatePre />
            <UseStatePartial />
            <PropsBasic />
            <PropsDeconstruct />
            <PropsFn />
            <PropsRest />
            <PropsDefault />
            <LiftingState />
        </>
    );
}
