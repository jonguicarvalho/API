import * as Yup from 'yup';

const store = {
  body:
    Yup.object({
      nome: Yup.string().required(),
      sobrenome: Yup.string().required(),
      email: Yup.string().email(),
      password: Yup.string().required().min(6),
    }).noUnknown()
};

const update = {
  body:
    Yup.object({
      nome: Yup.string(),
      sobrenome: Yup.string(),
      email: Yup.string().email(),
      password: Yup.string().min(6),
    }).noUnknown()
};


export default {
  store,
  update
};
