import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Crafting Digital Excellence</h1>
            <p className="hero-subtitle">
              We are Sharx a London-based software company delivering
              cutting-edge mobile solutions to clients worldwide
            </p>
            <div className="hero-buttons">
              <a href="#products" className="btn btn-primary">
                Our Products
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2>About Sharx</h2>
            <div className="underline"></div>
          </div>
          <div className="about-content">
            <div className="about-story">
              <h3>About Us</h3>
              <p className="lead">
                We are three friends with a common dream, to make this world
                better for everyone.
              </p>
              <p>
                After endless courses, parties and trips we have built a true
                and honest friendship which led to Sharx's creation. Based in
                London, we collaborate with talented professionals from around
                the world, bringing diverse perspectives and cutting-edge
                expertise to every project.
              </p>
            </div>

            <div className="mission-values">
              <div className="mission-card">
                <div className="mission-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <h3>Our Mission</h3>
                <p>
                  To help people ameliorate their daily life by delivering
                  software solutions to the people who need them.
                </p>
              </div>

              <div className="values-card">
                <div className="values-icon">
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
                <h3>Our Values</h3>
                <ul className="values-list">
                  <li>
                    <strong>Respect:</strong> We treat everyone with respect and
                    empathy.
                  </li>
                  <li>
                    <strong>Integrity:</strong> We always act with honesty and
                    transparency.
                  </li>
                  <li>
                    <strong>Excellence:</strong> We are dedicated to delivering
                    high-quality solutions.
                  </li>
                </ul>
              </div>
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                <h3>Innovative</h3>
                <p>Cutting-edge Solutions</p>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
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
                <h3>Global</h3>
                <p>Worldwide Collaboration</p>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <h3>Agile</h3>
                <p>Fast Development</p>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3>Quality</h3>
                <p>Excellence Driven</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products">
        <div className="container">
          <div className="section-header">
            <h2>Our Products</h2>
            <div className="underline"></div>
            <p className="section-subtitle">
              Innovative solutions designed to solve real-world problems
            </p>
          </div>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 8l4 4-4 4M3 12h18M11 6v12"></path>
                </svg>
              </div>
              <h3>Sharx</h3>
              <h4>Share Your Cab</h4>
              <p>
                Revolutionary carpooling platform that connects commuters
                heading in the same direction. Save money, reduce carbon
                footprint, and make your daily commute more enjoyable by sharing
                rides with verified users.
              </p>
              <div className="product-features">
                <span className="feature-tag">Smart Matching</span>
                <span className="feature-tag">Real-time Tracking</span>
                <span className="feature-tag">Secure Payments</span>
              </div>
              <Link to="/products/sharx" className="product-link">
                Learn More
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
            <div className="product-card">
              <div className="product-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <h3>RotaIQ</h3>
              <h4>Schedule Generator</h4>
              <p>
                Intelligent scheduling software that automates workforce
                management. Create optimal work schedules in minutes,
                considering availability, skills, and labor regulations. Perfect
                for businesses of all sizes.
              </p>
              <div className="product-features">
                <span className="feature-tag">AI-Powered</span>
                <span className="feature-tag">Auto-Scheduling</span>
                <span className="feature-tag">Shift Management</span>
              </div>
              <Link to="/products/rotaiq" className="product-link">
                Learn More
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <div className="underline"></div>
            <p className="section-subtitle">
              Comprehensive software solutions tailored to your needs
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
              </div>
              <h3>Mobile App Development</h3>
              <p>
                Cross-platform mobile applications built with the latest
                technologies. From iOS to Android, we create seamless
                experiences for your users.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3>Web Development</h3>
              <p>
                Modern, responsive web applications that deliver exceptional
                user experiences. Built with cutting-edge frameworks and best
                practices.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                </svg>
              </div>
              <h3>Cloud Solutions</h3>
              <p>
                Scalable cloud infrastructure and deployment strategies. We help
                you leverage the power of AWS, Azure, and Google Cloud.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                  <path d="M2 2l7.586 7.586"></path>
                  <circle cx="11" cy="11" r="2"></circle>
                </svg>
              </div>
              <h3>UI/UX Design</h3>
              <p>
                Beautiful, intuitive interfaces that users love. Our design team
                creates experiences that are both functional and delightful.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              </div>
              <h3>Consulting & Strategy</h3>
              <p>
                Expert guidance on technology decisions and digital
                transformation. We help you navigate the complex world of
                software development.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="10 8 16 12 10 16 10 8"></polygon>
                </svg>
              </div>
              <h3>Product Development</h3>
              <p>
                End-to-end product development from concept to launch. We turn
                your ideas into reality with agile methodologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Get in Touch</h2>
            <div className="underline"></div>
            <p className="section-subtitle">
              Ready to start your next project? Let's talk.
            </p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="info-card">
                <div className="info-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <h3>Address</h3>
                <p>London Office 167-169,</p>
                <p>Great Portland Street,</p>
                <p>5th Floor, W1W 5PF, UK</p>
              </div>
              <div className="info-card">
                <div className="info-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <h3>Email</h3>
                <p>support@officialsharx.com</p>
                <p className="small">We'll respond as soon as possible</p>
              </div>
              <div className="info-card">
                <div className="info-icon">
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
                <h3>Working Hours</h3>
                <p>Mon.-Fri.: 9AM – 5PM</p>
                <p>Saturday: 10AM – 4PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
