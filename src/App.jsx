import { useState } from 'react'
import './App.css'
import Header from './Components/Header/header'
import HeaderContent from './Components/Header_Content/header_content'
import Services from './Components/Services/services'
import ContactComponent from './Components/Contact/contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HeaderContent />
      <Services />
      {/* <ContactComponent /> */}
    </>
  )
}

export default App
