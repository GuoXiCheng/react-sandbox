function Page({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export default function ChildrenReactElement() {
  return (
    <Page>
      <h1>标题</h1>
      <p>段落</p>
    </Page>
  );
}
