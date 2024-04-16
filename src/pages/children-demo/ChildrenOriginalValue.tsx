function MyButton({ children }: { children: React.ReactNode }) {
  return <button>{children}</button>;
}

export default function ChildrenOriginalValue() {
  return <MyButton>Click My Button</MyButton>;
}
