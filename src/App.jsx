import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './HEADER/Header'
import Form from './FORM/Form'
import SideBar from './SIDEBAR/SideBar'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [ischanged, setIsChanged] = useState(false)

  const addUser = (e) => {
    e.preventDefault()
    setIsChanged(true)
  }


  return (
    <>
      <Header name = {name} ischanged={ischanged} />
      <div className='flex'>
        <SideBar name = {name} ischanged={ischanged} />
        <Form setName={setName} setEmail={setEmail} addUser={addUser} />
      </div>

    </>
  )
}

export default App
