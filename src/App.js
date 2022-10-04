
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Compose from './Compose';
import EmailDetails from './EmailDetails';
import EmailList from './EmailList';
import { selectSendMessageIsOpen } from './features/mailSlice';
import Header from './Header';
import Sidebar from './Sidebar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {selectUser, signin, signout} from './features/userSlice';

import Login from './Login';
import { auth } from './fireBase';


function App() {

 
  const isMessageOpen = useSelector(selectSendMessageIsOpen);

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
//  console.log(user);


 useEffect(()=>{
//to prevent -- when the page is load we dnt want to go signOut...so we use useEffect()method

  auth.onAuthStateChanged((user)=>{
    if(user)   //if user is present thn...
    {
        dispatch(signin({
          displayName: user.displayName,
          photoURL: user.photoURL,
          email: user.email,
        }))
    }else
    {
      dispatch(signout());
    }
  })

},[])

  return (


    <Router>

      
     
     { ! user ? (
      <Login/>
     ) : (
        <div className="App">
     
        <Header/>
        
        <div className='app__body'>
        <Sidebar/>
   
        <Routes path="/">
        <Route path="/" element={<EmailList/>} />
        </Routes>
   
        <Routes >
        <Route path="/mail" element={<EmailDetails/>} />
        </Routes>
        
        </div>
        <div>
        {
         isMessageOpen && <Compose/>
        }
        </div>
       </div>
      )} 
   
    </Router>
  );
}

export default App;
