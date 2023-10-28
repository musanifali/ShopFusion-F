import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/user1" element={<Home />} />
        </Routes>
      </Router>
      {/* <Auth /> */}
    </>
  );
};

export default App;
