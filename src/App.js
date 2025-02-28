import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Content from "./components/Content/Content";

const App = () => {
  return (
    <body class="">
      <div class="container">
        <Navbar />
        <Profile />
        <Content />
      </div>
      <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
      <script src="script.js"></script>
    </body>
  );
};
export default App;
