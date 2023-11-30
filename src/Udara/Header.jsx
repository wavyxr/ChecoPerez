import React, { useState,useEffect } from 'react'

const Header = ({inicioSesion,setInicioSesion,login,setLogin, admin,setAdmin,ubicacion, setUbicacion}) => {
  
  useEffect(() => {
    console.log('cambio ubicacion',ubicacion);
  
    
  }, [ubicacion])
  
  const setLocalStorage = value =>{
    try{ 
      setInicioSesion(value)
      window.localStorage.setItem('inicioSesion',value)
    }
    catch(error){
      console.error(error);
    }
  }

  const setLocalStorageAdmin = value =>{
    try{ 
      setInicioSesion(value)
      window.localStorage.setItem('admin',value)
    }
    catch(error){
      console.error(error);
    }
  }

  const cerrarSesion = ()=>{
    const confirmar = confirm('Desea Cerrar Sesion');
    if(confirmar){
      setLocalStorage(false)
    }
  }
  const cerrarSesionAdmin = ()=>{
    const confirmar = confirm('Desea Cerrar Sesion');
    if(confirmar){
      setLocalStorageAdmin(false)
      setAdmin(false)
    }
  }


  
  return (
    <header className='text-white flex flex-col justify-center items-center gap-5 bg-blue- p-4 w-full relative bg-black'>
    
    <div className='flex flex-col items-center'>
      <img className='' src="./src/img/zyro-image.png" width={100} alt="Logo" />
      <span className='text-sm font-extrabold mt-2'>Repara Hoy, Disfruta Siempre</span>

    </div>
      {admin &&
        <div className='mt-4 w-full'>
          <ul className='flex w-full px-16  justify-between font-bold'>
            <li>
              <a onClick={(e)=> e.preventDefault(setUbicacion('Clientes'))} href="" className={ubicacion === 'Clientes' ? 'border-b-2 border-white pb-1' : ''}>Clientes</a>
            </li>
            <li>
            <a onClick={(e)=> e.preventDefault(setUbicacion('Inventario'))} href="" className={ubicacion === 'Inventario' ? 'border-b-2 border-white pb-1' : ''}>Inventario</a>
            </li>
          </ul>
          
          
          
        </div>

      }

    
    
 
    

    <ul className=' absolute left-0  top-0 mt-2 ml-2 font-semibold   '>

    {admin && 
      <li className='flex gap-2 items-center ml-2 hover:text-red-600 hover:text-lg transition-all duration-300'>
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
        <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" fill="white"/>
      </svg>
      <a className='hover:text-red-600 hover:text-lg transition-all duration-300' href="" onClick={(e) => { e.preventDefault(); cerrarSesionAdmin(); }}>Cerrar Sesión</a>
      <i className="fa-regular fa-user"></i>
    </li>
    
    }

    {!admin && !inicioSesion && (
      <li className='flex gap-2 items-center ml-2 hover:text-cyan-900 hover:text-lg transition-all duration-300'>
        <svg className='' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
          <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3" fill="white"/>
        </svg>
        <a onClick={(e) => { e.preventDefault(); setLogin(true); }} className='' href="">Iniciar Sesión</a>
      </li>
    )}

    {inicioSesion && (
      <li className='flex gap-2 items-center ml-2 hover:text-red-600 hover:text-lg transition-all duration-300'>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
          <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" fill="white"/>
        </svg>
        <a className='hover:text-red-600 hover:text-lg transition-all duration-300' href="" onClick={(e) => { e.preventDefault(); cerrarSesion(); }}>Cerrar Sesión</a>
        <i className="fa-regular fa-user"></i>
      </li>
    )}


      

        
          
          
          
          


      

      
    </ul>
</header>

  )
}
    
export default Header