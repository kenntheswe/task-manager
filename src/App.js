import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: 'Dentist appointment',
      date: 'July 12th at 2pm',
      reminder: true
    },
    {
      id: 2,
      description: 'Pfizer 2nd shot',
      date: 'July 18th at 1:45pm',
      reminder: false
    }
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder:!task.reminder } : task ))
  }

  return (
    <div className="container">
      <Header title="Task Manager"/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : "Please add a task" }
    </div>
  );
}

export default App;
