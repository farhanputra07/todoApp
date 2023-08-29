import React from 'react';
import classes from './TodoItem.module.css';
import ListofTodoItem from './ListofTodoItem';
const TodoItem = (props) => {
  const checkBoxProps = {
    type: 'checkbox',
  };
  return (
    <ul className={classes['item-container']}>
      {props.itemList.map((item) => (
        <li key={item.id}>
          <ListofTodoItem property={checkBoxProps} text={item.text} />
        </li>
      ))}
    </ul>
  );
};

export default TodoItem;
