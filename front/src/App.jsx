import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Input from "./Input.jsx";
import Initial from "./Initial.jsx";
import { BarChart } from "@mui/x-charts";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Initial />} />
          <Route path="/initial" element={<Initial />} />
          <Route path="/input" element={<Input />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
