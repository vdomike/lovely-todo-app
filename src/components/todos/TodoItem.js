import React from 'react';
import PropTypes from 'prop-types';

import ItemMarker from '../common/ItemMarker';
import Tooltip from '../common/Tooltip';

const TodoItem = ({
  todo: { id, text, isCompleted },
  deleteItem,
  completeItem
}) => {
  const classNames = isCompleted ? ' completed' : '';
  const markTooltip = isCompleted ? 'Mark as uncompleted' : 'Mark as completed';
  return (
    <div className={`todo text-lg mb-1${classNames}`}>
      <Tooltip text={markTooltip}>
        <ItemMarker
          id={id}
          isCompleted={isCompleted}
          completeItem={completeItem}
        />
      </Tooltip>
      <span className="item-text mx-2">{text}</span>
      <Tooltip text="Delete item">
        <i
          className="fas fa-times text-darkGreen opacity-50 cursor-pointer"
          onClick={() => deleteItem(id)}
        />
      </Tooltip>
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
