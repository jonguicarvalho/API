module.exports =  {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('tasks', {
       id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      task: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      check: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      list_id: {
        type: Sequelize.INTEGER,
        references: { model: 'lists', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      },
      due_date: {
        type: Sequelize.DATEONLY,
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

    await queryInterface.dropTable('tasks');

  }
};
