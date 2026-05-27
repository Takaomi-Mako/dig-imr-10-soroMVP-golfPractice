import {
  Checkbox,
  TextField,
  ToggleButtonGroup,
  ToggleButton,
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

  // const handle = (e) => {
  //   const fa = [...missForm.miss];
  //   e.target.checked
  //     ? fa.push(e.target.value)
  //     : fa.splice(fa.indexOf(e.target.value), 1);

  //   setMissForm({
  //     miss: fa,
  //   });
  //   console.log(missForm);
  // };

  return (
    <form>
      <div>
        <label> 入力日</label>
        <input type="date" ref={day} />
      </div>
      <div>
        <label>クラブ</label>
        <select ref={club}>
          <option></option>
          <option>ドライバー</option>
          <option>5番ウッド</option>
          <option>6番アイアン</option>
          <option>7番アイアン</option>
          <option>8番アイアン</option>
          <option>9番アイアン</option>
          <option>ピッチングウェッジ</option>
          <option>アプローチウェッジ</option>
          <option>サンドウェッジ</option>
        </select>
      </div>
      <div>
        <TextField label="打った球数" type="number" inputRef={amount} />
        {/* <input type="number" ref={amount} /> */}
      </div>
      <div>
        <TextField label="意識したこと" type="text" inputRef={intention} />
        {/* <label>意識したこと</label>
        <input type="text" ref={intention} /> */}
      </div>
      {/* <div>
        <fieldset>
          <legend>ミス</legend>
          <label>スライス</label>
          <Checkbox
            value="スライス"
            // onChange={handle}
            checked={missForm.miss.includes("スライス")}
          />
          <label>フック</label>
          <Checkbox
            value="フック"
            onChange={handle}
            checked={missForm.miss.includes("フック")}
          />
          <br />
          <label>トップ</label>
          <input
            type="checkbox"
            value="トップ"
            onChange={handle}
            checked={missForm.miss.includes("トップ")}
          />
          <br />
          <label>ダフリ</label>
          <input
            type="checkbox"
            value="ダフリ"
            onChange={handle}
            checked={missForm.miss.includes("ダフリ")}
          />
          <br />
          <label>当たり薄い</label>
          <input
            type="checkbox"
            value="当たり薄い"
            onChange={handle}
            checked={missForm.miss.includes("当たり薄い")}
          />
        </fieldset>
      </div> */}
      <>
        <ToggleButtonGroup value={formats} onChange={handleFormat}>
          <ToggleButton value="スライス">スライス</ToggleButton>
          <ToggleButton value="フック">フック</ToggleButton>
          <ToggleButton value="トップ">トップ</ToggleButton>
          <ToggleButton value="ダフリ">ダフリ</ToggleButton>
          <ToggleButton value="当たり薄い">当たり薄い</ToggleButton>
        </ToggleButtonGroup>
      </>
      <div>
        <button type="button" onClick={input}>
          入力する
        </button>
      </div>
    </form>
  );
}
