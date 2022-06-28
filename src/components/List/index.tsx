import React from 'react';
import Item from './Item';
import style from './List.module.scss';

const task = [
  {
    task: 'React',
    time: '02:00:00'
  },
  {
    task: 'JavaScript',
    time: "01:00:00",
  }
]

function List() {

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudo do dia</h2>
      <ul>
        {task.map((item, index) => (
          <Item
            key={index}
            task={item.task}
            time={item.time}
          />
        ))}
      </ul>
    </aside>
  )
}

export default List;