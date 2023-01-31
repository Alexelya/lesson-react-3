import React from "react";
import content from "./content.scss";
import Stadium from "../../assets/img/Stadium.svg";

function Content() {
  return (
    <div id="sectionContent">
      <h2>НАШИ САМЫЕ БОЛЬШИЕ ПРОЕКТЫ</h2>
      <nav>
        <ul>
          <li>
            <img src={Stadium} alt="" />
          </li>
          <li>
            <button></button>
          </li>
          <li>
            <h3>Газпром Арена</h3>
          </li>
          <li>
            <p>
              Мы сделали самую красивую арену в Европе. Это открытие стало для
              нас прорывной точкой для разивтия на следующие десятилетия. Мы
              очень рады данному еву.
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <img src={Stadium} alt="" />
          </li>
          <li>
            <button></button>
          </li>
          <li>
            <h3>Газпром Арена</h3>
          </li>
          <li>
            <p>
              Мы сделали самую красивую арену в Европе. Это открытие стало для
              нас прорывной точкой для разивтия на следующие десятилетия. Мы
              очень рады данному еву.
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <img src={Stadium} alt="" />
          </li>
          <li>
            <button></button>
          </li>
          <li>
            <h3>Газпром Арена</h3>
          </li>
          <li>
            <p>
              Мы сделали самую красивую арену в Европе. Это открытие стало для
              нас прорывной точкой для разивтия на следующие десятилетия. Мы
              очень рады данному еву.
            </p>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Content;
