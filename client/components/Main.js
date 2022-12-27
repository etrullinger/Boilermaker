import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import { me, logout } from '../auth';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';

const Main = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id); // !! lets you convert a non-Boolean value to Boolean
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(me());
  }, []);

  const logoutAndRedirectHome = async () => {
    await dispatch(logout());
    navigate('/login');
  }

  return (
    <div id='main'>
      <div id='header'>
        <h1>Boilermaker</h1>
      </div>
      <nav>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after user logs in */}
            <Link to='/home'>Home</Link>
            <button type='button' onClick={logoutAndRedirectHome}>Logout</button>
          </div>
        ) : (
          <div>
            <Link to='/login' id='nav-link-login' className='nav-link'>Login</Link>
            <Link to='/signup' id='nav-link-signup' className='nav-link'>Sign Up</Link>
          </div>
        )}
      </nav>
      <hr />
      <div>
        {isLoggedIn ? (
          <Routes>
            <Route path='/*' element={<Home />} />
            <Route to='/home' element={<Home />} />
          </Routes>
        ) : (
          <Routes> 
            <Route path='/*' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        )}
      </div>
      
    </div>
  );
};

export default Main;