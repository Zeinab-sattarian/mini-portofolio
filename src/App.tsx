import Content from "./components/Content/Content";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

import "./style.css";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Profile />
      <Content />
    </div>
  );
};
export default App;
