import React from 'react';
import PropTypes from 'prop-types';

const ItemMarker = ({ id, isCompleted, completeItem }) => {
  return (
    <i
      className="fas fa-heart text-pink cursor-pointer"
      onClick={() => completeItem(id, isCompleted)}
    />
  );
};

ItemMarker.propTypes = {
  id: PropTypes.string,
  isCompleted: PropTypes.bool,
  completeItem: PropTypes.func
};

ItemMarker.defaults = {
  id: 0,
  completeItem: () => {}
};

export default ItemMarker;
