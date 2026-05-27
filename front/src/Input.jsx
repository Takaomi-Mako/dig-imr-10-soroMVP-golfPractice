import {
  Checkbox,
  TextField,
  ToggleButtonGroup,
  ToggleButton,
  Select,
  MenuItem,
  Button,
  Box,
  Stack,
} from "@mui/material";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function Input() {
  const today = new Date();
  const formatted = today
    .toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .split("/")
    .join("-");

  const day = useRef("");
  const [club, setClub] = useState("");
  const amount = useRef("");
  const intention = useRef("");
  const [missForm, setMissForm] = useState({
    miss: [],
  });
  const [formats, setFormats] = useState("");

  const handleFormat = (_, newValue) => {
    setFormats(newValue);
    setMissForm({ miss: newValue });
  };

  const input = async () => {
    const data = {
      date: day.current.value,
      club: club,
      amount: amount.current.value,
      intention: intention.current.value,
      miss: missForm.miss,
    };

    try {
      const response = await fetch("/api/input", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const text = await response.text();
      console.log(text);
    } catch {
      console.error("error");
    }

    day.current.value = "";
    setClub("");
    amount.current.value = "";
    intention.current.value = "";

    setFormats(null);

    setMissForm({
      miss: [],
    });
  };

  return (
    <Stack spacing={8} direction="column">
      <Box>
        <TextField
          type="date"
          inputRef={day}
          sx={{ width: "500px" }}
          defaultValue={formatted}
        />
      </Box>
      <Box>
        <TextField
          select
          value={club}
          label="使用クラブ"
          onChange={(e) => setClub(e.target.value)}
          sx={{ width: "500px" }}
        >
          <MenuItem value="ドライバー">ドライバー</MenuItem>
          <MenuItem value="5番ウッド">5番ウッド</MenuItem>
          <MenuItem value="6番アイアン">6番アイアン</MenuItem>
          <MenuItem value="7番アイアン">7番アイアン</MenuItem>
          <MenuItem value="8番アイアン">8番アイアン</MenuItem>
          <MenuItem value="9番アイアン">9番アイアン</MenuItem>
          <MenuItem value="ピッチングウェッジ">ピッチングウェッジ</MenuItem>
          <MenuItem value="アプローチウェッジ">アプローチウェッジ</MenuItem>
          <MenuItem value="サンドウェッジ">サンドウェッジ</MenuItem>
        </TextField>
      </Box>
      <Box>
        <TextField
          label="打った球数"
          type="number"
          inputRef={amount}
          sx={{ width: "500px" }}
        />
      </Box>
      <Box>
        <TextField
          label="意識したこと"
          type="text"
          inputRef={intention}
          sx={{ width: "500px" }}
        />
      </Box>
      <Box>
        <ToggleButtonGroup
          value={formats}
          onChange={handleFormat}
          sx={{ width: "500px" }}
        >
          <ToggleButton value="スライス" sx={{ width: "20%" }}>
            スライス
          </ToggleButton>
          <ToggleButton value="フック" sx={{ width: "20%" }}>
            フック
          </ToggleButton>
          <ToggleButton value="トップ" sx={{ width: "20%" }}>
            トップ
          </ToggleButton>
          <ToggleButton value="ダフリ" sx={{ width: "20%" }}>
            ダフリ
          </ToggleButton>
          <ToggleButton value="当たり薄い" sx={{ width: "20%" }}>
            当たり薄い
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box>
        <Button
          variant="contained"
          color="primary"
          onClick={input}
          sx={{ width: "500px" }}
        >
          入力する
        </Button>
      </Box>
      <Box>
        <Button
          component={Link}
          to="/initial"
          variant="contained"
          color="secoundry"
          sx={{ width: "500px" }}
        >
          初期画面へ
        </Button>
      </Box>
    </Stack>
  );
}
