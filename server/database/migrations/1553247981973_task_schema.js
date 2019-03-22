"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TaskSchema extends Schema {
  up() {
    this.create("tasks", table => {
      table.increments();
      table
        .integer("project_id")
        .unsigned()
        .references("id")
        .inTable("projects"); //projects belongs to a user
      table.string("description", 255);
      table.boolean("completed");
      table.timestamps();
    });
  }

  down() {
    this.drop("tasks");
  }
}

module.exports = TaskSchema;
