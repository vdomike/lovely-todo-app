import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { signOut } from '../../store/actions/actionAuth';

const SignedInLinks = ({ initials, signOut }) => {
  return (
    <ul className="flex items-center text-beige text-2xl">
      <li className="mr-8">
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li className="mr-8">
        <NavLink to="/create-quote">New Quote</NavLink>
      </li>
      <li className="mr-8">
        <button onClick={signOut}>Log out</button>
      </li>
      <li>
        <div className="block rounded-full w-12 h-12 flex items-center justify-center bg-white font-title text-3xl text-pink">
          {initials}
        </div>
      </li>
    </ul>
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
