import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/coffee.jpg";
import "../styles/Home.css";
import DiscoverCoffee from "../components/DiscoverCoffee/DiscoverCoffee";
import Feedback from "../components/Feedback/Feedback";

function Home() {
  return (
    <div>
      <div>
        <div
          className="home"
          style={{ backgroundImage: `url(${BannerImage})` }}
        >
          <div className="headerContainer">
            <h1> Coffee Cup </h1>
            <p>Sip, Savor, and Stay Cozy: Your Daily Brew Haven </p>
            <Link to="/menu">
              <button> ORDER NOW </button>
            </Link>
          </div>
        </div>
        <DiscoverCoffee />
      </div>
      <Feedback />
    </div>
  );
}

export default Home;
