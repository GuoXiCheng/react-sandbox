import { useState } from "react";

export default function ControlledDemo() {
  const [userName, setUserName] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(userName);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>UserName</label>
        <input type="text" value={userName} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
