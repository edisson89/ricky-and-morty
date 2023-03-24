import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()

 const regexEmail = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
const regextPassword = "^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
  
function handleChange(params) {}

  function validate(inputs) {
    if (!inputs.email) {
      error.email = "Debe haber un Email";
    } else if (!inputs.password) {
      error.email = "Debe haber un Email";
    }
     else if (!regexEmail.test(input.email)) {
      error.email = "error";
     }
     else if (!regextPassword.test(input.password)) {
      error.email = "error";
     }else{
      navigate('/')
     }
     
  }

  function handleSubmit(e) {
    e.preventDefault();
    const aux = Object.keys(error);
    if (aux.length === 0) {
      setInput({
        email: "",
        password: "",
      });
      setError({
        email: "",
        password: "",
      });
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="email">Email:</label>
        <input
          name="email"
          type="text"
          onchange={handleChange}
          value={input.email}
        />
        <label htmlFor="paswoord">Password</label>
        <input name="password" type="text" />
      </form>
    </div>
  );
};

export default Login;
