import { ErrorBoundary } from "react-error-boundary";

function BuggyComponent({ isError }: { isError: boolean }) {
  if (isError) throw new Error("I crashed during rendering!");

  return <div>这个组件将不会被渲染。</div>;
}

export default function ReactErrorBoundary() {
  return (
    <>
      <ErrorBoundary fallback={<div>something went wrong!</div>}>
        <BuggyComponent isError />
      </ErrorBoundary>
    </>
  );
}
