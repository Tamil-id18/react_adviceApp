import {useState} from 'react';
import "./Advice.css";

const AdviceApp = () => {
    const[advice,setAdvice] = useState("Please click button to get advice")
    const [count,setCount] = useState(0);
    async function getAdvice(){
       const res = await fetch("https://api.adviceslip.com/advice")
       const data = await res.json();
       //console.log(data)
       setAdvice(data.slip.advice);
       setCount((e) => e +1)
    }
  return (
    <div>
      <h1> {advice} </h1>
      <button onClick={getAdvice}>Get Advice</button>
      <p>You have read <b>{count}</b> pieces of advice</p>
    </div>
  );
}

export default AdviceApp;
