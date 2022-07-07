import { useState, FormEvent } from 'react';
import { ITask } from '../../Types/task';
import Button from '../Button';
import style from './Form.module.scss';
import { v4 as uuidv4 } from 'uuid';

interface IForm {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>,
}

function FormComponent({ setTasks }: IForm) {
  const [task, setTask] = useState('')
  const [time, setTime] = useState('00:00')

  const toSaveTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTasks(novaLista =>
      [
        ...novaLista,
        {
          task,
          time,
          selected: false,
          completed: false,
          id: uuidv4(),
        }
      ])
    setTask('');
    setTime('00:00')

  }

  return (
    <form className={style.novaTarefa} onSubmit={toSaveTask}>
      <div className={style.inputContainer}>
        <label htmlFor='task'>
          Adicione um novo estudo
        </label>
        <input
          type="text"
          name="task"
          id="task"
          value={task}
          onChange={(event) => setTask(event.target.value)}
          placeholder="O que você quer estudar"
          required
        />
      </div>

      <div className={style.inputContainer}>
        <label htmlFor='time'>
          Tempo
        </label>
        <input
          type="time"
          step="1"
          name="time"
          id="time"
          min="00:00:00"
          max="01:30:00"
          required
          value={time}
          onChange={(event) => setTime(event.target.value)}
        />
      </div>
      <Button type="submit">
        Adicionar
      </Button>
    </form>
  )
}

export default FormComponent;