import "../../style.css";
import DividerLine from "./DividerLine";

const Intro = () => {
  return (
    <div className="box content">
      <h2 id="about">
        Hey <span className=" colored">there!</span>
      </h2>
      <DividerLine />
      <p>
        I'm thrilled to tell you about myself. I have over 6 years experience of
        IT, specializing in
        <span className="colored">
          PhP, Database Development, and open-source frameworks
        </span>
        .If you're in need of a motivated team player, let's connect!
      </p>
    </div>
  );
};

export default Intro;
