import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.password === ""
    ) {
      alert("enter required field");
    } else {
      console.log(formData);
      setCount(formData);
    }
  };

  return (
    <>
      <div className="box">
        <h1>Reistration Form</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name.." />
          <input type="text" name="email" placeholder="Email.." />
          <input type="text" name="password" placeholder="Password.." />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
