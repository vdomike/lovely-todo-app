import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SignedInLinks from '../SignedInLinks';
import SignedOutLinks from '../SignedOutLinks';

const Navbar = ({
  auth: { uid },
  profile: { firstName, lastName },
  history
}) => {
  history.listen(location => closeMobileMenu());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggledClass = mobileMenuOpen ? 'toggled' : '';
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  const initials =
    firstName && lastName ? (firstName[0] + lastName[0]).toUpperCase() : '';
  const links = uid ? (
    <SignedInLinks initials={initials} />
  ) : (
    <SignedOutLinks />
  );
  return (
    <nav className="bg-pink font-main py-4 px-4 lg:px-12 relative h-20 md:h-auto">
      <svg className="absolute left-0 curve z-10" width="100%" height="29.8">
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
      <div className="absolute z-20 top-0 left-0 right-0 md:static flex justify-between items-center mx-auto">
        <div className="hidden md:block brand-logo text-3xl  md:text-2xl lg:text-3xl text-white">
          <Link to="/">Girl's Todo App</Link>
        </div>
        <div className="mobile-menu-toggle relative w-full md:w-auto h-full md:h-auto">
          <div
            className={`mobile-toggle md:hidden ${toggledClass}`}
            onClick={() => setMobileMenuOpen(mobileMenuOpen => !mobileMenuOpen)}
          />
          {links}
        </div>
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

export default connect(mapStateToProps)(withRouter(Navbar));
