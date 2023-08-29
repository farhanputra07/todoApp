import { Fragment } from 'react';
import classes from './ListOfTodoItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPenToSquare,
  faPersonMilitaryToPerson,
} from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const ListofTodoItem = (props) => {
  const editTodoHandler = (props) => {
    return;
  };
  const deleteTodoHandler = (props) => {
    return;
  };
  return (
    <Fragment>
      <p>Go Shopping</p>
      <div className={classes.listWrapper}>
        <FontAwesomeIcon icon={faPenToSquare} onClick={editTodoHandler} />
        <FontAwesomeIcon icon={faTrash} onClick={deleteTodoHandler} />
      </div>
    </Fragment>
  );
};

export default ListofTodoItem;
