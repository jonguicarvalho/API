import UserToDo from "../models/UserToDo.js";

class userToDoServices {
  async store({ data }) {

    const novoUser = await UserToDo.create(data);
    const { id, nome, sobrenome, email } = novoUser;
    return { id, nome, sobrenome, email };

  }

  async show({ id }) {
    const user = await UserToDo.findByPk(id);
    const { nome, email } = user;
    return { nome, email };
  }

  async update({ id, data }) {
    const user = await UserToDo.findByPk(id);
      if(!user) {
        throw new Error('Usuário não existe');
      }

      const novoDados = await user.update(data);

      return novoDados;
  }

  async delete({ id }) {
    const user = await UserToDo.findByPk(id);

      if(!user) {
        throw new Error('Usuário não existe');
      }

      await user.destroy();

      return;
  }

}

export default new userToDoServices;
