import React from "react";
import "./DietinQuickBites.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";


const DietinQuickBites = () => {
    return (
        <>
            <Header />
            <div className="quickbites-container container mt-5">
                {/* Title */}
                <div className="text-center mb-4">
                    <h2 className="main-heading">
                        Dietin – <span className="highlight">Quick Bites</span>
                    </h2>
                    <h5 className="subtitle">
                        Healthy Eating, Made Simple • Now on <span className="brand">Swiggy</span> &{" "}
                        <span className="brand">Zomato</span>
                    </h5>
                </div>

                {/* Intro */}
                <p className="description">
                    At Dietin, we believe healthy food should be as convenient and enjoyable as
                    it is nourishing. In today’s fast-paced world, people often settle for
                    unhealthy options because they’re quick and easy. That’s why we created{" "}
                    <strong>Dietin – Quick Bites</strong>: a service that brings wholesome,
                    balanced meals right to your doorstep.
                </p>

                <p className="description">
                    What began as a way to provide healthy meals for our employees has now grown
                    into a wellness movement for everyone. From diet-specific meal plans to daily
                    balanced dishes, Dietin makes it easier than ever to eat well—whether you’re
                    at home, at work, or on the go.
                    <div className="text-center quickbites my-3">
                    <img src="./images/quickbite.jpg" alt="Quick Bites Main" className="img-fluid rounded" />
                </div>
                </p>
                

                <div className="highlight-box my-4 p-3 text-center">
                    <h5>🚀And now, we’re excited to announce that you can enjoy Quick Bites by Dietin directly through Swiggy and Zomato.</h5>
                </div>

                {/* Why Choose */}
                <h3 className="section-title">Why Choose Quick Bites by Dietin?</h3>
                <ul className="info-list">
                    <li>
                        <strong>Healthy + Convenient –</strong> No more searching for clean food; our
                        meals are just a click away.
                    </li>
                    <li>
                        <strong>Balanced Nutrition –</strong> Every dish is thoughtfully curated with
                        proteins, carbs, healthy fats, vitamins, and minerals.
                        <div className="text-center quickbites my-2">
                            <img src="./images/quickbitesalad.png" alt="Healthy Salad" className="img-fluid rounded" />
                        </div>
                    </li>
                    <li>
                        <strong>Pocket-Friendly –</strong> We make sure healthy eating fits your
                        budget without compromising on quality.
                    </li>
                    <li>
                        <strong>Delicious Variety –</strong> From energizing breakfasts to filling
                        lunches and light dinners, Quick Bites has something for every lifestyle.
                        <div className="text-center quickbites my-2">
                            <img src="./images/quickbitesdele.png" alt="Delicious Meals" className="img-fluid rounded" />
                        </div>
                    </li>
                    <li>
                        <strong>Personalized Diet Plans –</strong> Our experts create structured
                        meal plans to meet your fitness, wellness, or recovery goals.
                    </li>
                </ul>

                {/* How to Order */}
                <h3 className="section-title">How to Order on Swiggy & Zomato</h3>
                <ol className="order-steps">
                    <li>Open your Swiggy or Zomato app.</li>
                    <li>Search for <strong>“Quick Bites by Dietin.”</strong></li>
                    <li>Browse our menu of nutritious meals and diet-friendly options.</li>
                    <li>Place your order and enjoy fresh, healthy food delivered to your door.</li>
                </ol>
                <p className="description">
                    ✅ It’s that easy—healthy eating without the stress of cooking or planning.
                </p>

                {/* Who Benefits */}
                <h3 className="section-title">Who Benefits from Quick Bites?</h3>
                <div className="row mt-3">
                    <div className="col-md-6">
                        <ul className="info-list">
                            <li>
                                <strong>Working Professionals –</strong> Stay productive with
                                energy-boosting meals.
                            </li>
                            <li>
                                <strong>Fitness Lovers –</strong> Support your workouts with
                                high-protein, calorie-smart meals.
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="info-list">
                            <li>
                                <strong>Families –</strong> Give your loved ones wholesome food every day.
                            </li>
                            <li>
                                <strong>Health Seekers –</strong> From weight management to general
                                wellness, our meals make it easy to stay on track.
                            </li>
                        </ul>
                        <div className="text-center my-2">
                            <img src="./images/quickbitespeople.png" alt="People enjoying Quick Bites" className="img-fluid rounded" />
                        </div>
                    </div>
                </div>

                {/* Promise */}
                <div className="promise-box mt-5 p-4">
                    <h4 className="promise-heading">Our Promise 💚</h4>
                    <p>
                        With <strong>Quick Bites by Dietin</strong>, we’re not just delivering
                        food—we’re delivering health, balance, and care. Our partnership with{" "}
                        <span className="brand">Swiggy</span> and <span className="brand">Zomato</span>{" "}
                        means healthy food is now as easy to order as fast food.
                    </p>
                    <div className="text-center my-2">
                        <img src="./images/quickbitesyou.png" alt="Dietin Promise" className="img-fluid rounded" />
                    </div>
                    <p className="fw-bold text-center">
                        Because at Dietin, we believe that when you eat right, you live better.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default DietinQuickBites;
