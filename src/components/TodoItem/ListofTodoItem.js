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
  const editTodoHandler = (props) => {
    return;
  };
  const deleteTodoHandler = (props) => {
    return;
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
        <FontAwesomeIcon icon={faPenToSquare} onClick={editTodoHandler} />
        <FontAwesomeIcon icon={faTrash} onClick={deleteTodoHandler} />
      </div>
    </Fragment>
  );
};

export default ListofTodoItem;
