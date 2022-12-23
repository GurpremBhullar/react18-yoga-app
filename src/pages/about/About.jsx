import Header from "../../components/Header";
import BeastMode from "../../images/beastmode.jpg";
import Chakra from "../../images/chakra.png";
import Lotus from "../../images/lotus.png";
import './About.css'

const About = () => {
  return (
    <>
    <Header title="About Us" image={BeastMode}>
      Before You Get Here...
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <h4>We Recommend Starting Here</h4>
          <img src={Chakra} alt="chakra" />
        </div>
        <div className="about__section-content">
          <h1>
            Our Story
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dolor mollitia ea repellendus eligendi sequi molestias
             expedita illo iusto architecto alias!
          </p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Perspiciatis pariatur natus iusto voluptate beatae ipsam quo ad. 
            Nam, assumenda reiciendis.`
          </p>
        </div>
      </div>
    </section>

    <section className="about__Vision">
      <div className="container about__Vision-container">
        <div className="about__section-content">
          <h1>
            Our Story
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dolor mollitia ea repellendus eligendi sequi molestias
             expedita illo iusto architecto alias!
          </p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Perspiciatis pariatur natus iusto voluptate beatae ipsam quo ad. 
            Nam, assumenda reiciendis.`
          </p>
        </div>
        <div className="about__section-image">
          <h4>We Recommend Starting Here</h4>
          <img src={Lotus} alt="chakra" />
        </div>
      </div>
    </section>
    </>
  )
}

export default About;