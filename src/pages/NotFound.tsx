import { Link } from "react-router-dom";
import { useState } from "react";
import "../App.css";

function NotFound() {
  // Funny messages to rotate through
  const funnyMessages = [
    "Looks like you took a wrong turn at the internet!",
    "This page went on vacation... without leaving a forwarding address.",
    "Houston, we have a problem. This page doesn't exist!",
    "Even our sharks couldn't find this page.",
    "Plot twist: This page was just a figment of your imagination.",
    "This page is playing hide and seek... and winning!",
  ];

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
        <h1 className="error-title">Oops! Page Not Found</h1>
        <p className="error-message">{message}</p>

        {/* Funny Shark ASCII Art */}
        <div className="shark-ascii">
          <p className="shark-speech">
            "I'm a Sharx, not a GPS! But I can help you get back..."
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
            Take Me Home
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
            Go Back
          </button>
        </div>

        {/* Helpful Links */}
        <div className="helpful-links">
          <p className="helpful-title">Maybe you were looking for:</p>
          <div className="link-grid">
            <Link to="/">Home</Link>
            <Link to="/products/sharx">Sharx App</Link>
            <Link to="/products/rotaiq">RotaIQ</Link>
            <Link to="/#contact">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
