import { useState } from 'react';
import './App.css'
import Authenticate from './components/Authenticate';
import SignUpForm from './components/SignUpForm';

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
    <div className = "wrap">




      <div className = "signUp">
      <SignUpForm token={token} setToken={setToken} />
      </div>
    








    <div className = "authy">
    <Authenticate token={token} setToken={setToken} />
    </div>





    </div>
    
               
          </>
        );
      }

export default App