import React from "react";
import footer from "./footer.scss";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div id="sectionFooter">
      <article>
        <p>{`© ${year} Строительная компания`}</p>
        <p>Разработано лучшей студией </p>
      </article>
    </div>
  );
}

export default Footer;
