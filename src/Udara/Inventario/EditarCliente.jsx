  import React from 'react'
  import { useState } from 'react'
  const EditarCliente = ({
    actualizarClientes, setActualizarClientes, setAbrirModalActualizar, abrirModalActualizar


  }) => {
    const [pregunta, setPregunta] = useState(false)

    const [nombreEditado, setNombreEditado] = useState(actualizarClientes.Nombre_cliente)
    const [dispositivoEditado, setDispositivoEditado] = useState(actualizarClientes.Dispositivo)
    const [descripcionEditado, setDescripcionEditado] = useState(actualizarClientes.Descripcion)
    const [telefonoEditado, setTelefonoEditado] = useState(actualizarClientes.Telefono_cliente)
    const [fechaEditado, setFechaEditado] =  useState(actualizarClientes.Fecha_de_Alta)


    const [cambiosRealizados, setCambiosRealizados] = useState(false);
 

    const [mensaje,setMensaje] = useState(false)

    const [cambios,setCambios] = useState([])

    
    const handleClick = (valor) => {
      setAbrirModalActualizar(valor)
      window.localStorage.setItem('abrirModalActualizar', valor)
    }
    const handleEditar = (e) => {
      
      e.preventDefault();
      
      setPregunta(true);
      console.log('estás editando el id', actualizarClientes.id);
    
      if (actualizarClientes.Nombre_cliente !== nombreEditado) {
        console.log('se detectó un cambio en el nombre');
        setCambios((prevCambios) => [...prevCambios, '❌Nombre']);
        setCambiosRealizados(true);
      }  if (actualizarClientes.Dispositivo !== dispositivoEditado) {
        setCambios((prevCambios) => [...prevCambios, '❌Dispositivo']);
        setCambiosRealizados(true);
      } if (actualizarClientes.Descripcion !== descripcionEditado) {
        setCambios((prevCambios) => [...prevCambios, '❌Descripcion']);
        setCambiosRealizados(true);
      } if (actualizarClientes.Telefono_cliente !== telefonoEditado) {
        setCambios((prevCambios) => [...prevCambios, '❌Telefono']);
        setCambiosRealizados(true);
      }  if (actualizarClientes.Fecha_de_Alta !== fechaEditado) {
        setCambios((prevCambios) => [...prevCambios, '❌Fecha']);
        setCambiosRealizados(true);
      } 

      
      setCambiosRealizados((prevCambioRealizado) => {
        if (!prevCambioRealizado) {
          console.log('entro al if');
          setMensaje(true);
          setTimeout(() => {
            setMensaje(false);
          }, 2000);
        }
        return prevCambioRealizado;
      });
 
      


    };
    
    const EditarCLiente= () => {
     
      
      fetch('./src/Udara/Inventario/EditarCliente.php', {
        method: 'POST',
        body: JSON.stringify({ 
          id: actualizarClientes.id,
          nombre_cliente: nombreEditado,
          dispositivo: dispositivoEditado,
          descripcion: descripcionEditado, 
          telefono_cliente: telefonoEditado,
          fecha_alta: fechaEditado})
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.exito) {
        console.log(data.exito);
      } else {
        console.log('Hubo un error', data.error);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
    
      
    }
    
      
    return (
      <>
      
        <form id='formulario' onSubmit={(e)=>handleEditar(e)} action="EditarCliente.php" method="POST" className='flex flex-col w-11/12 mx-auto gap-3 '>
          <input value={nombreEditado} name='nombre' onChange={(e)=>setNombreEditado(e.target.value)} type="text" required className='text-center p-2 rounded-md font-bold text-black placeholder:font-bold placeholder:text-center ' placeholder='Nombre del cliente'/>

          <input value={dispositivoEditado}  name='dispositivo' onChange={(e)=>setDispositivoEditado(e.target.value)} type="text" required className='text-center p-2 rounded-md font-bold text-black placeholder:font-bold placeholder:text-center' placeholder='Dispositivo'/>

          <input value={descripcionEditado}  name='descripcion' onChange={(e)=>setDescripcionEditado(e.target.value)} type="text" required className='text-center p-2 rounded-md font-bold text-black placeholder:font-bold placeholder:text-center' placeholder='Descripcion del Problema'/>

          <input value={telefonoEditado} name='telefono' onChange={(e)=>setTelefonoEditado(e.target.value)} type="number" required className='text-center p-2 rounded-md font-bold text-black placeholder:font-bold placeholder:text-center' placeholder='Numero telefonico del Cliente'/>

          <div className="flex flex-col relative w-full h-full">

            <label  className="text-gray-500 font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Fecha de alta
            </label>


            <input 
                value={fechaEditado}
                name='fechaAlta'
                onChange={(e) => setFechaEditado(e.target.value)}
                type="date"
                required
                className="text-end placeholder:text-center p-2 w-full rounded-md font-bold text-black"
            />
          </div>
        

          <div className='flex justify-between w-full text-center'>
            <button onClick={() => handleClick(false)} className=' boton_rojo p-2 rounded-md w-44'>Volver</button>
            <input type="submit" className='boton_verde p-2 cursor-pointer rounded-md w-44' value="Editar Cliente" />
          </div>
          {pregunta && cambios.length > 0 ?  (

              <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                <div className="text-center flex flex-col gap-5 bg-black p-5 rounded-md">
                  <p>¿Está seguro de los cambios?</p>
              
                  <ul className='w-1/2 mx-auto'>
                    {cambios.map((cambio, index) => (
                      <li className='text-red-400 flex text-center ' key={index}>{cambio}</li>
                    ))}
                  </ul>
                  <div className="w-full flex justify-evenly gap-10">
                    <button
                      onClick={() => {
                        setPregunta(false);
                        setCambiosRealizados(false)
                        setCambios([]);
                        
                      }}
                      className="boton_rojo w-full rounded-sm"
                    >
                      No
                    </button>
                    
                    <button
                      onClick={() => {
                        setPregunta(false);
                        setCambios([]);
                        EditarCLiente()
                        handleClick(false)
                        
                      }}
                      className="boton_verde w-full rounded-sm"
                    >
                      Sí
                    </button>
                  </div>
                </div>
              </div>
            ):<>{mensaje && <div className='fixed left-0 top-12 w-full flex'>
                <p  className="mx-auto animate-fade-down animate-duration-500 transform  boton_rojo text-white rounded-lg p-5  " >No se han realizaron cambios</p>
              
              </div>}</>}


        </form>
      </>
    )
  }

  export default EditarCliente