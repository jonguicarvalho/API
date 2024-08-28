//mexendo diretamente com a base de dados
module.exports =  {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('usersdata', {
       id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()'),
      },
    })
  },

  async down(queryInterface) {

    await queryInterface.dropTable('usersdata');

  }
};

//npx sequelize db:migrate:undo para disfazer a migracao da tabala no banco de dados
//npx sequelize migration:create --name=nome_da_tabela criacao da tabela
