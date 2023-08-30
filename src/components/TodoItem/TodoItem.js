import React from 'react';
import classes from './TodoItem.module.css';
import ListofTodoItem from './ListofTodoItem';
import EditTodoForm from '../UserInput/EditTodoForm';

const TodoItem = (props) => {
  const mapAllList = (item, index) => {
    if (item.isEditing) {
      return (
        <EditTodoForm
          value={props.value}
          editTask={props.editTask}
          item={item}
          key={index}
        />
      );
    }
    return (
      <li key={index}>
        <ListofTodoItem
          text={item.task}
          itemId={item.id}
          deleteTodo={props.onDelete}
          editState={props.editState}
        />
      </li>
    );
  };
  return (
    <ul className={classes['item-container']}>
      {props.itemList.map(mapAllList)}
    </ul>
  );
};

export default TodoItem;
