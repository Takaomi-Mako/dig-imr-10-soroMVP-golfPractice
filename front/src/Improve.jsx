import { useState, useEffect } from "react";

export default function Improve() {
  const [driver, setDriver] = useState(null);
  const [fiveWood, setFiveWood] = useState(null);
  const [sixIron, setSixIron] = useState(null);
  const [sevenIron, setSevenIron] = useState(null);
  const [eightIron, setEightIron] = useState(null);
  const [nineIron, setNineIron] = useState(null);
  const [pw, setPw] = useState(null);
  const [aw, setAw] = useState(null);
  const [sw, setSw] = useState(null);

  useEffect(() => {
    const weakPoint = async () => {
      try {
        const response = await fetch("/api/improve");
        const data = await response.json();
        console.log(data);
        data["ドライバー"] === "ノーミス"
          ? setDriver("ドライバーはいい感じ!")
          : setDriver(`ドライバーのミスは ${data["ドライバー"]} 💦`);
        data["5番ウッド"] === "ノーミス"
          ? setFiveWood("5番ウッドはいい感じ!")
          : setFiveWood(`5番ウッドのミスは ${data["5番ウッド"]} 💦`);
        data["6番アイアン"] === "ノーミス"
          ? setSixIron("6番アイアンはいい感じ!")
          : setSixIron(`6番アイアンのミスは ${data["6番アイアン"]} 💦`);
        data["7番アイアン"] === "ノーミス"
          ? setSevenIron("7番アイアンはいい感じ!")
          : setSevenIron(`7番アイアンのミスは ${data["7番アイアン"]} 💦`);
        data["8番アイアン"] === "ノーミス"
          ? setEightIron("8番アイアンはいい感じ!")
          : setEightIron(`8番アイアンのミスは ${data["8番アイアン"]} 💦`);
        data["9番アイアン"] === "ノーミス"
          ? setNineIron("9番アイアンはいい感じ!")
          : setNineIron(`9番アイアンのミスは ${data["8番アイアン"]} 💦`);
        data["ピッチングウェッジ"] === "ノーミス"
          ? setPw("ピッチングウェッジはいい感じ!")
          : setPw(
              `ピッチングウェッジのミスは ${data["ピッチングウェッジ"]} 💦`,
            );
        data["アプローチウェッジ"] === "ノーミス"
          ? setAw("アプローチウェッジはいい感じ!")
          : setAw(
              `アプローチウェッジのミスは ${data["アプローチウェッジ"]} 💦`,
            );
        data["サンドウェッジ"] === "ノーミス"
          ? setSw("サンドウェッジはいい感じ!")
          : setSw(`サンドウェッジのミスは ${data["サンドウェッジ"]} 💦`);
      } catch {
        console.error("error");
      }
    };
    weakPoint();
  }, []);

  return (
    <>
      <p>{driver}</p>
      <p>{fiveWood}</p>
      <p>{sixIron}</p>
      <p>{sevenIron}</p>
      <p>{eightIron}</p>
      <p>{nineIron}</p>
      <p>{pw}</p>
      <p>{aw}</p>
      <p>{sw}</p>
    </>
  );
}
