import { useState } from 'react'
import './App.css'

function App() {
   const [color, setColor] = useState('black')

  return (
    <>
  <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>

    <div className='fixed flex flex-wrap justify-center top-5 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
      <button onClick={()=>{ setColor('red')}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'  style={{backgroundColor: "red"}}
        >red</button>
      <button onClick={()=>{ setColor('blue')}}  className='outline-none px-4 py-1 rounded-full text-white shadow-lg'  style={{backgroundColor: "blue"}}
      >blue</button>
      <button onClick={()=>{ setColor('green')}}  className='outline-none px-4 py-1 rounded-full text-white shadow-lg'  style={{backgroundColor: "green"}}
      >green</button>
      <button onClick={()=>{ setColor('yellow')}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'  style={{backgroundColor: "yellow"}}
      >yellow</button>
      <button onClick={()=>{ setColor('grey')}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'  style={{backgroundColor: "grey"}}
      >grey</button>
      <button onClick={()=>{ setColor('pink')}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'  style={{backgroundColor: "pink"}}
      >pink</button>
      <button onClick={()=>{ setColor('orange')}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'  style={{backgroundColor: "orange"}}
      >orange</button>
      <button onClick={()=>{ setColor('Goldenrod')}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'  style={{backgroundColor: "Goldenrod"}}
      >Goldenrod</button>
      <button onClick={()=>{ setColor('DarkSeaGreen')}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'  style={{backgroundColor: "DarkSeaGreen"}}
      >DarkSeaGreen</button>
      <button onClick={()=>{ setColor('DarkOrange')}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'  style={{backgroundColor: "DarkOrange"}}
      >DarkOrange</button>

      </div>
    </div>
  </div>
    </>
  )
}

export default App

// px-4 py-1 rounded-full text-white shadow-lg"style={{backgroundColor: "red"}}