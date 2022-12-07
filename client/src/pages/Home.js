import React from "react";
import giftImg from "../images/pexels-george-dolgikh-1666070.jpg";

function Home() {
  return (
    <div className="container">
      <h1 className="text-center">Present Picker</h1>
      <img title="" className="gifts col-md-12" src={giftImg} alt="Gifts"></img>
    </div>
  );
}

export default Home;
