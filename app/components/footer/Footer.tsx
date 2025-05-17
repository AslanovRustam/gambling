import NavPanel from "../navPanel/NavPanel";
// Local
import Logo from "../../../public/icons/logo.svg";
import s from "./footer.module.css";

function Footer() {
  return (
    <footer className={s.footer}>
      <a href="https://clickable.agency/" target="_blank" rel="noreferrer">
        <Logo className="w-32 sm:w-48" />
      </a>
      <div className={s.footerLinks}>
        <div className="flex flex-col justify-between gap-5 lg:gap-20 sm:flex-row">
          <div className={s.adress}>
            <p className={s.title}>Address:</p>
            <p className={s.description}>
              French Boulevard 66/2, Odesa, Odesa region, 65062
            </p>
          </div>
          <div className={s.contact}>
            <p className={s.title}>Contact:</p>
            <p className={s.description}>
              <a href="mailto:office@clickable.agency">
                office@clickable.agency
              </a>
            </p>
          </div>
        </div>
        <div className={s.links}>
          <NavPanel />
          {/* <ul className={s.socials}>
            <li className={s.item}></li>
            <li className={s.item}></li>
            <li className={s.item}></li>
            <li className={s.item}></li>
            <li className={s.item}></li>
            <li className={s.item}></li>
          </ul> */}
        </div>
      </div>
      <div className={s.rights}>
        <p className={s.rightsLeft}>© 2025 Clickable All right reserved.</p>
        {/* <ul className={s.list}>
          <li className={s.pageLink}>Privacy policy</li>
          <li className={s.pageLink}>Terms of service</li>
          <li className={s.pageLink}>Cookies settings</li>
        </ul> */}
      </div>
    </footer>
  );
}

export default Footer;
