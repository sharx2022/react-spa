import { Link } from "react-router-dom";
import "../App.css";

function CommunityGuidelines() {
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
          <h1>Community Guidelines</h1>

          <section>
            <h2>Welcome to sharx!</h2>
            <p>
              Our aim at sharx is to create an enjoyable, secure, and inclusive environment where everyone can connect 
              with co-riders. These Community Guidelines serve as a framework to establish expectations for behaviour, 
              whether you're on the app or interacting elsewhere. Failure to adhere to these guidelines may lead to 
              consequences, ranging from suspension to a permanent ban.
            </p>
          </section>

          <section>
            <h2>Sharx's Guidelines</h2>

            <div className="guideline-item">
              <h3>Respect Boundaries</h3>
              <p>
                Recognise that comfort levels vary from person to person. Always be polite and respectful in your 
                interactions.
              </p>
            </div>

            <div className="guideline-item">
              <h3>Exercise Caution When Sharing Information</h3>
              <p>
                Avoid sharing your personal information or means of contact publicly, such as phone numbers, emails, or 
                social media handles. Never disclose sensitive data like bank account numbers or email passwords. Do not 
                request others to share their personal details, and <strong>never send money to anyone under any 
                circumstances.</strong>
              </p>
            </div>

            <div className="guideline-item">
              <h3>Avoid Violent Content</h3>
              <p>
                We promote positivity and do not tolerate violent content containing gore, death, descriptions of 
                violent acts, weapon use, or anything that advocates or glorifies self-harm.
              </p>
            </div>

            <div className="guideline-item">
              <h3>Communicate Respectfully</h3>
              <p>
                Respect is crucial when interacting with people from diverse backgrounds. If a conversation takes an 
                unexpected turn, take a moment to reflect before responding. Harassment, threats, bullying, intimidation, 
                doxing, sextortion, blackmail, or any intentional harm-causing actions are strictly prohibited.
              </p>
            </div>

            <div className="guideline-item">
              <h3>Say No to Hate</h3>
              <p>
                Sharx is a place free of hate, racism, bigotry, or violence based on an individual's identity, 
                appearance, or beliefs. This includes race, ethnicity, religion, disability, physical appearance, gender, 
                gender identity, age, national origin, or sexual orientation.
              </p>
            </div>

            <div className="guideline-item">
              <h3>Promote Kindness, Not Harm</h3>
              <p>
                Any actions or behaviors that suggest, intend, or cause harm to another user, whether online or offline, 
                will be taken seriously. This includes incitement of harm.
              </p>
            </div>

            <div className="guideline-item">
              <h3>Adhere to the Law</h3>
              <p>
                All illegal content or activities are strictly prohibited on sharx. This includes using the platform for 
                buying or selling drugs, counterfeit goods, or seeking assistance in illegal activities.
              </p>
            </div>

            <div className="guideline-item">
              <h3>One Account Per Person</h3>
              <p>
                Each sharx account must have a single owner. For logistical and privacy reasons, multiple individuals 
                cannot access the same account.
              </p>
            </div>

            <div className="guideline-item">
              <h3>Be an Honest Member of the Sharx Community</h3>
              <p>
                Do not misuse sharx in any way. Do not spread false or misleading information, spam harmful links or 
                unsolicited content, create multiple accounts, manipulate or deceive others for financial gain, submit 
                misleading reports, or use third-party apps to exploit features or manipulate the system.
              </p>
            </div>
          </section>

          <section>
            <h2>Reporting</h2>
            <p>
              As a member of the sharx community, we encourage you to report any instances of harm, discomfort, or 
              violations of our Community Guidelines. Your reports are kept confidential and assist us in addressing 
              harmful behaviour and safeguarding others.
            </p>
          </section>

          <section>
            <h2>Impact</h2>
            <p>
              We take our Community Guidelines and their impact on our community seriously. We implement a warning 
              system, but for persistent or severe violations, we will take appropriate action, which may include 
              account suspension or termination.
            </p>
            <p>
              We reserve the right to investigate and potentially terminate accounts, without refunding any purchases, 
              if we find misuse of the service or behavior that sharx deems inappropriate, unlawful, or in violation of 
              our Community Guidelines or Terms of Use. This applies to actions or communications that occur off the 
              service but involve individuals met through sharx.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CommunityGuidelines;

