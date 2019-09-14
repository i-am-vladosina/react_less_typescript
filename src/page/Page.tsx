import React from "react";

import "./Page.less";

const Logo = require("./img/react-logo.svg");

const content = ["React", "Typescript", "Less", "Local Server", "Common Libs"];

export const Page: React.FC = React.memo(() => (
  <div className="page-wrapper">
    <section className="page">
      <h1 className="page__title">Starter Pack</h1>
      <ul className="page__list">
        {content.map((item, key) => {
          return (
            <li key={key} className="page__item">
              {item}
            </li>
          );
        })}
      </ul>
      <img src={Logo} alt="react-logo" className="page__logo" />
    </section>
  </div>
));
