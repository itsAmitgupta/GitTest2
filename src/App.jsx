import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState("")
  const [count, setCount] = useState(0)

  function getAdvice(){
    fetch('https://api.adviceslip.com/advice')
    .then((res)=>(res.json()))
    .then((response)=>{
      console.log(response)
      console.log(response.slip.advice);
      setData(response.slip.advice);
      });
      setCount((count)=>count+1);
  }
    // async function getAdvice1(){
    // const res = await fetch('https://api.adviceslip.com/advice');
    // const data = await res.json();
    // console.log(data.slip.advice);
    // }
  useEffect(()=>{
    getAdvice()
    // getAdvice1()
  },[])
  return (
    <>
      <div className='container center'>
        <h1>Get Advice</h1>
        <h3>{data}</h3>
        <button onClick={getAdvice}>get advice</button>
        <p>You have read <strong>{count}</strong> pieces of Advice</p>
      </div>
    </>
  )
}

export default App
