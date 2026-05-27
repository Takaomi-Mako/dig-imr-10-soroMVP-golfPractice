/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("miss", function (table) {
    table.increments("id").primary();
    table
      .integer("practice_id")
      .notNullable()
      .references("practice.id")
      .onDelete("CASCADE");
    table.string("miss", 10).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("miss");
};
