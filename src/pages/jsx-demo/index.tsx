import BasicJSX from "./BasicJSX";
import ChildrenBasic from "./ChildrenBasic";
import ChildrenWithName from "./ChildrenWithName";
import RenderList from "./RenderList";
import RenderWithAnd from "./RenderWithAnd";
import RenderWithIf from "./RenderWithIf";
import RenderWithTernaryExpression from "./RenderWithTernaryExpression";
import UseExpression from "./UseExpression";
import UsePic from "./UsePic";

export default function JSXDemo() {
  return (
    <>
      <BasicJSX />
      <UseExpression />
      <UsePic />
      <RenderList />
      <RenderWithIf isShow={false} />
      <RenderWithAnd isShow={true} />
      <RenderWithTernaryExpression isShow={true} />
      <ChildrenBasic />
      <ChildrenWithName />
    </>
  );
}
