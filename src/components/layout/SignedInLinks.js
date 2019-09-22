import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { signOut } from '../../store/actions/actionAuth';
import SplittedWord from '../common/SplittedWord';

const SignedInLinks = ({ initials, signOut }) => {
  return (
    <Fragment>
      <ul className="hidden md:flex items-center text-beige text-2xl md:text-xl lg:text-2xl">
        <li className="mr-8">
          <NavLink to="/quotes" className="bouncing-text">
            <SplittedWord word="Quotes" />
          </NavLink>
        </li>
        <li className="mr-8">
          <NavLink to="/create-quote" className="bouncing-text">
            <SplittedWord word="New Quote" />
          </NavLink>
        </li>
        <li className="mr-8">
          <NavLink to="/dashboard" className="bouncing-text">
            <SplittedWord word="Dashboard" />
          </NavLink>
        </li>
        <li className="mr-8">
          <button onClick={signOut} className="bouncing-text">
            <SplittedWord word="Log out" />
          </button>
        </li>
        <li>
          <div className="block rounded-full w-12 h-12 flex items-center justify-center bg-white font-title text-3xl text-pink">
            {initials}
          </div>
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
            to="/create-quote"
            className="block w-full bg-beige border-l-2 border-b-2 border-r-2 border-pink text-pink py-2 px-4"
          >
            New Quote
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard"
            className="block w-full bg-beige text-pink border-l-2 border-b-2 border-r-2 border-pink pt-4 pb-2 px-4"
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <button
            onClick={signOut}
            className="w-full bg-beige border-l-2 border-b-2 border-r-2 border-pink text-pink py-2 px-4 text-left"
          >
            Log out
          </button>
        </li>
      </ul>
    </Fragment>
  );
};

SignedInLinks.propTypes = {
  initials: PropTypes.string,
  signOut: PropTypes.func
};

SignedInLinks.defaults = {
  initials: '',
  signOut: () => {}
};

const mapDispatchToProps = {
  signOut
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
