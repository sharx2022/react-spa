import { Link } from "react-router-dom";
import "../App.css";

function PrivacyPolicy() {
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
          <h1>Privacy Policy</h1>
          
          <section>
            <h2>Introduction</h2>
            <p>
              When you use sharx, you place your trust in us with your personal data, and we take this trust seriously. 
              Therefore, it's important for us to provide you with a clear understanding of our privacy practices. This 
              notice outlines the personal data we gather, how we utilize and share it, and the choices you have 
              concerning your data. We encourage you to carefully review this section to gain a better grasp of our 
              approach to privacy.
            </p>
          </section>

          <section>
            <h2>Overview</h2>
            <h3>Scope</h3>
            <p>
              This notice is intended for users of sharx in the United Kingdom who utilise the mobile application and 
              its associated features. It specifically pertains to "riders," individuals who seek co-riders through their 
              sharx accounts.
            </p>
            <p>
              Our privacy practices adhere to the relevant laws of the United Kingdom. This implies that we engage in 
              the practices described in this notice only to the extent allowed by UK law.
            </p>
          </section>

          <section>
            <h3>Data controller</h3>
            <p>
              SHARX LTD is the designated data controller responsible for data collected from sharx's services in the 
              United Kingdom. sharx only shares personal data with law enforcement agencies in compliance with the 
              regulatory requirements of applicable laws, such as the GDPR.
            </p>
            <p>To ensure data protection when you use our services, sharx has implemented the following safeguards:</p>
            <ul>
              <li>
                Data is safeguarded during transmission between the sharx app and our servers, as well as during 
                processing on our servers. This includes encryption to prevent unauthorised disclosure of users' 
                complete identities.
              </li>
              <li>
                Policies and procedures are in place to restrict access to and processing of personal data for specific 
                purposes.
              </li>
            </ul>
          </section>

          <section>
            <h2>Data Collection and Use</h2>
            <p>Sharx collects data in two main ways:</p>
            
            <h3>Data Provided by Users to sharx</h3>
            <p>
              This includes information users provide during profile creation, such as their name, email, phone number, 
              address, and profile picture.
            </p>

            <h3>Data created during use of our service:</h3>
            <ul>
              <li><strong>Demographic Data:</strong> Information such as date of birth and gender.</li>
              <li><strong>Travel Information:</strong> Details about upcoming trips, including dates and times, which users manually input into the sharx app.</li>
              <li><strong>Location Data:</strong> Location information collected from users' mobile devices if they grant us permission via their device settings.</li>
              <li><strong>Transaction Information:</strong> Data related to payment transactions for packages users purchase.</li>
              <li><strong>Usage Data:</strong> Information about how users interact with our app.</li>
              <li><strong>Device Data:</strong> Data about the devices used to access our app.</li>
              <li><strong>Communications Data:</strong> Information concerning in-app communications between users.</li>
            </ul>
          </section>

          <section>
            <h2>How We Use Personal Data</h2>
            <p>Sharx employs personal data to facilitate a dependable and convenient taxi-sharing service. We use data for:</p>
            <ul>
              <li>Providing Our Services</li>
              <li>Safety and Security</li>
              <li>Customer Support</li>
              <li>Enabling User Communications</li>
              <li>Marketing and Advertising</li>
              <li>Non-Marketing Communications</li>
              <li>Legal Proceedings and Requirements</li>
            </ul>
          </section>

          <section>
            <h2>Data Sharing and Disclosure</h2>
            <p>Sharx may share data as follows:</p>
            <ul>
              <li><strong>With Other Users:</strong> Sharing users' first name, the first letter of users' last name, rating, and distance from other users.</li>
              <li><strong>With Service Providers:</strong> Payment processors, cloud storage providers, and Google.</li>
              <li><strong>For Legal Reasons:</strong> When required by law or for safety concerns.</li>
              <li><strong>With Consent:</strong> When you authorize the sharing.</li>
            </ul>
          </section>

          <section>
            <h2>Data Retention and Deletion</h2>
            <p>
              Sharx retains user data for the duration necessary for the purposes outlined above. Users can request 
              the deletion of their accounts at any time. Following a deletion request, sharx retains user data for 30 
              days to ensure safety, security, and fraud prevention.
            </p>
            <p>
              Users can request the deletion of their accounts anytime by navigating to <strong>Settings &gt; Delete 
              account</strong> in the sharx app.
            </p>
          </section>

          <section>
            <h2>Third Party Services</h2>
            <p>
              Sharx app uses google services (The Google Maps API(s)) which means that is bind to the related Google 
              Privacy Policy and users should follow the guidelines. More details can be found in the Google Privacy Policy.
            </p>
          </section>

          <section>
            <h2>Choice and Transparency</h2>
            <h3>Device Permissions</h3>
            <p>
              Most mobile device platforms (iOS, Android, etc.) specify certain types of device data that apps cannot 
              access without the device owner's consent. Please check your device's settings for further information.
            </p>

            <h3>In-App Ratings Pages</h3>
            <p>
              Following each connection, users can rate each other on a scale from 1 to 5. This system fosters 
              accountability for behavior, contributing to a respectful and secure environment.
            </p>

            <h3>User Data Requests</h3>
            <ul>
              <li><strong>Accessing Data:</strong> Users can access their data via the sharx app.</li>
              <li><strong>Data Portability:</strong> Users can request a copy of their data by contacting Sharx via email.</li>
              <li><strong>Editing or Updating Data:</strong> Users can modify their account details through the Settings menu.</li>
              <li><strong>Deleting Data:</strong> Users may request deletion at any time via Settings &gt; Delete account.</li>
            </ul>
          </section>

          <section>
            <h2>Updates to This Notice</h2>
            <p>
              We may periodically update this notice. In the event of significant changes, we will inform users in 
              advance via the sharx app or through email. Use of our services following an update constitutes consent 
              to the revised notice to the extent permitted by law.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;

