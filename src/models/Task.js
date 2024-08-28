import Sequelize, { Model } from 'sequelize';

export default class Task extends Model {
  static init(sequelize) {
    super.init({
      task: Sequelize.STRING,
      check: Sequelize.BOOLEAN,
      list_id: Sequelize.INTEGER,
      due_date: Sequelize.DATEONLY,
    },
    {
      sequelize,
      tableName: 'tasks',
    });
  }

  static associate(models) {
    this.belongsTo(models.List, {
      foreignKey: 'list_id', // O campo que será a chave estrangeira
      targetKey: 'id', // O campo da tabela User que será referenciado
    });
  }
}
