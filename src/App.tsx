import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import Home from "./pages/Home";
import Admin from "./admin/index";
import Layout from "./admin/layout";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/user1" element={<Home />} />
          {/* <Route path="/admin" element={<Admin />}></Route> */}
          <Route
            path="/admin"

            element={

              <Layout>
                <Admin />
              </Layout>

            } />
        </Routes>
      </Router>
      {/* <Auth /> */}
    </>
  );
};

export default App;
