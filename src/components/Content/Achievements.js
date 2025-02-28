import "../../style.css";
const Achievements = () => {
  return (
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
  );
};

export default Achievements;
