import React, { createContext, useEffect, useState } from 'react';
import getData from './actions/getData';
import Detail from './views/Detail';

export const MyContext = createContext();

function App() {
  const [datos, setDatos] = useState([]);
  useEffect(()=>{
      const asyncData = async() => {
          const data = await getData();
          setDatos(data.data.data);
      }
      asyncData();
  }, []);
  console.log(datos); 
  return (
    <MyContext.Provider value={{datos, setDatos}}>
      <Detail/>
    </MyContext.Provider>
  );
}

export default App;
