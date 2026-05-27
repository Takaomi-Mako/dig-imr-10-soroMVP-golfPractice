import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Input from "./Input.jsx";
import Initial from "./Initial.jsx";
import MuiTest from "./muiTest.jsx";

function App() {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/initial">初期画面</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Initial />} />
          <Route path="/initial" element={<Initial />} />
          <Route path="/input" element={<Input />} />
        </Routes>
      </Router>
    </div>
    // <MuiTest />
  );
}

export default App;
