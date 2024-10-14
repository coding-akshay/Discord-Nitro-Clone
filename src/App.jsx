import { useState } from 'react'
import Navbar from './navbar'
import "./discord-nitro.css";
import Frame from './frameone';
import Part2 from './part-two';
import Plans from './plans';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="container">
     <div className="main">
     
     <Navbar/>
     <Frame/>
     <Part2/>
     <Plans/>
    
     </div>
     </div>

    </>
  )
}

export default App
