import React from 'react';
import PropTypes from 'prop-types';

const Pattern = ({ width, height }) => {
  return (
    <svg className="absolute -z-10" width={width} height={height}>
      <defs>
        <pattern
          id="background"
          x="0"
          y="0"
          width="101"
          height="101"
          patternUnits="userSpaceOnUse"
        >
          <g id="Layer_1">
            <g>
              <rect fill="#cee4e2" width="101" height="101" />
              <circle fill="#ff9875" cx="26.6" cy="44.6" r="7.1" />
              <circle fill="#ff9875" cx="70.2" cy="101" r="7.1" />
              <circle fill="#ff9875" cx="70.2" cy="0" r="7.1" />
              <circle fill="#ffffff" cx="78.1" cy="46.2" r="4.4" />
              <circle fill="#ffffff" cx="44.3" cy="13.2" r="4.4" />
              <circle fill="#ffffff" cx="10.7" cy="76.1" r="4.4" />
            </g>
          </g>
        </pattern>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#background)" />
    </svg>
  );
};

Pattern.protoTypes = {
  width: PropTypes.string,
  height: PropTypes.string.isRequired
};

Pattern.defaultProps = {
  width: '100%',
  height: '100%'
};

export default Pattern;
