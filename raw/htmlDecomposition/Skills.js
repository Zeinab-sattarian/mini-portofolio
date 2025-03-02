import "../../style.css";
const Skills = () => {
  return (
    <section className="skills">
      <div>
        <p>
          <ion-icon name="logo-html5"></ion-icon>HTML5
        </p>
      </div>
      <div>
        <p>
          <ion-icon name="logo-css3"></ion-icon>CSS
        </p>
      </div>
      <div>
        <p>
          <ion-icon name="logo-react"></ion-icon>React
        </p>
      </div>
      <div>
        <p>
          <ion-icon name="logo-python"></ion-icon>Python
        </p>
      </div>
      <div>
        <div className="circle" style="--percent:65%">
          <h4>
            65<small>%</small>
          </h4>
        </div>
        <p>MySQL</p>
      </div>
      <div>
        <div className="circle" style="--percent:85%">
          <h4>
            85<small>%</small>
          </h4>
        </div>
        <p>MySQL</p>
      </div>
      <div>
        <div className="progress-bar">
          <p>
            Node Js <span>90%</span>
          </p>
          <progress max="100" value="90"></progress>
        </div>

        <div className="progress-bar">
          <p>
            PostgreSQL <span>75%</span>
          </p>
          <progress max="100" value="75"></progress>
        </div>
      </div>
    </section>
  );
};

export default Skills;
