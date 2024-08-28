import listServices from "../services/listServices.js";


class listController {
  //create
  async store(req, res) {
    try {

      const listStore = await listServices.store({
        data: req.data,
        id: req.userId,
      });

      return res.status(201).json(listStore);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to create list' });
    }
  }

  async index(req, res){
    try{

      const listIndex = await listServices.index({ userId: req.userId });
      res.status(200).json(listIndex);

    }catch(e){
      return res.json({ error: 'Index error'});
    }

  }

  //update
  async update(req, res) {

    try {
      console.log(req);
      const listUpdate = await listServices.update({ id: req.filter.id, data: req.data, userId: req.userId});
      res.status(200).json(listUpdate);

    } catch (e) {
        return res.status(400).json({ error: e.message });
      }

    }

  //delete
  async delete(req, res) {
    try {

      const listDelete = await listServices.delete({ userId: req.userId, id_param: req.filter.id});
      res.status(200).json(listDelete);

    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  }
}

export default new listController();
