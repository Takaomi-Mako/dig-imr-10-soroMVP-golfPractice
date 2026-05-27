/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("practice").del();
  await knex("practice").insert([
    {
      date: "2026-05-24",
      club: "ドライバー",
      amount: 10,
      intention: "特になし",
    },
    {
      date: "2026-05-25",
      club: "8番アイアン",
      amount: 5,
      intention: "捕まえる",
    },
    {
      date: "2026-05-25",
      club: "7番アイアン",
      amount: 7,
    },
  ]);
};
