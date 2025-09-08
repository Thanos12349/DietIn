// import React from "react";
// import "./DietInPlan.css";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// export default function DietInPlan() {
//   return (
//     <div className="diet-in-plan">
//       <Header />
//       {/* Hero Section */}
//       <section className="hero d-flex align-items-center text-center text-white">
//         <div className="container">
//           <h1>“You don’t need to eat less. You need to eat right.”</h1>
//           <p className="lead mt-3">
//             Welcome to <strong>HEAL ROOT DIET CLINIC</strong> — Where Food Meets Feeling
//           </p>
//           <a href="#contact" className="btn1 btn-success btn-lg mt-4">
//             📞 Book a Free Call
//           </a>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="about py-5">
//         <div className="container">
//           <p className="lead text-center mb-4">
//             We’re not here to tell you to count every almond or eat foods you’ve never heard of.  
//             We bring you back to you — through food that heals, nourishes, and understands your life.  
//             Because health isn’t just about what’s on your plate, it’s about what’s in your heart.
//           </p>
//           <p className="text-center">
//             You’re not lazy — you’re tired, confused, maybe your clothes feel tighter,  
//             maybe you wake up like you didn’t sleep. Maybe food feels like a fight.  
//             But it doesn’t have to stay this way. Let’s write a new story — where your body becomes your home again.
//           </p>
//         </div>
//       </section>

//       {/* What We Do */}
//       <section className="services py-5 bg-light">
//         <div className="container">
//           <h2 className="text-center mb-5">What We Do</h2>
//           <div className="row">
//             <div className="col-md-3 text-center mb-4">
//               <div className="card p-4 shadow-sm service-card h-100">
//                 <div className="display-4">💬</div>
//                 <h5 className="mt-3">1:1 Dietician Counselling</h5>
//                 <p>No judgment. No calorie counting. Just custom plans that fit your life.</p>
//               </div>
//             </div>
//             <div className="col-md-3 text-center mb-4">
//               <div className="card p-4 shadow-sm service-card h-100">
//                 <div className="display-4">🌱</div>
//                 <h5 className="mt-3">Healing from the Root</h5>
//                 <p>PCOS? Gut issues? Hormonal drama? We dig deep to heal.</p>
//               </div>
//             </div>
//             <div className="col-md-3 text-center mb-4">
//               <div className="card p-4 shadow-sm service-card h-100">
//                 <div className="display-4">🍲</div>
//                 <h5 className="mt-3">Real Food. Real Plans.</h5>
//                 <p>Simple recipes your mom could cook — no overly fancy stuff.</p>
//               </div>
//             </div>
//             <div className="col-md-3 text-center mb-4">
//               <div className="card p-4 shadow-sm service-card h-100">
//                 <div className="display-4">🛋</div>
//                 <h5 className="mt-3">Programs from Bed</h5>
//                 <p>Online programs you can do at your own pace, in your comfort.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Process */}
//       <section className="process py-5">
//         <div className="container">
//           <h2 className="text-center mb-5">So, What Happens Now?</h2>
//           <div className="row">
//             <div className="col-md-4 text-center">
//               <div className="card p-4 shadow-sm border-0 rounded-3 h-100">
//                 <div className="display-4">📞</div>
//                 <h5>You Book a Free Call</h5>
//                 <p>We talk and understand everything you’ve been holding in.</p>
//               </div>
//             </div>
//             <div className="col-md-4 text-center">
//               <div className="card p-4 shadow-sm border-0 rounded-3 h-100">
//                 <div className="display-4">📝</div>
//                 <h5>We Create Your Plan</h5>
//                 <p>Completely custom — from your life, not from Google.</p>
//               </div>
//             </div>
//             <div className="col-md-4 text-center">
//               <div className="card p-4 shadow-sm border-0 rounded-3 h-100">
//                 <div className="display-4">🤝</div>
//                 <h5>We Walk Together</h5>
//                 <p>We check in, adjust, and grow — slowly & kindly.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Freebies */}
//       <section className="freebies py-5 bg-light">
//         <div className="container">
//           <h2 className="text-center mb-5">Something For You, Even If You’re Not Ready Yet</h2>
//           <div className="row">
//             <div className="col-md-4 text-center">
//               <div className="card shadow-sm p-4 border-0 rounded-3 h-100">
//                 <div className="display-4">📘</div>
//                 <h5>Food, But Make It Feel Like Home</h5>
//                 <p>A free guide to make everyday meals feel like love.</p>
//               </div>
//             </div>
//             <div className="col-md-4 text-center">
//               <div className="card shadow-sm p-4 border-0 rounded-3 h-100">
//                 <div className="display-4">🥗</div>
//                 <h5>Anti-Bloat Meal Plan</h5>
//                 <p>5 days of food that won’t fight back.</p>
//               </div>
//             </div>
//             <div className="col-md-4 text-center">
//               <div className="card shadow-sm p-4 border-0 rounded-3 h-100">
//                 <div className="display-4">🧠</div>
//                 <h5>What’s Your Eating Personality?</h5>
//                 <p>Understand how your mind & food connect.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact */}
//       <section id="contact" className="contact py-5 bg-dark text-white">
//         <div className="container text-center">
//           <h2 className="mb-4">Let’s Stay in Touch</h2>
//           <p className="mb-5">We’re here to help — no pressure, ever.</p>
//           <p>📧 Email: <a href="mailto:marketing@mealogy.in" className="text-white text-decoration-none">marketing@mealogy.in</a></p>
//           <p>📍 Location: Your City, Country</p>
//           <p>📱 WhatsApp: <a href="https://wa.me/+919779007629" className="text-white text-decoration-none">Chat Now</a></p>
//           <p>📷 Instagram: <a href="https://www.instagram.com/reel/DKjtyTmpM_K/?igsh=MWJrYWxsaTdyZXV5dA==" className="text-white text-decoration-none">DietIn Instagram</a></p>
//         </div>
//         <div className="text-center">
//           <a className="btn1 btn-outline-light text-decoration-none" href="/imagePdf">Know more about our services</a>
//         </div>
//       </section>
//      <Footer />
//     </div>
    
//   );
// }
import React from "react";
import "./DietInPlan.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DietInPlan() {
  return (
    <div className="diet-in-plan">
      <Header />
      {/* Hero Section */}
      <section className="hero d-flex align-items-center text-center text-white">
        <div className="container">
          <h1>Welcome to Heal Root DIET</h1>
          <p className="lead mt-3">
            At Heal Root, we believe that food is the first medicine. Our clinic has been transforming lives across the globe through natural, therapeutic, and personalized nutrition.
          </p>
          <a href="#contact" className="btn1 btn-success btn-lg mt-4">
            📞 Book a Free Call
          </a>
        </div>
      </section>

      {/* We Deal With Section */}
      <section className="we-deal-with py-5">
        <div className="container">
          <h2 className="text-center mb-5">We Deal With</h2>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4 mb-4">
              <ul className="list-unstyled">
                <li><i className="fas fa-check-circle text-success me-2"></i>Diabetes (Type 1 & Type 2)</li>
                <li><i className="fas fa-check-circle text-success me-2"></i>Thyroid disorders (Hypo & Hyperthyroidism)</li>
                <li><i className="fas fa-check-circle text-success me-2"></i>PCOD/PCOS</li>
                <li><i className="fas fa-check-circle text-success me-2"></i>Obesity & Weight Management</li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <ul className="list-unstyled">
                <li><i className="fas fa-check-circle text-success me-2"></i>Hypertension & Heart Health</li>
                <li><i className="fas fa-check-circle text-success me-2"></i>Kidney Disorders</li>
                <li><i className="fas fa-check-circle text-success me-2"></i>Cancer Nutrition Support</li>
                <li><i className="fas fa-check-circle text-success me-2"></i>Liver & Gut Issues</li>
              </ul>
            </div>
          </div>
          <p className="text-center mt-4">
            Our approach combines scientific knowledge, natural healing, and practical diet plans that patients can follow with ease.
          </p>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="our-team py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-4">Our Team</h2>
          <p className="lead">
            We are a team of 10 qualified dietitians working together, we provide round-the-clock support, personalized diet plans, and constant motivation for patients in India and across the world.
          </p>
        </div>
      </section>

      {/* Why Choose Heal Root Section */}
      <section className="why-choose-us py-5">
        <div className="container">
          <h2 className="text-center mb-5">Why Choose Heal Root?</h2>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-transparent border-0 d-flex align-items-center mb-2"><i className="fas fa-check-circle text-success me-3 fs-4"></i><span className="lead">Global reach – serving clients worldwide</span></li>
                <li className="list-group-item bg-transparent border-0 d-flex align-items-center mb-2"><i className="fas fa-check-circle text-success me-3 fs-4"></i><span className="lead">Affordable & result-oriented programs</span></li>
                <li className="list-group-item bg-transparent border-0 d-flex align-items-center mb-2"><i className="fas fa-check-circle text-success me-3 fs-4"></i><span className="lead">Focused on root-cause healing, not just symptom control</span></li>
                <li className="list-group-item bg-transparent border-0 d-flex align-items-center mb-2"><i className="fas fa-check-circle text-success me-3 fs-4"></i><span className="lead">Flexible diet options (veg, non-veg, regional, international)</span></li>
                <li className="list-group-item bg-transparent border-0 d-flex align-items-center mb-2"><i className="fas fa-check-circle text-success me-3 fs-4"></i><span className="lead">Dedicated support team available 24/7</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Programs & Brochures Section */}
      <section className="programs py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Programs & Brochures</h2>
          <div className="row justify-content-center">
            <div className="col-md-4 text-center mb-4">
              <div className="card shadow-sm p-4 h-100">
                <h5 className="mt-3">1-Month Transformation Plan</h5>
                <p>Kickstart your health journey</p>
              </div>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="card shadow-sm p-4 h-100">
                <h5 className="mt-3">3-Month Healing Plan</h5>
                <p>Deeper results with habit building</p>
              </div>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="card shadow-sm p-4 h-100">
                <h5 className="mt-3">6-Month Complete Lifestyle Plan</h5>
                <p>Sustainable & long-term healing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact py-5 bg-dark text-white">
        <div className="container text-center">
          <h2 className="mb-4">Let’s Stay in Touch</h2>
          <p className="mb-5">We’re here to help — no pressure, ever.</p>
          <p>📧 Email: <a href="mailto:marketing@mealogy.in" className="text-white text-decoration-none">marketing@mealogy.in</a></p>
          <p>📍 Location: Your City, Country</p>
          <p>📱 WhatsApp: <a href="https://wa.me/+919779007629" className="text-white text-decoration-none">Chat Now</a></p>
          <p>📷 Instagram: <a href="https://www.instagram.com/reel/DKjtyTmpM_K/?igsh=MWJrYWxsaTdyZXV5dA==" className="text-white text-decoration-none">DietIn Instagram</a></p>
        </div>
        <div className="text-center">
          <a className="btn1 btn-outline-light text-decoration-none" href="/imagePdf">Know more about our services</a>
        </div>
      </section>
      <Footer />
    </div>
  );
}