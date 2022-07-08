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
            selectTask={selectTask}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default List;