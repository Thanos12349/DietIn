import React from 'react';
import '../style/DietInExeccutive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHeartbeat, FaAppleAlt, FaChartLine, FaHospitalUser } from 'react-icons/fa';

const DietinExecutive = () => {
  return (
    <div className="dietin-container container mt-5">
      {/* Title Section */}
      <div className="executive-title text-center mt-4">
        <h2>
          <span className="highlight">Dietin – Wellness On Demand</span>
        </h2>
        <h5>
          <strong>Smart Vending for Smart Workplaces</strong>
        </h5>
      </div>

      {/* Intro Description */}
      <p className="description mt-4 text-center">
        At Dietin, we believe healthy food access isn’t just a perk—it’s
        a performance multiplier. With rising workplace wellness concerns,
        poor eating habits, and increasing healthcare costs, organizations
        need solutions that make nutrition simple, scalable, and sustainable.
      </p>

      <p className="description text-center">
        That’s why we’ve launched the <strong>Dietin Mealogy Club Chiller</strong> –
        a smart fridge powered by IoT and cloud kitchens – built for corporates,
        gyms, and institutions.
      </p>

      {/* Section Heading */}
      <h3 className="text-center mt-5">Why Corporates Need Wellness Now</h3>

      {/* Stats Row */}
      <div className="stats-row row text-center mt-4 g-3">
        <div className="col-md-3">
          <div className="stat-box">
            <FaAppleAlt className="stat-icon" />
            <h4>73%</h4>
            <span>of professionals skip breakfast</span>
          </div>
        </div>

        <div className="col-md-3">
          <div className="stat-box">
            <FaHeartbeat className="stat-icon" />
            <h4>60%</h4>
            <span>rely on junk food at work</span>
          </div>
        </div>

        <div className="col-md-3">
          <div className="stat-box">
            <FaHospitalUser className="stat-icon" />
            <h4>83%</h4>
            <span>of HR leaders prioritize wellness</span>
          </div>
        </div>

        <div className="col-md-3">
          <div className="stat-box">
            <FaChartLine className="stat-icon" />
            <h4>18%</h4>
            <span>rise in healthcare costs</span>
          </div>
        </div>
      </div>

      {/* Closing Note */}
      <p className="performance-note text-center mt-5">
        <strong>
          Dietin bridges this gap by bringing nutrition directly to
          workplaces — without extra burden on HR or operations.
        </strong>
      </p>
    </div>
  );
};

export default DietinExecutive;
