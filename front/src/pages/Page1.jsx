import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Page1() {
  return (
    <>
      <h1>ページ1</h1>
      <Link to="/page2">Page2</Link>
    </>
  );
}
