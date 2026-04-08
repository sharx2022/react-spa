import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "", // Honeypot field - should remain empty
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Rate limiting
  const lastSubmitTime = useRef<number>(0);
  const submissionCount = useRef<number>(0);
  const submissionResetTimer = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  // reCAPTCHA
  const { executeRecaptcha } = useGoogleReCaptcha();

  // Reset submission count after 1 hour
  useEffect(() => {
    return () => {
      if (submissionResetTimer.current) {
        clearTimeout(submissionResetTimer.current);
      }
    };
  }, []);

  // Handle hash navigation (for links from other pages)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, []);

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validate form data
  const validateForm = (): { isValid: boolean; error?: string } => {
    // Check honeypot (should be empty)
    if (formData.honeypot) {
      return { isValid: false, error: t("contact.validationSpam") };
    }

    // Validate name
    if (formData.name.trim().length < 2) {
      return { isValid: false, error: t("contact.validationName") };
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return { isValid: false, error: t("contact.validationEmail") };
    }

    // Validate subject
    if (formData.subject.trim().length < 3) {
      return { isValid: false, error: t("contact.validationSubject") };
    }

    // Validate message
    if (formData.message.trim().length < 10) {
      return {
        isValid: false,
        error: t("contact.validationMessage"),
      };
    }

    // Check for spam patterns (excessive links, all caps, etc.)
    const linkCount = (formData.message.match(/https?:\/\//g) || []).length;
    if (linkCount > 2) {
      return { isValid: false, error: t("contact.validationLinks") };
    }

    const capsRatio =
      (formData.message.match(/[A-Z]/g) || []).length / formData.message.length;
    if (capsRatio > 0.7 && formData.message.length > 20) {
      return { isValid: false, error: t("contact.validationCaps") };
    }

    return { isValid: true };
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Rate limiting check
      const now = Date.now();
      const timeSinceLastSubmit = now - lastSubmitTime.current;

      // Prevent submissions more frequent than once per minute
      if (timeSinceLastSubmit < 60000) {
        throw new Error(t("contact.rateLimitWait"));
      }

      // Limit to 3 submissions per hour
      if (submissionCount.current >= 3) {
        throw new Error(t("contact.rateLimitMax"));
      }

      // Validate form
      const validation = validateForm();
      if (!validation.isValid) {
        throw new Error(validation.error);
      }

      // Execute reCAPTCHA
      if (!executeRecaptcha) {
        throw new Error(t("contact.recaptchaError"));
      }

      const recaptchaToken = await executeRecaptcha("contact_form");

      // EmailJS configuration
      const serviceId = "service_zlregmo";
      const templateId = "template_dumzvfp";
      const publicKey = "b0GDkuncfIS_ivZ-U";

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "support@officialsharx.com",
          recaptcha_token: recaptchaToken,
        },
        publicKey,
      );

      // Update rate limiting
      lastSubmitTime.current = now;
      submissionCount.current += 1;

      // Reset submission count after 1 hour
      if (submissionResetTimer.current) {
        clearTimeout(submissionResetTimer.current);
      }
      submissionResetTimer.current = setTimeout(() => {
        submissionCount.current = 0;
      }, 3600000); // 1 hour

      // Success
      setSubmitStatus({
        type: "success",
        message: t("contact.successMessage"),
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        honeypot: "",
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      const errorMessage =
        error instanceof Error ? error.message : t("contact.errorMessage");

      setSubmitStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">{t("hero.title")}</h1>
            <p className="hero-subtitle">{t("hero.subtitle")}</p>
            <div className="hero-buttons">
              <a href="#products" className="btn btn-primary">
                {t("hero.ourProducts")}
              </a>
              <a href="#contact" className="btn btn-secondary">
                {t("hero.getInTouch")}
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
            <h2>{t("about.sectionTitle")}</h2>
            <div className="underline"></div>
          </div>
          <div className="about-content">
            <div className="about-story">
              <h3>{t("about.aboutUs")}</h3>
              <p className="lead">{t("about.lead")}</p>
              <p>{t("about.story")}</p>
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
                <h3>{t("about.missionTitle")}</h3>
                <p>{t("about.missionText")}</p>
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
                <h3>{t("about.valuesTitle")}</h3>
                <ul className="values-list">
                  <li>
                    <strong>{t("about.respect")}:</strong>{" "}
                    {t("about.valueRespect")}
                  </li>
                  <li>
                    <strong>{t("about.integrity")}:</strong>{" "}
                    {t("about.valueIntegrity")}
                  </li>
                  <li>
                    <strong>{t("about.excellence")}:</strong>{" "}
                    {t("about.valueExcellence")}
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
                <h3>{t("about.innovative")}</h3>
                <p>{t("about.cuttingEdge")}</p>
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
                <h3>{t("about.global")}</h3>
                <p>{t("about.worldwide")}</p>
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
                <h3>{t("about.agile")}</h3>
                <p>{t("about.fastDev")}</p>
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
                <h3>{t("about.quality")}</h3>
                <p>{t("about.excellenceDriven")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products">
        <div className="container">
          <div className="section-header">
            <h2>{t("products.sectionTitle")}</h2>
            <div className="underline"></div>
            <p className="section-subtitle">{t("products.sectionSubtitle")}</p>
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
              <h3>CutCab</h3>
              <h4>{t("products.sharxSubtitle")}</h4>
              <p>{t("products.sharxDesc")}</p>
              <div className="product-features">
                <span className="feature-tag">
                  {t("products.smartMatching")}
                </span>
                <span className="feature-tag">
                  {t("products.realTimeTracking")}
                </span>
                <span className="feature-tag">
                  {t("products.securePayments")}
                </span>
              </div>
              <Link to="/products/cutcab" className="product-link">
                {t("products.learnMore")}
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
              <h4>{t("products.rotaiqSubtitle")}</h4>
              <p>{t("products.rotaiqDesc")}</p>
              <div className="product-features">
                <span className="feature-tag">{t("products.aiPowered")}</span>
                <span className="feature-tag">
                  {t("products.autoScheduling")}
                </span>
                <span className="feature-tag">
                  {t("products.shiftManagement")}
                </span>
              </div>
              <Link to="/products/rotaiq" className="product-link">
                {t("products.learnMore")}
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
            <h2>{t("services.sectionTitle")}</h2>
            <div className="underline"></div>
            <p className="section-subtitle">{t("services.sectionSubtitle")}</p>
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
              <h3>{t("services.mobileTitle")}</h3>
              <p>{t("services.mobileDesc")}</p>
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
              <h3>{t("services.webTitle")}</h3>
              <p>{t("services.webDesc")}</p>
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
              <h3>{t("services.cloudTitle")}</h3>
              <p>{t("services.cloudDesc")}</p>
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
              <h3>{t("services.uiuxTitle")}</h3>
              <p>{t("services.uiuxDesc")}</p>
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
              <h3>{t("services.consultingTitle")}</h3>
              <p>{t("services.consultingDesc")}</p>
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
              <h3>{t("services.productTitle")}</h3>
              <p>{t("services.productDesc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>{t("contact.sectionTitle")}</h2>
            <div className="underline"></div>
            <p className="section-subtitle">{t("contact.sectionSubtitle")}</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              {/* <div className="info-card">
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
                <h3>{t('contact.address')}</h3>
                <p>London Office 167-169,</p>
                <p>Great Portland Street,</p>
                <p>5th Floor, W1W 5PF, UK</p>
              </div> */}
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
                <h3>{t("contact.email")}</h3>
                <p>support@officialsharx.com</p>
                <p className="small">{t("contact.responseNote")}</p>
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
                <h3>{t("contact.workingHours")}</h3>
                <p>{t("contact.monFri")}</p>
                <p>{t("contact.saturday")}</p>
                <p>{t("contact.sunday")}</p>
              </div>
            </div>
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                {submitStatus.type && (
                  <div
                    className={`alert alert-${submitStatus.type}`}
                    style={{
                      padding: "15px",
                      marginBottom: "20px",
                      borderRadius: "8px",
                      backgroundColor:
                        submitStatus.type === "success" ? "#d4edda" : "#f8d7da",
                      color:
                        submitStatus.type === "success" ? "#155724" : "#721c24",
                      border: `1px solid ${
                        submitStatus.type === "success" ? "#c3e6cb" : "#f5c6cb"
                      }`,
                    }}
                  >
                    {submitStatus.message}
                  </div>
                )}
                {/* Honeypot field - hidden from users, catches bots */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleInputChange}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder={t("contact.namePlaceholder")}
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder={t("contact.emailPlaceholder")}
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder={t("contact.subjectPlaceholder")}
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder={t("contact.messagePlaceholder")}
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? t("contact.sending")
                    : t("contact.sendMessage")}
                </button>
                <p className="recaptcha-notice">
                  {t("contact.recaptchaNotice")}{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("contact.privacyPolicy")}
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://policies.google.com/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("contact.termsOfService")}
                  </a>{" "}
                  {t("contact.recaptchaApply")}
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
