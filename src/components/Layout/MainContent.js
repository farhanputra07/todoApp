import React, { useState, useEffect } from 'react';
import Card from '../UI/Card';
import UserInput from '../UserInput/UserInput';
import classes from './MainContent.module.css';
import TodoItem from '../TodoItem/TodoItem';

const DUMMY_TODO = [
  { id: 'td1', text: 'Morning run 500m' },
  { id: 'td2', text: 'Complete section 21 react course' },
];

const MainContent = () => {
  const [showTodo, isShowTodo] = useState(false);
  useEffect(() => {
    if (DUMMY_TODO.length > 0) {
      isShowTodo(true);
      return;
    }
    isShowTodo(false);
  }, [DUMMY_TODO]);

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
        {showTodo && <TodoItem itemList={DUMMY_TODO} />}
      </Card>
    </div>
  );
};

export default MainContent;
