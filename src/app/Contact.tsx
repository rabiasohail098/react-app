"use client"
import React, { useState } from 'react';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function handleSubmit(e:any) {
        e.preventDefault();
        // Here you can add form submission logic, like sending data to an API
        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', message: '' });
    }

  return (
    <>
    <div className='contact' id="contact">
    <h1 >Contact Me</h1>

    </div>
    <div className="contact-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message"
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>

    </div>
    </>
  );
};

export default ContactForm;
