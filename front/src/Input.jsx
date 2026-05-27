import { useState, useRef } from "react";

export default function Input() {
  const day = useRef(null);
  const club = useRef(null);
  const amount = useRef(null);
  const intention = useRef(null);
  const [missForm, setMissForm] = useState({
    miss: [],
  });
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

    setMissForm({
      miss: [],
    });
  };

  const handle = (e) => {
    const fa = [...missForm.miss];
    e.target.checked
      ? fa.push(e.target.value)
      : fa.splice(fa.indexOf(e.target.value), 1);

    setMissForm({
      miss: fa,
    });
  };

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
        <label>打った球数</label>
        <input type="number" ref={amount} />
      </div>
      <div>
        <label>意識したこと</label>
        <input type="text" ref={intention} />
      </div>
      <div>
        <fieldset>
          <legend>ミス</legend>
          <label>スライス</label>
          <input
            type="checkbox"
            value="スライス"
            onChange={handle}
            checked={missForm.miss.includes("スライス")}
          />
          <br />
          <label>フック</label>
          <input
            type="checkbox"
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
      </div>
      <div>
        <button type="button" onClick={input}>
          入力する
        </button>
      </div>
    </form>
  );
}
