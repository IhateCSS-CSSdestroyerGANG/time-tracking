import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import CardList from './components/CardList'
import CardName from './components/CardName'

function App() {
  
  const [period, setPeriod] = useState("daily");

  const handlePeriodChange = (newperiod) =>{
    setPeriod(newperiod);
  };

  return (
    <div className='cards__container'>
      <div className="card-name-wrapper">
        <CardName handlePeriodChange={handlePeriodChange}></CardName>
      </div>
      <div className="card-list-wrapper">
        <CardList period={period}></CardList>
      </div>    
    </div>
  )
}

export default App
