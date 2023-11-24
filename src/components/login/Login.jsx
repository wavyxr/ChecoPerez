
import React, { useState, useEffect } from 'react'



const Login = ({ setInicioSesion,setLogin,setAdmin }) => {
  const [usuario, setUsuario] = useState('')
  const [contraseña, setContraseña] = useState('')

  const [mensaje, setMensaje] = useState('')

  const [error, setError] = useState(false)

  const [conectando, setConectando] = useState(false)

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
      setAdmin(value)
      window.localStorage.setItem('admin',value)
    }
    catch(error){
      console.error(error);
    }
  }


  // const handleSubmit = (e) => {
  //   e.preventDefault()

  //   if (usuario == '') {
  //     setMensaje('Llenar todos los campos')
  //     setError(true)

  //     setTimeout(() => {
  //       setMensaje('')
  //       setError(false)
  //     }, 4000);

  //     return

      
  //   }
    
  //   if(usuario !== 'admin' || contraseña !== 'admin' ){

  //     setError(true)
  //     setMensaje('Usuario o contraseña invalidos')
  //     setUsuario('')
  //     setContraseña('')
  //     setTimeout(() => {
  //       setError(false)
        
  //     }, 2000);

  //     return
  //   }
    
  //   if (usuario == 'admin' && contraseña == 'admin') {
  //     setMensaje('Iniciando Sesion');
  //     setConectando(true);
  //     setTimeout(() => {
  //       setConectando(false);
  //       setLocalStorage(true)
        
  //     }, 1000);
  //     localStorage.setItem('admin', JSON.stringify(true));

      
  //   }
   
   
    
    

  //   const formulario = document.getElementById('formulario')
  //   const datos = new FormData(formulario)


  //   fetch('./src/components/login/datos.php', {
  //     method: 'POST',
  //     body: datos,

  //   })
  //     .then(respuesta => respuesta.json())  // Parsea la respuesta como JSON
  //     .then(datosRecibidos => {
  //       if (datosRecibidos == 'true') {
  //         setUsuario('')
  //         setContraseña('')
  //         alert('usuario insertado')

  //       }
  //       else {
  //         console.log(datosRecibidos);
  //       }
  //     })








  // }


  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formData = new FormData(document.getElementById('formulario'));
  
    fetch('./src/components/login/prueba2.php', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json()) // Parsea la respuesta como JSON
      .then((data) => {

        switch (data.status) {
          case 'admin':
            console.log(data.status);
            setAdmin(true)
            setConectando(true);

            setTimeout(() => {
              setLogin(false);
              setLocalStorageAdmin(true)
            
          }, 1000);
            
            break;

          case 'true':
            console.log(data.status);
            setConectando(true);

            setTimeout(() => {
            setLogin(false)
            setLocalStorage(true)
          
        }, 1000);
              
              
              setConectando(true);
              setInicioSesion(true)
            

            break;
            
        
          default:
            console.log(data.status);
            setError(true);
            setMensaje('Usuario o contraseña incorrectos');
            setTimeout(() => {
            setError(false);
            setMensaje('');
          }, 2000);
            break;
        }
        
      })
      .catch((error) => {
        console.error('Error en la solicitud AJAX:', error);
      });
  };
  



  return (
    <main className='bg-[rgba(13,17,23)] h-screen w-screen flex justify-center items-center '>

      <div className=' bg-[rgba(22,27,34)] w-5/6 lg:w-1/4 md:w-1/2 rounded-lg relative'>
        <div className='border-b-2 w-1/2 mx-auto mt-3 absolute right-0 left-0 font-medium  text-center text-white'>
          <h2>Iniciar sesion</h2>


        </div>

        


        <form id='formulario' method='post' action='prueba2.php'  className='mt-5 p-10  flex flex-col '  >
          
          <div className='flex flex-col mb-5'>
            <label className='mb-3 text-white' htmlFor="">Usuario</label>
            <input name='usuario' onChange={(valor) => setUsuario(valor.target.value)} value={usuario} placeholder='Ingresar Usuario' className='bg-[rgba(13,17,23)] border-[rgba(48,54,61)] pl-4 py-1 rounded-md text-white border-2 ' type="text" id="" />
          </div>

          <div className='flex flex-col mb-5'>
            <label className='mb-3 text-white' htmlFor="">Contraseña</label>
            <input name='contraseña' onChange={(valor) => setContraseña(valor.target.value)} value={contraseña} placeholder='Ingresar Contraseña' className='bg-[rgba(13,17,23)] border-[rgba(48,54,61)] pl-4 py-1 rounded-md text-white border-2 ' type="password" id="" />
          </div>
          

          {
            conectando ? 
            <div className='flex justify-center'>
              <div className='cargando'></div>
            </div>
            
            :
            <div className='flex flex-col text-center'>
            
            <input onClick={handleSubmit} className= 'cursor-pointer text-white font-medium w-18 rounded-md p-2 boton_verde' type="submit" value={"Iniciar Session"}  />
            <span className='text-white'>
              No tienes cuenta?
              <a className='text-[rgba(248,81,73,0.5)] cursor-pointer' href='#'>Registrate</a>
            </span>


            
            
            
            </div>

          }
          
          
          

          {
            error && (<p className='text-white text-center rounded-md mt-5 font-medium error p-2 border-2 border-[rgba(248,81,73,0.4)]'> {mensaje}</p>)

          }
        

        </form>
      </div>

    </main>
  )
}

export default Login