
import List from "../models/List.js";

class listServices {
  async store({ data, id }) {

    data.user_id = id;

    const novaList = await List.create(data);
    const { title } = novaList;
    return { title };

  }

  //index
  async index({ userId }) {
    const lists = await List.findAll({
      attributes: ['title'],
      where: {
        user_id: userId,
      }
    });

    const titles = lists.map(list => list.title);
    return titles;
  }

  async update({ id, data, userId }) {

    const list = await List.findByPk(id);

    if(!list) {
        throw new Error('Lista não existe');
      }

      if(list.user_id !== userId) {
        throw new Error('Não é possível alterar uma lista que não é sua.');
      }


      const novoDados = await list.update(data);
      const { title } = novoDados;

      return { title };
  }

  async delete({ id_param, userId }) {


    const list = await List.findByPk(id_param);

      if(!list) {
        throw new Error('Lista não existe');
      }

      if(list.user_id !== userId) {
        throw new Error('Não é possível alterar uma lista que não é sua.');
      }

      await list.destroy();

      return 'Lista excluída';
  }

}

export default new listServices;
