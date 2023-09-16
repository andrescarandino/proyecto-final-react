import React, {useContext} from 'react'
import foto from '../../public/images/DH.png'
import ContextProvider,{ContextGlobal} from './utils/global.context';

const Footer = () => {

  const {state} = useContext(ContextGlobal);



  
  return (
    
    <footer className={state.theme === 'dark' ? 'light' : 'dark'}>
        <p>Powered by</p>
        <h2>Andrés Carandino</h2>
    </footer>
  )
}

export default Footer
