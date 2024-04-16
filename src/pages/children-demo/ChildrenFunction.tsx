function Container({
  children,
}: {
  children: (data: number[]) => React.ReactNode;
}) {
  const data = [1, 2, 3, 4, 5];
  return <div>{children(data)}</div>;
}

export default function ChildrenFunction() {
  return (
    <Container>{(data) => data.map((item) => <div>{item}</div>)}</Container>
  );
}
