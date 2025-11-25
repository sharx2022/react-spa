import { Link } from "react-router-dom";
import "../App.css";

function SafetyTips() {
  return (
    <div className="legal-page">
      <div className="container">
        <Link to="/products/sharx" className="back-link">
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
          Back to Sharx
        </Link>

        <div className="legal-content">
          <h1>Safety Tips for Taxi Sharing</h1>

          <section>
            <p className="lead">
              Participating in taxi sharing with new acquaintances can be an exhilarating experience, but it is 
              essential to exercise caution when engaging with unfamiliar individuals. <strong>Prioritise your safety 
              above all else</strong>, whether you are initiating conversations online or meeting face-to-face.
            </p>
          </section>

          <section>
            <h2>Online Safety</h2>

            <div className="safety-tip">
              <div className="tip-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                  <line x1="1" y1="10" x2="23" y2="10"></line>
                </svg>
              </div>
              <h3>Avoid Sending Money or Sharing Financial Details</h3>
              <p>
                Refrain from sending money, especially via wire transfer, even if someone claims to be in dire need. 
                Wiring money is akin to sending cash, making it extremely challenging to reverse the transaction or 
                track its destination.
              </p>
              <p className="warning">
                <strong>Never divulge information that could potentially grant access to your financial accounts.</strong> 
                If another user requests money from you, promptly report the incident through sharx app.
              </p>
            </div>

            <div className="safety-tip">
              <div className="tip-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3>Safeguard Your Personal Information</h3>
              <p>
                Never disclose personal data such as your social security number, home or work address, or specifics 
                about your daily routine to users.
              </p>
            </div>

            <div className="safety-tip">
              <div className="tip-icon">
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
              <h3>Remain on the App</h3>
              <p>
                Maintain your conversations within the sharx app while you acquaint yourself with someone. Since 
                messages on the platform are subject to our Message Filters, individuals with malicious intentions 
                often attempt to shift the conversation to text messages, messaging apps, email, or phone calls 
                immediately.
              </p>
            </div>

            <div className="safety-tip">
              <div className="tip-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <h3>Report All Suspicious or Offensive Behavior</h3>
              <p>
                If you notice any conduct that violates our terms, promptly report it through our app. Examples of 
                violations include:
              </p>
              <ul>
                <li>Requests for money</li>
                <li>Harassment or threats</li>
                <li>Offensive messages</li>
                <li>Inappropriate or harmful behavior during or after in-person meetings</li>
                <li>Fraudulent profiles</li>
                <li>Spam or solicitation</li>
                <li>Links to commercial websites or attempts to sell products or services</li>
              </ul>
            </div>

            <div className="safety-tip">
              <div className="tip-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h3>Protect Your Account</h3>
              <p>
                Exercise caution when logging into your account from another device. <strong>Sharx will never send you 
                an email requesting your login information.</strong> If you receive such an email, report it immediately.
              </p>
            </div>
          </section>

          <section>
            <h2>Meeting in Person</h2>

            <div className="safety-tip">
              <div className="tip-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3>Avoid Rushing</h3>
              <p>
                Take your time to acquaint yourself with the other person before agreeing to share a taxi ride.
              </p>
            </div>

            <div className="safety-tip">
              <div className="tip-icon">
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
              <h3>Choose Public Meeting Locations</h3>
              <p>
                Opt for well-populated, public places for your in-person meetings. <strong>Avoid meeting at your 
                residence, your co-rider's home, or any other private location.</strong>
              </p>
            </div>

            <div className="safety-tip">
              <div className="tip-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3>Trust Your Instincts</h3>
              <p>
                If you ever feel uncomfortable, do not hesitate to decline a shared ride. In fact, <strong>it is 
                encouraged to prioritise your comfort and safety above all else.</strong>
              </p>
            </div>
          </section>

          <section className="safety-summary">
            <h2>Remember</h2>
            <p>
              Your safety is our top priority. If you ever feel uncomfortable or unsafe, trust your instincts and take 
              action. Report any suspicious behavior immediately through the sharx app, and don't hesitate to contact 
              local authorities if you feel you are in danger.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default SafetyTips;

