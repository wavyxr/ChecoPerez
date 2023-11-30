

import React from 'react'
import { useEffect, useState } from 'react'

const Agregar_Cliente = ({setAbrirModal}) => {
    const [nombreCliente, setNombreCliente] = useState('')
    const [dispositivo, setDispositivo] = useState('')
    const [descripcion, setDescription] = useState('');
    const [telefono, setTelefono] = useState('')
    const [fechaAlta, setFechaAlta] = useState('')
    const [enviado, setEnviado] = useState(false)
    const [mensaje,setMensaje] = useState('')
    const [pregunta, setPregunta] = useState(false)
    const closeModal = () => {
      setLocalStorage(false);
      setAbrirModal(false);
      setPregunta(false);
    };

 
    const setLocalStorage = value =>{
        try{ 
          setAbrirModal(value)
          window.localStorage.setItem('abrirModal',value)
        }
        catch(error){
          console.error(error);
        }
      
      }
    const handleClick = () => { 
        const respuesta = confirm('¿Está seguro de volver?');
        if ( respuesta ) {
            setLocalStorage(false)
            setAbrirModal('false')

            
        }
        
        
     }

     useEffect(() => {
        const handleBeforeUnload = (event) => {
            event.preventDefault();
          const mensaje = '¿Estás seguro de que quieres recargar la página?';
          event.returnValue = mensaje;
          return mensaje;
        };
    
        window.addEventListener('beforeunload', handleBeforeUnload);
    
        return () => {
          window.removeEventListener('beforeunload', handleBeforeUnload);
        };
      }, []);


     const handleRegistro = (e) => {
    e.preventDefault();
    const formData = new FormData(document.getElementById('formulario'));

    fetch('./src/Udara/Inventario/InsertarClientes.php', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        
        if (data.respuesta === 'correcto') {
            // setLocalStorage('false')
            // setAbrirModal('false')
            setEnviado(true);

            setTimeout(() => {
                setEnviado(false);
            },3000);

            // Este setTimeout se ha movido dentro del bloque .then
            setTimeout(() => {
                setMensaje('Se agregó correctamente el cliente');
            }, 2000);
            setTimeout(() => {
                setPregunta(true);
            }, 2500);
          }
          
    });
};



   


  return (
    <>
        <form id='formulario' method='post' action='Clientes.php' className='flex flex-col w-11/12 mx-auto gap-3 '>

            <input value={nombreCliente} name='nombre' onChange={(e)=>setNombreCliente(e.target.value)} type="text" required className='text-center p-2 rounded-md font-bold text-black placeholder:font-bold placeholder:text-center ' placeholder='Nombre del cliente'/>

            <input value={dispositivo} name='dispositivo' onChange={(e)=>setDispositivo(e.target.value)} type="text" required className='text-center p-2 rounded-md font-bold text-black placeholder:font-bold placeholder:text-center' placeholder='Dispositivo'/>
            
            <input value={descripcion} name='descripcion' onChange={(e)=>setDescription(e.target.value)} type="text" required className='text-center p-2 rounded-md font-bold text-black placeholder:font-bold placeholder:text-center' placeholder='Descripcion del Problema'/>
            
            <input value={telefono} name='telefono' onChange={(e)=>setTelefono(e.target.value)} type="number" required className='text-center p-2 rounded-md font-bold text-black placeholder:font-bold placeholder:text-center' placeholder='Numero telefonico del Cliente'/>
            
            <div className="flex flex-col relative w-full h-full">

                <label className="text-gray-500 font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    Fecha de alta
                </label>


                <input value={fechaAlta}
                    name='fechaAlta'
                    onChange={(e) => setFechaAlta(e.target.value)}
                    type="date"
                    required
                    className="text-end placeholder:text-center p-2 w-full rounded-md font-bold text-black"
                />
            </div>
            {enviado ? 
              <div className='w-full   flex justify-center'>
                <div className='cargando'></div>
                {mensaje && <div className='transition-all rounded-lg duration-500 boton_verde p-5 absolute top-12'>{mensaje}</div>}
                
              </div>
            :
            <div className='flex justify-between w-full text-center'>
                <button onClick={()=>handleClick()} className='boton_rojo p-2  rounded-md w-44 '  >Volver</button>
                <input onClick={(e)=>handleRegistro(e)} type="submit" className='boton_verde p-2 cursor-pointer  rounded-md w-44 ' value="Registrar cliente" />


            </div>
            }
{pregunta && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="text-center flex flex-col gap-5 bg-black p-5 rounded-md">
            <p>¿Agregará más clientes?</p>
            <div className="w-full flex justify-evenly gap-10">
              <button
                onClick={() => {
                  setPregunta(false);
                  setNombreCliente('');
                  setDescription('');
                  setDispositivo('');
                  setTelefono('');
                  setFechaAlta('  ')

                }}
                className="boton_verde w-full rounded-sm"
              >
                Sí
              </button>
              <button
                onClick={() => {
                  
                  closeModal();
                }}
                className="boton_rojo w-full rounded-sm"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}


            



            
        </form>
    </>
  )
}

export default Agregar_Cliente