import Achievements from "./Achievements";
import ContactForm from "./ContactForm";
import Contributions from "./Contributions";
import Experiences from "./Experiences";
import Skills from "./Skills";
import Testimonials from "./Testimonials";
import "../../style.css";

const Content = () => {
  return (
    <div className="box content">
      <div className="wrapper">
        <h2 id="about">
          Hey <span className=" colored">there!</span>
        </h2>
        <div className="divider ltr"></div>
        <p>
          I'm thrilled to tell you about myself. I have over 6 years experience
          of IT, specializing in{" "}
          <span className="colored">
            {" "}
            PhP, Database Development, and open-source frameworks
          </span>
          .If you're in need of a motivated team player, let's connect!
        </p>

        <Achievements />

        <h2>
          My <span className="colored">Skills</span>
        </h2>
        <div className="divider ltr"></div>
        <Skills />

        <h2 id="resume">
          My <span className="colored">Experiences</span>
        </h2>
        <div className="divider ltr"></div>
        <Experiences />

        <h2>
          My <span className="colored">Contributions</span>
        </h2>
        <div className="divider ltr"></div>
        <Contributions />

        <h2>
          My <span className="colored">Testimonials</span>
        </h2>
        <div className="divider ltr"></div>
        <Testimonials />

        <h2 id="contact">
          Contact <span className="colored">Me</span>
        </h2>
        <div className="divider ltr"></div>
        <iframe
          className="map"
          width="100%"
          height="300"
          frameborder="0"
          src="https://maps.app.goo.gl/h7ePf5VoJeoWSTqc7"
        ></iframe>
        <ContactForm />
      </div>
    </div>
  );
};

export default Content;
