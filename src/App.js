import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SEO from './SEO';

function App() {
  // 1. Component State
  const [destinations, setDestinations] = useState([]);
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredCountry: 'Australia'
  });
  const [statusMsg, setStatusMsg] = useState('');

  // 2. Fetch Initial Data
  useEffect(() => {
    axios.get('http://localhost:5000/api/destinations')
      .then(res => setDestinations(res.data))
      .catch(err => console.error('Error fetching destinations:', err));

    axios.get('http://localhost:5000/api/services')
      .then(res => setServices(res.data))
      .catch(err => console.error('Error fetching services:', err));
  }, []);

  // 3. Form Handlers
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMsg('Submitting...');

    try {
      console.log('Sending formData:', formData);
      const response = await fetch('http://localhost:5000/api/counseling', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatusMsg('Free counseling request submitted successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          preferredCountry: 'Australia'
        });
      } else {
        setStatusMsg('Error: ' + (data.error || 'Submission failed'));
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatusMsg('Failed to connect to the server. Please check backend.');
    }
  };

  return (
    <div className="App">
      <SEO
        title="Planet Education Surat"
        description="Overseas education consultancy in Surat helping students study abroad."
        keywords="study abroad, overseas education, Surat, student visa, IELTS, counseling, visa assistance, career guidance, international universities, planet education, study in Australia, study in Canada, study in UK, study in USA, overseas education consultancy, student support, global education, study abroad programs, international student services, planet education, planet education surat, study abroad consultancy, overseas education services, student visa assistance, career counseling, university admissions, IELTS preparation, study abroad guidance, international education consultancy"
        url="planeteducationsurat.in/"
      />
   
      {/* Navigation Header */}
      <nav className="navbar">
        <div className="logo">Planet Education Surat</div>
        <ul className="nav-links">
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#counseling">Free Counseling</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>

      {/* Hero Banner Section */}
      <section className="hero">
        <h1>Your Gateway to Global Education</h1>
        <p>Empowering students to achieve their dreams of studying in top international universities.</p>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="section">
        <h2>Top Destinations</h2>
        <div className="grid-4">
          {destinations.map((item) => (
            <div key={item.id || item._id} className="card">
              <h3>{item.country}</h3>
              <p style={{ marginTop: '10px', color: '#64748b' }}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section" style={{ background: '#f1f5f9' }}>
        <h2>Our Core Services</h2>
        <div className="grid-4">
          {services.map((item) => (
            <div key={item.id || item._id} className="card">
              <h3>{item.title}</h3>
              <p style={{ marginTop: '10px', color: '#64748b' }}>{item.desc || item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Counseling Form Section */}
      <section id="counseling" className="section">
        <h2>Book a Free Counseling Session</h2>
        <p style={{ marginBottom: '20px', color: '#64748b' }}>
          Speak directly with our expert education advisors.
        </p>

        <div className="form-container">
          {statusMsg && (
            <p style={{ color: statusMsg.includes('Error') || statusMsg.includes('Failed') ? 'red' : 'green', marginBottom: '15px' }}>
              {statusMsg}
            </p>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Preferred Country</label>
              <select
                name="preferredCountry"
                value={formData.preferredCountry}
                onChange={handleChange}
              >
                <option value="Australia">Australia</option>
                <option value="Canada">Canada</option>
                <option value="UK">United Kingdom</option>
                <option value="USA">USA</option>
              </select>
            </div>

            <button type="submit" className="btn-submit">
              Submit Request
            </button>
          </form>
        </div>
      </section>

      {/* NEW: Branch Contact & Map Section */}
      <section id="contact" className="section" style={{ background: '#f8fafc' }}>
        <h2>Visit Our Branch</h2>
        <p style={{ marginBottom: '30px', color: '#64748b' }}>
          Get in touch or visit our office in Surat.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center', alignItems: 'stretch' }}>
          {/* Branch Details */}
          <div className="card" style={{ flex: '1 1 300px', textAlign: 'left', padding: '25px' }}>
            <h3 style={{ marginBottom: '15px', color: '#1e293b' }}>Surat Office</h3>
            <p style={{ marginBottom: '10px', color: '#475569' }}>
              <strong>Address:</strong> No. A201, 2nd Floor, Atlanta shopping Mall, Sudama Chowk,<br></br> Varachha Main Road, Khodiyar Nagar, Mota Varachha, Surat 394101
            </p>
            <p style={{ marginBottom: '10px', color: '#475569' }}>
              <strong>Phone:</strong> +91 7984757064
            </p>
            <p style={{ marginBottom: '10px', color: '#475569' }}>
              <strong>Email:</strong> planet.surat@gmail.com
            </p>
            <p style={{ color: '#475569' }}>
              <strong>Working Hours:</strong> Mon - Sat: 10:00 AM - 7:00 PM
            </p>
          </div>

          {/* Embedded Google Map */}
          <div style={{ flex: '1 1 400px', minHeight: '300px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
            <iframe
              title="Planet Education Surat Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59522.10877660127!2d72.7851861886528!3d21.18692263457162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f75d2b8bef5%3A0x20db711fdc0b92f2!2sPlanet%20Education%20Surat!5e0!3m2!1sen!2sin!4v1784538330599!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '300px' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
