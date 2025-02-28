const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="box theme">
        <div className="item" onclick="theme()">
          <ion-icon id="lightBtn" name="sunny-outline"></ion-icon>
          <ion-icon
            id="darkBtn"
            name="moon-outline"
            style="display: none;"
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
  );
};

export default Navbar;
