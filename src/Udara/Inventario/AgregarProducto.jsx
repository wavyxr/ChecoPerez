import React from 'react'

const AgregarProducto = () => {


  const handleAgregar = (e)=>{
    e.preventDefault();
    const formData = new FormData(document.getElementById('formulario'));

    fetch('./src/Udara/Inventario/AgregarProducto.php', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        
        if (data.respuesta === 'correcto') {
            console.log('correcto');
            
          }
          
    });
  }
  
  return (
    <form onSubmit={(e)=>handleAgregar(e)} id='formulario'  method="POST" className='flex flex-col w-11/12 mx-auto gap-3 mt-5'>
        <select className='font-bold appearance-none text-center block w-full bg-white border border-gray-300 text-black py-2 px-4 leading-tight rounded-md focus:outline-none focus:bg-gray-focus:border-blue-500' name="TipoPieza" id="TipoPieza">
            <option value="" className='text-gray-500'>Tipo de pieza</option>
            <option value="Baterias">Batería</option>
            <option value="Pantallas">Pantallas</option>
            <option value="ConectoresCarga">Conectores de Carga</option>
            <option value="Botones">Botones</option>
            <option value="Camaras">Cámaras</option>
            <option value="Altavoces">Altavoces</option>
            <option value="Adhesivos">Adhesivos y Pegamentos</option>
        </select>



        
          <input name='modelo'  type="text" required className='text-center p-2 rounded-md font-bold text-black placeholder:font-bold placeholder:text-center ' placeholder='Modelo'/>

          <input name='cantidad'  type="number" required className='appearance-none text-center p-2 rounded-md font-bold text-black placeholder:font-bold placeholder:text-center border border-gray-300 focus:outline-none focus:border-blue-500' placeholder='Cantidad'/>

          <input   name='descripcionPieza' type="text" required className='appearance-none text-center p-2 rounded-md font-bold text-black placeholder:font-bold placeholder:text-center border border-gray-300 focus:outline-none focus:border-blue-500' placeholder='Descripcion de la pieza'/>

          <input name='precio' type="number" required className='appearance-none text-center p-2 rounded-md font-bold text-black placeholder:font-bold placeholder:text-center border border-gray-300 focus:outline-none focus:border-blue-500' placeholder='Precio'/>

          

          <div className='flex justify-between w-full text-center'>
            <button  className=' boton_rojo p-2 rounded-md w-44'>Volver</button>
            <input type="submit" className='boton_verde p-2 cursor-pointer rounded-md w-44' value="Agregar Producto" />
          </div>
       


        </form>
  )
}

export default AgregarProducto