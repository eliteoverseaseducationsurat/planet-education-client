// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import confetti from 'canvas-confetti';

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
  // Mobile Screen Detection
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const [isAlternateText, setIsAlternateText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAlternateText(prev => !prev);
    }, 3500); // Text animates every 3.5 seconds
    return () => clearInterval(interval);
  }, []);





// Google Maps Style Roadmap Component
function RoadmapContentCard() {
  const [activeStep, setActiveStep] = React.useState(1);
  window.setRoadmapStepState = setActiveStep;
  window.activeRoadmapStep = activeStep;

  const stepsData = [
    { id: 1, title: "1. University & Course Selection", phase: "Phase 1: Application", desc: "Our experts assess your profile, budget, and career ambitions to shortlist ideal CRICOS-certified Australian universities." },
    { id: 2, title: "2. Document Preparation & SOP", phase: "Phase 1: Application", desc: "Get professional assistance drafting a compelling Statement of Purpose (SOP) and organizing financial & academic records." },
    { id: 3, title: "3. Direct Application Submission", phase: "Phase 1: Application", desc: "Filing application forms directly with partner Australian institutions to secure offer letters fast." },
    { id: 4, title: "4. Offer Acceptance & CoE", phase: "Phase 2: Visa Process", desc: "Guidance on paying tuition deposit, OSHC health cover, and securing your official Confirmation of Enrolment (CoE)." },
    { id: 5, title: "5. Subclass 500 Visa Lodgement", phase: "Phase 2: Visa Process", desc: "Precise visa document verification, biometrics scheduling, and mock interview prep with experienced counselors." },
    { id: 6, title: "6. Visa Approved & Departure!", phase: "Phase 3: Arrival", desc: "Congratulations! We assist with flight booking, forex cards, accommodation setup, and pre-departure briefings." }
  ];

  const current = stepsData.find(s => s.id === activeStep) || stepsData[0];

  return (
    <div style={{
      marginTop: '25px',
      backgroundColor: '#ffffff',
      color: '#0d3b66',
      borderRadius: '16px',
      padding: '24px 30px',
      textAlign: 'left',
      boxShadow: '0 12px 32px rgba(13, 59, 102, 0.1)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '20px',
      border: '1px solid #e2e8f0',
      borderLeft: '6px solid #d97706'
    }}>
      <div style={{ flex: '1 1 500px' }}>
        <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '1px', backgroundColor: '#fef3c7', color: '#b45309', padding: '4px 10px', borderRadius: '6px', fontWeight: 'bold' }}>
          {current.phase}
        </span>
        <h3 style={{ margin: '8px 0 6px 0', fontSize: '1.3rem', color: '#0d3b66' }}>{current.title}</h3>
        <p style={{ margin: 0, fontSize: '0.94rem', color: '#475569', lineHeight: '1.5' }}>
          {current.desc}
        </p>
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          disabled={activeStep === 1}
          onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
          style={{ padding: '10px 18px', borderRadius: '8px', border: '1px solid #cbd5e1', backgroundColor: activeStep === 1 ? '#f1f5f9' : '#ffffff', color: activeStep === 1 ? '#94a3b8' : '#0d3b66', cursor: activeStep === 1 ? 'not-allowed' : 'pointer', fontWeight: '600', transition: 'all 0.2s' }}
        >
          ← Prev
        </button>
        <button
          disabled={activeStep === 6}
          onClick={() => setActiveStep(prev => Math.min(6, prev + 1))}
          style={{ padding: '10px 18px', borderRadius: '8px', border: 'none', backgroundColor: activeStep === 6 ? '#cbd5e1' : '#0d3b66', color: '#ffffff', cursor: activeStep === 6 ? 'not-allowed' : 'pointer', fontWeight: '600', boxShadow: '0 4px 12px rgba(13, 59, 102, 0.2)', transition: 'all 0.2s' }}
        >
          Next Step →
        </button>
      </div>
    </div>
  );
}


  const triggerCelebration = () => {
    const duration = 2000; // Runs for 2 seconds
    const end = Date.now() + duration;

    const frame = () => {
      confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#22c55e', '#d97706', '#0d3b66'] });
      confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#22c55e', '#d97706', '#0d3b66'] });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  };







    // Testimonials Slider State
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonialsData = [
    {
      name: "Dixit Patel",
      
      initials: "DP",
      bgColor: "#0d3b66", // Navy Theme
      text: "The education here is very good. The teaching staff and support staff are also very helpful. English is taught through different and interesting activities!"
    },
    {
      name: "Aayush Tnna",
     
      initials: "AT",
      bgColor: "#1e3a8a", // Deep Blue
      text: "Great expo, learned a lot about the requirements and criteria, and they were very supportive in getting into my dream college!"
    },
    {
      name: "Divya Chaudhary",
      
      initials: "DC",
      bgColor: "#047857", // Emerald Accent
      text: "It was a good experience, and they explained everything really well. It was a overall nice experience."
    },
    {
      name: "Yash Makwana",
      
      initials: "YM",
      bgColor: "#b45309", // Warm Amber Accent
      text: "Really had a great experience.What stands out is their professionalism and timely communication throughout the process."
    },
    {
      name: "Ishika Bhatt",
     
      initials: "IB",
      bgColor: "#4338ca", // Indigo Theme
      text: "I had a really good experience with this consultancy. The staff is very friendly and explained everything clearly. Highly recommended✨️"
    }
  ];

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };





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
      

  {/* 2. NAVIGATION HEADER */}
      <nav style={{ 
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        display: 'flex', 
        justifyContent: 'space-between', 
        padding: isMobile ? '10px 4%' : '12px 5%', 
        alignItems: 'center', 
        backgroundColor: '#ffffff', 
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        width: '100%',
        boxSizing: 'border-box'
      }}>


        {/* Logo and Brand Name (LEFT SIDE) */}
        <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '6px' : '12px', cursor: 'pointer' }}>
            <img 
              src="/planet_education_india__logo.jpg" 
              alt="Planet Education Logo" 
              style={{ height: isMobile ? '35px' : '45px', width: 'auto', objectFit: 'contain' }} 
            />
            <div style={{ fontSize: isMobile ? '1.1rem' : '1.4rem', fontWeight: 'bold', color: '#0d3b66', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ color: '#d97706', fontSize: isMobile ? '0.85rem' : '1rem', fontWeight: '600' }}>Surat</span>
            </div>
          </div>
        </a>

        {/* Navigation Links (HIDDEN ON MOBILE, DISPLAYED ON DESKTOP) */}
        {!isMobile && (
          <ul style={{ display: 'flex', listStyle: 'none', gap: '25px', margin: 0, padding: 0, fontWeight: '600', fontSize: '0.95rem' }}>
            <li><a href="#about" style={{ textDecoration: 'none', color: '#334155' }}>Who We Are</a></li>
            <li><a href="#destinations" style={{ textDecoration: 'none', color: '#334155' }}>Destinations</a></li>
            <li><a href="#services" style={{ textDecoration: 'none', color: '#334155' }}>Services</a></li>
            <li><a href="#why-us" style={{ textDecoration: 'none', color: '#334155' }}>Why Choose Us</a></li>
            <li><a href="#contact" style={{ textDecoration: 'none', color: '#334155' }}>Contact</a></li>
          </ul>
        )}

        {/* Free Counseling Button (RIGHT SIDE ON BOTH MOBILE & DESKTOP) */}
        <div>
          <a href="#counseling" style={{ 
            textDecoration: 'none', 
            color: '#0d3b66', 
            border: '1.5px solid #0d3b66', 
            padding: isMobile ? '6px 10px' : '6px 14px', 
            borderRadius: '4px', 
            fontSize: isMobile ? '0.8rem' : '0.95rem',
            fontWeight: '600',
            whiteSpace: 'nowrap'
          }}>
            Free Counseling
          </a>
        </div>

      </nav>





{/* 3. HERO BANNER */}
<section style={{ background: 'linear-gradient(135deg, #0d3b66 0%, #1e40af 100%)', color: '#ffffff', padding: '70px 5%', textAlign: 'center' }}>
  <div style={{ maxWidth: '900px', margin: '0 auto' }}>
    
    <h1 style={{ fontSize: '2.5rem', marginBottom: '15px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
      
      {/* Left Word Wiping Container */}
      <span className="wipe-wrapper" style={{ justifyItems: 'end' }}>
        <span className={`wipe-text original ${isAlternateText ? 'hide' : 'show'}`}>Planet</span>
        <span className={`wipe-text new font-handwritten ${isAlternateText ? 'show' : 'hide'}`}>Plan</span>
      </span>

      {/* Center Static Word */}
      <span>Education</span>

      {/* Right Word Wiping Container (Orange) */}
      <span className="wipe-wrapper" style={{ color: '#d97706', justifyItems: 'start' }}>
        <span className={`wipe-text original ${isAlternateText ? 'hide' : 'show'}`}>Surat</span>
        <span className={`wipe-text new font-handwritten ${isAlternateText ? 'show' : 'hide'}`}>in Australia</span>
      </span>

    </h1>
    {/* 👉 END OF NEW CODE */}

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
    
    {/* ... rest of your code ... */}

      {/* 3. HERO BANNER 
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
      */}


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


      {/* 4.5 AUSTRALIA GUIDE SPOTLIGHT */}
      <section style={{ padding: '70px 5%', backgroundColor: '#f8fafc' }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1.2fr 0.8fr',
          gap: '40px',
          alignItems: 'center'
        }}>

          {/* LEFT CONTENT COLUMN */}
          <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
            <span className="guide-badge">Your Australian Dream</span>
            
            <h2 style={{ fontSize: isMobile ? '1.8rem' : '2.6rem', color: '#0d3b66', lineHeight: '1.2', marginBottom: '15px' }}>
              <span style={{ color: '#2563eb' }}>Study, </span>
              <span style={{ color: '#059669' }}>Succeed, </span>
              <span style={{ color: '#d97706' }}>Settle.</span>
              <br />
              Your Complete Guide to Australia.
            </h2>

            <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.6', marginBottom: '35px', maxWidth: '540px' }}>
              Planet Education provides free, end-to-end study abroad guidance for Indian students, helping them choose the right course and university, secure student visas, and explore post-study work opportunities in leading international destinations.
            </p>

            {/* STATS ROW */}
            <div style={{
              display: 'flex',
              justifyContent: isMobile ? 'space-around' : 'flex-start',
              gap: isMobile ? '15px' : '45px'
            }}>
              {/*<div className="stat-item">
                <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#0d3b66' }}>12,000+</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Students Counseled</div>
              </div>*/}
              <div className="stat-item">
                <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#d97706' }}>97%</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Visa Success Rate</div>
              </div>
              {/*<div className="stat-item">
                <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#0d3b66' }}>28+</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Years of Experience</div>
              </div>*/}
            </div>
          </div>

          {/* RIGHT SNAPSHOT CARD */}
          <div className="visa-snapshot-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', paddingBottom: '10px', borderBottom: '1px solid #f1f5f9' }}>
              <h3 style={{ fontSize: '1.2rem', color: '#0d3b66', margin: 0, fontWeight: '700' }}>Visa Snapshot 2026</h3>
              <span style={{ fontSize: '0.75rem', backgroundColor: '#e0e7ff', color: '#3730a3', padding: '4px 10px', borderRadius: '6px', fontWeight: '600' }}>
                Subclass 500
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div className="snapshot-row">
                <span style={{ color: '#475569', fontSize: '0.9rem' }}>Living Cost (Annual)</span>
                <span style={{ fontWeight: '600', color: '#0d3b66', fontSize: '0.9rem' }}>AUD 29,710</span>
              </div>

              <div className="snapshot-row">
                <span style={{ color: '#475569', fontSize: '0.9rem' }}>Work Rights</span>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontWeight: '600', color: '#0d3b66', fontSize: '0.9rem', display: 'block' }}>24 Hrs / Week</span>
                  <span style={{ fontSize: '0.75rem', color: '#64748b' }}>(48 Hrs / Fortnight)</span>
                </div>
              </div>

              <div className="snapshot-row">
                <span style={{ color: '#475569', fontSize: '0.9rem' }}>OSHC Health Cover</span>
                <span style={{ fontWeight: '600', color: '#0d3b66', fontSize: '0.9rem' }}>AUD 650–750</span>
              </div>

              <div className="snapshot-row">
                <span style={{ color: '#475569', fontSize: '0.9rem' }}>Visa Fee</span>
                <span style={{ fontWeight: '600', color: '#0d3b66', fontSize: '0.9rem' }}>AUD 2,500</span>
              </div>

              <div className="snapshot-row" style={{ borderLeftColor: '#059669', backgroundColor: '#f0fdf4' }}>
                <span style={{ color: '#059669', fontSize: '0.9rem', fontWeight: '600' }}>Post-Study Work Visa</span>
                <span style={{ fontWeight: '700', color: '#059669', fontSize: '0.9rem' }}>Up to 4 Years</span>
              </div>
            </div>

            <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.75rem', color: '#94a3b8', letterSpacing: '0.5px' }}>
              PROCESSING TIME: 4–6 WEEKS
            </div>
          </div>

        </div>
      </section>

      

            {/* STUDENT VISA ROADMAP SECTION (GOOGLE MAPS THEME) */}
      <section style={{ padding: '70px 5%', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          
          <span style={{ backgroundColor: '#e0f2fe', color: '#0369a1', padding: '6px 14px', borderRadius: '20px', fontSize: '0.82rem', fontWeight: 'bold' }}>
            LIVE GPS ROADMAP
          </span>
          <h2 style={{ fontSize: isMobile ? '1.8rem' : '2.5rem', color: '#0d3b66', marginTop: '12px', marginBottom: '8px' }}>
            Your Student Visa Flight Path
          </h2>
          <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '35px' }}>
            Select any milestone marker to navigate through your Australian study visa journey.
          </p>

          {/* MAP CANVAS CONTAINER */}
          <div className="map-canvas-container" style={{ position: 'relative', width: '100%', maxWidth: '980px', margin: '0 auto', height: isMobile ? '560px' : '460px', borderRadius: '24px', padding: '20px', border: '2px solid #e2e8f0', boxShadow: '0 20px 40px rgba(0,0,0,0.06)', overflow: 'hidden' }}>

            {/* ROUTE LINE (SVG) */}
            <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
              <path
                className="roadmap-path"
                d={isMobile 
                  ? "M 90,85 C 220,130 220,220 120,270 C 20,320 220,400 160,480" 
                  : "M 120,95 C 260,30 380,180 320,240 C 260,300 620,320 780,360"
                }
                fill="none"
                stroke="#2563eb"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>

            {/* 1. INDIA START BADGE */}
            <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 10, display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#ffffff', padding: '8px 16px', borderRadius: '12px', boxShadow: '0 6px 18px rgba(0,0,0,0.1)', border: '1px solid #cbd5e1' }}>
              <span style={{ fontSize: '1.6rem' }}>🇮🇳</span>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 'bold', textTransform: 'uppercase' }}>Origin</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 'bold', color: '#0d3b66' }}>India (Surat)</div>
              </div>
            </div>

            {/* 2. AUSTRALIA DESTINATION BADGE */}
            <div style={{ position: 'absolute', bottom: '20px', right: '20px', zIndex: 10, display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#ffffff', padding: '8px 16px', borderRadius: '12px', boxShadow: '0 6px 18px rgba(0,0,0,0.1)', border: '1px solid #10b981' }}>
              <span style={{ fontSize: '1.6rem' }}>🇦🇺</span>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: 'bold', textTransform: 'uppercase' }}>Destination</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 'bold', color: '#0d3b66' }}>Australia</div>
              </div>
            </div>

            {/* GOOGLE MAP MILESTONE PINS (1 to 6) */}
            {[
              { id: 1, label: 'University', pos: isMobile ? { top: '80px', left: '70px' } : { top: '75px', left: '210px' } },
              { id: 2, label: 'Documents & SOP', pos: isMobile ? { top: '160px', left: '170px' } : { top: '50px', left: '390px' } },
              { id: 3, label: 'Application', pos: isMobile ? { top: '240px', left: '100px' } : { top: '160px', left: '460px' } },
              { id: 4, label: 'Offer & CoE', pos: isMobile ? { top: '320px', left: '180px' } : { top: '230px', left: '320px' } },
              { id: 5, label: 'Visa Filing', pos: isMobile ? { top: '400px', left: '110px' } : { top: '280px', left: '600px' } },
              { id: 6, label: 'Fly Australia', pos: isMobile ? { top: '470px', left: '160px' } : { top: '340px', left: '760px' } }
            ].map((step) => {
              const activeId = window.activeRoadmapStep || 1;
              const isActive = activeId === step.id;

              return (
                <div
                  key={step.id}
                  className={`google-pin ${isActive ? 'active-pin' : ''}`}
                    onClick={() => {
  window.activeRoadmapStep = step.id;
  if (window.setRoadmapStepState) window.setRoadmapStepState(step.id);
  
  // 👉 ADD THIS NEW CHECK FOR STEP 6:
  if (step.id === 6) {
    
    triggerCelebration();
  }
}}

                  style={{
                    position: 'absolute',
                    ...step.pos,
                    zIndex: isActive ? 20 : 5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}
                >
                  {/* Pulse Effect for Active Pin */}
                  {isActive && <div className="gps-ripple" />}

                  {/* SVG Google Map Teardrop Pin */}
                  <svg width="36" height="46" viewBox="0 0 38 48" fill="none" style={{ filter: isActive ? 'drop-shadow(0px 8px 12px rgba(217,119,6,0.5))' : 'drop-shadow(0px 4px 6px rgba(0,0,0,0.2))' }}>
                    <path d="M19 0C8.50659 0 0 8.50659 0 19C0 31.5 19 48 19 48C19 48 38 31.5 38 19C38 8.50659 29.4934 0 19 0Z" fill={isActive ? '#d97706' : '#0d3b66'} />
                    <circle cx="19" cy="18" r="11" fill="#ffffff" />
                    <text x="19" y="23" textAnchor="middle" fill={isActive ? '#d97706' : '#0d3b66'} fontSize="14" fontWeight="bold" fontFamily="sans-serif">
                      {step.id}
                    </text>
                  </svg>

                  {/* Step Title Pill */}
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    color: isActive ? '#ffffff' : '#0d3b66',
                    backgroundColor: isActive ? '#d97706' : 'rgba(255, 255, 255, 0.95)',
                    padding: '3px 8px',
                    borderRadius: '12px',
                    marginTop: '2px',
                    whiteSpace: 'nowrap',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                    border: '1px solid #e2e8f0'
                  }}>
                    {step.label}
                  </span>
                </div>
              );
            })}

          </div>

          {/* DETAILED CONTENT CARD */}
          <RoadmapContentCard />

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
            
            <div className="feature-card" style={{ background: 'rgba(255, 255, 255, 0.08)', padding: '20px', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>Dedicated Mentors</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.85, margin: 0 }}>Experienced counselors providing one-on-one personalized attention.</p>
            </div>

            <div className="feature-card" style={{ background: 'rgba(255, 255, 255, 0.08)', padding: '20px', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>100% Free Counseling</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.85, margin: 0 }}>Transparent profile evaluation without hidden application fees.</p>
            </div>

            <div className="feature-card" style={{ background: 'rgba(255, 255, 255, 0.08)', padding: '20px', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>High Visa Success Rate</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.85, margin: 0 }}>Strict pre-checks to ensure seamless documentation and approval.</p>
            </div>

            <div className="feature-card" style={{ background: 'rgba(255, 255, 255, 0.08)', padding: '20px', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>Post-Landing Support</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.85, margin: 0 }}>Assistance with accommodation, airport pickups, and local orientation.</p>
            </div>

          </div>
        </div>
      </section>


      {/* 8. TESTIMONIALS */}
          {/* 8. TESTIMONIALS */}
      <section style={{ padding: '60px 5%', backgroundColor: '#f8fafc', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: '#0d3b66', fontSize: '2rem', marginBottom: '10px' }}>What Our Students Say</h2>
          <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '40px' }}>
            Empowering students in Surat to achieve their international education dreams.
          </p>

          {/* Slider Viewport Container */}
          <div style={{ position: 'relative', width: '100%', overflow: 'hidden', padding: '20px 0' }}>
            <div style={{
              display: 'flex',
              gap: '20px',
              transform: `translateX(calc(-${activeTestimonial * (isMobile ? 290 : 340)}px + ${isMobile ? '10px' : '330px'}))`,
              transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)'
            }}>
              {testimonialsData.map((item, index) => {
                const isActive = index === activeTestimonial;
                return (
                  <div
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    style={{
                      minWidth: isMobile ? '270px' : '320px',
                      maxWidth: isMobile ? '270px' : '320px',
                      backgroundColor: item.bgColor,
                      color: '#ffffff',
                      borderRadius: '12px',
                      padding: '25px',
                      boxSizing: 'border-box',
                      boxShadow: isActive ? '0 15px 30px rgba(13, 59, 102, 0.3)' : '0 4px 12px rgba(0,0,0,0.08)',
                      transform: isActive ? 'scale(1.05) translateY(-5px)' : 'scale(0.92)',
                      opacity: isActive ? 1 : 0.65,
                      transition: 'all 0.4s ease',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      justify: 'space-between',
                      textAlign: 'left'
                    }}
                  >
                    <div>
                      {/* Avatar & Badge */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                        <div style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '8px',
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 'bold',
                          fontSize: '0.95rem',
                          color: '#ffffff',
                          border: '1px solid rgba(255, 255, 255, 0.3)'
                        }}>
                          {item.initials}
                        </div>
                        <div>
                          <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 'bold' }}>{item.name}</h4>
                          <span style={{ fontSize: '0.78rem', opacity: 0.85 }}>{item.role}</span>
                        </div>
                      </div>

                      {/* Review Content */}
                      <p style={{ fontSize: '0.9rem', lineHeight: '1.5', margin: 0, fontStyle: 'italic', opacity: 0.95 }}>
                        "{item.text}"
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '30px' }}>
            <button
              onClick={handlePrevTestimonial}
              style={{
                width: '45px',
                height: '45px',
                borderRadius: '8px',
                border: '1.5px solid #0d3b66',
                backgroundColor: '#ffffff',
                color: '#0d3b66',
                fontSize: '1.2rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                transition: 'all 0.2s ease'
              }}
            >
              ←
            </button>
            <button
              onClick={handleNextTestimonial}
              style={{
                width: '45px',
                height: '45px',
                borderRadius: '8px',
                border: '1.5px solid #0d3b66',
                backgroundColor: '#0d3b66',
                color: '#ffffff',
                fontSize: '1.2rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                transition: 'all 0.2s ease'
              }}
            >
              →
            </button>
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
