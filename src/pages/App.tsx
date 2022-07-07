import { useState } from 'react';
import FormComponent from '../components/FormComponent';
import List from '../components/List';
import Stopwatch from '../components/Stopwatch';
import { ITask } from '../Types/task';
import style from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [selected, setSelected] = useState<ITask>();
  console.log(tasks);

  function selectTask(taskSelected: ITask) {
    setSelected(taskSelected);
    setTasks(list => list.map((task) => ({
      ...task,
      selected: task.id === taskSelected.id ? true : false,
    })));
  }

  return (
    <div className={style.AppStyle}>
      <FormComponent setTasks={setTasks} />
      <List
        tasks={tasks}
        selectTask={selectTask}
      />
      <Stopwatch />
    </div>
  );
}

export default App;
