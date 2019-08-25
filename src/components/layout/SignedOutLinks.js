import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <ul className="flex items-center text-beige text-2xl">
      <li className="mr-8">
        <NavLink to="/signup">Signup</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Login</NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
