import classes from './UserInput.module.css';
import { useState } from 'react';
const UserInput = (props) => {
  const [value, setValue] = useState('');
  const submitHandler = (event) => {
    event.preventDefault();
    props.addTodo(value);
    setValue('');
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
      <button>+ Add</button>
    </form>
  );
};

export default UserInput;
