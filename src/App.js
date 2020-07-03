import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import './App.css'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {}, [])

  return (
    <div className='container'>
      <Header />
    </div>
  )
}

export default App
