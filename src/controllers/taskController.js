import taskServices from '../services/taskServices.js';


class taskController {
  //create
  async store(req, res) {
    try {
      const taskStore = await taskServices.store({
        userId: req.userId,
        data: req.data,
      });

      return res.status(201).json(taskStore);
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  }

  async index(req, res) {
    try {
      const taskIndex = await taskServices.index({ data: req.data })
      return res.status(200).json(taskIndex);
    } catch (e) {
      return res.status(400).json({ error: e.message })
    }
  }

  async update(req, res){
    try {
      const taskUpdate = await taskServices.update({
        data: req.data,
        id: req.filter.id,
        userId: req.userId,
      });

      return res.status(200).json(taskUpdate);

    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  }

  async delete(req, res){
    try{
      const taskDelete = await taskServices.delete({
        id_param: req.filter.id,
        userId: req.userId,
      });

      res.status(200).json(taskDelete);
    } catch (e){
      res.status(400).json({ error: e.message });
    }
  }

}

export default new taskController();
