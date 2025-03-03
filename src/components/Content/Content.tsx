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
import Projects from "./Projects/Projects";
import Blogs from "./Blogs/Blogs";

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
        <h2 id="projects">
          My <span className="colored">Projects</span>
        </h2>
        <DividerLine />
        <Projects />
        <h2 id="blogs">
          My <span className="colored">Blogs</span>
        </h2>
        <DividerLine />
        <Blogs />
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
