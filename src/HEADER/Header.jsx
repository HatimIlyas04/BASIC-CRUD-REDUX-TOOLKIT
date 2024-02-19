import React from 'react'
import './Header.css'

function Header(props) {
  return (
    <>

      <div className='header'>
        <h1 className='h1'>HOLAZOMI</h1>
        <p>hello {props.ischanged && props.name}</p>
      </div>
      
    </>

  )
}

export default Header