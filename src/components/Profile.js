const Profile = () => {
  return (
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
  );
};

export default Profile;
