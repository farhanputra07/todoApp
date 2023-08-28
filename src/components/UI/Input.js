import React from 'react';
import classes from './Input.module.css';
const Input = (props) => {
  const { addClass } = props;
  return (
    <input
      {...props.value}
      className={
        addClass === 'addTodo' ? `${classes.input}` : `${classes.checkBox}`
      }
    />
  );
};

export default Input;
