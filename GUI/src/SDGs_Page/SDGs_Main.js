import React from "react";
import Header from "./SDGs_Header/SDGs_Header";
import GoalBox from "./SDGs_GoalBox/SDGs_GoalBox";
import Footer from "./SDGs_Footer/SDG_Footer";
import "./SDGs.css";

const Sdgs = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <GoalBox
          goalNumber="1"
          goalImage="Covers/cover-01.jpg"
          iconImage="Pictures/E_SDG_Icons-01.png"
          goalTitle="Goal 1"
          goalDescription="End poverty in all its forms everywhere."
          targets="7"
          events="83"
          publications="48"
          actions="1363"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Sdgs;
