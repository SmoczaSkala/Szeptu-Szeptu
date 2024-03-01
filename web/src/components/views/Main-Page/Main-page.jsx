import React from "react";
import "../../scss/Main-page.scss";

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="conversations">
        <h1>Konwersacje</h1>
        <input type="text" placeholder="Search here" />
        <div className="chats">
          <h1>Mateusz Kozłowski</h1>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
