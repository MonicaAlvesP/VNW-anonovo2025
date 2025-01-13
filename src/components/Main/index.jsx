import anoNovo from '@assets/AnoNovo.png';

import s from './main.module.scss';

export const Main = () => {
  return (
    <main>
      <section className={s.containerImg}>
        <img src={anoNovo} alt="" />
      </section>
      
      <section className={s.containerTitles}>
        <h2>Boas Festas!!!</h2>
        <h3>Felicidades!!!</h3>
        <p>Em 2025, vamos juntos programar, Com mais código limpo e muito para alcançar! Que o ano novo traga só funções de felicidade, E que a paz seja nossa variável de realidade! Sem bugs, sem falhas, com muito amor, Vamos debugar os problemas com ardor! Que a vida seja sempre o output de alegria, o Vai Na Web te deseja um Ano Novo, que seja pura harmonia!</p>
      </section>
    </main>
  )
}