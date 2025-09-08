import React from "react";
import "../style/DriverSection.css"; // External CSS file

const DriverSection = () => {
  return (
    <section className="driver-section">
      <div className="driver-image">
        <img src="/images/foodD.png" alt="Delivery Boy" />
      </div>
      <div className="driver-content">
        <h1 className="text-light">
          Serving Freshness in <br /> 4 Cities Across India!
        </h1>
        <h4 className="text-white">Dietin brings you India’s most convenient <br /> and trusted healthy eating experience.</h4>
        <p>
           From fresh, chef-crafted salads to wholesome, dietitian-approved meals, we deliver health, flavor, and nutrition straight to your doorstep. Order now on Swiggy and Zomato. Now in Chandigarh, Mohali, Panchkula and Gurugram.

        </p>
        <button className="discover-btn">DISCOVER NOW</button>
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
