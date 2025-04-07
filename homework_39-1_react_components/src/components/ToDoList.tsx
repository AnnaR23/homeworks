import React, { useState } from 'react'
import TaskItem from './TaskItem'

// Stateful component

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const ToDoList: React.FC = () => {
  // состояние для хранения задач
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'Buy cheese', completed: false },
    { id: 2, text: 'Buy sausage', completed: false },
    { id: 3, text: 'Buy bread', completed: false }
  ])

// функция для переключения состояния задачи
  const toggleTaskCompletion = (id: number) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  return (
    <div>
      <h1>Shopping list</h1>
      <ul>
        {/* Рендерим задачи с передачей их в компонент TaskItem*/}
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTaskCompletion={toggleTaskCompletion}
          />
        ))}
      </ul>
    </div>
  )
}

export default ToDoList