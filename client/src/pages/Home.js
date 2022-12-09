import React from "react";
import giftImg from "../images/PresentPicker.png";
import '../Style.css';

function Home() {
  return (
    <div className="container">
      <h1 className="text-center">Present Picker</h1>
      <img title="" className="gifts col-md-12" src={giftImg} alt="Gifts"></img>
    </div>
  );
}

export default Home;
