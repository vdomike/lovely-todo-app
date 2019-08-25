import React from 'react';
import PropTypes from 'prop-types';

const TodoInput = ({ value, onChange, onKeyPress }) => {
  return (
    <div>
      <i className="fas fa-plus text-darkGreen" />
      <input
        type="text"
        onChange={onChange}
        value={value}
        onKeyPress={onKeyPress}
        placeholder="Add New"
        className="list-input ml-2 mb-2"
      />
    </div>
  );
};

TodoInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func
};

TodoInput.defaultProps = {
  value: '',
  onChange: () => {},
  onKeyPress: () => {}
};

export default TodoInput;
