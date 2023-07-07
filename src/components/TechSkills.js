import { Col } from "react-bootstrap";
import Java from "../assets/img/java.svg";
import Js from "../assets/img/js.svg";
import React from "../assets/img/react.svg";
import Ts from "../assets/img/ts.svg";
import Html from "../assets/img/html.svg";
import Css from "../assets/img/css.svg";
import Git from "../assets/img/git.svg";
import Node from "../assets/img/node.svg";
import Bootstrap from "../assets/img/bootstrap.svg";
import Php from "../assets/img/php.svg";
import MySql from "../assets/img/mysql.svg";
import Cpp from "../assets/img/cpp.svg";
import Blockchain from "../assets/img/blockchain.svg";

export const TechSkiils = () => {
  return (
    <section className="techskill" id="techskills">
      <Col lg={12}>
        <div className="tch-bx wow slideInUp">
          <h3><span>T</span>echnical <span>S</span>kills</h3>
          <p>Worked in different languages and techs</p>
            <ul className="lists">
              <li><img src={Java} alt="imag" /> <span>Java</span> </li>
              <li><img src={Js} alt="imag" /><span>JavaScript</span></li>
              <li><img src={Ts} alt="imag" /><span>Tailwind Css</span></li>
              <li><img src={Node} alt="imag" /><span>Node js</span></li>
              <li><img src={React} alt="imag" /><span>React Js</span></li>
              <li><img src={Html} alt="imag" /><span>Html</span></li>
              <li><img src={Css} alt="imag" /><span>Css</span></li>
              <li><img src={MySql} alt="imag" /><span>MySql</span></li>
              <li><img src={Php} alt="imag" /><span>Php</span></li>
              <li><img src={Git} alt="imag" /><span>Git</span></li>
              <li><img src={Bootstrap} alt="imag" /><span>Bootstrap</span></li>
              <li><img src={Cpp} alt="imag" /><span>Cpp</span></li>
              <li><img src={Blockchain} alt="imag" /><span>Blockchain</span></li>
            </ul>
          {/* </Row> */}
        </div>
      </Col>
      </section>
  )
}