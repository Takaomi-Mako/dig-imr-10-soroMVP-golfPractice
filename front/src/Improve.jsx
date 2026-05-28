import { useState, useEffect } from "react";
import { BarChart } from "@mui/x-charts";
import { selectorChartsTooltipPointerItemIsDefined } from "@mui/x-charts/internals";
import { Box, Typography } from "@mui/material";

export default function Improve() {
  const [driver, setDriver] = useState({});
  const [fiveWood, setFiveWood] = useState({});
  const [sixIron, setSixIron] = useState({});
  const [sevenIron, setSevenIron] = useState({});
  const [eightIron, setEightIron] = useState({});
  const [nineIron, setNineIron] = useState({});
  const [pw, setPw] = useState({});
  const [aw, setAw] = useState({});
  const [sw, setSw] = useState({});

  useEffect(() => {
    const weakPoint = async () => {
      try {
        const response = await fetch("/api/improve");
        const data = await response.json();
        setDriver(data["ドライバー"]);
        setFiveWood(data["5番ウッド"]);
        setSixIron(data["6番アイアン"]);
        setSevenIron(data["7番アイアン"]);
        setEightIron(data["8番アイアン"]);
        setNineIron(data["9番アイアン"]);
        setPw(data["ピッチングウェッジ"]);
        setAw(data["アプローチウェッジ"]);
        setSw(data["サンドウェッジ"]);
      } catch {
        console.error("error");
      }
    };
    weakPoint();
  }, []);
  return (
    <Box sx={{ width: 650 }}>
      <Box>
        <Typography>ドライバー</Typography>
        <BarChart
          xAxis={[
            {
              id: "ドライバー",
              data: ["スライス", "フック", "トップ", "ダフリ", "当たり薄い"],
              height: 28,
            },
          ]}
          series={[
            {
              data: [
                driver["スライス"],
                driver["フック"],
                driver["トップ"],
                driver["ダフリ"],
                driver["当たり薄い"],
              ],
              color: "#47c4e4",
            },
          ]}
          height={200}
          borderRadius={10}
        />
      </Box>
      <Box>
        <Typography>5番ウッド</Typography>
        <BarChart
          xAxis={[
            {
              id: "5番ウッド",
              data: ["スライス", "フック", "トップ", "ダフリ", "当たり薄い"],
              height: 28,
            },
          ]}
          series={[
            {
              data: [
                fiveWood["スライス"],
                fiveWood["フック"],
                fiveWood["トップ"],
                fiveWood["ダフリ"],
                fiveWood["当たり薄い"],
              ],
              color: "#47c4e4",
            },
          ]}
          height={200}
          borderRadius={10}
        />
      </Box>
      <Box>
        <Typography>6番アイアン</Typography>
        <BarChart
          xAxis={[
            {
              id: "6番アイアン",
              data: ["スライス", "フック", "トップ", "ダフリ", "当たり薄い"],
              height: 28,
            },
          ]}
          series={[
            {
              data: [
                sixIron["スライス"],
                sixIron["フック"],
                sixIron["トップ"],
                sixIron["ダフリ"],
                sixIron["当たり薄い"],
              ],
              color: "#47c4e4",
            },
          ]}
          height={200}
          borderRadius={10}
        />
      </Box>
      <Box>
        <Typography>7番アイアン</Typography>
        <BarChart
          xAxis={[
            {
              id: "7番アイアン",
              data: ["スライス", "フック", "トップ", "ダフリ", "当たり薄い"],
              height: 28,
            },
          ]}
          series={[
            {
              data: [
                sevenIron["スライス"],
                sevenIron["フック"],
                sevenIron["トップ"],
                sevenIron["ダフリ"],
                sevenIron["当たり薄い"],
              ],
              color: "#47c4e4",
            },
          ]}
          height={200}
          borderRadius={10}
        />
      </Box>
      <Box>
        <Typography>8番アイアン</Typography>
        <BarChart
          xAxis={[
            {
              id: "8番アイアン",
              data: ["スライス", "フック", "トップ", "ダフリ", "当たり薄い"],
              height: 28,
            },
          ]}
          series={[
            {
              data: [
                eightIron["スライス"],
                eightIron["フック"],
                eightIron["トップ"],
                eightIron["ダフリ"],
                eightIron["当たり薄い"],
              ],
              color: "#47c4e4",
            },
          ]}
          height={200}
          borderRadius={10}
        />
      </Box>
      <Box>
        <Typography>9番アイアン</Typography>
        <BarChart
          xAxis={[
            {
              id: "9番アイアン",
              data: ["スライス", "フック", "トップ", "ダフリ", "当たり薄い"],
              height: 28,
            },
          ]}
          series={[
            {
              data: [
                nineIron["スライス"],
                nineIron["フック"],
                nineIron["トップ"],
                nineIron["ダフリ"],
                nineIron["当たり薄い"],
              ],
              color: "#47c4e4",
            },
          ]}
          height={200}
          borderRadius={10}
        />
      </Box>
      <Box>
        <Typography>ピッチングウェッジ</Typography>
        <BarChart
          xAxis={[
            {
              id: "ピッチングウェッジ",
              data: ["スライス", "フック", "トップ", "ダフリ", "当たり薄い"],
              height: 28,
            },
          ]}
          series={[
            {
              data: [
                pw["スライス"],
                pw["フック"],
                pw["トップ"],
                pw["ダフリ"],
                pw["当たり薄い"],
              ],
              color: "#47c4e4",
            },
          ]}
          height={200}
          borderRadius={10}
        />
      </Box>
      <Box>
        <Typography>アプローチウェッジ</Typography>
        <BarChart
          xAxis={[
            {
              id: "アプローチウェッジ",
              data: ["スライス", "フック", "トップ", "ダフリ", "当たり薄い"],
              height: 28,
            },
          ]}
          series={[
            {
              data: [
                aw["スライス"],
                aw["フック"],
                aw["トップ"],
                aw["ダフリ"],
                aw["当たり薄い"],
              ],
              color: "#47c4e4",
            },
          ]}
          height={200}
          borderRadius={10}
        />
      </Box>
      <Box>
        <Typography>サンドウェッジ</Typography>
        <BarChart
          xAxis={[
            {
              id: "サンドウェッジ",
              data: ["スライス", "フック", "トップ", "ダフリ", "当たり薄い"],
              height: 28,
            },
          ]}
          series={[
            {
              data: [
                sw["スライス"],
                sw["フック"],
                sw["トップ"],
                sw["ダフリ"],
                sw["当たり薄い"],
              ],
              color: "#47c4e4",
            },
          ]}
          height={200}
          borderRadius={10}
        />
      </Box>
    </Box>
  );
}
