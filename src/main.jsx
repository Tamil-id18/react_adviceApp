import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AdviceApp from './formSamples/AdviceApp.jsx'
//import RegForm from './formSamples/RegForm.jsx'
//import Dummy from './formSamples/Dummy.jsx'

//import UserDetails from './formSamples/UserDetails.jsx'
//import Cart from './formSamples/Cart.jsx'
//import './index.css'
//import './QrCode.css'
//import QrCode from './QrCode.jsx'
// import UserCard from './Components/UserCard.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App />
    <UserCard />
    <QrCode />
    <Cart />
    <UserDetails />
      <RegForm />
       <Dummy />
    */}
   <AdviceApp />
  </React.StrictMode>,
)
