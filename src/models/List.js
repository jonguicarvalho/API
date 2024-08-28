import Sequelize, { Model } from 'sequelize';

export default class List extends Model {
  static init(sequelize) {
    super.init({
      title: Sequelize.STRING,
      user_id: Sequelize.INTEGER,
    },
    {
      sequelize,
      tableName: 'lists',
    });
  }

  static associate(models) {
    this.belongsTo(models.UserToDo, {
      foreignKey: 'user_id', // O campo que será a chave estrangeira
      targetKey: 'id', // O campo da tabela User que será referenciado
    });
  }
  static associate(models) {
    this.hasMany(models.Task, {
      foreignKey: 'list_id', // O campo na tabela Task que referencia List
    });
  }
}
