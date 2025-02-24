import "./style.css";
function App() {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="box theme">
          <div className="item" onClick={() => theme()}>
            <ion-icon id="lightBtn" name="sunny-outline"></ion-icon>
            <ion-icon
              id="darkBtn"
              name="moon-outline"
              style={{ display: "none" }}
            ></ion-icon>
          </div>
        </div>
        <div className="box nav">
          <div className="item active">
            <a href="#about">
              <ion-icon name="person-circle-outline"></ion-icon>
              <p>about</p>
            </a>
            <div className="divider rtl"></div>
          </div>
          <div className="item">
            <a href="#resume">
              <ion-icon name="file-tray-full-outline"></ion-icon>
              <p>resume</p>
            </a>
            <div className="divider rtl"></div>
          </div>
          <div className="item">
            <a href="#projects">
              <ion-icon name="layers-outline"></ion-icon>
              <p>projects</p>
            </a>
            <div className="divider rtl"></div>
          </div>
          <div className="item">
            <a href="#blogs">
              <ion-icon name="reader-outline"></ion-icon>
              <p>blogs</p>
            </a>
            <div className="divider rtl"></div>
          </div>
          <div className="item">
            <a href="#contact">
              <ion-icon name="layers-outline"></ion-icon>
              <p>contact</p>
            </a>
          </div>
        </div>
      </nav>

      {/* Profile */}
      <div className="box profile">
        <img className="header" src="img/cover.jpg" alt="" />
        <img className="img" src="img/profile.jpg" alt="" />
        <h2>Nick Williams</h2>
        <p id="typed" className="colored">
          Full-Stack Web Developer
        </p>
        <ul>
          <li>
            <a href="#">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
          <li>
            <a href="#">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li>
            <a href="#">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
          <li>
            <a href="#">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
        </ul>

        <div className="footer">
          <div className="divider rtl"></div>
          <table>
            <tr>
              <td>
                <a href="#">
                  My Resume <ion-icon name="file-tray-full-outline"></ion-icon>
                </a>
              </td>
              <td>
                <a href="#">
                  Contact Me <ion-icon name="call-outline"></ion-icon>
                </a>
              </td>
            </tr>
          </table>
        </div>
      </div>

      {/* Content */}
      <div className="box content">
        <div className="wrapper">
          <h2>
            Hey <span className="colored">there!</span>
          </h2>
          <div className="divider ltr"></div>
          <p>
            I'm thrilled to tell you about myself. I have over 6 years
            experience in IT, specializing in{" "}
            <span>
              PHP, Database Development, and open-source frameworks. If you're
              in need of a motivated team player, let's connect!
            </span>
          </p>

          {/* Achievements */}
          <section className="achievements">
            <div>
              <h3>
                <ion-icon name="layers-outline"></ion-icon>2K+
              </h3>
              <p>Website Designed</p>
            </div>
            <div>
              <h3>
                <ion-icon name="briefcase-outline"></ion-icon>5+
              </h3>
              <p>Years of Experience</p>
            </div>
            <div>
              <h3>
                <ion-icon name="rocket-outline"></ion-icon>4K
              </h3>
              <p>Completed Projects</p>
            </div>
          </section>

          {/* Skills */}
          <h2>
            My <span className="colored">Skills</span>
          </h2>
          <div className="divider ltr"></div>
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
              <div className="circle" style={{ "--percent": "65%" }}>
                <h4>
                  65<small>%</small>
                </h4>
              </div>
              <p>MySQL</p>
            </div>
            <div>
              <div className="circle" style={{ "--percent": "85%" }}>
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

          {/* Experiences */}
          <h1>
            My <span className="colored">Experiences</span>
          </h1>
          <div className="divider ltr"></div>
          <section className="experiences">
            <div className="experience">
              <h2>Senior Python Developer</h2>
              <h4>
                Fresh Work <span className="date">Oct, 2022</span>&#x26AC;
                <span className="date">Dec, 2023</span>
              </h4>
              <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="experience">
              <h2>Database Developer</h2>
              <h4>
                Fresh Work <span className="date">Oct, 2022</span>&#x26AC;
                <span className="date">Dec, 2023</span>
              </h4>
              <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="experience">
              <h2>Full Stack Web Developer</h2>
              <h4>
                Fresh Work <span className="date">Oct, 2022</span>&#x26AC;
                <span className="date">Dec, 2023</span>
              </h4>
              <p>Lorem ipsum dolor sit amet...</p>
            </div>
          </section>

          {/* Contributions */}
          <h1>
            My <span className="colored">Contributions</span>
          </h1>
          <div className="divider ltr"></div>
          <section className="contribution">
            <div className="wrapper">
              <activity-graph
                range-start="2021-01-01"
                range-end="2021-12-31"
                activity-levels="0,1,2,3,5"
                activity-data="2021-01-01,2021-01-02,2021-01-03,2021-01-07,2021-01-08,2021-01-09,2021-02-09,2021-03-11,2021-04-11"
              ></activity-graph>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
