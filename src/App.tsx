import "./App.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import sharxLogo from "./assets/images/sharx_logo_new_transparent background.png";
import Home from "./pages/Home";
import SharxProduct from "./pages/SharxProduct";
import RotaIQProduct from "./pages/RotaIQProduct";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import CommunityGuidelines from "./pages/CommunityGuidelines";
import SafetyTips from "./pages/SafetyTips";
import RotaIQPrivacyPolicy from "./pages/RotaIQPrivacyPolicy";
import RotaIQTermsConditions from "./pages/RotaIQTermsConditions";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Layout({ children }: { children: React.ReactNode }) {
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
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li className="dropdown">
                <a href="#products" className="dropdown-toggle">
                  Products
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
                    <Link to="/products/sharx">
                      <div className="dropdown-item">
                        <strong>Sharx</strong>
                        <span>Share Your Cab</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/rotaiq">
                      <div className="dropdown-item">
                        <strong>RotaIQ</strong>
                        <span>Schedule Generator</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
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
              <p>Crafting Digital Excellence</p>
            </div>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <a href="#about">About</a>
              <a href="#products">Products</a>
              <a href="#services">Services</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Sharx. All rights reserved.</p>
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
          path="/products/sharx"
          element={
            <Layout>
              <SharxProduct />
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
          path="/products/sharx/privacy-policy"
          element={
            <Layout>
              <PrivacyPolicy />
            </Layout>
          }
        />
        <Route
          path="/products/sharx/terms-conditions"
          element={
            <Layout>
              <TermsConditions />
            </Layout>
          }
        />
        <Route
          path="/products/sharx/community-guidelines"
          element={
            <Layout>
              <CommunityGuidelines />
            </Layout>
          }
        />
        <Route
          path="/products/sharx/safety-tips"
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
      </Routes>
    </>
  );
}

export default App;
