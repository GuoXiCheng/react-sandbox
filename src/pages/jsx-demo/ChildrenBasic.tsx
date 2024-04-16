function MyButton({ children }: { children: React.ReactNode }) {
  return <button>{children}</button>;
}

export default function ChildrenBasic() {
  return <MyButton>Click My Button</MyButton>;
}
