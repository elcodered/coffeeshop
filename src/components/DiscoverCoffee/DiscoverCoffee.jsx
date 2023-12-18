import React from "react";
import "../DiscoverCoffee/DiscoverCoffee.css";
import discovercoffee from "../../assets/discovercoffeebg.png";

function DiscoverCoffee() {
  return (
    <div
      className="discoverCoffee"
      style={{ backgroundImage: `url(${discovercoffee})` }}
    >
      <h1>Discover The Best Coffee</h1>
      <p>
        Coffee Cup is a coffee shop that provides you with quality coffee that
        helps boost <br /> your productivity and helps build your mood. Having a
        cup of coffee is good, but having <br /> a cup of real coffee is
        greater. There is no doubt that you will enjoy this coffee more than
        <br />
        others you have ever tasted.
      </p>
      <div className="ordernow">
        <button> LEARN MORE </button>
      </div>
    </div>
  );
}

export default DiscoverCoffee;
