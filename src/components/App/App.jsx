import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Main, Page } from "../../pages";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Header/>}>
            <Route path="/" element={<Main/>} />
            <Route path="/page" element={<Page/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;