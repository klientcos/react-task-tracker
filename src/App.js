import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctor Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Grocery',
        day: 'Feb 6th at 1:30pm',
        reminder: false,
    }
  ])

  //Delete tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter((tasks) => tasks.id !== id))
  }

  // Toggle Reminder

  const toggleReminder = (id) => {
    console.log(id)
  }

  return (
    <div className='container'> 
      <Header />

      { tasks.length > 0 ? 
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      : 'No Tasks to Show' }
    </div>
  );
}

export default App;
