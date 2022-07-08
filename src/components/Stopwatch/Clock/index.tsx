import style from './Clock.module.scss';

interface IProps {
  time: number | undefined,
}

function Clock({ time = 0 }: IProps) {
  const minutos = Math.floor(time / 60);
  const segundos = time % 60;
  const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0');
  const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0');

  return (
    <>
      <span className={style.clockNum}>{minutoDezena}</span>
      <span className={style.clockNum}>{minutoUnidade}</span>
      <span className={style.clockDivision}>:</span>
      <span className={style.clockNum}>{segundoDezena}</span>
      <span className={style.clockNum}>{segundoUnidade}</span>
    </>
  )
}

export default Clock;