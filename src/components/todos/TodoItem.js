import React from 'react';
import PropTypes from 'prop-types';

import ItemMarker from '../common/ItemMarker';

const TodoItem = ({
  todo: { id, text, isCompleted },
  deleteItem,
  completeItem
}) => {
  return (
    <div className="todo text-lg mb-1">
      <ItemMarker
        id={id}
        isCompleted={isCompleted}
        completeItem={completeItem}
      />
      <span className="mx-2">{text}</span>
      <i
        className="fas fa-times text-darkGreen opacity-50 cursor-pointer"
        onClick={() => deleteItem(id)}
      />
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    isCompleted: PropTypes.bool
  }),
  deleteItem: PropTypes.func,
  completeItem: PropTypes.func
};

TodoItem.defaultProps = {
  todo: {},
  deleteItem: () => {},
  completeItem: () => {}
};

export default TodoItem;
