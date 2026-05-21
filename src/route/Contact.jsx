import React, { useState } from 'react';
import emailjs from "@emailjs/browser";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const serviceID = "";
    const templateID = "";
    const publicKey = "";

emailjs
  .send(
  "",
  "",
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    reply_to: formData.email,
  },
  ""
  )
  
  .then((result) => {
    console.log("Email sent:", result.text);
    setIsSubmitted(true); // show success message
    setFormData({ name: '', email: '', message: '' }); // clear the form
  })
  .catch((error) => {
    console.error("Email send error:", error.text);

  });
};

  return (
    <div className="contact-page" style={styles.pageContainer}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} style={styles.formContainer}>
        <div style={styles.inputContainer}>
          <label htmlFor="name" style={styles.label}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        
        <div style={styles.inputContainer}>
          <label htmlFor="email" style={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        
        <div style={styles.inputContainer}>
          <label htmlFor="message" style={styles.label}>Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={styles.textarea}
          />
        </div>
        
        <button type="submit" style={styles.submitButton}>Submit</button>
        
        {isSubmitted && <p style={styles.successMessage}>Thank you for contacting us! We'll get back to you soon.</p>}
      </form>

      <div className='contact-info' style={styles.contactInfo}>
        <p ><strong>Email:</strong> Email add </p>
        <p><strong>Phone:</strong> Number</p>
        <img 
        src="./images/facebook.png" 
        alt="facebook" 
        className='facebook__image'
         onClick={() => window.location.href='https://www.facebook.com/Multiscapeltd'} />
        <img 
        src="./images/instagram.png" 
        alt="instagram" 
        className='instagram__image' 
        onClick={() => window.location.href='https://www.instagram.com/multiscapeltd/'} />
      
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    marginTop: '60px',
    padding: '30px 20px',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'rgb(255, 255, 255)',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',

  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    
  },
  inputContainer: {
    marginBottom: '15px',
  },
  label: {
    fontSize: '16px',
    marginBottom: '5px',
  },
  input: {
    padding: '10px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%',
    boxSizing: 'border-box',
  },

  textarea: {
    padding: '10px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%',
    boxSizing: 'border-box',
    minHeight: '120px',
  },

  submitButton: {
    padding: '10px 20px',
    backgroundColor: 'rgba(110, 162, 205, 0.73)',
    color: '#fff',
    fontSize: '16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  submitButtonHover: {
    backgroundColor: '#000000ff',
  },
  successMessage: {
    color: '#000000ff',
    fontSize: '16px',
    marginTop: '20px',
  },
  contactInfo: {
    marginTop: '30px',
    textAlign: 'center',

    
  },

  
};

export default Contact;
