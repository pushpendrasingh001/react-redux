import React from 'react'
import Header from '../src/components/Header'
import Displaycounter from './components/Displaycounter'
import Countainer from './components/Countainer'
import Controls from './components/Controls'
import './App.css'
function App() {
  return (
    <div >
 <div className="card text-center w-50 m-5 ">

  <Countainer>
<Header></Header>
<Displaycounter></Displaycounter>
<Controls/>
</Countainer> 
  </div>

</div>

  )
}

export default App
