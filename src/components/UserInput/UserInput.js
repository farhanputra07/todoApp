import classes from './UserInput.module.css';

const UserInput = (props) => {
  return (
    <form className={classes.form}>
      <input {...props.value} />
      <button>+ Add</button>
    </form>
  );
};

export default UserInput;
