import jwt from 'jsonwebtoken';
import Users from '../models/UserToDo.js';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if(!authorization){
    return res.status(401).json({
      errors: ['Login necessário'],
    });
  }


  //Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp
  //separando o texto do token
  const [, token] = authorization.split(' ');


  try {                      //verificando o token
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    //chegando se o id e o email da base de dados sao os mesmo, se nao foi editado
    const user = await Users.findOne({
      where: {
        id,
        email,
      },
    });

    if(!user) {
      return res.status(401).json({
        errors: ['Usuário inválido'],
      });
    };

    req.userId = id; //pra ter acesso depois ao id do usuario
    req.userEmail = email; //pra ter acesso ao email do usuario
    return next();
  } catch(e) {
    return res.status(401).json({
      errors: ['Token invalido'],
    });
  }
};
