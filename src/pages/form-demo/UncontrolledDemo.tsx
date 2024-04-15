import { useRef } from "react";

export default function UncontrolledDemo() {
  const userNameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!userNameRef.current) return;
    console.log(userNameRef.current.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>UserName</label>
        <input type="text" ref={userNameRef} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
