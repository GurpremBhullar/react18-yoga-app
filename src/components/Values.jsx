import SectionHead from "./SectionHead";
import { GiCutDiamond } from "react-icons/gi";
import Avatar from '../images/avatar.jpg'
import Avatar2 from '../images/avatar4.jpg'
import Avatar3 from '../images/avatar3.jpg'
import { values } from "../UI/data";
import Card from "../UI/Card";
import "../pages/home/home.css";

const Values = () => {
  return (
    <section className="values">
      <div className="container values__container">
        <div className="values__left">
          <img src={Avatar} alt="avatar"/>
          <img src={Avatar2} alt="avatar2"/>
          <img src={Avatar3} alt="avatar3"/>
        </div>
        <div className="values__right">
          <SectionHead icon={<GiCutDiamond />} title="Lotus"></SectionHead>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A corrupti
            reiciendis illum non amet ad?
          </p>
          <div className="values__wrapper">
            {values.map(({ id, icon, title, desc }) => {
              return (
                <Card key={id} className="values__value">
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
