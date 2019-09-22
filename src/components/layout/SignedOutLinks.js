import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import SplittedWord from '../common/SplittedWord';

const SignedOutLinks = () => {
  return (
    <Fragment>
      <ul className="hidden md:flex items-center text-beige text-2xl md:text-xl lg:text-2xl">
        <li className="mr-8">
          <NavLink to="/quotes" className="bouncing-text">
            <SplittedWord word="Quotes" />
          </NavLink>
        </li>
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
      <ul className="mobile-nav-links md:hidden text-2xl">
        <li>
          <NavLink
            to="/quotes"
            className="block w-full bg-beige border-l-2 border-b-2 border-r-2 border-pink text-pink py-2 px-4"
          >
            Quotes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signup"
            className="block w-full bg-beige text-pink border-l-2 border-b-2 border-r-2 border-pink pt-4 pb-2 px-4"
          >
            Signup
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signin"
            className="block w-full bg-beige border-l-2 border-b-2 border-r-2 border-pink text-pink py-2 px-4"
          >
            Login
          </NavLink>
        </li>
      </ul>
    </Fragment>
  );
};

export default SignedOutLinks;
