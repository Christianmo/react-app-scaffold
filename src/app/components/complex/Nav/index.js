import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '@constants/routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to={ROUTES.USERS}>Users</Link></li>
        <li><Link to={ROUTES.POSTS}>Posts</Link></li>
      </ul>
      <ToastContainer />
    </nav>
  );
}

export default Nav;
