import React, { useState, useEffect } from 'react';
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import { ITodo } from "../interfaces/interfaces";

declare var confirm: (question: string) => boolean;

export const Todos: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
        setTodos(saved);
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false
        };
        setTodos(prev => [newTodo, ...prev])
    };

    const toggleHandler = (id: number) => {
        setTodos(prev => prev.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo
        }))
    };

    const removeHandler = (id: number) => {
        const shouldRemove = confirm('Are you sure you want to delete this item?');
        if (shouldRemove)
            setTodos(prev => prev.filter(todo => todo.id !== id))
    };

    return (
      <>
          <TodoForm onAdd={addHandler}/>
          <TodoList todos={todos} onRemove={removeHandler} onToggle={toggleHandler}/>
      </>
    )
};
