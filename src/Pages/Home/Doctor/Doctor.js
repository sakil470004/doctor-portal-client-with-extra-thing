import React from 'react'

export default function Doctor({ doctor }) {
  const {name,image}=doctor;
    return (
        <div>
        <img style={{width:'200px'}} src={`data:image/jpeg;base64,${image}`} alt=''/>
            <h3>{name}</h3>
        </div>
    )
}
