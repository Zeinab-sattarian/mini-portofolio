import Content from "./components/Content/Content";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import ThemeProvider from "./providers/ThemeProvider";

import "./style.css";

const App = () => {
  return (
    <div className="container">
      <ThemeProvider>
        <Navbar />
        <Profile />
        <Content />
      </ThemeProvider>
    </div>
  );
};
export default App;
