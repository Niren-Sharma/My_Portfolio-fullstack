import React, { useState } from 'react';

// Dynamic API URL setup based on environment
const API_BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? 'http://localhost:5000'
  : 'https://my-portfolio-backend-service.onrender.com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ loading: false, msg: '', error: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, msg: '', error: false });

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({ loading: false, msg: 'Thank you! Your message has been sent successfully.', error: false });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.error || 'Something went wrong!');
      }
    } catch (err) {
      setStatus({ loading: false, msg: err.message || 'Server Error. Please try again later.', error: true });
    }
  };

  return (
    <section className="contact" id="contact" style={{ padding: '80px 0' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="bordered-title">CONTACT</h2>
        </div>

        <div className="contact-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="ENTER YOUR NAME*"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="ENTER YOUR EMAIL*"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                rows="5"
                placeholder="YOUR MESSAGE*"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-submit" disabled={status.loading}>
              {status.loading ? 'SENDING...' : '| SUBMIT |'}
            </button>

            {status.msg && (
              <p className={`form-status ${status.error ? 'error' : 'success'}`}>
                {status.msg}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;