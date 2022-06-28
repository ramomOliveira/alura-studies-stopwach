import style from './Item.module.scss';
interface IItemProps {
  task: string,
  time: string,
}

function Item({ task, time }: IItemProps) {
  return (
    <li className={style.item}>
      <h3>
        {task}
      </h3>
      <span>
        {time}
      </span>
    </li>
  )
}

export default Item;