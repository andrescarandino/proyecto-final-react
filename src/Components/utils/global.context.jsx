
import { createContext, useReducer, useEffect } from "react";

const body = document.getElementById('body');



export const initialState = {
  theme: "light", 
  data: [], 
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "SET_API_DATA":
      return { ...state, data: action.payload };
    case "THEME_BODY":
      if(state.theme === "dark"){
        body.classList.remove('dark');
      }else if(state.theme === 'light'){
        body.classList.add('dark')
      }
    default:
      return state;
  }
};

export const ContextGlobal = createContext(undefined);

 const ContextProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, initialState);


    useEffect(() => {
      const apiUrl = 'https://jsonplaceholder.typicode.com/users';
      const fetchData = async () => {
        try {
          const response = await fetch(apiUrl);
          if (!response.ok) {
            throw new Error('Error al obtener datos de la API');
          }
          const data = await response.json();
          dispatch({ type: "SET_API_DATA", payload: data })
          
        }catch (error) {
          console.error('Error:', error);
        }
      }
      fetchData();
  }, []);
  
  return (
    <ContextGlobal.Provider value={{ state,   dispatch }} >
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;
