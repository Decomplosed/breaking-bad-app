import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import './App.css'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios(`https://www.breakingbadapi.com/api/characters`)

      setItems(res.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [])

  return (
    <div className='container'>
      <Header />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  )
}

export default App
