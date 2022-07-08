import { useState, useEffect } from "react";
import { tempoParaSegundos } from "../../common/utils/time";
import { ITask } from "../../Types/task";
import Button from "../Button";
import Clock from "./Clock";
import style from './Stopwatch.module.scss';

interface Props {
  selected: ITask | undefined;
  finalizarTask: () => void;
}

function Stopwatch({ selected, finalizarTask }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(tempoParaSegundos(selected.time))
    }
  }, [selected])

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTime(contador - 1);
        return regressiva(contador - 1)
      }
      finalizarTask();
    }, 1000);
  }

  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>

      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>

      <Button onClick={() => regressiva(time)}>
        Começar!
      </Button>

    </div>
  )
}

export default Stopwatch;