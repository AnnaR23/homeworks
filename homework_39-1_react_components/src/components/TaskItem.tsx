import React from 'react'

// Stateless component

// интерфейс определяет структуру данных, которые будут переданы в компонент TaskItem
interface TaskItemProps {
  task: { id: number; text: string; completed: boolean }; // объект с полями: id, text, completed
  toggleTaskCompletion: (id: number) => void; // ф-ция, которая принимает id задачи и ничего не возвращает
}

// функциональный компонент TaskItem, который принимает пропсы типа TaskItemProps
const TaskItem: React.FC<TaskItemProps> = ({ task, toggleTaskCompletion }) => {
  //toggleTaskCompletion - это ф-ция, для переключения состояния выполнения задачи

  return (
    <li>
      <span
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          cursor: 'pointer'
        }}
        onClick={(): void => toggleTaskCompletion(task.id)} //переключаем сосотояние при клике
      >
        {task.text}
      </span>
    </li>
  )
}

export default TaskItem


