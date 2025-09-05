import React from "react";
import "../style/DriverSection.css"; // External CSS file

const DriverSection = () => {
  return (
    <section className="driver-section">
      <div className="driver-content">
        <h1>
          Serving Freshness in <br /> 4 Cities Across India!
        </h1>
        <p>
          Your health and taste together — fresh, wholesome meals crafted by top <strong> chefs and dietitians </strong>, 
now delivered to your doorstep via Swiggy and Zomato.
        </p>
        <button className="discover-btn">DISCOVER NOW</button>
      </div>

      <div className="driver-image">
        <img src="/images/foodD.png" alt="Delivery Boy" />
      </div>

      <div className="driver-cities">
        <ul>
          <li>🏙️ Mohali</li>
          <li>🏙️ Chandigarh</li>
          <li>🏙️ Panchkula</li>
          <li>🏙️ Gurgaon</li>
        </ul>
      </div>
      <img src="/images/saladleaf.png" alt="Leaf" className="bg-leaf leaf1" />
      <img src="/images/saladshimla.png" alt="Leaf" className="bg-leaf leaf2" />
      <img src="/images/tomato.png" alt="Tomato" className="bg-tomato" />
    </section>
  );
};

export default DriverSection;
