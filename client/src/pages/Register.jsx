import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, react } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'axios';
import axios from 'axios';
import { registerRoute } from '../utils/APIRoutes';

function Register() {
  const navigate = useNavigate();
  //creamos un usestate hook para almacenar los datos del usuario
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword: '',
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log();
    if (handleValidation()) {
      //creamos una cosntante con nuestas variables
      const { password, confirmpassword, username, email } = values;
      //aqui await esperara a que la promesa axios.post de un resultado error or succes]
      //axios.post() crea una post request de manera mas simple
      const { data } = await axios.post(registerRoute, {
        username,
        email,
        password,
      });
      //depende del tipo de status que regrese le damos erro
      if (data.status === false) {
        return toast.error(data.msg);
      }
      //en caso de que el estatus sea true
      if (data.status === true) {
        //esto lo que va a hacer es que guardara el user(algo asi como cache nos servira para que no tenga que ingresar denuevo la info)
        localStorage.setItem('chat-app-user', JSON.stringify(data.user));
      }
      navigate('/');
    }
  };
  //este es el mensaje de error
  const toastOptions = {
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: 'true',
    theme: 'dark',
    draggable: 'true',
  };
  //esta funcion se encargara de varildar si los datos ingresados son validos
  const handleValidation = () => {
    //creamos una copia de tolas las propiedades y les asignamos el valor
    const { password, confirmpassword, username, email } = values;
    if (password !== confirmpassword) {
      toast.error(
        'make sure password and confirm password are the same',
        toastOptions
      );
      return false;
    } else if (username.length < 3) {
      toast.error('username is to short', toastOptions);
      return false;
    } else if (email.length < 3) {
      toast.error('email is requiered', toastOptions);
      return false;
    } else if (password.length < 3) {
      toast.error('password is to short', toastOptions);
      return false;
    }
    return true;
  };
  const handlechange = (event) => {
    //... crea una copia de values donde vamos a almacenar todos los datos
    //posteriormente [event.target.name] obtendra el nombre o id del formulario que estamos usando
    //y al final utilizando los 2 puntos le decimos a react que relacione el nombre con su id y actualize values
    //por ejemplo si regreso la propiedad nombre le asignaremos el valor nombre:pepe
    //

    setValues({ ...values, [event.target.name]: event.target.value });
  };
  return (
    <>
      <FormContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="name"></div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => {
              handlechange(e);
            }}
          ></input>
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={(e) => {
              handlechange(e);
            }}
          ></input>
          <input
            type="text"
            placeholder="Password"
            name="password"
            onChange={(e) => {
              handlechange(e);
            }}
          ></input>
          <input
            type="text"
            placeholder="Confirm Password"
            name="confirmpassword"
            onChange={(e) => {
              handlechange(e);
            }}
          ></input>
          <button type="submit">Create user</button>
          <span>
            already have an account? <Link to="../login">Login</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer></ToastContainer>
    </>
  );
}
//utilizando styled components le damos el diseño que necesitamos
const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #292a2b;

  .name {
    background-color: rgb(7, 95, 130);
    color: white;
    align-self: center;
    font-size: 3rem;
    border-radius: 2rem;
  }

  form {
    padding: 3rem;
    background-color: #222223;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-radius: 2rem;
    border: 0.1rem solid;
    border-color: #0ee2bf;
  }

  input {
    color: white;
    padding: 1rem;
    font-size: 1.5rem;
    background-color: transparent;
    border: 0.1rem solid white;
    border-radius: 0.5rem;

    &:focus {
      color: #19f9d8;
      outline-color: transparent;
      border-color: red;
    }
  }

  input::placeholder {
    color: white;
  }

  button {
    font-size: 1.5rem;
    border-radius: 0.5rem;
    border: 0 transparent;
    min-height: 3rem;
    transition-duration: 0.4s;
    &:hover {
      background-color: #e65cfc;
    }
  }

  span {
    color: white;
    font-size: 1.2rem;
  }
  a {
    font-size: 1.2rem;
    color: #19f9d8;
    text-decoration: none;
  }
`;

export default Register;
