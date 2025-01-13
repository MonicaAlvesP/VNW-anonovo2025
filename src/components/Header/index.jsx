import Logo from '@assets/logo.png'
import s from './header.module.scss';

export const Header = () => {
  return (
    <header className={s.headerContainer}>
      <img src={Logo} alt="Logo icon" />
      <nav>
        <ul className={s.menu}>
          <li>Paz</li>
          <li>Saúde</li>
          <li>Alegria</li>
        </ul>
      </nav>
    </header>
  )
}