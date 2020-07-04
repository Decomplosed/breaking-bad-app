import React from 'react'

const CharacterItem = ({ item }) => {
  console.log(item)
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt={item.name} />
        </div>
      </div>
    </div>
  )
}

export default CharacterItem
