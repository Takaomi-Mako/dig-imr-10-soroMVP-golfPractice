import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Improve from "./Improve.jsx";
export default function () {
  return (
    <>
      <h1>ゴルフ練習記録！</h1>
      <Improve />
      <Link to="/input">記録する</Link>
    </>
  );
}
