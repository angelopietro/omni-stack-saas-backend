"use strict";

/*RELACIONAMENTO ENTRE AS TABELAS*/
const Model = use("Model");

class Task extends Model {
  static boot() {
    super.boot();

    this.addHook("afterCreate", "TaskHook.sendNewTaskMail");
    this.addHook("beforeUpdate", "TaskHook.sendNewTaskMail");
  }

  project() {
    return this.belongsTo("App/Models/Project");
  }

  user() {
    return this.belongsTo("App/Models/User");
  }

  file() {
    return this.belongsTo("App/Models/File");
  }
}

module.exports = Task;
