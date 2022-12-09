import React from "react";
import giftImg from "../images/PresentPicker.png";
import '../Style.css';

function Home() {
  return (
    <div className="container">
      <img style={{ width: 500, height: 500 }} title="logo" className= "gifts col-md-12" src={giftImg} alt="Gifts"></img>
    </div>
  );
}

export default Home;
