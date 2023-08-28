import React, { useState } from 'react';
import Card from '../UI/Card';
import UserInput from '../UserInput/UserInput';
import classes from './MainContent.module.css';
import TodoItem from '../TodoItem/TodoItem';

const MainContent = () => {
  const [showTodo, isShowTodo] = useState(false);
  const inputValue = {
    type: 'text',
    maxLength: 50,
    placeholder: "What's next?",
  };

  return (
    <div className={classes.mainContent}>
      <Card>
        <UserInput value={inputValue} />
        {!showTodo && <p className={classes.text}>Start making your todo!</p>}
        <TodoItem />
      </Card>
    </div>
  );
};

export default MainContent;
