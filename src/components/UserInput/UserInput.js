import Button from '../UI/Button';
import classes from './UserInput.module.css';
const UserInput = (props) => {
  const btnName = '+ ADD';
  const btnProperty = {
    type: 'submit',
  };
  return (
    <form className={classes.form}>
      <input {...props.value} />
      <Button btnName={btnName} btn={btnProperty} />
    </form>
  );
};

export default UserInput;
