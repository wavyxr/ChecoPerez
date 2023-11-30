import React, { useState, useEffect } from 'react';
import Agregar_Cliente from './Agregar_Cliente';
import EditarCliente from './EditarCliente';




const Clientes = () => {
    const setLocalStorage = value =>{
      try{ 
        setAbrirModal(value)
        window.localStorage.setItem('abrirModal',value)
      }
      catch(error){
        console.error(error);
      }
    
    }
    const setLocalStorageActualizar = (value,cliente) =>{
      try{ 
        setAbrirModalActualizar(value)
        setActualizarClientes(cliente)
        console.log(cliente);
        window.localStorage.setItem('abrirModalActualizar',value)
        window.localStorage.setItem('actualizandoCliente',cliente)
      }
      catch(error){
        console.error(error);
      }
    
    }
    
    
    // Estado para almacenar la lista de clientes
    const [clientes, setClientes] = useState([]);
    const [abrirModal, setAbrirModal] = useState(window.localStorage.getItem('abrirModal'));

    const [actualizarClientes, setActualizarClientes] = useState(window.localStorage.getItem('actualizandoCliente'));
    const [abrirModalActualizar, setAbrirModalActualizar] = useState(window.localStorage.getItem('abrirModalActualizar'));

    
    
    

    
    
    useEffect(() => {
        console.log('cambios',abrirModal);
    },[abrirModal])

    useEffect(() => {
        // Realizar la solicitud al servidor para obtener los datos de los clientes
        fetch('./src/Udara/Inventario/Validar_Clientes.php')
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    console.error('Error en la solicitud:', data.error);
                    // Manejar el error, por ejemplo, mostrar un mensaje al usuario
                } else if (data.total) {
                    console.log('Total de clientes:', data.total);
                    console.log('Datos de clientes:', data.datos);
                    // Establecer la lista de clientes en el estado
                    setClientes(data.datos);
                } else {
                    // Si no hay clientes, establecer el estado en un array vacío
                    setClientes([]);
                }
            })
            .catch(error => {
                console.error('Error en la solicitud:', error);
                // Manejar errores de red u otros errores de la solicitud
            });
    }, []); // El segundo argumento del useEffect, un array vacío, asegura que se ejecute solo una vez al montar el componente.

    const handleEliminar = (id) => {
        const confirmarDelete = confirm('¿Ya ha finalizado el proceso?');
        if (!confirmarDelete) {
            return;
        }
        console.log('ID enviado:', id);
        fetch('./src/Udara/Inventario/EliminarCliente.php', {
            method: 'POST',
            body: JSON.stringify({ id: id })
        })
        .then(res => res.json())
        .then(data => {
            console.log('Respuesta del servidor:', data);
            if (data.error) {
                console.error('Error:', data.error);
            }
            if(data.exito){
                alert('Se elimino correctamente el cliente');
                location.reload()
                
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    
    const handleEditar = (cliente) => {

        setActualizarClientes(cliente);

        abrirModalActualizar ? setAbrirModalActualizar('false') : setAbrirModalActualizar('true')

        setLocalStorageActualizar('true',cliente)

        console.log(abrirModalActualizar);
    }
    

   
    
    const handleClick = () => {
        abrirModal ? setAbrirModal('false') : setAbrirModal('true')
        setLocalStorage('true')
        
    }
    return  (
        <main className='text-white mt-5 flex flex-col gap-10'>
            

            {
                abrirModalActualizar == 'true' ? (
                    <EditarCliente actualizarClientes={actualizarClientes} setActualizarClientes={setActualizarClientes} setAbrirModalActualizar={setAbrirModalActualizar} abrirModalActualizar={abrirModalActualizar} />):
            
            abrirModal === 'true'  ? <Agregar_Cliente actualizarClientes={actualizarClientes} setActualizarClientes={setActualizarClientes} setAbrirModalActualizar={setAbrirModalActualizar} abrirModalActualizar={abrirModalActualizar} setAbrirModal={setAbrirModal} /> : 
            
            <div className='w-11/12 m-auto relative '>
                {/* Verificar si la lista de clientes está vacía */}
                {clientes.length === 0 ? (
                    // Si no hay clientes, mostrar un mensaje

                    <div className='w-full h-[50vh] absolute bg-black/70 rounded-md'>
                    <h3 className='text-center font-semibold text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        No hay Clientes Pendientes
                    </h3>
                    <div className='text-center absolute bottom-10 left-1/2 -translate-x-1/2'>
                        <input className='boton_verde py-2 px-5 font-semibold rounded-sm cursor-pointer transition-all duration-500 hover:text-black' type="submit" value="Agregar nuevo cliente" onClick={() => handleClick()} />
                        
                    </div>


                    </div>
                ) : (
                    // Si hay clientes, mostrar la lista
                    <div className='w-full h-full'>
                        <p className='text-center font-semibold pb-5'>Total de Clientes: {clientes.length}</p>
                        <ul className='flex flex-col gap-y-10'>
                            {clientes.map(cliente => (
                               <li key={cliente.id} className='bg-gray-800 rounded-md p-6 shadow-md hover:shadow-lg transition-all duration-300 relative'>
                               <h2 className='text-white font-bold text-xl mb-2'>
                                 {cliente.Nombre_cliente}
                               </h2>
                               <p className='text-gray-400 mb-2'>
                                 <span className='font-semibold'>Descripción:</span> {cliente.Descripcion}
                               </p>
                               <p className='text-gray-400 mb-2'>
                                 <span className='font-semibold'>Dispositivo:</span> {cliente.Dispositivo}
                               </p>
                               <p className='text-gray-400 mb-2'>
                                 <span className='font-semibold'>Número de Cliente:</span> {cliente.Telefono_cliente}
                               </p>
                               <p className='text-gray-400 mb-2'>
                                 <span className='font-semibold'>Fecha de alta:</span> {cliente.Fecha_de_Alta}
                               </p>
                               <p className='text-gray-400 mb-2 absolute top-0 right-0 mt-5 mr-6'>
                                 <span className='font-semibold'>Cliente id:</span> {cliente.id}
                               </p>

                               <div className="mt-4 flex justify-between items-center">
                                 <button className="text-white bg-[rgba(35,134,54)] hover:bg-[rgba(35,134,54,0.8)] py-2 px-4 rounded-md" 
                                 onClick={() => handleEditar(cliente)}>Editar
                                 </button>

                                 <button onClick={() => handleEliminar(cliente.id)} className="text-white bg-red-500 hover:bg-red-600 py-2 px-4 rounded-md">Finalizado</button>

                               </div>
                             </li>
                             
                              
                            ))}
                        </ul>
                        <div className='w-full text-center mt-10'>
                            <input className='boton_verde py-2 px-5 font-semibold rounded-sm cursor-pointer transition-all duration-500 hover:text-black' type="submit" value="Agregar nuevo cliente" onClick={() => handleClick()} />
                        
                        </div>

                    </div>
                )}
            </div>
            
            
            
            
            
            
            
            
            }

            
            
        </main>
    );
};

export default Clientes;
