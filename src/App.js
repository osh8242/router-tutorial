import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import About from "./pages/About";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profiles/:userid" element={<Profile />} />
          <Route path="/articles" element={<Articles />}>
            <Route path=":id" element={<Article />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
export default App;
