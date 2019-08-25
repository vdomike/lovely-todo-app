import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SignedInLinks from '../SignedInLinks';
import SignedOutLinks from '../SignedOutLinks';

const Navbar = ({ auth: { uid }, profile: { firstName, lastName } }) => {
  const initials =
    firstName && lastName ? (firstName[0] + lastName[0]).toUpperCase() : '';
  const links = uid ? (
    <SignedInLinks initials={initials} />
  ) : (
    <SignedOutLinks />
  );
  return (
    <nav className="bg-pink font-main p-4 relative">
      <svg className="absolute left-0 curve" width="100%" height="29.8">
        <defs>
          <pattern
            width="53"
            height="30"
            viewBox="0 0 53 30"
            patternUnits="userSpaceOnUse"
            id="curve"
          >
            <path
              d="M53.3,15.8C40,15.8,40,28.3,26.7,28.3S13.3,15.8,0,15.8V0h53.3V15.8z"
              fill="#ff787f"
            />
          </pattern>
        </defs>
        <rect fill="url(#curve)" width="100%" height="29.8" />
      </svg>
      <div className="flex justify-between items-center container mx-auto">
        <div className="brand-logo text-3xl text-white">
          <Link to="/">Girl's Todo App</Link>
        </div>
        {links}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  uid: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string
};

Navbar.defaults = {
  uid: '',
  firstName: '',
  lastName: ''
};

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile
});

export default connect(mapStateToProps)(Navbar);
