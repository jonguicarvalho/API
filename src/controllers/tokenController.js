import Users from '../models/UserToDo.js';
import jwt from 'jsonwebtoken';

class TokenController {
  async store (req, res) {
    //colocando email e senha com esses valores padroes
    const { email = '', password = ''} = req.body;

    //conferindo se a requisicao veio com email e senha
    if(!email || !password) {
      return res.status(401).json({
        errors: ['Email ou senha não enviados'],
      });
    }
    //                                 verificando
    const user = await Users.findOne({ where: { email }});

    //verificando se o usuario existe
    if(!user) {
      return res.status(401).json({
        errors: ['Usuário não existe'],
      })
    }

    //verificando a senha com o bcrypt (comparando a senha que foi passada com a password_hash)
    if(!(await user.passwordValidation(password))) {
      return res.status(401).json({
        errors: ['Senha inválida'],
      })
    }

    //enviando o token para o usuario
    const { id } = user;   //{ id, email }, quando for verificar de quem é o token, esses dois valores vao ser retornados
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    res.json({token});
  }
}

export default new TokenController();
