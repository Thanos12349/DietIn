import React from "react";
import "../style/SubscriptionPlans.css";
import { Link } from "react-router-dom";

const SubscriptionPlans = () => {
    return (
        <div className="subscription-section container-fluid">
            <div className="row d-flex">

                {/* Left Side - Plans */}
                <div className="col-lg-6 col-md-12 py-5 px-5 text-light subscription-text">
                    <h2 className="fw-bold salad-title1">Our Subscription Plans</h2>
                    <p className="mb-4 text-dark">
                        Make healthy eating a habit with DietIn flexible subscription
                        plans, designed to fit your lifestyle.
                    </p>

                    <ul className="list-unstyled text-dark ">
                        <li>🌼 <strong>DietIn Plan:</strong> Wholesome, chef-crafted meals designed by dietitians to nourish your body and satisfy your 
taste buds. </li>
                        <li>🌼 <strong>DietIn Meal:</strong>Personalized nutrition plans tailored to your lifestyle, health goals, and specific needs.</li>
                        <li>🌼 <strong>DietIn On-The-Go:</strong> Convenient, ready-to-carry options for busy days without compromising on health.</li>
                        <li>🌼 <strong>DietIn Quick Bites:</strong> Smart, guilt-free snacking that keeps you energized between meals. </li>
                    </ul>

                    <Link to="/about" className="btn1 btn-light mt-3 py-2">KNOW MORE</Link>
                </div>

                <div className="col-lg-4 col-md-8 mt-lg-0 py-4 px-4">
                    <div className="subscription-form shadow-lg rounded-4 p-4">
                        <div className="text-center">
                            <i className="bi bi-cart fs-1 text-light"></i>
                            <h3 className="text-white">Subscription</h3>
                            <small className="text-success">Fill the Form</small>
                        </div>

                        <form>
                            <input type="text" className="form-control mb-3" placeholder="Name" />
                            <input type="email" className="form-control mb-3" placeholder="Email" />
                            <input type="tel" className="form-control mb-3" placeholder="Phone Number" />

                            <select className="form-select mb-3" placeholder="Choose Your Plan">
                                <option selected>Choose Your Plan</option>
                                <option>DietIn Plan</option>
                                <option>DietIn Meal</option>
                                <option>DietIn On-The-Go</option>
                                <option>DietIn Quick Bites</option>
                            </select>

                            <input type="text" className="form-control mb-3" placeholder="City Name" />
                            <input type="text" className="form-control mb-3" placeholder="Pincode" />

                            <button type="submit" className="btn btn-success w-100">SUBMIT</button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-2 ">
                    <img src="./images/saladsub.png" className="saladsubimg" alt="" />
                </div>
            </div>

        </div>
    );
};

export default SubscriptionPlans;
