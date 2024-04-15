export default function FormDataDemo() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    console.log(Object.fromEntries(formData.entries()));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>UserName</label>
        <input type="text" name="username" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
