import style from './Clock.module.scss';

function Clock() {
  return (
    <>
      <span className={style.clockNum}>0</span>
      <span className={style.clockNum}>0</span>
      <span className={style.clockDivision}>:</span>
      <span className={style.clockNum}>0</span>
      <span className={style.clockNum}>0</span>
    </>
  )
}

export default Clock;