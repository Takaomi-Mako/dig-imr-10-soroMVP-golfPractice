import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Improve from "./Improve.jsx";
import { Button } from "@mui/material";
export default function () {
  return (
    <>
      <h1>クラブ別ミス一覧</h1>
      <Improve />
      <Button
        component={Link}
        to="/input"
        variant="contained"
        color="primary"
        sx={{ width: "500px" }}
      >
        入力画面へ
      </Button>
    </>
  );
}
