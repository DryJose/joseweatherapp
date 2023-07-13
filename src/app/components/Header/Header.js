import s from './Header.module.css'

export default function Header() {
  return (
    <header className={s.header}>
      <div>
        <h1 className={s.h1}>
          Погодка
        </h1>
      </div>
    </header>
  )
}
