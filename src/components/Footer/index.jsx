import * as s from './footer.module.scss';
import { CiInstagram, CiLinkedin } from "react-icons/ci";
import { AiOutlineFacebook } from "react-icons/ai";

export const Footer = () => {
  return (
    <section className={s.iconsFooter}>
      <div className={s.iconsContainer}>
        <CiLinkedin />
        <CiInstagram />
        <AiOutlineFacebook />
      </div>
    </section>
  )
}