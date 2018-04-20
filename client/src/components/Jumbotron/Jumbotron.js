import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
  <div className="jumbotron text-center">
    <h1>NYT Articles</h1>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://developer.nytimes.com/"
    >
      Powered by NYT API
    </a>
  </div>
);

export default Jumbotron;
