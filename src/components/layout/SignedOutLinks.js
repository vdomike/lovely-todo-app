import React from 'react';
import { NavLink } from 'react-router-dom';

import SplittedWord from '../common/SplittedWord';

const SignedOutLinks = () => {
  return (
    <ul className="flex items-center text-beige text-2xl">
      <li className="mr-8">
        <NavLink to="/signup" className="bouncing-text">
          <SplittedWord word="Signup" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/signin" className="bouncing-text">
          <SplittedWord word="Login" />
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
