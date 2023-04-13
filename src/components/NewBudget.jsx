import { useState } from 'react'
import Message from './Message'

const NewBudget = ({
  budget, setBudget,
  setIsBudgetValid
}) => {

  const [message, setMessage] = useState('')

  const handlerBudget = (e) => {
    e.preventDefault()
    
    if(!budget || budget < 0){
      setMessage('No es un presupuesto valido')
      return
    }  
    setMessage('')
    setIsBudgetValid(true)




  }



  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <h2>Nuevo Presupuesto</h2>
        <form className='formulario' onSubmit={handlerBudget}>
          <div className='campo'>
            <label>Definir Presupuesto</label>
            <input 
              className='nuevo-presupuesto' 
              type="number"
              placeholder='Agrega nuevo presupuesto'
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))} />
          </div>
          <input 
            type="submit" 
            value="Agregar"
             />
             {message && <Message type="error">{message}</Message>}
        </form>
    </div>
  )
}

export default NewBudget