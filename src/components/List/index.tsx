import React from 'react';
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
          <li key={index} className={style.item}>
            <h3>
              {item.task}
            </h3>
            <span>
              {item.time}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default List;