import React, { useState } from "react";


const Form = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [info, setInfo] = useState("");
  
  const ValidarEmail = (email) => {
    const regEx = /^[(\w\d\W)+]+@[\w+]+\.[\w+]+$/i; 
      if (regEx.test(email)){
        return true;
      }
      return false;
    }
    const validarNombre = (name) => {
      if (name.length > 5){
        return true;
      }
      return false;
    } 

    const handlerSubmit = (e) => {
      e.preventDefault();
      if(validarNombre(name) && ValidarEmail(email)){
        setInfo(`Gracias ${name} te contactaremos cuando antes vía mail`);
      }
      else{
        setInfo("Por favor verifique su información nuevamente");
      }
    }

  return (
    <>
      <form onSubmit={handlerSubmit}>
      <input type="text" placeholder="Full Name" value={name} onChange={(e)=>setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      <button type="submit">Send</button>
      <label>
      <h4>{info}</h4>
      </label>
      </form>
      
    </>
  );
};

export default Form;
