import "./App.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import sharxLogo from "./assets/images/sharx_logo_new_transparent background.png";
import Home from "./pages/Home";
import CutCabProduct from "./pages/CutCabProduct";
import RotaIQProduct from "./pages/RotaIQProduct";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import CommunityGuidelines from "./pages/CommunityGuidelines";
import SafetyTips from "./pages/SafetyTips";
import RotaIQPrivacyPolicy from "./pages/RotaIQPrivacyPolicy";
import RotaIQTermsConditions from "./pages/RotaIQTermsConditions";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Don't scroll to top if there's a hash (let the hash navigation handle it)
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function Layout({ children }: { children: React.ReactNode }) {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language.startsWith('el') ? 'el' : 'en';
  }, [i18n.language]);

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <Link to="/" className="logo">
              <img src={sharxLogo} alt="Sharx Logo" className="logo-image" />
              <span className="logo-text">SHARX</span>
            </Link>
            <ul className="nav-links">
              <li>
                <Link to="/">{t('nav.home')}</Link>
              </li>
              <li>
                <a href="#about">{t('nav.about')}</a>
              </li>
              <li className="dropdown">
                <a href="#products" className="dropdown-toggle">
                  {t('nav.products')}
                  <svg
                    className="dropdown-arrow"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/products/cutcab">
                      <div className="dropdown-item">
                        <strong>CutCab</strong>
                        <span>{t('nav.sharxSubtitle')}</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/rotaiq">
                      <div className="dropdown-item">
                        <strong>RotaIQ</strong>
                        <span>{t('nav.rotaiqSubtitle')}</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#services">{t('nav.services')}</a>
              </li>
              <li>
                <a href="#contact">{t('nav.contact')}</a>
              </li>
            </ul>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Page Content */}
      {children}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <Link to="/" className="logo">
                <img src={sharxLogo} alt="Sharx Logo" className="logo-image" />
                <span className="logo-text">SHARX</span>
              </Link>
              <p>{t('footer.tagline')}</p>
            </div>
            <div className="footer-links">
              <Link to="/">{t('nav.home')}</Link>
              <a href="#about">{t('nav.about')}</a>
              <a href="#products">{t('nav.products')}</a>
              <a href="#services">{t('nav.services')}</a>
              <a href="#contact">{t('nav.contact')}</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/products/cutcab"
          element={
            <Layout>
              <CutCabProduct />
            </Layout>
          }
        />
        <Route
          path="/products/rotaiq"
          element={
            <Layout>
              <RotaIQProduct />
            </Layout>
          }
        />
        <Route
          path="/products/cutcab/privacy-policy"
          element={
            <Layout>
              <PrivacyPolicy />
            </Layout>
          }
        />
        <Route
          path="/products/cutcab/terms-conditions"
          element={
            <Layout>
              <TermsConditions />
            </Layout>
          }
        />
        <Route
          path="/products/cutcab/community-guidelines"
          element={
            <Layout>
              <CommunityGuidelines />
            </Layout>
          }
        />
        <Route
          path="/products/cutcab/safety-tips"
          element={
            <Layout>
              <SafetyTips />
            </Layout>
          }
        />
        <Route
          path="/products/rotaiq/privacy-policy"
          element={
            <Layout>
              <RotaIQPrivacyPolicy />
            </Layout>
          }
        />
        <Route
          path="/products/rotaiq/terms-conditions"
          element={
            <Layout>
              <RotaIQTermsConditions />
            </Layout>
          }
        />
        {/* 404 - Catch all route */}
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
