import React from 'react'
import { useState, useEffect } from 'react'
import ModalInventario from './ModalInventario'
import AgregarProducto from './AgregarProducto'



const Main = () => {
  const [inventario, setInventario] = useState(false)
  const [abrirModal, setAbrirModal] = useState('false')

  const handleClick = (e) => {
    e.preventDefault();
    setAbrirModal('true')


  }
  return (
    <main className='text-white'>
        {
          abrirModal == 'true' ? <AgregarProducto/> : (




            
            inventario ? <ModalInventario /> :
            
            <div className='w-full h-[50vh] absolute bg-black/70 rounded-md'>
                <h3 className='text-center font-semibold text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            Sin inventario :c
                </h3>
                <div className='text-center absolute bottom-10 left-1/2 -translate-x-1/2'>
                  <input onClick={(e)=>handleClick(e)} className='boton_verde py-2 px-5 font-semibold rounded-sm cursor-pointer transition-all duration-500 hover:text-black' type="submit" value="Añadir Producto" />
                            
                </div> 
    
          </div>
            


          )
        
        
        }
    </main>
  )
}

export default Main