import { useTranslation } from "react-i18next";
import sharxLogo from "../assets/images/sharx_logo_new_transparent background.png";
import LanguageSwitcher from "../components/LanguageSwitcher";
import "../App.css";

function Farewell() {
  const { t } = useTranslation();

  return (
    <div className="farewell-page">
      <div className="farewell-lang">
        <LanguageSwitcher />
      </div>

      <main className="farewell-content">
        <div className="logo farewell-logo">
          <img src={sharxLogo} alt="Sharx Logo" className="logo-image" />
          <span className="logo-text">SHARX</span>
        </div>

        <h1 className="farewell-title">{t('farewell.title')}</h1>
        <p className="farewell-lead">{t('farewell.lead')}</p>
        <p className="farewell-text">{t('farewell.gratitude')}</p>
        <p className="farewell-text">{t('farewell.dream')}</p>

        <p className="farewell-signoff">
          {t('farewell.signoff')}
          <br />
          <strong>{t('farewell.team')}</strong>
        </p>
      </main>

      <footer className="farewell-footer">
        <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
      </footer>
    </div>
  );
}

export default Farewell;
