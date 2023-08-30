import React from 'react';
import classes from './TodoItem.module.css';
import ListofTodoItem from './ListofTodoItem';

const TodoItem = (props) => {
  return (
    <ul className={classes['item-container']}>
      {props.itemList.map((item, index) => (
        <li key={index}>
          <ListofTodoItem text={item.task} />
        </li>
      ))}
    </ul>
  );
};

export default TodoItem;
