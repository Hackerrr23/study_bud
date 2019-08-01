import React from "react";
import "./Landing.scss";

export default function Landing() {
  return (
    <div id="landing">
      <header>
        <nav>
          <ul>
            <h2>Study Bud</h2>
            <li>How It Works</li>
            <li>About</li>
          </ul>
          <ul id="right_nav">
            <li>Notifications</li>
            <li>Profile</li>
          </ul>
          <div />
        </nav>
      </header>
      <main>
        <h1>Together, We A+</h1>
        <h3>Reach Your Full Potential</h3>
        <div>
          <div id="main_action_buttons">
            <a href="#" class="button">
              REGISTER
            </a>
            <a href="#" class="button2">
              LOGIN
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
