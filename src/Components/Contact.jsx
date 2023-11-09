import React, { useState } from 'react';

function Contact() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        // Email sent successfully
        console.log('Email sent successfully');
      } else {
        // Handle errors here
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="contact">
      <h3>Send Me Mail</h3>
      <form onSubmit={handleSubmit}>
        <div className="contact-input">
          <input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="contact">
            Contact Us
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
