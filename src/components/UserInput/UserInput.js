import Button from '../UI/Button';
import classes from './UserInput.module.css';
import Input from '../UI/Input';
const UserInput = (props) => {
  const btnName = '+ ADD';
  const btnProperty = {
    type: 'submit',
  };
  return (
    <form className={classes.form}>
      <Input value={props.value} addClass="addTodo" />
      <Button btnName={btnName} btn={btnProperty} />
    </form>
  );
};

export default UserInput;
