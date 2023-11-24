import { useState } from 'react'
import Udara from './Udara/Udara'



function App() {
  const InicioSesion = window.localStorage.getItem('inicioSesion');

  const InicioA = window.localStorage.getItem('admin');

  const BooleanoAdmin = InicioA !== null ? JSON.parse(InicioA) : false;
  const BooleanoUsuario = InicioSesion !== null ? JSON.parse(InicioSesion) : false;
  

  const [inicioSesion, setInicioSesion] = useState(BooleanoUsuario);
  
  const [admin, setAdmin] = useState(BooleanoAdmin);


  const [login,setLogin]= useState(false);

   const setLocalStorage = value =>{
    try{ 
      setInicioSesion(value)
      window.localStorage.setItem('inicioSesion',value)
    }
    catch(error){
      console.error(error);
    }
  }

 

  return (
    <>
      <Udara admin={admin} setAdmin={setAdmin} setLocalStorage={setLocalStorage} inicioSesion={inicioSesion} setInicioSesion={setInicioSesion} login={login} setLogin={setLogin}/>     
    </>
  )
}

export default App
