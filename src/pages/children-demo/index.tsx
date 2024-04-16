import ChildrenComponent from "./ChildrenComponent";
import ChildrenFunction from "./ChildrenFunction";
import ChildrenMultiple from "./ChildrenMultiple";
import ChildrenOriginalValue from "./ChildrenOriginalValue";
import ChildrenReactElement from "./ChildrenReactElement";

export default function ChildrenDemo() {
  return (
    <>
      <ChildrenOriginalValue />
      <ChildrenReactElement />
      <ChildrenFunction />
      <ChildrenComponent />
      <ChildrenMultiple />
    </>
  );
}
