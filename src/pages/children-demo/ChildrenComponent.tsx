function Wrapper({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

function Greeting({ name }: { name: string }) {
  return <p>Hello, {name}</p>;
}

export default function ChildrenComponent() {
  return (
    <Wrapper>
      <Greeting name="React" />
    </Wrapper>
  );
}
