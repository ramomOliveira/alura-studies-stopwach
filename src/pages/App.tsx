import { useState } from 'react';
import FormComponent from '../components/FormComponent';
import List from '../components/List';
import Stopwatch from '../components/Stopwatch';
import { ITask } from '../Types/task';
import style from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(taskSelected: ITask) {
    setSelected(taskSelected);
    setTasks(list => list.map((task) => ({
      ...task,
      selected: task.id === taskSelected.id ? true : false,
    })));
  }

  function finalizarTask() {
    if (selected) {
      setSelected(undefined)
      setTasks(tarefasAnteriores => tarefasAnteriores.map((task) => {
        if (task.id === selected.id) {
          return {
            ...task,
            selected: false,
            completed: true,
          }
        }
        return task;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <FormComponent setTasks={setTasks} />
      <List
        tasks={tasks}
        selectTask={selectTask}
      />
      <Stopwatch
        selected={selected}
        finalizarTask={finalizarTask}
      />
    </div>
  );
}

export default App;
