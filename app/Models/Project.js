"use strict";

const Model = use("Model");

/*RELACIONAMENTO ENTRE AS TABELAS*/

class Project extends Model {
  user() {
    return this.belongsTo("App/Models/User");
  }

  tasks() {
    return this.hasMany("App/Models/Task");
  }
}

module.exports = Project;
