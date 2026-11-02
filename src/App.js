import React from "react";

const Greeting = () => {
  return <h2>Hello, React!</h2>;
};

function App() {
  const title = "React ES6 Lab";
  let description = "Learning ES6 features in React";

  const user = { name: "Ali", age: 22 };
  const { name, age } = user;
  const isLoggedIn = true;

  const numbers = [1, 2, 3];
  const newNumbers = [...numbers, 4, 5];

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <Greeting />

      <h2>User Details</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>

      <h2>Login Status</h2>
      <p>{isLoggedIn ? "Welcome Back!" : "Please Log In"}</p>

      <h2>Spread Operator</h2>
      <p>Original: {numbers.join(", ")}</p>
      <p>Updated: {newNumbers.join(", ")}</p>
    </div>
  );
}

export default App;