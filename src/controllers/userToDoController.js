import userToDoServices from '../services/userToDoServices.js';

class UserToDoController {
  //create
  async store(req, res) {

    try {
      const user = await userToDoServices.store({ data: req.data });

      return res.status(200).json(user);
    } catch (e) {
      return res.status(500).json({ error: 'Erro na criação do usuário' });
      };
    }

  //show
  async show(req, res) {
    try {

      const userShow = await userToDoServices.show({ id: req.userId });

      res.status(200).json(userShow);
    } catch (e) {
      return res.status(400).json(null);
    }
  }

  //update
  async update(req, res) {

    try {
      const userUpdate = await userToDoServices.update({ id: req.userId, data: req.data });

      return res.status(200).json(userUpdate);
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  }

  //delete
  async delete(req, res) {
    try {
      const userDelete = await userToDoServices.delete({ id: req.userId });

      return res.status(200).json(userDelete);
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  }
}

export default new UserToDoController();
