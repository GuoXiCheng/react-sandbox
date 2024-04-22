import { CustomErrorBoundary } from "./CustomErrorBoundary";

function BuggyComponent({ isError }: { isError: boolean }) {
  if (isError) throw new Error("I crashed during rendering!");

  return <div>这个组件将不会被渲染。</div>;
}

export default function CustomErrorBoundaryDemo() {
  return (
    <CustomErrorBoundary>
      <BuggyComponent isError />
    </CustomErrorBoundary>
  );
}
