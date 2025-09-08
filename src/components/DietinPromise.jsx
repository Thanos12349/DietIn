import React from 'react';
import '../style/DietinPromise.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPhoneAlt, FaEnvelope, FaGlobe, FaInstagram } from 'react-icons/fa';

const DietinPromise = () => {
  return (
    <div className="promise-container container mt-5">
      {/* Heading */}
      <h2 className="promise-heading mt-4">
        The <span className="promise-highlight">Dietin Promise</span>
      </h2>

      <div className="row mt-4">
        {/* Left Section */}
        <div className="col-lg-6">
          <p className="promise-description">
            Dietin is making <strong>nutrition-first living</strong> easy,
            scalable, and impactful—for both people and the planet.
          </p>

          {/* Contact Section */}
          <div className="promise-contact mt-4">
            <p>
              <FaPhoneAlt className="promise-icon" /> +91 9711808337
            </p>
            <p>
              <FaEnvelope className="promise-icon" /> hello@reallygreatsite.com
            </p>
            <p>
              <FaGlobe className="promise-icon" /> {' '}
              <a href="https://www.dietin.in" target="_blank" rel="noreferrer">
                www.dietin.in
              </a>
            </p>
            <p>
              <FaInstagram className="promise-icon" /> Instagram:{' '}
              <a
                href="https://www.instagram.com/eat_with_dietin"
                target="_blank"
                rel="noreferrer"
              >
                @eat_with_dietin
              </a>
            </p>
          </div>

          {/* Ticket Section */}
          <div className="promise-ticket mt-4 p-3">
            <h5>🎟️ DIETIN ON THE GO TICKET</h5>
            <p>Experience wellness made simple, anytime, anywhere.</p>
          </div>
        </div>

        {/* Right Section with Image */}
        <div className="col-lg-6 text-center">
          <img
            src="./images/image26.png"
            alt="Dietin Promise"
            className="promise-img img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default DietinPromise;
