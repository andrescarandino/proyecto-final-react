import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Form from "./Components/Form";
import Contact from "./Routes/Contact"
import Favs from "./Routes/Favs";
import  ContextProvider, {ContextGlobal}  from "./Components/utils/global.context";
import NotFound from "./Routes/NotFound";

import { Routes, 
  Route, 
  BrowserRouter } from 'react-router-dom';


import Detail from "./Routes/Detail";

  

function App() {
  
  
  return (
    <>
     <BrowserRouter>
     <ContextProvider>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Home/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="favs" element={<Favs/>}/>
          <Route path="user/:id" element={<Detail/>}/>
          </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
      </ContextProvider>
     </BrowserRouter>
     
    </>
  )
}

export default App
