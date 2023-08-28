import Input from '../UI/Input';
import { Fragment } from 'react';
const ListofTodoItem = (props) => {
  return (
    <Fragment>
      <label htmlFor={props.property.id}>{props.text}</label>
      <Input value={props.property} />
    </Fragment>
  );
};

export default ListofTodoItem;
