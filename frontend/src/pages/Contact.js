import React from "react";

const Contact = () => {
  return (
    <div className="container d-flex my-5">
      <div>
        <h1>Contact Us</h1>
        <p>Thank you so much for reaching out to us - we are excited to connect with you! Tell us about you. If you do not receive response within 24 hours, please contact us directly email or phone.</p>
        <p>Phone: </p>
        <p>eMail: </p>
        <p>Address: </p>
      </div>
      <div>
        <form>
          <h3>We look forward to being in touch!</h3>
          <label>First Name:</label>
          <input type="text" />
          <label>Email:</label>
          <input type="text" />
          <label>First Name</label>
          <input type="text" />
          <button type="submite">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;