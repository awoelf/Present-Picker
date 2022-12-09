import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white p-3 mt-3 text-center fixed-bottom">
      <p className="foot">
        Copyright 2022 |{" "}
        <a
          href="https://github.com/awoelf/Present-Picker"
          rel="noreferrer"
          target="_blank"
          className="text-white text-decoration-none"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;
