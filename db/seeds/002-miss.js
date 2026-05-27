/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("miss").del();
  await knex("miss").insert([
    { practice_id: 1, miss: "スライス" },
    { practice_id: 1, miss: "トップ" },
    { practice_id: 1, miss: "ダフリ" },
    { practice_id: 2, miss: "ダフリ" },
    { practice_id: 2, miss: "フック" },
    { practice_id: 3, miss: "当たり薄い" },
  ]);
};
