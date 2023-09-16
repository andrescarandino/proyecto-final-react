import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

const Favs = () => {
  const [fav, setFav] = useState([]);

  useEffect(()=> {
    setFav(JSON.parse(localStorage.getItem('dentistasFavoritos')));
    
  }, [fav])
  console.log(fav);
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
         {fav.map((user) => (
          <Card  
          key={user.id} 
          name={user.name} 
          userName={user.username} 
          id={user.id}
          />
        ))
        } 
      </div>
    </>
  );
};

export default Favs

