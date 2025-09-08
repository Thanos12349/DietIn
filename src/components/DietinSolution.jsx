import React from 'react';
import '../style/DietinSolution.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLeaf, FaMobileAlt, FaUtensils, FaUsers, FaClock, FaRecycle, FaBolt } from 'react-icons/fa';

const DietinSolution = () => {
  return (
    <div className="solution-container container mt-5">
      <h2 className="main-heading text-center mb-4">🌟 The Mealogy Advantage</h2>

      <div className="row">
        <div className="col-lg-8">

          {/* Curated & Conscious */}
          <div className="info-box card shadow-sm p-3 mb-4">
            <h4><FaLeaf className="me-2 text-success" /> Curated & Conscious</h4>
            <ul>
              <li><strong>Macro-balanced</strong>, crafted with local ingredients</li>
              <li><strong>5 KM Freshness Loop –</strong> Decentralized kitchen pods ensure quick refills</li>
              <li><FaMobileAlt className="me-2 text-primary" /> <strong>Tech-Enabled Ordering</strong> via App + Web</li>
              <li><strong>Flexible Subscription Plans</strong> – daily, weekly, monthly</li>
              <li><strong>Nutritionist Support</strong> – free consults included</li>
              <li><FaUtensils className="me-2 text-danger" /> <strong>Cloud Kitchens</strong> ensure freshness & safety</li>
            </ul>
          </div>

          {/* Benefits */}
          <h3 className="section-title">🏢 Benefits for Organizations</h3>
          <div className="info-box card shadow-sm p-3 mb-4">
            <ul>
              <li><strong>Healthier Teams</strong> – more energy, less absenteeism</li>
              <li><strong>Zero Ops Burden</strong> – we handle restocking & cleaning</li>
              <li><strong>ESG & CSR Alignment</strong> 🌱 sustainable offerings</li>
              <li><FaClock className="me-2 text-warning" /> <strong>Anytime Access</strong> – 24/7 food availability</li>
              <li><strong>Employee Satisfaction</strong> – 26% healthier employees</li>
            </ul>
          </div>

          {/* Smart Wellness */}
          <h3 className="section-title">⚡ Smart Wellness in 3 Steps</h3>
          <div className="info-box card shadow-sm p-3 mb-4">
            <ul>
              <li><FaBolt className="me-2 text-info" /> <strong>Tap to Start</strong> – easy touchscreen navigation</li>
              <li><strong>Browse & Know Your Meal</strong> – full nutrition details</li>
              <li><strong>Checkout & Grab-n-Go</strong> – Pay via UPI/Card, food vends instantly</li>
            </ul>
          </div>

          {/* Hosting Requirements */}
          <h3 className="section-title">📍 Hosting Requirements</h3>
          <div className="info-box card shadow-sm p-3 mb-4">
            <p>Bringing Dietin to your workplace is simple:</p>
            <ul>
              <li><strong>Space:</strong> Just 1 sq. m. in a cafeteria/common area</li>
              <li><strong>Power:</strong> One 220V plug point</li>
              <li><strong>Access:</strong> Daily entry for restocking & maintenance</li>
            </ul>
          </div>

          {/* Wellness & Sustainability */}
          <h3 className="section-title">🌱 Wellness Meets Sustainability</h3>
          <div className="info-box card shadow-sm p-3 mb-4">
            <p>We’re building a circular wellness system:</p>
            <ul>
              <li><FaRecycle className="me-2 text-success" /> Customers drop jars/bottles into return bins</li>
              <li>Earn reward points for every return</li>
              <li>Redeem points for free meals, discounts, or perks</li>
            </ul>
            <p className="fw-bold">Eat Well. Return Smart. Repeat. 🔄</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DietinSolution;
