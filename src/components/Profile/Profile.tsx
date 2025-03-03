import cover from "../../img/cover.jpg";
import profile from "../../img/profile.jpg";
import "../../style.css";
import Footer from "./Footer/Footer";
import SocialIcons from "./SocialIcons";

const Profile = () => {
  return (
    <div className="box profile">
      <img className="header" src={cover} alt="" />
      <img className="img" src={profile} alt="" />
      <h2>Nick Williams</h2>
      <p id="typed" className="colored">
        Full-Stack Web Developer
      </p>
      <SocialIcons />
      <Footer />
    </div>
  );
};

export default Profile;
