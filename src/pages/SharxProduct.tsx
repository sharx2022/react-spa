import { Link } from "react-router-dom";
import "../App.css";
import { useState } from "react";

function SharxProduct() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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
          <div className="product-hero-content" id="about">
            <div className="product-hero-text">
              <h1>Sharx</h1>
              <h2>Share Your Cab</h2>
              <p className="product-hero-description">
                Revolutionary carpooling platform connecting commuters for
                shared rides. Save money, reduce emissions, and make your
                commute enjoyable. Share the ride, Split the fare, Save money
              </p>
              <div className="product-hero-tags">
                <span className="tag">Smart Matching</span>
                <span className="tag">Secure Payments</span>
                <span className="tag">Eco-Friendly</span>
              </div>
              {/* <div className="product-hero-buttons">
                <a href="#problem" className="btn btn-primary">
                  Learn More
                </a>
              </div> */}
              <div id="download" className="app-download-buttons">
                <a
                  href="https://apps.apple.com/gb/app/sharx-cab-taxi-sharing-london/id6450862437"
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
                  href="https://play.google.com/store/apps/details?id=com.sharxltd.sharx"
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
                <path d="M17 8l4 4-4 4M3 12h18M11 6v12"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="problem-section">
        <div className="container">
          <div className="section-header">
            <h2>The Problem</h2>
            <div className="underline"></div>
            <p className="section-subtitle alert">
              This problem affects you too!
            </p>
          </div>
          <div className="problem-content">
            <h3>The Problem we are trying to solve…</h3>
            <p className="problem-text">
              Nowadays the expensive and environmentally harmful transportation
              is not a viable solution anymore
            </p>
            <p className="problem-text">
              There is an increasing demand for taxi/ridehail rides that leads
              companies to expand their fleet.
            </p>
            <div className="problem-stats">
              <div className="problem-stat">
                <div className="stat-number">300k+</div>
                <p>Daily taxi rides in London</p>
              </div>
              <div className="problem-stat">
                <div className="stat-number">79%</div>
                <p>of taxis use diesel engines</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2>How It Works</h2>
            <div className="underline"></div>
            <p className="section-subtitle">What we do</p>
          </div>
          <p className="how-it-works-intro">
            We match co-riders so they can split their taxi fares.
          </p>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">01</div>
              <div className="step-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="10" r="3"></circle>
                  <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"></path>
                </svg>
              </div>
              <h3>Select your trip info</h3>
              <p>
                Select your departure and arrival point as well as your trip
                time.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">02</div>
              <div className="step-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>Choose your co-rider</h3>
              <p>
                Scroll through the available co-riders and send ride-requests to
                those you like.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">03</div>
              <div className="step-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3>Chat</h3>
              <p>
                Chat with your co-rider to build trust and organise an amazing
                taxi ride.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Plans</h2>
            <div className="underline"></div>
            <p className="section-subtitle">
              We offer a plan for everyone out there
            </p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Free</h3>
              <div className="price">
                <span className="currency">£</span>
                <span className="amount">0</span>
              </div>
              <p className="plan-tagline">Give it a try</p>
              <ul className="plan-features">
                <li>5 ride requests / day</li>
              </ul>
              <a href="#about" className="btn btn-secondary">
                Download
              </a>
            </div>
            <div className="pricing-card popular">
              <div className="popular-badge">Popular</div>
              <h3>Silver</h3>
              <div className="price">
                <span className="currency">£</span>
                <span className="amount">0.99</span>
              </div>
              <p className="plan-tagline">Get some flexibility</p>
              <ul className="plan-features">
                <li>10 ride requests / purchase</li>
              </ul>
              <a href="#about" className="btn btn-primary">
                Download
              </a>
            </div>
            <div className="pricing-card">
              <h3>Gold</h3>
              <div className="price">
                <span className="currency">£</span>
                <span className="amount">1.99</span>
              </div>
              <p className="plan-tagline">Our best plan</p>
              <ul className="plan-features">
                <li>25 ride requests / purchase</li>
              </ul>
              <a href="#about" className="btn btn-secondary">
                Download
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="faqs-section">
        <div className="container">
          <div className="section-header">
            <h2>FAQs</h2>
            <div className="underline"></div>
            <p className="section-subtitle">
              Here you will find everything needed to start
            </p>
          </div>
          <div className="faqs-list">
            <div className={`faq-item ${openFaq === 0 ? "open" : ""}`}>
              <button className="faq-question" onClick={() => toggleFaq(0)}>
                <span>Where can I find the app?</span>
                <svg
                  className="faq-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div className="faq-answer">
                <p>
                  The app is available for both iOS and Android devices. You can
                  find it in App Store and Google Play. We work hard to offer to
                  everyone safe, affordable and quick commuting.
                </p>
              </div>
            </div>
            <div className={`faq-item ${openFaq === 1 ? "open" : ""}`}>
              <button className="faq-question" onClick={() => toggleFaq(1)}>
                <span>How will I find my co-rider?</span>
                <svg
                  className="faq-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div className="faq-answer">
                <p>
                  After creating a free account in sharx app, you will be able
                  to search for co-riders, send and receive ride requests and
                  chat with them to plan your trip. Our app will help you find
                  someone who is in close distance to you.
                </p>
              </div>
            </div>
            <div className={`faq-item ${openFaq === 2 ? "open" : ""}`}>
              <button className="faq-question" onClick={() => toggleFaq(2)}>
                <span>Is it safe to use sharx?</span>
                <svg
                  className="faq-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div className="faq-answer">
                <p>
                  Sharx creates a safe environment for all its users. We have
                  implemented features such as rating and reporting to keep
                  unwanted behaviours away. We respect all our users and we act
                  quickly to eliminate any issue.
                </p>
              </div>
            </div>
            <div className={`faq-item ${openFaq === 3 ? "open" : ""}`}>
              <button className="faq-question" onClick={() => toggleFaq(3)}>
                <span>Should I give money to book a ride?</span>
                <svg
                  className="faq-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div className="faq-answer">
                <p>
                  You should NEVER send money to people you do not know.
                  Currently, Sharx does not support direct taxi/ridehail from
                  third parties. Therefore, it is better to meet with your
                  co-rider and arrange the payment together.
                </p>
              </div>
            </div>
            <div className={`faq-item ${openFaq === 4 ? "open" : ""}`}>
              <button className="faq-question" onClick={() => toggleFaq(4)}>
                <span>How do I buy more requests?</span>
                <svg
                  className="faq-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div className="faq-answer">
                <p>
                  More requests means more possibilities to find a co-rider and
                  share your ride. You can buy requests from the app's slide bar
                  by selecting Purchase Requests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="product-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Sharing Rides?</h2>
            <p>
              Join commuters who are saving money and helping the environment.
              Download Sharx now!
            </p>
            <div className="app-download-buttons cta-download">
              <a
                href="https://apps.apple.com/gb/app/sharx-cab-taxi-sharing-london/id6450862437"
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
                href="https://play.google.com/store/apps/details?id=com.sharxltd.sharx"
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
              <Link to="/products/sharx/privacy-policy">Privacy Policy</Link>
              <span className="separator">•</span>
              <Link to="/products/sharx/terms-conditions">
                Terms & Conditions
              </Link>
              <span className="separator">•</span>
              <Link to="/products/sharx/community-guidelines">
                Community Guidelines
              </Link>
              <span className="separator">•</span>
              <Link to="/products/sharx/safety-tips">Safety Tips</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SharxProduct;
