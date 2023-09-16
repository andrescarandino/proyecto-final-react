
import React, {useContext, useEffect} from 'react'
import { Link, Outlet} from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'
import  { FaRegSun, FaRegMoon } from "react-icons/fa6";
import { VscColorMode } from "react-icons/vsc";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
 
  const {state, dispatch} = useContext(ContextGlobal);
  const tema = () => {
    dispatch({type: 'THEME_BODY'});
  }

  
  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };


  useEffect(() => {
    tema();
    }, [toggleTheme]);


  return (
    <div className={state.theme === "light" ? "dark" : "light"}>
      <nav  >
      <h1>Odonto Detail</h1>
          <ul>
              <li><Link to="/" >Home</Link></li>
              <li><Link to="/contact" >Contact</Link></li>
              <li><Link to="/favs" >Favs</Link></li>
              <button className="botonTema" onClick={toggleTheme}
        > {(state.theme === "light") ? 
        <FaRegSun style={{backgroundColor: "white"}}/> : 
        <FaRegMoon/> } </button>
          </ul>
       
      </nav>
      <Outlet/>
      
    </div>

    
  )
}

export default Navbar