import { Fragment } from 'react';
const ListofTodoItem = (props) => {
  return (
    <Fragment>
      <label htmlFor={props.property.id}>{props.text}</label>
      <input />
    </Fragment>
  );
};

export default ListofTodoItem;
