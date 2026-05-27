const path = require("path");
const express = require("express");
const app = express();
const knex = require("./knex");
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());

app.post("/api/input", async (req, res) => {
  const data = req.body;
  const practiceData = {
    date: data.date,
    club: data.club,
    amount: data.amount,
    intention: data.intention,
  };

  const insertPracticeData = await knex("practice").insert(practiceData, ["*"]);

  for (const ele of data.miss) {
    const missData = {
      practice_id: insertPracticeData[0].id,
      miss: ele,
    };
    const result = await knex("miss").insert(missData, ["*"]);
    console.log(result);
  }
  res.send("OK");
});

app.get("/api/improve", async (req, res) => {
  const item = await knex
    .select("practice.date", "practice.club", "miss.miss")
    .from("practice")
    .innerJoin("miss", "practice.id", "miss.practice_id");
  console.log(item);
  const practiceResult = {
    ドライバー: { スライス: 0, フック: 0, トップ: 0, ダフリ: 0, 当たり薄い: 0 },
    "5番ウッド": {
      スライス: 0,
      フック: 0,
      トップ: 0,
      ダフリ: 0,
      当たり薄い: 0,
    },
    "6番アイアン": {
      スライス: 0,
      フック: 0,
      トップ: 0,
      ダフリ: 0,
      当たり薄い: 0,
    },
    "7番アイアン": {
      スライス: 0,
      フック: 0,
      トップ: 0,
      ダフリ: 0,
      当たり薄い: 0,
    },
    "8番アイアン": {
      スライス: 0,
      フック: 0,
      トップ: 0,
      ダフリ: 0,
      当たり薄い: 0,
    },
    "9番アイアン": {
      スライス: 0,
      フック: 0,
      トップ: 0,
      ダフリ: 0,
      当たり薄い: 0,
    },
    ピッチングウェッジ: {
      スライス: 0,
      フック: 0,
      トップ: 0,
      ダフリ: 0,
      当たり薄い: 0,
    },
    アプローチウェッジ: {
      スライス: 0,
      フック: 0,
      トップ: 0,
      ダフリ: 0,
      当たり薄い: 0,
    },
    サンドウェッジ: {
      スライス: 0,
      フック: 0,
      トップ: 0,
      ダフリ: 0,
      当たり薄い: 0,
    },
  };
  item.forEach((ele) => {
    for (const club in practiceResult) {
      if (ele.club === club) practiceResult[club][ele.miss]++;
    }
  });

  console.log(practiceResult);

  const result = Object.fromEntries(
    Object.entries(practiceResult).map(([club, miss]) => {
      const list = Object.entries(miss);
      const max = Math.max(...list.map(([_, count]) => count));

      if (max === 0) return [club, "ノーミス"];

      const type = list
        .filter(([_, count]) => count === max)
        .map(([key]) => key)
        .join("と");

      return [club, type];
    }),
  );

  console.log(result);

  res.send(result);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
