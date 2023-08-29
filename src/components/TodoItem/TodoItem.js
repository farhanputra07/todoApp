import React from 'react';
import classes from './TodoItem.module.css';
import ListofTodoItem from './ListofTodoItem';

const TodoItem = (props) => {
  return (
    <ul className={classes['item-container']}>
      {props.itemList.map((item) => (
        <li key={item.id}>
          <ListofTodoItem text={item.task} />
        </li>
      ))}
    </ul>
  );
};

export default TodoItem;
