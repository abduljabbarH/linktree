import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import firebase from '@firebase/app/dist/app'
import App from './App'

firebase.initializeApp({
  apiKey: "AIzaSyDTNpW16rVeAke-5vhMLFNtqBTtzI0MKF8",
  authDomain: "linktree-clone-bc6f6.firebaseapp.com",
  projectId: "linktree-clone-bc6f6",
  storageBucket: "linktree-clone-bc6f6.appspot.com",
  messagingSenderId: "232775692999",
  appId: "1:232775692999:web:334525b7816f87759d84e2",
  measurementId: "G-7ZY17MQEQS"
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
