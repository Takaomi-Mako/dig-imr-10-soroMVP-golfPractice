/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("practice", function (table) {
    table.increments("id").primary();
    table.date("date").notNullable();
    table.string("club", 32).notNullable();
    table.integer("amount").notNullable();
    table.string("intention", 100);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("practice");
};
