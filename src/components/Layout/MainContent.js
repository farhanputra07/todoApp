import React, { useState, useEffect } from 'react';
import Card from '../UI/Card';
import UserInput from '../UserInput/UserInput';
import classes from './MainContent.module.css';
import TodoItem from '../TodoItem/TodoItem';

const MainContent = () => {
  const [showTodo, isShowTodo] = useState(false);
  const [todos, setTodos] = useState([]);
  const addTodoHandler = (todoTask) => {
    setTodos([
      ...todos,
      {
        id: Math.random() * 100,
        task: todoTask,
        isCompleted: false,
        isEditing: false,
      },
    ]);
  };
  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const editTodoHandler = (id, newTask) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, task: newTask, isEditing: !todo.isEditing }
          : todo
      )
    );
  };
  const editStateHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  useEffect(() => {
    if (todos.length > 0) {
      isShowTodo(true);
      return;
    }
    isShowTodo(false);
  }, [todos]);

  const inputValue = {
    type: 'text',
    maxLength: 50,
    placeholder: "What's next?",
  };

  const editFormProps = {
    ...inputValue,
    placeholder: 'Edit todo',
  };

  return (
    <div className={classes.mainContent}>
      <Card>
        <UserInput value={inputValue} addTodo={addTodoHandler} />
        {!showTodo && <p className={classes.text}>Start making your todo!</p>}
        {showTodo && (
          <TodoItem
            itemList={todos}
            onDelete={deleteTodoHandler}
            editState={editStateHandler}
            value={editFormProps}
            editTask={editTodoHandler}
          />
        )}
      </Card>
    </div>
  );
};

export default MainContent;
