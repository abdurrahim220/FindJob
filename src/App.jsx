import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './component/NavBar/NavBar'
import SearchDiv from './component/SearchDiv/SearchDiv'
import JobDiv from './component/JobDiv/JobDiv'
import ValueDiv from './component/ValueDiv/ValueDiv'
import Footer from './component/Footer/Footer'

function App() {
 

  return (
    <>
     <div className='w-[85%] mx-auto bg-white'>
     <NavBar/>
      <SearchDiv/>
      <JobDiv/>
      <ValueDiv/>
      <Footer/>
     </div>
    </>
  )
}

export default App
