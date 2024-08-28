import * as Yup from 'yup';

const SchemaStoreList = {
  body: Yup.object({
    title: Yup.string().required(),
  }).noUnknown()
}

const SchemaUpdateList = {
  body: Yup.object({
    title: Yup.string().required(),
  }).noUnknown(),
  params: Yup.object({
    id: Yup.number().required(),
  })
}

const deleteList = {
  params: Yup.object({
    id: Yup.number().required(),
  })
}


export default{
  SchemaStoreList,
  SchemaUpdateList,
  deleteList
};
