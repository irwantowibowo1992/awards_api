const { Model } = require('objection');
const objectionSoftDelete = require('objection-js-soft-delete');
const Knex = require('knex');
const bcrypt = require('bcryptjs');
const knexConfig = require('../../knexfile');

const knex = Knex(knexConfig[process.env.NODE_ENV || 'development']);
Model.knex(knex);

const softDelete = objectionSoftDelete.default({
  columnName: 'deleted_at',
  deletedValue: new Date(),
  notDeletedValue: null,
});

class Award extends softDelete(Model) {
  static get tableName() {
    return 'award';
  }

  async $beforeInsert() {
    this.password = await bcrypt.hash(this.password, 10);
    this.created_at = await new Date().toISOString();
  }

  async $beforeUpdate() {
    this.updated_at = await new Date().toISOString();
  }

  static column = {
    id: `${this.tableName}.id`,
    title: `${this.tableName}.title`,
    point: `${this.tableName}.point`,
    award_category_id: `${this.tableName}.award_category_id`,
    created_at: `${this.tableName}.created_at`,
    updated_at: `${this.tableName}.updated_at`,
    deleted_at: `${this.tableName}.deleted_at`,
  };
}

module.exports = Award;
