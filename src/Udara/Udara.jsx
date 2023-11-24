import React from 'react'
import { useState } from 'react'
import Header from './Header'
import Main from './Main'
import Login from '../components/login/Login'
import MainInventario from './Inventario/MainInventario'
import Clientes from './Inventario/Clientes'


const Udara = ({inicioSesion,setInicioSesion,login,setLogin,setLocalstorage, setAdmin,admin}) => {

  const [ubicacion, setUbicacion]= useState('Clientes')
  return (
    <div>

        {login ? 
        <Login setAdmin={setAdmin} setInicioSesion={setInicioSesion}  setLogin={setLogin}/> :

        <>
          
          
          <Header setUbicacion={setUbicacion} ubicacion={ubicacion} setAdmin={setAdmin} admin={admin} setLocalstorage={setLocalstorage} inicioSesion={inicioSesion} setInicioSesion={setInicioSesion} login={login} setLogin={setLogin} />

          {admin ? (
            ubicacion === 'Inventario' ? (
              <MainInventario />
            ) : (
              <Clientes />
            )
          ) : (
            <>
              <Main />
            </>
          )}

        
        </>
      }



    </div>
  )
}

export default Udara