import Task from "../models/Task.js";
import List from "../models/List.js";

class taskServices {

  //store OK
  async store ({ data, userId }){

    const list = await List.findOne({
      where: { id: data.list_id }
    });



    if (!list) {
      throw new Error('Lista não encontrada');
    }


    if (list.user_id !== userId){
      throw new Error ('Não é possível adicionar uma tarefa em uma lista que não é sua');
    }

    const novaTask = await Task.create(data);
    const { task, check, due_date } = novaTask;
    return { task, check, due_date };

  }

  //index OK
  async index({ data }){
      const taskIndex = await Task.findAll({
        attributes: ['task'],
        where: {
          list_id: data.list_id,
        }
      });
      return taskIndex;

  }

  //update OK
  async update({ data, id, userId }) {

    const taskUpdate = await Task.findByPk(id);

    if(!taskUpdate) {
      throw new Error('Tarefa não existe');
    }

    const list = await List.findByPk(taskUpdate.list_id);

    if(taskUpdate.list_id !== list.id || list.user_id !== userId) {
      throw new Error('Não é possível alterar uma tarefa que não é sua.');
    }


    const novoDados = await taskUpdate.update(data);
    const { task, due_date, check } = novoDados;

    return { task, due_date, check };

  }

  //delete OK
  async delete({ id_param, userId }){

    const taskDelete = await Task.findByPk(id_param);
    const list = await List.findByPk(taskDelete.list_id);

    if(!taskDelete){
      throw new Error('Tarefa não existe');
    }

    if(taskDelete.list_id !== list.id || list.user_id !== userId) {
      throw new Error('Não é possível alterar uma tarefa que não é sua.');
    }

    await taskDelete.destroy();

    return;
  }

}

export default new taskServices;
