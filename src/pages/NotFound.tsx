import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../App.css";

function NotFound() {
  const { t } = useTranslation();

  const funnyMessages = t('notFound.funnyMessages', { returnObjects: true }) as string[];

  const [message] = useState(
    () => funnyMessages[Math.floor(Math.random() * funnyMessages.length)]
  );

  return (
    <div className="not-found-page">
      <div className="not-found-content">
        {/* Animated 404 */}
        <div className="error-code">
          <span className="digit">4</span>
          <span className="digit rotating">0</span>
          <span className="digit">4</span>
        </div>

        {/* Main Message */}
        <h1 className="error-title">{t('notFound.title')}</h1>
        <p className="error-message">{message}</p>

        {/* Funny Shark ASCII Art */}
        <div className="shark-ascii">
          <p className="shark-speech">
            {t('notFound.sharkSpeech')}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="error-actions">
          <Link to="/" className="btn btn-primary">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: "20px", height: "20px", marginRight: "8px" }}
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            {t('notFound.takeHome')}
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn btn-secondary"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: "20px", height: "20px", marginRight: "8px" }}
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            {t('notFound.goBack')}
          </button>
        </div>

        {/* Helpful Links */}
        <div className="helpful-links">
          <p className="helpful-title">{t('notFound.helpfulTitle')}</p>
          <div className="link-grid">
            <Link to="/">{t('nav.home')}</Link>
            <Link to="/products/cutcab">{t('notFound.sharxApp')}</Link>
            <Link to="/products/rotaiq">RotaIQ</Link>
            <Link to="/#contact">{t('notFound.contactUs')}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
