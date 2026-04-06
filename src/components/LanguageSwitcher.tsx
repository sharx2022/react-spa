import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language.startsWith('el') ? 'el' : 'en';

  const toggle = () => {
    i18n.changeLanguage(currentLang === 'en' ? 'el' : 'en');
  };

  return (
    <button
      className="lang-switcher"
      onClick={toggle}
      aria-label="Switch language"
    >
      <span className={currentLang === 'en' ? 'lang-active' : ''}>EN</span>
      <span className="lang-divider">|</span>
      <span className={currentLang === 'el' ? 'lang-active' : ''}>EL</span>
    </button>
  );
}

export default LanguageSwitcher;
