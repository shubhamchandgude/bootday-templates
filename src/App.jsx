import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Snippets from './Pages/Snippets';
import Templates from './Pages/Templates';
import ReactNative from './Pages/ReactNative';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Details from './Pages/Details';
import EditForm from './Pages/Form/EditForm';
import CreateUser from './Pages/Form/CreateUser';

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={< Home/>} />
      <Route path='/snippets' element={<Snippets />} />
      <Route path='/templates' element={<Templates />} />
      <Route path='/reactnative' element={<ReactNative />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/details' element={<Details/>}/>
      <Route path='/editform' element={<EditForm />}/>
      <Route path='/createuser' element={<CreateUser />}/>
     </Routes>
     </BrowserRouter>
    </>
  );
};

export default App;