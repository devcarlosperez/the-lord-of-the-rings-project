import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ButtonUp from "../../components/button-up/ButtonUp";
import "./TermConditions.css";

function TermConditions() {
  return (
    <>
      <Header />
      <div className="term-conditions-content">
        <h1>Terms and Conditions for Lord of The Rings</h1>
        <p>
          <strong>Last updated: March 27, 2025</strong>
        </p>

        <p>
          These Terms and Conditions ("Terms") govern Your use of the Service.
          By using the Service, You agree to comply with these Terms. If You do
          not agree with these Terms, please do not use the Service.
        </p>

        <h2>Definitions</h2>
        <h3>Interpretation</h3>
        <p>
          The following definitions shall have the same meaning regardless of
          whether they appear in singular or plural form:
        </p>
        <ul>
          <li>
            <strong>Service</strong> refers to the Website, "Lord of The Rings".
          </li>
          <li>
            <strong>Company</strong> refers to Lord of The Rings.
          </li>
          <li>
            <strong>Account</strong> refers to a unique account created for
            accessing the Service.
          </li>
          <li>
            <strong>Terms</strong> means these Terms and Conditions.
          </li>
          <li>
            <strong>You</strong> refers to the individual using the Service, or
            the company or entity on behalf of which the individual is using the
            Service.
          </li>
        </ul>

        <h2>Use of the Service</h2>
        <p>By using the Service, You agree to:</p>
        <ul>
          <li>Provide accurate, complete, and up-to-date information.</li>
          <li>
            Not to use the Service for any unlawful purpose or in any way that
            could harm the Service or others.
          </li>
          <li>
            Respect the intellectual property rights of the Company and other
            users.
          </li>
        </ul>

        <h2>Account Registration</h2>
        <p>
          In order to use certain features of the Service, You may be required
          to create an account. You are responsible for maintaining the
          confidentiality of your account credentials and for all activities
          that occur under your account.
        </p>

        <h2>Payment</h2>
        <p>
          If applicable, You agree to pay all fees associated with using the
          Service.
        </p>

        <h2>Prohibited Uses</h2>
        <p>
          You may not use the Service for any illegal or prohibited activities,
          including:
        </p>
        <ul>
          <li>Sending spam or unsolicited communications.</li>
          <li>Engaging in fraud or other harmful activities.</li>
          <li>Infringing on the intellectual property rights of others.</li>
        </ul>

        <h2>Limitation of Liability</h2>
        <p>
          The Company is not liable for any direct, indirect, incidental,
          special, or consequential damages arising from the use or inability to
          use the Service.
        </p>

        <h2>Termination</h2>
        <p>
          The Company may suspend or terminate Your access to the Service at any
          time if You violate these Terms.
        </p>

        <h2>Governing Law</h2>
        <p>
          These Terms are governed by and construed in accordance with the laws
          of Spain.
        </p>

        <h2>Changes to the Terms</h2>
        <p>
          The Company reserves the right to update or modify these Terms at any
          time. We will notify You of any changes by posting the new Terms on
          this page.
        </p>

        <h2>Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us:</p>
        <ul>
          <li>By email: carlosperezsantana04@gmail.com</li>
        </ul>
      </div>
      <Footer />
      <ButtonUp />
    </>
  );
}

export default TermConditions;