import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../App.module.css";

const Login = ({login}) => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const regexEmail =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  const regexPassword = / ^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$ /;


  function validate(input) {
    const error = {};

    if (!input.email) {
      error.email = "Debe haber un Email";
    } else if (!input.password) {
      error.password = "Debe haber un Password";
    } 
    //else if (!regexEmail.test(input.email)) {
    //   error.email = "Debe haber un Email valido";
    // } else if (!regexPassword.test(input.password)) {
    //   error.password = "Debe haber un Password valido";
    // }
    return error;
  }

  function handleChange(event) {
      event.preventDefault()
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setError(
      validate({
        ...error,
        [event.target.name]: event.target.value,
      })
    );
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
      login(input);
      return alert("OK");
    }
    navigate("/");
    return alert("Error");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label name="email">Email: </label>
          <input
          type="email"
            value={input.email}
            name="email"
            onChange={handleChange}
            placeholder="Ingrese su Email"
          />
       { error.email &&  <p className={styles.error}>{error.email}</p> }
        
        <label name="pasword">Password</label>
        <input
          type='password'
          name="password"
          onChange={handleChange}
          value={input.password}
          placeholder="Ingrese su Contraseña"
        />
  {error.password &&  <p className={styles.error}>{error.password}</p>}
     

        {Object.keys(error).length === 0 ? 
      (  <Link to="/home">
        <button type="submit">Enviar</button>
        </Link> ): <h2>Revise sus datos</h2>
        }
      </form>
    </div>
  );
};

export default Login;
