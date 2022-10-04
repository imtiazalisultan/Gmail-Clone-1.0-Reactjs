import React from 'react';
import "./css/sidebaroptions.css"

const Sidebaroptions = ({Icon, title, number, isActive}) => {
  return (
    <div className={`sidebarOptions ${isActive && `sidebaroptions--active`} `}>
       <Icon/>
       <h4>{title}</h4>
       <p>{number}</p>
    </div>
  )
}

export default Sidebaroptions
