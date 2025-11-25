import { Link } from "react-router-dom";
import "../App.css";

function RotaIQProduct() {
  return (
    <div className="product-page">
      {/* Hero Section */}
      <section className="product-hero">
        <div className="container">
          <Link to="/" className="back-link">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Home
          </Link>
          <div className="product-hero-content">
            <div className="product-hero-text">
              <h1>RotaIQ</h1>
              <h2>Schedule Generator</h2>
              <p className="product-hero-description">
                Intelligent workforce scheduling powered by AI. Automate shift
                planning, optimize staffing, and ensure compliance with labor
                regulations.
              </p>
              <div className="product-hero-tags">
                <span className="tag">AI-Powered</span>
                <span className="tag">Auto-Scheduling</span>
                <span className="tag">Shift Management</span>
                <span className="tag">Cloud-Based</span>
              </div>
              {/* <div className="product-hero-buttons">
                <a href="#features" className="btn btn-primary">
                  Explore Features
                </a>
              </div> */}
              <div className="app-download-buttons">
                <a
                  href="https://apps.apple.com/gb/app/rotaiq/id6752257652"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-store-btn"
                >
                  <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd">
                      <rect fill="#000" width="120" height="40" rx="5" />
                      <path
                        d="M24.769 20.306c-.013-1.438.779-2.76 2.053-3.435a4.987 4.987 0 00-3.917-2.114c-1.653-.173-3.246.986-4.088.986-.856 0-2.148-.967-3.533-.938a5.236 5.236 0 00-4.405 2.687c-1.906 3.314-.486 8.2 1.346 10.882.915 1.31 1.992 2.777 3.412 2.724 1.382-.056 1.9-.878 3.569-.878 1.656 0 2.137.878 3.544.845 1.468-.022 2.415-1.315 3.307-2.637a10.882 10.882 0 001.507-3.068 4.65 4.65 0 01-2.795-4.054z"
                        fill="#FFF"
                      />
                      <path
                        d="M22.038 12.768a4.774 4.774 0 001.093-3.417 4.848 4.848 0 00-3.135 1.625 4.538 4.538 0 00-1.12 3.298c1.319.103 2.605-.672 3.162-1.506z"
                        fill="#FFF"
                      />
                      <text
                        fontFamily="SF Pro Text,Helvetica,Arial,sans-serif"
                        fontSize="9"
                        fontWeight="500"
                        fill="#FFF"
                      >
                        <tspan x="35" y="15">
                          Download on the
                        </tspan>
                        <tspan x="35" y="28" fontSize="13" fontWeight="600">
                          App Store
                        </tspan>
                      </text>
                    </g>
                  </svg>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.sharxltd.rotaIQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="google-play-btn"
                >
                  <svg viewBox="0 0 135 40" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd">
                      <rect fill="#000" width="135" height="40" rx="5" />
                      <path
                        d="M8.445 7.873c-.31.328-.497.863-.497 1.547v21.16c0 .684.187 1.22.497 1.547l.08.078 11.857-11.857v-.28L8.525 7.795l-.08.078z"
                        fill="url(#a)"
                      />
                      <path
                        d="M24.334 23.82l-3.952-3.953v-.28l3.953-3.952.09.05 4.683 2.66c1.337.76 1.337 2.004 0 2.764l-4.684 2.66-.09.05z"
                        fill="url(#b)"
                      />
                      <path
                        d="M24.424 23.77L20.382 19.73 8.445 31.667c.441.467 1.168.525 1.998.077l13.981-7.935"
                        fill="url(#c)"
                      />
                      <path
                        d="M24.424 15.69L10.443 7.754c-.83-.468-1.557-.39-1.998.078l11.937 11.936 4.042-4.078z"
                        fill="url(#d)"
                      />
                      <defs>
                        <linearGradient
                          id="a"
                          x1="10.834"
                          y1="8.997"
                          x2="5.274"
                          y2="3.437"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#00A0FF" />
                          <stop offset=".007" stopColor="#00A1FF" />
                          <stop offset=".26" stopColor="#00BEFF" />
                          <stop offset=".512" stopColor="#00D2FF" />
                          <stop offset=".76" stopColor="#00DFFF" />
                          <stop offset="1" stopColor="#00E3FF" />
                        </linearGradient>
                        <linearGradient
                          id="b"
                          x1="31.406"
                          y1="19.73"
                          x2="7.052"
                          y2="19.73"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFE000" />
                          <stop offset=".409" stopColor="#FFBD00" />
                          <stop offset=".775" stopColor="#FFA500" />
                          <stop offset="1" stopColor="#FF9C00" />
                        </linearGradient>
                        <linearGradient
                          id="c"
                          x1="23.608"
                          y1="21.922"
                          x2="2.537"
                          y2="42.993"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FF3A44" />
                          <stop offset="1" stopColor="#C31162" />
                        </linearGradient>
                        <linearGradient
                          id="d"
                          x1="4.896"
                          y1="-.891"
                          x2="17.567"
                          y2="11.78"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#32A071" />
                          <stop offset=".069" stopColor="#2DA771" />
                          <stop offset=".476" stopColor="#15CF74" />
                          <stop offset=".801" stopColor="#06E775" />
                          <stop offset="1" stopColor="#00F076" />
                        </linearGradient>
                      </defs>
                      <text
                        fontFamily="Product Sans,Helvetica,Arial,sans-serif"
                        fontSize="9"
                        fontWeight="400"
                        fill="#FFF"
                      >
                        <tspan x="48" y="13">
                          GET IT ON
                        </tspan>
                        <tspan x="48" y="27" fontSize="13" fontWeight="500">
                          Google Play
                        </tspan>
                      </text>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
            <div className="product-hero-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="product-features-section">
        <div className="container">
          <div className="section-header">
            <h2>Key Features</h2>
            <div className="underline"></div>
            <p className="section-subtitle">
              Everything you need for efficient workforce management
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M12 1v6m0 6v6m4.22-13.22l-1.42 1.42m-5.6 5.6l-1.42 1.42m10.24 0l-1.42-1.42m-5.6-5.6l-1.42-1.42M23 12h-6m-6 0H5"></path>
                </svg>
              </div>
              <h3>AI-Powered Scheduling</h3>
              <p>
                Advanced algorithms create optimal schedules considering
                availability, skills, preferences, and business requirements.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
              </div>
              <h3>Labor Cost Optimization</h3>
              <p>
                Reduce labor costs by up to 30% with intelligent staffing that
                matches demand perfectly without overstaffing.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3>Compliance Management</h3>
              <p>
                Automatically ensure compliance with labor laws, union rules,
                and company policies. Avoid costly violations.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3>Mobile Access</h3>
              <p>
                Employees can view schedules, request time off, and swap shifts
                from any device, anywhere, anytime.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </div>
              <h3>Easy Integration</h3>
              <p>
                Seamlessly integrates with existing payroll, HR, and time
                tracking systems. Quick setup with no disruption.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3>Real-time Updates</h3>
              <p>
                Instant notifications for schedule changes. Automatic conflict
                detection and resolution suggestions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="product-benefits">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose RotaIQ?</h2>
            <div className="underline"></div>
          </div>
          <div className="benefits-content">
            <div className="benefit-card">
              <div className="benefit-number">01</div>
              <h3>Save Time</h3>
              <p>
                Create schedules in minutes instead of hours. Reduce
                administrative time by 90% with automated scheduling.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">02</div>
              <h3>Reduce Costs</h3>
              <p>
                Optimize labor costs with AI-driven staffing. Eliminate
                overstaffing and reduce overtime expenses significantly.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">03</div>
              <h3>Improve Satisfaction</h3>
              <p>
                Employees get fair schedules that consider their preferences.
                Higher satisfaction leads to better retention.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">04</div>
              <h3>Ensure Compliance</h3>
              <p>
                Stay compliant with all labor regulations automatically. Avoid
                fines and legal issues with built-in compliance checks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="product-use-cases">
        <div className="container">
          <div className="section-header">
            <h2>Perfect For</h2>
            <div className="underline"></div>
          </div>
          <div className="use-cases-grid">
            <div className="use-case-card">
              <h3>Retail</h3>
              <p>
                Handle variable customer traffic with flexible scheduling that
                adapts to peak hours and seasons.
              </p>
            </div>
            <div className="use-case-card">
              <h3>Healthcare</h3>
              <p>
                Ensure 24/7 coverage with shift rotations that meet medical
                staffing requirements and certifications.
              </p>
            </div>
            <div className="use-case-card">
              <h3>Hospitality</h3>
              <p>
                Manage diverse staff across multiple locations with schedules
                that account for events and bookings.
              </p>
            </div>
            <div className="use-case-card">
              <h3>Manufacturing</h3>
              <p>
                Coordinate shift workers and production schedules with precision
                for maximum efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="product-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Scheduling?</h2>
            <p>
              Join businesses saving time and money with intelligent workforce
              management. Download RotaIQ now!
            </p>
            <div className="app-download-buttons cta-download">
              <a
                href="https://apps.apple.com/gb/app/rotaiq/id6752257652"
                target="_blank"
                rel="noopener noreferrer"
                className="app-store-btn"
              >
                <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <rect fill="#000" width="120" height="40" rx="5" />
                    <path
                      d="M24.769 20.306c-.013-1.438.779-2.76 2.053-3.435a4.987 4.987 0 00-3.917-2.114c-1.653-.173-3.246.986-4.088.986-.856 0-2.148-.967-3.533-.938a5.236 5.236 0 00-4.405 2.687c-1.906 3.314-.486 8.2 1.346 10.882.915 1.31 1.992 2.777 3.412 2.724 1.382-.056 1.9-.878 3.569-.878 1.656 0 2.137.878 3.544.845 1.468-.022 2.415-1.315 3.307-2.637a10.882 10.882 0 001.507-3.068 4.65 4.65 0 01-2.795-4.054z"
                      fill="#FFF"
                    />
                    <path
                      d="M22.038 12.768a4.774 4.774 0 001.093-3.417 4.848 4.848 0 00-3.135 1.625 4.538 4.538 0 00-1.12 3.298c1.319.103 2.605-.672 3.162-1.506z"
                      fill="#FFF"
                    />
                    <text
                      fontFamily="SF Pro Text,Helvetica,Arial,sans-serif"
                      fontSize="9"
                      fontWeight="500"
                      fill="#FFF"
                    >
                      <tspan x="35" y="15">
                        Download on the
                      </tspan>
                      <tspan x="35" y="28" fontSize="13" fontWeight="600">
                        App Store
                      </tspan>
                    </text>
                  </g>
                </svg>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.sharxltd.rotaIQ"
                target="_blank"
                rel="noopener noreferrer"
                className="google-play-btn"
              >
                <svg viewBox="0 0 135 40" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <rect fill="#000" width="135" height="40" rx="5" />
                    <path
                      d="M8.445 7.873c-.31.328-.497.863-.497 1.547v21.16c0 .684.187 1.22.497 1.547l.08.078 11.857-11.857v-.28L8.525 7.795l-.08.078z"
                      fill="url(#a)"
                    />
                    <path
                      d="M24.334 23.82l-3.952-3.953v-.28l3.953-3.952.09.05 4.683 2.66c1.337.76 1.337 2.004 0 2.764l-4.684 2.66-.09.05z"
                      fill="url(#b)"
                    />
                    <path
                      d="M24.424 23.77L20.382 19.73 8.445 31.667c.441.467 1.168.525 1.998.077l13.981-7.935"
                      fill="url(#c)"
                    />
                    <path
                      d="M24.424 15.69L10.443 7.754c-.83-.468-1.557-.39-1.998.078l11.937 11.936 4.042-4.078z"
                      fill="url(#d)"
                    />
                    <defs>
                      <linearGradient
                        id="a"
                        x1="10.834"
                        y1="8.997"
                        x2="5.274"
                        y2="3.437"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#00A0FF" />
                        <stop offset=".007" stopColor="#00A1FF" />
                        <stop offset=".26" stopColor="#00BEFF" />
                        <stop offset=".512" stopColor="#00D2FF" />
                        <stop offset=".76" stopColor="#00DFFF" />
                        <stop offset="1" stopColor="#00E3FF" />
                      </linearGradient>
                      <linearGradient
                        id="b"
                        x1="31.406"
                        y1="19.73"
                        x2="7.052"
                        y2="19.73"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FFE000" />
                        <stop offset=".409" stopColor="#FFBD00" />
                        <stop offset=".775" stopColor="#FFA500" />
                        <stop offset="1" stopColor="#FF9C00" />
                      </linearGradient>
                      <linearGradient
                        id="c"
                        x1="23.608"
                        y1="21.922"
                        x2="2.537"
                        y2="42.993"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FF3A44" />
                        <stop offset="1" stopColor="#C31162" />
                      </linearGradient>
                      <linearGradient
                        id="d"
                        x1="4.896"
                        y1="-.891"
                        x2="17.567"
                        y2="11.78"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#32A071" />
                        <stop offset=".069" stopColor="#2DA771" />
                        <stop offset=".476" stopColor="#15CF74" />
                        <stop offset=".801" stopColor="#06E775" />
                        <stop offset="1" stopColor="#00F076" />
                      </linearGradient>
                    </defs>
                    <text
                      fontFamily="Product Sans,Helvetica,Arial,sans-serif"
                      fontSize="9"
                      fontWeight="400"
                      fill="#FFF"
                    >
                      <tspan x="48" y="13">
                        GET IT ON
                      </tspan>
                      <tspan x="48" y="27" fontSize="13" fontWeight="500">
                        Google Play
                      </tspan>
                    </text>
                  </g>
                </svg>
              </a>
            </div>
            <p className="contact-note">
              Have questions? <Link to="/#contact">Contact us</Link>
            </p>
            <div className="legal-links">
              <Link to="/products/rotaiq/privacy-policy">Privacy Policy</Link>
              <span className="legal-separator">•</span>
              <Link to="/products/rotaiq/terms-conditions">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RotaIQProduct;
