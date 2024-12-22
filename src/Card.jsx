import React from 'react'
import './Card.css'
const Card = ({data}) => {
  return (
    <div className='card-container' style={{width: '100vh', height: '50vh'}}>
        {data.map((card,index)=>(
            <div className="card" >
      <img src={card.image} alt="Card" className="card-image" />
      <div className="card-description">
        <p>{card.d}</p>
      </div>
    </div>

        ))}
    </div>
  )
}

export default Card