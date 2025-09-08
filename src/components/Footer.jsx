import React from "react";
import "../style/Footer.css"; // External CSS file
import { Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const pages = [
    { name: "Home", href: "/" },
    { name: "DietIn Solution", href: "/dietInSolution" },
    { name: "Our Story", href: "/about" },
    { name: "Our Menu", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  const instagramPosts = [
    "./images/half-tamato.jpg",
    "./images/bowl-tamato.png", 
  ];

  return (
    <footer className="footer py-5 bg-white border-top">
      <div className="container">
        <div className="row gy-5">
          <div className="col-md-6 col-lg-3">
            <div className="fs-3 fw-bold text-primary "  >
              <img src="./images/logo.png" alt="Logo" style={{ width: "150px", height: "auto" }} />
            </div>
            <p className="text-muted small py-2">
              In the new era of technology we look at the future with certainty and pride for our company.
            </p>
            <div className="d-flex gap-2">

              <div className="footer-icon py-2"><a
                href="https://www.instagram.com/eat_with_dietin?igsh=MTJiMWU0c3VnZTVuNg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-white"
              >
                <Instagram size={16} className="hover-icon" />
              </a></div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <h5 className="footer-title">Pages</h5>
            <ul className="list-unstyled">
              {pages.map((page) => (
                <li key={page.name}><a href={page.href}>{page.name}</a></li>
              ))}
            </ul>
          </div>

          <div className="col-md-6 col-lg-3">
            
          </div>

          <div className="col-md-6 col-lg-3" >
            <a  href="https://www.instagram.com/eat_with_dietin?igsh=MTJiMWU0c3VnZTVuNg=="
               >
            <h5 className="footer-title">Follow Us On Instagram</h5>
            <div className="row g-2">
              {instagramPosts.map((img, i) => (
                <div className="col-6" key={i}>
                  <img src={img} alt={`Instagram ${i}`} className="img-fluid rounded footer-insta" />
                </div>
              ))}
            </div>
            </a>
          </div>
        </div>

        <hr className="mt-5" />
        <p className="text-center text-muted small mb-0">
          © 2025 Dietin Pvt. Ltd. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
