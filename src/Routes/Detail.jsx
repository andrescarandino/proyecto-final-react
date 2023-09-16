import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';





const Detail = () => {
 
  const {id} = useParams();
  const [user, setUser] = useState([]);
  
  useEffect(() => {
    const apiUrl = `https://jsonplaceholder.typicode.com/users/${id}`;

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Error al obtener datos de la API');
        }
        const data = await response.json();
        console.log(data);
        setUser(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <>
      <h1>Detail Dentist {id} </h1>
      <table>

      <tr>
            <th>Nombre del Personaje</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Sitio Web</th>
      </tr>
      <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.website}</td>
        </tr>
      </table>

    </>
  )
}

export default Detail