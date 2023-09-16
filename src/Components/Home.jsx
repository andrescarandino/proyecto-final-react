import Card from './Card'
import React, {useContext, useReducer, useState, useEffect} from "react"
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';
function Home(){
 const {state} = useContext(ContextGlobal);

  const apiData = state.data;

    return (
        <main className='card-grid'>
         {apiData.map((user) => (
          <Card  key={user.id} name={user.name} userName={user.username} id={user.id}/>
        ))
        }  
        </main>
        )
}
export default Home