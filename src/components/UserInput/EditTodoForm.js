import classes from './EditTodoForm.module.css';
import { useState } from 'react';
const UserInput = (props) => {
  const { item } = props;
  const [value, setValue] = useState(item.task);
  const submitHandler = (event) => {
    event.preventDefault();
    props.editTask(item.id, value);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input
        {...props.value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        value={value}
      />
      <button>Update</button>
    </form>
  );
};

export default UserInput;
