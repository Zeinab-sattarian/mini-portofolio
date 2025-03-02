import Content from "./components/Content/Content";
import Navbar from "./components/Navbar/Navbar";
// import Profile from "./components/Profile";
// import Content from "./components/Content/Content";
import "./style.css";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Content />
    </div>
  );
};
export default App;
