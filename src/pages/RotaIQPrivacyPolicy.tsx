import { Link } from "react-router-dom";
import "../App.css";

function RotaIQPrivacyPolicy() {
  return (
    <div className="legal-page">
      <section className="legal-hero">
        <div className="container">
          <Link to="/products/rotaiq" className="back-link">
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
            Back to RotaIQ
          </Link>
          <h1>Privacy Policy</h1>
          <p className="legal-subtitle">Last Updated: November 2025</p>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">
          <h2>Introduction</h2>
          <p>
            When you use Rota IQ, you place your trust in us with your personal
            data, and we take this trust seriously. Therefore, it's important
            for us to provide you with a clear understanding of our privacy
            practices. This notice outlines the personal data we gather, how we
            utilize and share it, and the choices you have concerning your data.
            We encourage you to carefully review this section to gain a better
            grasp of our approach to privacy.
          </p>

          <h2>Overview</h2>

          <h3>Scope</h3>
          <p>
            This notice is intended for users of Rota IQ who utilise the mobile
            application and its associated features. It specifically pertains to
            "employers" and "employees" who use Rota IQ to manage workforce
            scheduling, employee availability, shift assignments, and time
            tracking.
          </p>
          <p>
            Our privacy practices adhere to the relevant laws of the
            jurisdictions in which we operate. This implies that we engage in
            the practices described in this notice only to the extent allowed by
            applicable law, including but not limited to the General Data
            Protection Regulation (GDPR) in the European Union and the United
            Kingdom, and other applicable data protection laws.
          </p>

          <h3>Data controller</h3>
          <p>
            SHARX LTD (or the applicable entity operating Rota IQ in your
            jurisdiction) is the designated data controller responsible for data
            collected from Rota IQ's services. Rota IQ only shares personal data
            with law enforcement agencies in compliance with the regulatory
            requirements of applicable laws, such as the GDPR.
          </p>
          <p>
            To ensure data protection when you use our services, Rota IQ has
            implemented the following safeguards:
          </p>
          <ul>
            <li>
              Data is safeguarded during transmission between the Rota IQ app
              and our servers, as well as during processing on our servers. This
              includes encryption using HTTPS/TLS to prevent unauthorised
              disclosure of users' personal information.
            </li>
            <li>
              Policies and procedures are in place to restrict access to and
              processing of personal data for specific purposes.
            </li>
            <li>
              Regular security assessments and updates to maintain the integrity
              of our data protection measures.
            </li>
          </ul>

          <h2>Data collection and use</h2>
          <p>Rota IQ collects data in two main ways:</p>

          <h3>Data Provided by Users to Rota IQ:</h3>
          <p>
            This includes information users provide during account creation and
            profile setup, such as:
          </p>
          <ul>
            <li>
              <strong>Profile Information:</strong> First name, last name,
              mobile phone number, and role (employer or employee).
            </li>
            <li>
              <strong>Business Information:</strong> For employers, this
              includes business name, industry, sub-industry, and unlock codes
              for employee access.
            </li>
            <li>
              <strong>Job Category Information:</strong> For businesses, this
              includes job category names, descriptions, and color codes.
            </li>
            <li>
              <strong>Shift Type Information:</strong> For businesses, this
              includes shift type names, start times, end times, descriptions,
              and version history.
            </li>
            <li>
              <strong>Availability Information:</strong> For employees, this
              includes weekly availability preferences, including dates and
              shift type preferences.
            </li>
            <li>
              <strong>Join Request Information:</strong> When employees request
              to join a business, this includes their name and mobile number.
            </li>
          </ul>

          <h3>Data created during use of our service:</h3>
          <ul>
            <li>
              <strong>Authentication Data:</strong> Phone number verification
              codes (OTP) used for account authentication and security.
            </li>
            <li>
              <strong>Schedule Data:</strong> Information about scheduled
              shifts, including employee assignments, job categories, shift
              types, start times, end times, and any schedule modifications.
            </li>
            <li>
              <strong>Time Tracking Data:</strong> Clock-in and clock-out times
              recorded by employees for their scheduled shifts, including
              timestamps and associated shift information.
            </li>
            <li>
              <strong>Staff Requirement Data:</strong> Information about
              required staffing levels by job category and shift type for
              specific dates.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how users interact
              with our app, encompassing app crashes, feature usage, navigation
              patterns, and other system activities.
            </li>
            <li>
              <strong>Device Data:</strong> Data about the devices used to
              access our app, including hardware models, operating systems,
              versions, device identifiers, and advertising identifiers (where
              applicable).
            </li>
            <li>
              <strong>Notification Data:</strong> Push notification tokens (FCM
              tokens) used to send notifications about shifts, schedule changes,
              clock-in reminders, and other app-related communications.
            </li>
            <li>
              <strong>Communication Data:</strong> Information concerning
              communications between employers and employees within the app,
              including join requests, acceptance/rejection of requests, and any
              in-app messaging features.
            </li>
            <li>
              <strong>Subscription and Payment Data:</strong> For employers with
              subscriptions, this includes subscription status, payment method
              information (processed securely through third-party payment
              processors), billing dates, and transaction history.
            </li>
            <li>
              <strong>Location Data:</strong> If you grant us permission via
              your device settings, we may collect location information for
              features such as clock-in/out verification or location-based
              scheduling features. This data is collected only when you actively
              use these features and is retained only as necessary for the
              functionality.
            </li>
            <li>
              <strong>Camera Data:</strong> If you grant us permission, we may
              access your device's camera for features such as scanning QR codes
              for clock-in/out verification or capturing profile pictures.
              Images are processed locally on your device or stored securely if
              uploaded to your profile.
            </li>
          </ul>

          <h2>How we use personal Data</h2>
          <p>
            Rota IQ employs personal data to facilitate a reliable and efficient
            workforce management and scheduling service. Additionally, we
            utilise this data for the following purposes:
          </p>
          <ul>
            <li>
              To provide and improve our scheduling and workforce management
              services.
            </li>
            <li>To enhance safety and security within our services.</li>
            <li>For customer support.</li>
            <li>
              To facilitate communications between employers and employees.
            </li>
            <li>
              For marketing and advertising (with your consent where required).
            </li>
            <li>To send non-marketing communications to users.</li>
            <li>In connection with legal proceedings and compliance.</li>
          </ul>

          <h3>Providing Our Services</h3>
          <p>
            Rota IQ utilises data to deliver, uphold, and enhance our services.
            This encompasses activities such as:
          </p>
          <ul>
            <li>Creating and updating user accounts and profiles.</li>
            <li>
              Creating and managing business accounts and associated data.
            </li>
            <li>
              Generating automated schedules using AI-powered algorithms based
              on employee availability and business requirements.
            </li>
            <li>
              Matching employees to shifts based on availability, job
              categories, and staffing requirements.
            </li>
            <li>
              Enabling time tracking through clock-in and clock-out
              functionality.
            </li>
            <li>
              Sending notifications about upcoming shifts, schedule changes,
              clock-in reminders, and other important updates.
            </li>
            <li>
              Processing subscription payments and managing billing for
              employers.
            </li>
            <li>
              Facilitating employee join requests and business access through
              unlock codes.
            </li>
            <li>
              Undertaking essential operations to maintain our services,
              including resolving software glitches and operational issues.
            </li>
            <li>
              Analyzing usage patterns to improve our scheduling algorithms and
              app functionality.
            </li>
          </ul>
          <p>
            Rota IQ performs the above activities on the grounds that they are
            necessary to fulfil the terms of our agreements with users, are
            compatible with such uses, or on the grounds that they are necessary
            for purposes of Rota IQ's and its users' legitimate interests.
          </p>

          <h3>Safety and Security</h3>
          <p>
            We use data to uphold the safety, security, and integrity of our
            services and users. This involves:
          </p>
          <ul>
            <li>
              Monitoring for fraudulent activity, unauthorized access, or misuse
              of the service.
            </li>
            <li>
              Implementing security measures to protect user data and prevent
              data breaches.
            </li>
            <li>
              Investigating and responding to security incidents or violations
              of our Terms of Service.
            </li>
            <li>
              Maintaining audit logs of user activities for security and
              compliance purposes.
            </li>
            <li>
              Enforcing business access controls and verifying user identities.
            </li>
          </ul>
          <p>
            Rota IQ performs the above activities on the grounds that they are
            necessary to fulfil the terms of our agreements with users, and/or
            for purposes of the legitimate safety and security interests of Rota
            IQ, our users and members of the general public.
          </p>

          <h3>Customer Support</h3>
          <p>
            Information collected is used to provide customer support, including
            investigating and addressing user concerns, technical issues, and
            account-related inquiries.
          </p>
          <p>
            Rota IQ performs the above activities on the grounds that they are
            necessary to fulfil the terms of our agreements with users or for
            purposes of Rota IQ's legitimate interest in monitoring and
            improving its customer support services.
          </p>

          <h3>Enabling User Communications</h3>
          <p>
            Data is used to facilitate communications between employers and
            employees, such as:
          </p>
          <ul>
            <li>
              Sending notifications about schedule changes, shift assignments,
              and availability requests.
            </li>
            <li>Facilitating join requests and business access management.</li>
            <li>Enabling in-app messaging features (where available).</li>
          </ul>
          <p>
            Rota IQ performs the above activities on the grounds that they are
            necessary to fulfil the terms of our agreements with users.
          </p>

          <h3>Marketing and Advertising</h3>
          <p>
            Data may be employed for marketing our services (with your consent
            where required by law). This may include:
          </p>
          <ul>
            <li>
              Sending emails, text messages, push notifications, or other
              communications for marketing or advertising Rota IQ products,
              services, features, offers, promotions, news, and events.
            </li>
            <li>
              Personalizing marketing content based on your usage patterns and
              preferences.
            </li>
          </ul>
          <p>
            Rota IQ performs the above activities on the grounds that they are
            necessary for purposes of Rota IQ's legitimate interests in
            informing users about Rota IQ services and features, or with your
            explicit consent where required by applicable law.
          </p>

          <h3>Non-Marketing Communications</h3>
          <p>
            Data may be used to dispatch surveys, service updates, and other
            communications unrelated to service marketing.
          </p>
          <p>
            Rota IQ performs the above activities on the grounds that they are
            necessary to fulfil the terms of our agreements with users, or for
            purposes of Rota IQ's and its users' legitimate interests in
            informing users about events that may have an impact on their use of
            Rota IQ services.
          </p>

          <h3>Legal Proceedings and Requirements</h3>
          <p>
            Data is used to investigate or address claims, meet obligations
            under applicable laws, regulations, or operating licenses, respond
            to legal processes or governmental requests (including from law
            enforcement), and address disputes related to the use of Rota IQ's
            services.
          </p>
          <p>
            Rota IQ performs the above activities on the grounds that they are
            necessary for purposes of Rota IQ's legitimate interests in
            investigating and responding to claims and disputes relating to use
            of Rota IQ's services and features, and/or necessary for compliance
            with applicable legal requirements.
          </p>

          <h2>Data Sharing and Disclosure</h2>
          <p>
            Certain Rota IQ services and features necessitate data sharing with
            other users and service providers. Rota IQ may share data as
            follows:
          </p>

          <h3>With Other Users</h3>
          <ul>
            <li>
              <strong>For Employers:</strong> Employers can view employee
              information necessary for scheduling, including employee names,
              availability, assigned shifts, clock-in/out times, and job
              category assignments within their business.
            </li>
            <li>
              <strong>For Employees:</strong> Employees can view their own
              schedule information, availability settings, and clock-in/out
              records. Employees may also see limited business information (such
              as business name) for businesses they are associated with.
            </li>
            <li>
              <strong>Business Information:</strong> Business details, unlock
              codes, and staffing requirements are accessible to authorized
              employers and employees within that business.
            </li>
          </ul>

          <h3>With Rota IQ Service Providers and Business Partners</h3>
          <p>This encompasses:</p>
          <ul>
            <li>
              <strong>Payment Processors:</strong> Stripe and other payment
              facilitators for processing subscription payments and managing
              billing.
            </li>
            <li>
              <strong>Cloud Storage Providers:</strong> Firebase (Google Cloud
              Platform) for data storage, authentication, and backend services.
            </li>
            <li>
              <strong>Analytics Providers:</strong> Services that help us
              understand app usage and improve our services (data is anonymized
              where possible).
            </li>
            <li>
              <strong>Notification Services:</strong> Firebase Cloud Messaging
              for delivering push notifications.
            </li>
            <li>
              <strong>Hosting and Infrastructure Providers:</strong> Services
              that host our application and infrastructure.
            </li>
          </ul>

          <h3>For Legal Reasons or in Disputes</h3>
          <p>
            Rota IQ may share users' data if required by applicable law,
            regulations, operating licenses, legal processes, governmental
            requests, or safety concerns. This includes sharing data with law
            enforcement, government authorities, or other third parties when
            necessary to enforce our Terms of Service, user agreements, or
            policies, protect Rota IQ's rights or property, or resolve disputes.
          </p>
          <p>
            This also includes sharing data with others in connection with, or
            during negotiations of, any merger, sale of company assets,
            consolidation or restructuring, financing, or acquisition of all or
            a portion of our business by or into another company.
          </p>

          <h3>With Consent</h3>
          <p>
            Rota IQ may share a user's data other than as described in this
            notice if we notify the user and they consent to the sharing.
          </p>

          <h2>Data Retention and Deletion</h2>
          <p>
            Rota IQ retains user data for the duration necessary for the
            purposes outlined above, including the provision of its services and
            adherence to legal obligations. For example:
          </p>
          <ul>
            <li>
              We maintain data for the duration of users' accounts if it is
              essential for the provision of our services, such as user profile
              information, credentials, schedules, and time tracking records.
            </li>
            <li>
              Historical schedule and time tracking data may be retained for
              payroll, compliance, and business record-keeping purposes as
              required by applicable employment and tax laws.
            </li>
            <li>
              Subscription and payment data may be retained as required by
              financial regulations and for accounting purposes.
            </li>
          </ul>
          <p>
            Users can request the deletion of their accounts at any time.
            Following a deletion request:
          </p>
          <ul>
            <li>
              We will delete or anonymize personal data that is not required to
              be retained for legal or legitimate business purposes.
            </li>
            <li>
              Some data may be retained for a limited period (typically 30-90
              days) to ensure safety, security, fraud prevention, and to comply
              with legal obligations.
            </li>
            <li>
              Historical schedule and time tracking data may need to be retained
              in anonymized form for business and legal compliance purposes.
            </li>
          </ul>
          <p>
            Users can request the deletion of their accounts anytime by
            navigating to Settings {">"} Delete account in the Rota IQ app, or
            by contacting our support team.
          </p>

          <h2>Third Party Services</h2>
          <p>
            Rota IQ app uses the following third-party services, and users
            should be aware of their respective privacy policies:
          </p>
          <ul>
            <li>
              <strong>Firebase Services (Google):</strong> Rota IQ uses Firebase
              for authentication, data storage (Firestore), cloud functions,
              push notifications (Firebase Cloud Messaging), and remote
              configuration. This means that data processing is subject to
              Google's Privacy Policy. More details can be found in the Google
              Privacy Policy and Firebase Terms of Service.
            </li>
            <li>
              <strong>Stripe:</strong> Rota IQ uses Stripe for payment
              processing and subscription management. Payment information is
              processed securely by Stripe in accordance with their Privacy
              Policy and security standards. Rota IQ does not store complete
              payment card information on its servers.
            </li>
            <li>
              <strong>Other Service Providers:</strong> Rota IQ may use
              additional third-party services for analytics, error tracking, and
              service improvement. These services are bound by their respective
              privacy policies and data processing agreements.
            </li>
          </ul>

          <h2>Choice and Transparency</h2>
          <p>
            Rota IQ empowers users to access and/or manage the data collected by
            Rota IQ, including through:
          </p>

          <h3>Device Permissions</h3>
          <p>
            Most mobile device platforms (iOS, Android, etc.) specify certain
            types of device data that apps cannot access without the device
            owner's consent, and these platforms have varying procedures for
            obtaining such consent. Rota IQ requests the following permissions:
          </p>
          <ul>
            <li>
              <strong>Phone:</strong> Required for phone number verification
              during account creation and authentication.
            </li>
            <li>
              <strong>Camera:</strong> Optional, for scanning QR codes for
              clock-in/out verification and capturing profile pictures.
            </li>
            <li>
              <strong>Notifications:</strong> Required for receiving push
              notifications about shifts, schedule changes, and important
              updates.
            </li>
            <li>
              <strong>Location:</strong> Optional, for location-based features
              such as clock-in/out verification (if implemented).
            </li>
          </ul>
          <p>
            You can manage these permissions through your device's settings.
            Please check your device's settings or contact your provider for
            further information.
          </p>

          <h3>User Data Requests</h3>
          <p>
            Rota IQ provides users with ways to learn about, control, and raise
            questions and concerns regarding the handling of their data.
          </p>
          <ul>
            <li>
              <strong>Accessing Data:</strong> Users can access their data,
              including profile data, schedule information, availability
              settings, and time tracking records, via the Rota IQ app
              (Dashboard, Profile Settings, Schedule views).
            </li>
            <li>
              <strong>Data Portability:</strong> Users can request a copy of
              their data in a machine-readable format by contacting Rota IQ via
              email or through the Support option in the app.
            </li>
            <li>
              <strong>Editing or Updating Data:</strong> Users can modify their
              account details, such as name, phone number, availability
              preferences, and profile information, through the Settings menu in
              the Rota IQ app. Employers can also manage business information,
              job categories, shift types, and staff requirements through the
              app.
            </li>
            <li>
              <strong>Deleting Data:</strong> Users may request the deletion of
              their account at any time by using the Settings {">"} Delete
              account option in the Rota IQ app, or by contacting our support
              team. Note that some data may be retained as described in the Data
              Retention and Deletion section above.
            </li>
            <li>
              <strong>Objections, Restrictions, and Complaints:</strong> Users
              have the option to request the cessation of all or some of their
              data usage, or to limit its usage. This includes objecting to data
              usage based on Rota IQ's legitimate interests. Rota IQ may
              continue processing data after such objection or request to the
              extent required or permitted by law. Additionally, users may have
              the right to file a complaint regarding Rota IQ's data handling
              with the data protection authority in their country (such as the
              Information Commissioner's Office in the UK or the relevant
              supervisory authority in the EU).
            </li>
            <li>
              <strong>Notification Preferences:</strong> Users can manage their
              notification preferences through the app settings to control what
              types of notifications they receive.
            </li>
          </ul>

          <h2>Updates to this notice</h2>
          <p>
            We may periodically update this notice. In the event of significant
            changes, we will inform users in advance of such changes via the
            Rota IQ app or through other means like email. We encourage users to
            periodically review this notice for the latest information on our
            privacy practices. Use of our services following an update
            constitutes consent to the revised notice to the extent permitted by
            law.
          </p>

          <h2>Contact Information</h2>
          <p>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or our data practices, please contact us through the
            Support option in the Rota IQ app or via email at
            support@officialsharx.com.
          </p>
        </div>
      </section>
    </div>
  );
}

export default RotaIQPrivacyPolicy;
