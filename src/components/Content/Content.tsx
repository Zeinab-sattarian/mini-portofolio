import DividerLine from "./DividerLine";
import Heading from "./Heading";
import Achievements from "./Achievements/Achievements";
import ContactForm from "./Contact/ContactForm";
import Contributions from "./Contributions/Contributions";
import Experiences from "./Experiences/Experiences";
import Intro from "./Intro";
import Skills from "./Skills/Skills";
import Testimonials from "./Testimonials/Testimonials";
import "../../style.css";

const Content = () => {
  return (
    <div className="box content">
      <div className="wrapper">
        <Intro />
        <Achievements />
        <Heading prop="Skills" />
        <DividerLine />
        <Skills />
        <h2 id="resume">
          My <span className="colored">Experiences</span>
        </h2>
        <DividerLine />
        <Experiences />
        <Heading prop="Contributions" />
        <DividerLine />
        <Contributions />
        <Heading prop="Testimonials" />
        <DividerLine />
        <Testimonials />
        <h2 id="contact">
          Contact <span className="colored">Me</span>
        </h2>
        <DividerLine />
        <ContactForm />
      </div>
    </div>
  );
};

export default Content;
