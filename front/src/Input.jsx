import {
  Checkbox,
  TextField,
  ToggleButtonGroup,
  ToggleButton,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { useState, useRef } from "react";

export default function Input() {
  const day = useRef(null);
  const club = useRef(null);
  const amount = useRef(null);
  const intention = useRef(null);
  const [missForm, setMissForm] = useState({
    miss: [],
  });
  const [formats, setFormats] = useState(null);

  const handleFormat = (_, newValue) => {
    setFormats(newValue);
    setMissForm({ miss: newValue });
  };

  const input = async () => {
    const data = {
      date: day.current.value,
      club: club.current.value,
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
    club.current.value = "";
    amount.current.value = "";
    intention.current.value = "";

    setFormats(null);

    setMissForm({
      miss: [],
    });
  };

  return (
    <form>
      <div>
        <TextField type="date" inputref={day} />
      </div>
      <div>
        <TextField
          select
          defaultValue=""
          label="使用クラブ"
          inputRef={club}
          fullWidth
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
      </div>
      <div>
        <TextField label="打った球数" type="number" inputRef={amount} />
      </div>
      <div>
        <TextField label="意識したこと" type="text" inputRef={intention} />
      </div>
      <div>
        <ToggleButtonGroup value={formats} onChange={handleFormat}>
          <ToggleButton value="スライス">スライス</ToggleButton>
          <ToggleButton value="フック">フック</ToggleButton>
          <ToggleButton value="トップ">トップ</ToggleButton>
          <ToggleButton value="ダフリ">ダフリ</ToggleButton>
          <ToggleButton value="当たり薄い">当たり薄い</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div>
        <Button variant="contained" color="success" onClick={input}>
          入力する
        </Button>
      </div>
    </form>
  );
}
