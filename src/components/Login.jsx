import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../App.module.css";

const Login = ({ login }) => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/;

 

  function handleChange(event){
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setError(validate({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
  }
  
 function validate(input) {
    const error = {};

    if (!input.email) {
      error.email = "Debe haber un Email";
    } else if (!input.password) {
      error.password = "Debe haber un Password";
    } else if (!regexEmail.test(input.email)) {
      error.email = "Debe haber un Email valido";
    } else if (!regexPassword.test(input.password)) {
      error.password = "Debe haber un Password valido";
    }
    return error;
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

    return alert("Error");
  }
  return (
    <div className={styles.login}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.loginInput} name="email">
          Email: 
          <br />
        </label>
        <input
          className={styles.loginInput}
          value={input.email}
          name="email"
          onChange={handleChange}
          placeholder="Ingrese su Email"
        />
        <br />

        {error.email && <p className={styles.error}>{error.email}</p>}

        <label className={styles.loginInput} name="pasword">
          Password:
          <br />
        </label>
        <input
          className={styles.loginInput}
          
          name="password"
          onChange={handleChange}
          value={input.password}
          placeholder="Ingrese su Contraseña"
        />
        <br />

        {error.password && <p className={styles.error}>{error.password}</p>}

        {Object.keys(error).length === 0 ? (
          <Link to="/home">
            <button type="submit">Enviar</button>
          </Link>
        ) : (
          <h2>Ingrese sus datos</h2>
        )}
      </form>
    </div>
  );
};

export default Login;
