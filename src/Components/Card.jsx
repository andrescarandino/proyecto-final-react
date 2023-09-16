import React, { useState, useEffect } from "react";
import img from '../../public/images/doctor.jpg'
import { Link } from "react-router-dom";


const Card = ({ name, userName, id }) => {
  const [isFavorito, setIsFavorito] = useState(false);

  useEffect(() => {
    const favoritosFromLocalStorage = JSON.parse(localStorage.getItem('dentistasFavoritos')) || [];
    const esFavoritoExistente = favoritosFromLocalStorage.some(dentista => dentista.id === id);
    setIsFavorito(esFavoritoExistente);
  }, [id]);

  
  const toggleFavorito = () => {
    setIsFavorito(prevState => !prevState);
  };

 
  const handleFavoritoClick = () => {
    const favoritosFromLocalStorage = JSON.parse(localStorage.getItem('dentistasFavoritos')) || [];

    
    const esFavoritoExistente = favoritosFromLocalStorage.some(dentista => dentista.id === id);

    if (esFavoritoExistente) {
      
      const nuevosFavoritos = favoritosFromLocalStorage.filter(dentista => dentista.id !== id);
      localStorage.setItem('dentistasFavoritos', JSON.stringify(nuevosFavoritos));
    } else {

      const nuevoFavorito = { id, name, userName };
      const nuevosFavoritos = [...favoritosFromLocalStorage, nuevoFavorito];
      localStorage.setItem('dentistasFavoritos', JSON.stringify(nuevosFavoritos));
    }


    toggleFavorito();
  };

  return (
    <div className="card">
      <Link key={id} to={`/user/${id}`}>
        <img src={img} alt="imagen" style={{ height: '200px' }} />
        <h4>{name}</h4>
        <p>{userName}</p>
      </Link>


      <button onClick={handleFavoritoClick} className="favButton">
        {isFavorito ? "Remove fav" : "Add fav"}
      </button>
    </div>
  );
};

export default Card;



/* import React, { useState } from "react";
import img from '../../public/images/doctor.jpg'
import { Link } from "react-router-dom";

const Card = ({ name, userName, id }) => {
  const [favoritos, setFavoritos] = useState([]);

  const addFav = (user)=>{
    
    if(favoritos.includes(user)){
      localStorage
    }
  }

  return (
    
    <div className="card" >
       
      
        <Link key={id} to={`/user/${id}`}>
        <img src={img} alt="imagen" style={ {height : '200px'}} />
        <h4>{name}</h4>
        <p>{userName}</p>
        </Link>
        

        
        <button onClick={addFav} className="favButton">Add fav</button>

    </div>
    
  );
};

export default Card;
 */