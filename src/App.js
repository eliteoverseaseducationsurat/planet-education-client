// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

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
    axios.get('https://planet-education-server.onrender.com/api/destinations')
      .then(res => setDestinations(res.data))
      .catch(err => console.error('Error fetching destinations:', err));

    axios.get('https://planet-education-server.onrender.com/api/services')
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
      const response = await fetch('https://planet-education-server.onrender.com/api/counseling', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatusMsg('Free counseling request submitted successfully!');
        setFormData({ name: '', email: '', phone: '', preferredCountry: 'Australia' });
      } else {
        setStatusMsg('Error: ' + (data.error || 'Submission failed'));
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatusMsg('Failed to connect to the server.');
    }
  };

  // Fallback data if API returns empty
  const defaultDestinations = [
    { country: 'Australia', description: 'World-class education, post-study work opportunities, and vibrant lifestyle.' },
    { country: 'Canada', description: 'Top universities, flexible post-graduation work permits, and high quality of life.' },
    { country: 'United Kingdom', description: 'Globally recognized degrees, 1-year Master programs, and rich heritage.' },
    { country: 'United States', description: 'Unmatched research facilities, flexible course choices, and global exposure.' },
    { country: 'New Zealand', description: 'Excellent academic standards, scenic environment, and practical learning.' }
  ];

  const defaultServices = [
    { title: 'One-on-One Counseling', desc: 'Expert career mapping and profile assessment aligned with your aspirations.' },
    { title: 'University Shortlisting', desc: 'Direct selection from over 350+ partner universities across 40+ countries.' },
    { title: 'Test Preparation', desc: 'Personalized coaching and mock tests for IELTS, PTE, TOEFL, GRE, GMAT, and SAT.' },
    { title: 'Visa Application Support', desc: 'Thorough document verification resulting in a 97%+ visa success rate.' },
    { title: 'Financial Guidance', desc: 'Assistance with education loans, bank requirements, and scholarship queries.' },
    { title: 'Pre-Departure Orientation', desc: 'Briefings on travel, culture, accommodation, and part-time work rules.' }
  ];

  const displayDestinations = destinations.length > 0 ? destinations : defaultDestinations;
  const displayServices = services.length > 0 ? services : defaultServices;

  return (
    <div className="App" style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: '#1e293b' }}>
      
     {/* 1. TOP TICKER BANNER */}
     {/* <div style={{ backgroundColor: '#0d3b66', color: '#ffffff', padding: '8px 15px', fontSize: '0.9rem', textAlign: 'center', fontWeight: '500' }}>
        <span>🌏 Planet Education Surat — Official Partner for 350+ Global Universities | Accredited Member of AAERI & ICEF | 100% Free Counseling</span>
      </div>*/}

      {/* 2. NAVIGATION HEADER */}
           {/* 2. NAVIGATION HEADER WITH LOCAL LOGO */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 5%', alignItems: 'center', backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.08)', position: 'sticky', top: 0, zIndex: 1000 }}>
        
        {/* Logo and Brand Name */}
        <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
        style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', cursor: 'pointer' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img 
            src="/planet_education_india__logo.jpg" 
            alt="Planet Education Logo" 
            style={{ height: '45px', width: 'auto', objectFit: 'contain' }} 
          />
          <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#0d3b66', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ color: '#d97706', fontSize: '1rem', fontWeight: '600' }}>Surat</span>
          </div>
        </div>
        </a>

        {/* Navigation Links */}
        <ul style={{ display: 'flex', listStyle: 'none', gap: '25px', margin: 0, padding: 0, fontWeight: '600', fontSize: '0.95rem' }}>
          <li><a href="#about" style={{ textDecoration: 'none', color: '#334155' }}>Who We Are</a></li>
          <li><a href="#destinations" style={{ textDecoration: 'none', color: '#334155' }}>Destinations</a></li>
          <li><a href="#services" style={{ textDecoration: 'none', color: '#334155' }}>Services</a></li>
          <li><a href="#why-us" style={{ textDecoration: 'none', color: '#334155' }}>Why Choose Us</a></li>
          <li><a href="#contact" style={{ textDecoration: 'none', color: '#334155' }}>Contact</a></li>
          <li><a href="#counseling" style={{ textDecoration: 'none', color: '#0d3b66', border: '1.5px solid #0d3b66', padding: '6px 14px', borderRadius: '4px' }}>Free Counseling</a></li>
        </ul>
      </nav>







      {/* 3. HERO BANNER */}
      <section style={{ background: 'linear-gradient(135deg, #0d3b66 0%, #1e40af 100%)', color: '#ffffff', padding: '70px 5%', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>


 

          <h1 style={{  fontSize: '2.5rem', marginBottom: '15px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            Planet Education <span style={{ color: '#d97706', fontSize: '2.5rem', fontWeight: '700' }}>Surat</span>
          </h1>
          


       

          <h1 style={{ fontSize: '1.4rem', marginBottom: '15px', fontWeight: '630' }}>Your Gateway to Global Learning</h1>
          <p style={{ fontSize: '1.15rem', opacity: 0.9, marginBottom: '30px', lineHeight: '1.6' }}>
            Empowering students in Surat to achieve their dreams of studying in top international universities in Australia, Canada, UK, USA & New Zealand.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(255,255,255,0.15)', padding: '8px 16px', borderRadius: '20px', fontSize: '0.9rem' }}>✓ Years of Experience</span>
            <span style={{ background: 'rgba(255,255,255,0.15)', padding: '8px 16px', borderRadius: '20px', fontSize: '0.9rem' }}>✓ Thousands+ Students Guided</span>
            <span style={{ background: 'rgba(255,255,255,0.15)', padding: '8px 16px', borderRadius: '20px', fontSize: '0.9rem' }}>✓ 97% Visa Success Rate</span>
          </div>
        </div>
      </section>


            {/* OUR PARTNER INSTITUTES BANNER */}
      <div style={{ backgroundColor: '#f8fafc', padding: '35px 0', borderBottom: '1px solid #e2e8f0', overflow: 'hidden' }}>
        <h3 style={{ textAlign: 'center', color: '#0d3b66', fontSize: '2rem', fontWeight: '700', marginBottom: '20px', letterSpacing: '0.5px',  }}>
          Direct Institute for Australia
        </h3>

        <div style={{ display: 'flex', overflow: 'hidden', width: '100%', position: 'relative' }}>
          <div className="partner-marquee-track">
            {[
              { name: "Australian National University", domain: "anu.edu.au", url: "https://www.anu.edu.au" },
              { name: "Monash University", domain: "monash.edu", url: "https://www.monash.edu" },
              { name: "University of Adelaide", domain: "adelaide.edu.au", url: "https://www.adelaide.edu.au" },
              { name: "University of Western Australia", domain: "uwa.edu.au", url: "https://www.uwa.edu.au" },
              { name: "Western Sydney University", domain: "westernsydney.edu.au", url: "https://www.westernsydney.edu.au" },
              { name: "Southern Cross University", domain: "scu.edu.au", url: "https://www.scu.edu.au" },
              { name: "Charles Darwin University", domain: "cdu.edu.au", url: "https://www.cdu.edu.au" },
              { name: "Deakin University", domain: "deakin.edu.au", url: "https://www.deakin.edu.au" },
              { name: "Griffith University", domain: "griffith.edu.au", url: "https://www.griffith.edu.au" },
              { name: "La Trobe University", domain: "latrobe.edu.au", url: "https://www.latrobe.edu.au" },
              { name: "University of Canberra", domain: "canberra.edu.au", url: "https://www.canberra.edu.au" },
              { name: "University of Tasmania", domain: "utas.edu.au", url: "https://www.utas.edu.au" },
              { name: "University of Wollongong", domain: "uow.edu.au", url: "https://www.uow.edu.au" },
              { name: "CQUniversity Australia", domain: "cqu.edu.au", url: "https://www.cqu.edu.au" },
              { name: "Federation University", domain: "federation.edu.au", url: "https://www.federation.edu.au" },
              { name: "Murdoch University", domain: "murdoch.edu.au", url: "https://www.murdoch.edu.au" },
              { name: "Edith Cowan University", domain: "ecu.edu.au", url: "https://www.ecu.edu.au" },
              { name: "Victoria University", domain: "vu.edu.au", url: "https://www.vu.edu.au" },
              { name: "La Trobe College Australia", domain: "latrobecollegeaustralia.edu.au", url: "https://www.latrobecollegeaustralia.edu.au" },
              { name: "Griffith College", domain: "griffith.edu.au", url: "https://www.griffith.edu.au/college" },
              { name: "Navitas", domain: "navitas.com", url: "https://www.navitas.com" },
              { name: "SAIBT", domain: "saibt.edu.au", url: "https://www.saibt.edu.au" }
            ].concat([
              // Duplicate list to make infinite looping smooth
              { name: "Australian National University", domain: "anu.edu.au", url: "https://www.anu.edu.au" },
              { name: "Monash University", domain: "monash.edu", url: "https://www.monash.edu" },
              { name: "University of Adelaide", domain: "adelaide.edu.au", url: "https://www.adelaide.edu.au" },
              { name: "University of Western Australia", domain: "uwa.edu.au", url: "https://www.uwa.edu.au" },
              { name: "Western Sydney University", domain: "westernsydney.edu.au", url: "https://www.westernsydney.edu.au" },
              { name: "Southern Cross University", domain: "scu.edu.au", url: "https://www.scu.edu.au" },
              { name: "Charles Darwin University", domain: "cdu.edu.au", url: "https://www.cdu.edu.au" },
              { name: "Deakin University", domain: "deakin.edu.au", url: "https://www.deakin.edu.au" },
              { name: "Griffith University", domain: "griffith.edu.au", url: "https://www.griffith.edu.au" },
              { name: "La Trobe University", domain: "latrobe.edu.au", url: "https://www.latrobe.edu.au" },
              { name: "University of Canberra", domain: "canberra.edu.au", url: "https://www.canberra.edu.au" },
              { name: "University of Tasmania", domain: "utas.edu.au", url: "https://www.utas.edu.au" },
              { name: "University of Wollongong", domain: "uow.edu.au", url: "https://www.uow.edu.au" },
              { name: "CQUniversity Australia", domain: "cqu.edu.au", url: "https://www.cqu.edu.au" },
              { name: "Federation University", domain: "federation.edu.au", url: "https://www.federation.edu.au" },
              { name: "Murdoch University", domain: "murdoch.edu.au", url: "https://www.murdoch.edu.au" },
              { name: "Edith Cowan University", domain: "ecu.edu.au", url: "https://www.ecu.edu.au" },
              { name: "Victoria University", domain: "vu.edu.au", url: "https://www.vu.edu.au" },
              { name: "La Trobe College Australia", domain: "latrobecollegeaustralia.edu.au", url: "https://www.latrobecollegeaustralia.edu.au" },
              { name: "Griffith College", domain: "griffith.edu.au", url: "https://www.griffith.edu.au/college" },
              { name: "Navitas", domain: "navitas.com", url: "https://www.navitas.com" },
              { name: "SAIBT", domain: "saibt.edu.au", url: "https://www.saibt.edu.au" }
            ]).map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  backgroundColor: '#ffffff',
                  padding: '10px 20px',
                  margin: '0 12px',
                  borderRadius: '30px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                  border: '1px solid #e2e8f0',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease, boxShadow 0.2s ease'
                }}
              >
                <img
                  src={`https://www.google.com/s2/favicons?domain=${partner.domain}&sz=64`}
                  alt={partner.name}
                  style={{ width: '24px', height: '24px', borderRadius: '50%' }}
                />
                <span style={{ color: '#1e293b', fontWeight: '600', fontSize: '0.95rem' }}>
                  {partner.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>






      {/* 4. WHO WE ARE / ABOUT */}
      <section id="about" style={{ padding: '60px 5%', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: '#0d3b66', fontSize: '2rem', marginBottom: '15px' }}>About Planet Education</h2>
          <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '25px' }}>
            With years of experience in the international education sector, Planet Education is a one-stop destination for all overseas study requirements. We represent over 350+ prestigious universities across Australia, USA, UK, Canada, Ireland, and New Zealand. Our team of expert counselors is dedicated to providing honest, transparent, and comprehensive guidance through every step of your admission journey.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '30px' }}>
            <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #0d3b66' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#0d3b66', margin: '0 0 5px 0' }}>350+</h3>
              <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem' }}>Partner Universities</p>
            </div>
            <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #0d3b66' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#0d3b66', margin: '0 0 5px 0' }}>25+</h3>
              <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem' }}>Global Offices</p>
            </div>
            <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #0d3b66' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#0d3b66', margin: '0 0 5px 0' }}>45,000+</h3>
              <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem' }}>Successful Students</p>
            </div>
            <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #0d3b66' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#0d3b66', margin: '0 0 5px 0' }}>97%</h3>
              <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem' }}>Visa Approval Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TOP DESTINATIONS */}
      <section id="destinations" style={{ padding: '60px 5%', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', color: '#0d3b66', fontSize: '2rem', marginBottom: '10px' }}>Featured Destinations</h2>
          <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '40px' }}>Explore top study locations with high academic standards and post-study opportunities.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          {displayDestinations.map((item, idx) => (
            <div key={item.id || item._id || idx} className="destination-card">
              <h3 style={{ color: '#0d3b66', marginTop: 0, marginBottom: '10px', fontSize: '1.25rem' }}>
                {item.country}
              </h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.5', margin: 0 }}>
                {item.description || item.desc}
              </p>
            </div>
          ))}

          </div>
        </div>
      </section>

      {/* 6. OUR SERVICES */}
      <section id="services" style={{ padding: '60px 5%', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', color: '#0d3b66', fontSize: '2rem', marginBottom: '10px' }}>Our Comprehensive Services</h2>
          <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '40px' }}>End-to-end guidance as your reliable friend throughout the admission process.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
            {displayServices.map((item, idx) => (
              <div key={item.id || item._id || idx} style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '8px', borderLeft: '4px solid #d97706', boxShadow: '0 2px 4px rgba(0,0,0,0.03)' }}>
                <h3 style={{ color: '#0d3b66', marginTop: 0, marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>{item.desc || item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US */}
      <section id="why-us" style={{ padding: '60px 5%', backgroundColor: '#0d3b66', color: '#ffffff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>Why Choose Planet Education?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '25px' }}>
            <div style={{ background: 'rgba(255,255,255,0.08)', padding: '20px', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>Dedicated Mentors</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.85, margin: 0 }}>Experienced counselors providing one-on-one personalized attention.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.08)', padding: '20px', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>100% Free Counseling</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.85, margin: 0 }}>Transparent profile evaluation without hidden application fees.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.08)', padding: '20px', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>High Visa Success Rate</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.85, margin: 0 }}>Strict pre-checks to ensure seamless documentation and approval.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.08)', padding: '20px', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>Post-Landing Support</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.85, margin: 0 }}>Assistance with accommodation, airport pickups, and local orientation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section style={{ padding: '60px 5%', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: '#0d3b66', fontSize: '2rem', marginBottom: '30px' }}>Student Testimonials</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <div style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '8px', border: '1px solid #e2e8f0', textAlign: 'left' }}>
              <p style={{ fontStyle: 'italic', color: '#475569', fontSize: '0.95rem' }}>"The education here is very good. The teaching staff and support staff are also very helpful. English is taught through different and interesting activities!"</p>
              <p style={{ fontWeight: 'bold', color: '#0d3b66', marginTop: '15px', marginBottom: 0 }}>— Dixit Patel</p>
            </div>
            <div style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '8px', border: '1px solid #e2e8f0', textAlign: 'left' }}>
              <p style={{ fontStyle: 'italic', color: '#475569', fontSize: '0.95rem' }}>"Great expo, learned a lot about the requirements and criteria and they are very supportive in getting into my dream college!"</p>
              <p style={{ fontWeight: 'bold', color: '#0d3b66', marginTop: '15px', marginBottom: 0 }}>— Aayush Tnna</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. COUNSELING FORM SECTION */}
      <section id="counseling" className="section" style={{ padding: '60px 5%', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', color: '#0d3b66', fontSize: '2rem' }}>Book a Free Counseling Session</h2>
          <p style={{ textAlign: 'center', marginBottom: '25px', color: '#64748b' }}>
            Speak directly with our expert education advisors in Surat.
          </p>

          <div className="form-container" style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
            {statusMsg && (
              <p style={{ color: statusMsg.includes('Error') || statusMsg.includes('Failed') ? 'red' : 'green', marginBottom: '15px', fontWeight: 'bold', textAlign: 'center' }}>
                {statusMsg}
              </p>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>Full Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }} />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }} />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }} />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>Preferred Country</label>
                <select name="preferredCountry" value={formData.preferredCountry} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }}>
                  <option value="Australia">Australia</option>
                  <option value="Canada">Canada</option>
                  <option value="UK">United Kingdom</option>
                  <option value="USA">USA</option>
                </select>
              </div>

              <button type="submit" style={{ padding: '12px', backgroundColor: '#0d3b66', color: '#ffffff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 10. BRANCH ADDRESS & MAP SECTION */}
      <section id="contact" className="section" style={{ padding: '60px 5%', backgroundColor: '#ffffff' }}>
        <h2 style={{ textAlign: 'center', color: '#0d3b66', fontSize: '2rem', marginBottom: '10px' }}>Visit Our Branch</h2>
        <p style={{ textAlign: 'center', marginBottom: '30px', color: '#64748b' }}>
          Get in touch or visit our office in Surat.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center', maxWidth: '1100px', margin: '0 auto' }}>
          
          {/* Branch Details */}
          <div style={{ flex: '1 1 300px', background: '#f8fafc', padding: '25px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ marginBottom: '15px', color: '#0d3b66' }}>Surat Office</h3>
            <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.5' }}>
              <strong>Address:</strong> No. A201, 2nd Floor, Atlanta Shopping Mall, Sudama Chowk, Mota Varachha, Surat, Gujarat 394101
            </p>
            <p style={{ marginBottom: '12px', color: '#475569' }}>
              <strong>Phone:</strong> +91 7984757064
            </p>
            <p style={{ color: '#475569' }}>
              <strong>Working Hours:</strong> Mon - Sat: 10:00 AM - 7:00 PM
            </p>
          </div>


          {/* Embedded Google Map */}
      <div style={{ flex: '1 1 400px', minHeight: '320px', borderRadius: '8px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                <iframe
          title="Planet Education Surat Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.8366265949826!2d72.879061!3d21.2383261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f75d2b8bef5%3A0x20db711fdc0b92f2!2sPlanet%20Education%20Surat!5e0!3m2!1sen!2sin!4v1784875161248!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: '320px', borderRadius: '8px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

      </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#0d3b66', color: '#ffffff', textAlign: 'center', padding: '20px', fontSize: '0.9rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        © {new Date().getFullYear()} Planet Education Surat. All Rights Reserved.
      </footer>

    </div>
  );
}

export default App;
