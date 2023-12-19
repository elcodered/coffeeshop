import React from "react";
import "../Feedback/Feedback.css";

function Feedback() {
  return (
    <div className="feedback">
      <div className="rightSide">
        <h1>Receive Newsletters and Updates</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="email">Email</label>
          <input name="email" type="email" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Feedback;
