import { ITask } from '../../Types/task';
import Item from './Item';
import style from './List.module.scss';

interface Props {
  tasks: ITask[],
  selectTask: (taskSelected: ITask) => void
}

function List({ tasks, selectTask }: Props) {

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudo do dia</h2>
      <ul>
        {tasks.map((item) => (
          <Item
            key={item.id}
            task={item.task}
            time={item.time}
            selectTask={selectTask} id={''} selected={false} completed={false} />
        ))}
      </ul>
    </aside>
  )
}

export default List;