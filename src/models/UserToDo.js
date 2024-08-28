import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';
import bcryptjs from 'bcryptjs';

export default class UserToDo extends Model {
  static init(sequelize) {
    super.init({
      nome: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.VIRTUAL,
      password_hash: Sequelize.STRING,
    }, {
      sequelize,
      tableName: 'usersdata',
    });

    this.addHook('beforeSave', async userToDo => {
      if (userToDo.password) {
        userToDo.password_hash = await bcryptjs.hash(userToDo.password, 8); //8 é o tamanho do salt
      }
    })

    return this;
  }

  passwordValidation(password) {
    return bcrypt.compare(password, this.password_hash);
  };

  static associate(models) {
    this.hasMany(models.List, {
      foreignKey: 'user_id', // O campo na tabela List que referencia UserToDo
    });
  }
}
