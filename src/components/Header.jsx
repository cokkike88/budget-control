import React from 'react'
import NewBudget from './NewBudget'

const Header = ({
        budget, setBudget,
        isBudgetValid, setIsBudgetValid
    }) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>

        {isBudgetValid ? (
            <p>control presupuesto</p>
        ) : (
            <NewBudget
                budget={budget}
                setBudget={setBudget}
                setIsBudgetValid={setIsBudgetValid} />
        )}        
    </header>
  )
}

export default Header