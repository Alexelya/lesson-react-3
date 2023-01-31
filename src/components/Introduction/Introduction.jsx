import React from "react";
import introduction from "./introduction.scss";
import Most from "../../assets/img/most.svg";

function Introduction() {
  return (
    <div id="sectionIntroduction">
      <h1>РЕАЛИЗУЕМ КРУПНЕЙШИЕ ПРОЕКТЫ В РОССИИ</h1>
      <img src={Most} alt="" />
      <h6>стадионы, газопроводы, мосты, дамбы</h6>
      <nav>
        <ul>
          <li>26</li>
          <li>лет</li>
          <li>на рынке</li>
        </ul>
        <ul>
          <li>26</li>
          <li>лет</li>
          <li>на рынке</li>
        </ul>
        <ul>
          <li>26</li>
          <li>лет</li>
          <li>на рынке</li>
        </ul>
        <ul>
          <li>26</li>
          <li>лет</li>
          <li>на рынке</li>
        </ul>
      </nav>
    </div>
  );
}

export default Introduction;
