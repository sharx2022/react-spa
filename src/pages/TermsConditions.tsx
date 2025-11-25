import { Link } from "react-router-dom";
import "../App.css";

function TermsConditions() {
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
          <h1>Terms & Conditions</h1>

          <section>
            <h2>Agreement to Terms of Use</h2>
            <p>
              When you create a sharx account, you are acknowledging your acceptance of (i) these Terms of Use, (ii) 
              our Privacy Policy, (iii) Safety Tips, and (iv) Community Guidelines, each of which is incorporated into 
              this Agreement by reference. If you do not agree to all the terms of this Agreement, please refrain from 
              using the app.
            </p>
            <p>
              We reserve the right to make changes to this Agreement periodically. The latest version will be available 
              within the app. If significant changes are made, we will notify you at least 30 days in advance.
            </p>
          </section>

          <section>
            <h2>Eligibility</h2>
            <p>You may only create an account or access the app if:</p>
            <ul>
              <li>You are at least 18 years old.</li>
              <li>You agree to abide by this Agreement and all applicable laws.</li>
              <li>You have not been convicted of a felony, sex crime, or any crime involving violence.</li>
            </ul>
          </section>

          <section>
            <h2>Your Account</h2>
            <p>
              To use sharx, you may sign in using your phone number. You are responsible for maintaining the 
              confidentiality of your login credentials. If you suspect unauthorised access, contact us immediately 
              through the Support option.
            </p>
          </section>

          <section>
            <h2>App Modification and Termination</h2>
            <p>
              Sharx continuously strives to enhance its app. We may suspend the service for safety or security concerns, 
              notifying you in advance when possible.
            </p>
            <p>
              To terminate your account, follow the instructions under Settings. Sharx reserves the right to terminate 
              your account at any time without notice if it believes you have violated this Agreement.
            </p>
          </section>

          <section>
            <h2>Safety and Interactions with Other Users</h2>
            <p>
              While sharx promotes respectful interactions, we are not responsible for the behavior of users on or off 
              the app. You must exercise caution in all interactions. <strong>Never share financial information or send 
              money to other users.</strong>
            </p>
            <p>
              Sharx does not conduct criminal background checks on users. You bear sole responsibility for your 
              interactions with other users.
            </p>
          </section>

          <section>
            <h2>Rights Granted by Sharx</h2>
            <p>
              Sharx grants you a personal, worldwide, royalty-free, non-assignable, nonexclusive, revocable, and 
              non-sublicensable license to access and use the app. This license is automatically revoked if you:
            </p>
            <ul>
              <li>Use the app for commercial purposes without our written consent.</li>
              <li>Copy, modify, or reproduce copyrighted material without permission.</li>
              <li>Use automated means to access or retrieve data.</li>
              <li>Interfere with or disrupt the app or its servers.</li>
              <li>Upload viruses or malicious code.</li>
              <li>Reverse engineer or decompile any portion of the app.</li>
            </ul>
          </section>

          <section>
            <h2>Your Granted Rights to Sharx</h2>
            <p>
              By creating an account, you grant sharx a global, transferable, royalty-free license to use any content 
              you post on the app. This license is for operating, developing, and improving the app.
            </p>
            <p>
              You affirm that all information submitted is accurate and that you have the right to post the Content on 
              the app.
            </p>
          </section>

          <section>
            <h2>Community Rules</h2>
            <p>By using the app, you pledge not to:</p>
            <ul>
              <li>Use the app for any illegal purpose.</li>
              <li>Engage in spamming, soliciting money, or defrauding other users.</li>
              <li>Impersonate any individual or entity.</li>
              <li>Engage in bullying, stalking, harassment, or intimidation.</li>
              <li>Post hate speech, threats, or sexually explicit material.</li>
              <li>Share content that incites violence or promotes racism.</li>
              <li>Maintain more than one account.</li>
            </ul>
          </section>

          <section>
            <h2>Purchases</h2>
            <h3>In General</h3>
            <p>
              Sharx may offer products and services for purchase through authorized payment platforms. Your Payment 
              Method will be charged for selected services, including applicable taxes.
            </p>

            <h3>Auto-Renewal</h3>
            <p>
              If you acquire a recurring subscription, your Payment Method will continue to be charged until you cancel 
              it. Subscriptions automatically renew unless canceled before the renewal date.
            </p>

            <h3>Ride Requests</h3>
            <p>
              You may purchase ride requests which are virtual products. All purchases are final and non-refundable. 
              Sharx is not obligated to refund Virtual Items for any reason.
            </p>

            <h3>Refunds</h3>
            <p>Generally, all charges are nonrefundable. To request a refund:</p>
            <ul>
              <li><strong>Apple ID purchases:</strong> Visit the App Store or submit a request at getsupport.apple.com</li>
              <li><strong>Google Play purchases:</strong> Contact Support with your order number</li>
            </ul>
          </section>

          <section>
            <h2>Disclaimers</h2>
            <p>
              Sharx offers the service on an "as is" and "as available" basis. We do not guarantee that the app will be 
              uninterrupted, secure, or error-free. Any materials downloaded are at your own discretion and risk.
            </p>
          </section>

          <section>
            <h2>Third-Party Services</h2>
            <p>
              The app may display advertisements and contain links to external websites. Sharx is not liable for the 
              actions or terms of such third parties.
            </p>
            <p>By using our application, users are bound by Google's Terms of Service.</p>
          </section>

          <section>
            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent allowed by law, sharx shall not be liable for indirect, consequential, or special 
              damages arising from your use of the app.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have questions about these Terms & Conditions, please contact us through the Support option in the 
              sharx app.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default TermsConditions;

