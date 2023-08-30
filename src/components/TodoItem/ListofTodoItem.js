import { Fragment, useState } from 'react';
import classes from './ListOfTodoItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPenToSquare,
  faPersonMilitaryToPerson,
} from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ListofTodoItem = (props) => {
  const [isTextClick, setTextClick] = useState(false);
  const textClickHandler = () => {
    setTextClick((prev) => !prev);
  };
  const editTodoHandler = () => {
    props.editState(props.itemId);
  };
  const deleteTodoHandler = () => {
    props.deleteTodo(props.itemId);
  };
  return (
    <Fragment>
      <p
        onClick={textClickHandler}
        className={`${isTextClick ? classes.textClick : ''}`}
      >
        {props.text}
      </p>
      <div className={classes.listWrapper}>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={editTodoHandler}
          className={classes.edit}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={deleteTodoHandler}
          className={classes.trash}
        />
      </div>
    </Fragment>
  );
};

export default ListofTodoItem;
